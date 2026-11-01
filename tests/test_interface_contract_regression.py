import hashlib
import http.client
import threading
import unittest
import tests.test_pokemon_ui as fixtures
from pokemon_ui import create_server, render_pokemon_page

class InterfaceContractProbes(unittest.TestCase):
    def setUp(self):
        fixtures.PokemonUiTests.setUp(self)
        self.server = create_server(self.database_path, port=0)
        self.thread = threading.Thread(target=self.server.serve_forever)
        self.thread.start()

    def tearDown(self):
        self.server.shutdown()
        self.server.server_close()
        self.thread.join()
        fixtures.PokemonUiTests.tearDown(self)

    def request(self, path, method='GET', body=None, extra=None):
        port = self.server.server_port
        headers = {'Origin': f'http://127.0.0.1:{port}', 'Content-Type': 'application/json'}
        headers.update(extra or {})
        before = hashlib.sha256(self.database_path.read_bytes()).digest()
        connection = http.client.HTTPConnection('127.0.0.1', port)
        connection.request(method, path, body, headers)
        response = connection.getresponse()
        result = response.status, dict(response.getheaders()), response.read()
        connection.close()
        self.assertEqual(hashlib.sha256(self.database_path.read_bytes()).digest(), before)
        return result

    def test_s1_s3_static_shell_and_delivery(self):
        page = render_pokemon_page(self.database_path)
        self.assertEqual(page.count('id="interface-root"'), 1)
        self.assertEqual(page.count('<article class="card">'), 1)
        scripts = ['/static/model_loader.js', '/static/migration.js', '/static/webmcp_tools.js', '/static/ui/app.js']
        self.assertEqual(sorted(scripts, key=page.index), scripts)
        for asset, mime in [('app.js', 'text/javascript'), ('app.css', 'text/css')]:
            for query in ['', '?unexpected=1']:
                status, headers, body = self.request('/static/ui/' + asset + query)
                self.assertEqual(status, 200)
                self.assertEqual(headers['Cache-Control'], 'no-store')
                self.assertEqual(headers['X-Content-Type-Options'], 'nosniff')
                self.assertEqual(headers['Content-Type'], mime + '; charset=utf-8')
                self.assertEqual(int(headers['Content-Length']), len(body))
        for path in ['other.js', '../app.js', '%2e%2e/app.js', 'app.js/map', 'app.js.bak']:
            status, _, body = self.request('/static/ui/' + path)
            self.assertEqual(status, 404)
            self.assertIn(b'Not found', body)
        self.assertNotIn('Cache-Control', self.request('/static/model_loader.js')[1])

    def test_s3_rejected_posts_never_change_fixture(self):
        for extra, body, code, message in [
            ({'Origin': 'http://evil.invalid'}, '{}', 403, b'Invalid request origin'),
            ({'Content-Type': 'text/plain'}, '{}', 415, b'Expected application/json'),
            ({}, '', 413, b'Invalid request size'),
            ({'Content-Length': '2097153'}, '{}', 413, b'Invalid request size'),
            ({'Content-Length': 'bad'}, '{}', 400, b'Invalid content length'),
            ({}, '{', 400, b'Invalid JSON'),
        ]:
            status, _, response = self.request('/api/migrate', 'POST', body, extra)
            self.assertEqual(status, code)
            self.assertIn(message, response)
