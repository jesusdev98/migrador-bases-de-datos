"""Serve an isolated, database-free WebLLM diagnostic on IPv4 loopback."""

import argparse
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlsplit


def create_server(*, port=8001):
    assets = Path(__file__).resolve().parent / 'diagnostics'

    class Handler(BaseHTTPRequestHandler):
        def do_GET(self):
            routes = {'/': ('webllm.html', 'text/html'), '/probe.js': ('webllm.js', 'text/javascript')}
            selected = routes.get(urlsplit(self.path).path)
            if selected is None:
                self.send_error(404)
                return
            filename, mime = selected
            try:
                body = (assets / filename).read_bytes()
            except OSError:
                self.send_error(404)
                return
            self.send_response(200)
            self.send_header('Content-Type', f'{mime}; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.send_header('Cache-Control', 'no-store')
            self.send_header('X-Content-Type-Options', 'nosniff')
            self.end_headers()
            self.wfile.write(body)

    return ThreadingHTTPServer(('127.0.0.1', port), Handler)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8001)
    args = parser.parse_args()
    server = create_server(port=args.port)
    print(f'Isolated WebLLM probe: http://127.0.0.1:{server.server_port}')
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
