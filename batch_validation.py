"""Read-only diagnostics for untrusted model batches; never repair model output."""

import json

MAX_ERRORS = 20


def validate_batch(target, ids, migration, source):
    """Compare a batch to a trusted source snapshot, returning only diagnostics.

    Envelope and source-ID membership checks belong to the HTTP boundary.
    Arrays identify rows by integer keys, never by their incoming order.
    """
    pokemon = [row for row in source['pokemon'] if row['id'] in ids]
    relations = [row for row in source['pokemon_types'] if row['pokemon_id'] in ids]
    if target == 'mongodb':
        expected = {'pokemon': [
            {'_id': row['id'], **{key: value for key, value in row.items() if key != 'id'},
             'types': [{'slot': relation['slot'], 'name': relation['type_name']}
                       for relation in relations if relation['pokemon_id'] == row['id']]}
            for row in pokemon]}
    else:
        expected = {'pokemon': pokemon, 'pokemon_types': relations}
    errors = []

    def source_value(value):
        text = json.dumps(value, ensure_ascii=True)
        return text if len(text) <= 600 else 'the complete value in the original source input (too long to repeat)'

    def error(path, code, message):
        if len(errors) < MAX_ERRORS:
            errors.append(dict(path=path, code=code, message=message))

    def compare(actual, wanted, path):
        if len(errors) >= MAX_ERRORS:
            return
        if type(actual) is not type(wanted):
            if isinstance(wanted, list):
                message = 'Expected a JSON array enclosed in [ ], even for one record. Keep the enclosing root object and all other fields.'
            elif isinstance(wanted, dict):
                message = 'Expected a JSON object enclosed in { }, not a root array.' if path == '$.migration' else 'Expected a JSON object enclosed in { }.'
            else:
                json_type = {str: 'string', int: 'integer', float: 'number', bool: 'boolean', type(None): 'null'}[type(wanted)]
                message = f'Expected JSON {json_type}. Preserve the source value exactly: {source_value(wanted)}.'
            error(path, 'type', message)
        elif isinstance(wanted, dict):
            for key in wanted:
                if key not in actual:
                    error(f'{path}.{key}', 'missing_field', 'Required field is missing.')
                else:
                    compare(actual[key], wanted[key], f'{path}.{key}')
            for key in actual.keys() - wanted.keys():
                error(f'{path}[{json.dumps(key)}]', 'extra_field', 'Unexpected field.')
        elif isinstance(wanted, list):
            compare_rows(actual, wanted, path)
        elif actual != wanted:
            error(path, 'value', f'Value differs from the selected SQLite source. Preserve exactly: {source_value(wanted)}.')

    def compare_rows(actual, wanted, path):
        if path.endswith('.pokemon_types'):
            keys = ('pokemon_id', 'slot')
        elif path.endswith('.types'):
            keys = ('slot',)
        else:
            keys = ('_id',) if target == 'mongodb' else ('id',)
        expected_rows = {tuple(row[key] for key in keys): row for row in wanted}
        seen = set()
        for index, row in enumerate(actual):
            if len(errors) >= MAX_ERRORS:
                break
            row_path = f'{path}[{index}]'
            if type(row) is not dict:
                error(row_path, 'type', 'Expected a JSON object enclosed in { }.')
                continue
            valid_key = True
            for key in keys:
                if key not in row:
                    error(f'{row_path}.{key}', 'missing_field', 'Required field is missing.')
                    valid_key = False
                elif type(row[key]) is not int:
                    error(f'{row_path}.{key}', 'type', 'Expected JSON integer, not a string, boolean, or decimal.')
                    valid_key = False
            if not valid_key:
                continue
            identity = tuple(row[key] for key in keys)
            if identity in seen:
                error(row_path, 'duplicate_row', 'Duplicate row identifier.')
            seen.add(identity)
            if identity not in expected_rows:
                error(row_path, 'extra_row', 'Row does not belong to the selected source batch.')
            else:
                compare(row, expected_rows[identity], row_path)
        for identity in expected_rows.keys() - seen:
            error(path, 'missing_row', f'Missing row with {", ".join(keys)} = {identity}. Include the source record: {source_value(expected_rows[identity])}.')

    compare(migration, expected, '$.migration')
    return {'valid': not errors, 'errors': errors}
