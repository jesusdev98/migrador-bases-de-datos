import threading
import unittest
from urllib.error import HTTPError
from urllib.request import Request, urlopen

from webllm_probe import create_server


class WebLLMProbeTests(unittest.TestCase):
    def test_only_fixed_read_only_assets_are_served(self):
        server = create_server(port=0)
        self.assertEqual(server.server_address[0], '127.0.0.1')
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base = f'http://127.0.0.1:{server.server_address[1]}'
        try:
            for route, mime in [('/', 'text/html'), ('/probe.js', 'text/javascript')]:
                with urlopen(base + route) as response:
                    self.assertEqual(response.status, 200)
                    self.assertEqual(response.headers.get_content_type(), mime)
                    self.assertEqual(response.headers['Cache-Control'], 'no-store')
                    if route == '/':
                        page = response.read().decode('utf-8')
                        self.assertIn('Qwen2.5-3B-Instruct-q4f32_1-MLC', page)
                        self.assertIn('Llama-3.2-3B-Instruct-q4f32_1-MLC', page)
            for route in ['/api/source', '/api/migrate', '/pokemon.sqlite3', '/..%2Fpokemon.sqlite3']:
                with self.assertRaises(HTTPError) as caught:
                    urlopen(base + route)
                self.assertEqual(caught.exception.code, 404)
            with self.assertRaises(HTTPError) as caught:
                urlopen(Request(base + '/', data=b'{}', method='POST'))
            self.assertEqual(caught.exception.code, 501)
        finally:
            server.shutdown()
            thread.join(timeout=5)
            server.server_close()
