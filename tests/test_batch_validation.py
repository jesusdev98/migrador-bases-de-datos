import copy
import hashlib
import json
import sqlite3
import threading
import unittest
from contextlib import ExitStack
from urllib.error import HTTPError
from urllib.request import Request, urlopen
from unittest.mock import patch

from pokemon_ui import create_server
from tests import test_pokemon_ui


class BatchValidationTests(unittest.TestCase):
    def setUp(self):
        self.fixture = test_pokemon_ui.PokemonUiTests()
        self.fixture.setUp()
        self.addCleanup(self.fixture.tearDown)
        self.database = self.fixture.database_path
        with sqlite3.connect(self.database) as connection:
            connection.execute("INSERT INTO pokemon VALUES (2, 'ivysaur', 10, 130, NULL)")
            connection.execute("INSERT INTO pokemon_types VALUES (2, 1, 'grass')")
        self.server = create_server(self.database, port=0)
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        self.addCleanup(self.close_server)
        self.base = f"http://127.0.0.1:{self.server.server_address[1]}"
        self.stack = self.enterContext(ExitStack())
        self.migrators = [self.stack.enter_context(patch(f"pokemon_ui.migrate_to_{target}"))
                          for target in ('postgresql', 'mongodb', 'mariadb')]

    def close_server(self):
        self.server.shutdown()
        self.thread.join(timeout=5)
        self.server.server_close()

    def payload(self, target='postgresql'):
        output = (self.fixture.mongodb_output() if target == 'mongodb'
                  else self.fixture.postgresql_output())
        return dict(target=target, ids=[1], migration=output)

    def request(self, payload, status=200, headers=None, path='/api/validate-batch'):
        before = hashlib.sha256(self.database.read_bytes()).digest()
        request = Request(self.base + path, data=json.dumps(payload).encode(), method='POST',
                          headers=headers or {'Origin': self.base, 'Content-Type': 'application/json'})
        try:
            response = urlopen(request, timeout=5)
        except HTTPError as error:
            response = error
        with response:
            body = response.read()
            self.assertEqual(response.status, status, body)
        self.assertEqual(hashlib.sha256(self.database.read_bytes()).digest(), before)
        for migrator in self.migrators:
            migrator.assert_not_called()
        return json.loads(body) if status == 200 else body

    def invalid(self, payload, path=None, code=None):
        result = self.request(payload)
        self.assertEqual(set(result), {'valid', 'errors'})
        self.assertIs(result['valid'], False)
        self.assertTrue(1 <= len(result['errors']) <= 20)
        for error in result['errors']:
            self.assertEqual(set(error), {'path', 'code', 'message'})
            self.assertTrue(all(type(value) is str and value for value in error.values()))
        if path:
            self.assertIn((path, code), [(e['path'], e['code']) for e in result['errors']])

    def test_valid_targets_and_reordered_rows(self):
        for target in ('postgresql', 'mongodb', 'mariadb'):
            with self.subTest(target=target):
                payload = self.payload(target)
                payload['ids'] = [2, 1]
                row = dict(name='ivysaur', height=10, weight=130, sprite_url=None)
                row['_id' if target == 'mongodb' else 'id'] = 2
                if target == 'mongodb':
                    row['types'] = [dict(slot=1, name='grass')]
                else:
                    payload['migration']['pokemon_types'].insert(0, dict(pokemon_id=2, slot=1, type_name='grass'))
                    payload['migration']['pokemon_types'].reverse()
                payload['migration']['pokemon'].insert(0, row)
                self.assertEqual(self.request(payload), {'valid': True, 'errors': []})

    def test_feedback_identifies_source_url_and_missing_relation(self):
        for target in ('postgresql', 'mariadb', 'mongodb'):
            with self.subTest(target=target):
                payload = self.payload(target)
                row = payload['migration']['pokemon'][0]
                row['sprite_url'] = None
                if target == 'mongodb':
                    row['types'].pop()
                else:
                    payload['migration']['pokemon_types'].pop()
                result = self.request(payload)
                self.assertFalse(result['valid'])
                messages = '\n'.join(e['message'] for e in result['errors'])
                self.assertIn('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png', messages)
                self.assertIn('poison', messages)

    def test_single_record_still_requires_object_root_and_array_fields(self):
        for target in ('postgresql', 'mariadb', 'mongodb'):
            with self.subTest(target=target):
                payload = self.payload(target)
                payload['migration']['pokemon'] = payload['migration']['pokemon'][0]
                result = self.request(payload)
                self.assertFalse(result['valid'])
                self.assertEqual(result['errors'][0]['path'], '$.migration.pokemon')
                self.assertIn('JSON array', result['errors'][0]['message'])
                self.assertIn('even for one record', result['errors'][0]['message'])
                payload = self.payload(target)
                payload['migration'] = payload['migration']['pokemon']
                result = self.request(payload)
                self.assertFalse(result['valid'])
                self.assertIn('JSON object', result['errors'][0]['message'])
                self.assertNotIn('Expected dict', result['errors'][0]['message'])

    def test_invalid_envelopes_and_ids(self):
        cases = [None, [], 1, {}, {**self.payload(), 'extra': 1}]
        for target in (None, [], {}, True, 'sql'):
            cases.append({**self.payload(), 'target': target})
        for ids in (None, 1, {}, [], [True], [1.0], ['1'], [0], [-1], [1, 1], [[]], [{}], [999], [1, 2, 3, 4, 5, 6]):
            cases.append({**self.payload(), 'ids': ids})
        for payload in cases:
            with self.subTest(payload=payload):
                self.request(payload, 400)

    def test_malformed_outputs_and_exact_fields(self):
        for target in ('postgresql', 'mongodb', 'mariadb'):
            for output in (None, [], 1, 'text', {}, {'pokemon': None}):
                with self.subTest(target=target, output=output):
                    self.invalid({**self.payload(target), 'migration': output})
            for field in self.payload(target)['migration']['pokemon'][0]:
                payload = self.payload(target)
                del payload['migration']['pokemon'][0][field]
                self.invalid(payload, f'$.migration.pokemon[0].{field}', 'missing_field')
            for row in (None, [], 1):
                payload = self.payload(target)
                payload['migration']['pokemon'] = [row]
                self.invalid(payload)

    def test_altered_values_types_and_duplicate_or_missing_rows(self):
        for target in ('postgresql', 'mongodb', 'mariadb'):
            for field, value in (('height', True), ('height', 7.0), ('weight', None), ('name', 'wrong'), ('sprite_url', []), ('extra', 1)):
                payload = self.payload(target)
                payload['migration']['pokemon'][0][field] = value
                self.invalid(payload)
            for rows in ([], [None], [self.payload(target)['migration']['pokemon'][0]] * 2):
                payload = self.payload(target)
                payload['migration']['pokemon'] = rows
                self.invalid(payload)
            payload = self.payload(target)
            payload['migration']['pokemon'][0]['_id' if target == 'mongodb' else 'id'] = 2
            self.invalid(payload)

    def test_relations_and_embedded_types(self):
        for target in ('postgresql', 'mongodb', 'mariadb'):
            key = 'types' if target == 'mongodb' else 'pokemon_types'
            for value in (None, {}, [], [None], [dict(slot=True, name='grass')]):
                payload = self.payload(target)
                container = payload['migration']['pokemon'][0] if target == 'mongodb' else payload['migration']
                container[key] = value
                self.invalid(payload)
            payload = self.payload(target)
            container = payload['migration']['pokemon'][0] if target == 'mongodb' else payload['migration']
            original = copy.deepcopy(container[key])
            for replacement in ([original[0], original[0]], [{**original[0], 'slot': 2}, {**original[1], 'slot': 1}]):
                container[key] = replacement
                self.invalid(payload)

    def test_errors_are_bounded(self):
        payload = self.payload()
        payload['migration']['pokemon'] = [{}] * 100
        self.assertEqual(len(self.request(payload)['errors']), 20)

    def test_shared_guards_and_migrate_envelope_preserved(self):
        for path in ('/api/validate-batch', '/api/migrate'):
            for headers, status in (({'Origin': 'https://attacker.invalid', 'Content-Type': 'application/json'}, 403),
                                    ({'Origin': self.base, 'Content-Type': 'text/plain'}, 415),
                                    ({'Content-Type': 'application/json'}, 403),
                                    ({'Origin': self.base, 'Content-Type': 'application/json', 'Content-Length': '2097153'}, 413)):
                self.request(self.payload(), status, headers, path)
        self.request(self.payload(), 400, path='/api/migrate')
