"""Serve a read-only, loopback-only browser view of the Pokémon SQLite fixture."""

from __future__ import annotations

import argparse
import html
import json
import sqlite3
from contextlib import closing
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any
from urllib.parse import parse_qs, urlsplit

from batch_validation import validate_batch

from migration_service import (
    _validate_migration_name,
    migrate_to_mariadb,
    migrate_to_mongodb,
    migrate_to_postgresql,
    read_mariadb_migration,
    read_mongodb_migration,
    read_postgresql_migration,
)

DEFAULT_DATABASE_PATH = Path(__file__).resolve().parent / "pokemon.sqlite3"


def _load_pokemon(database_path: str | Path) -> list[dict[str, Any]]:
    source = Path(database_path)
    if not source.is_file():
        raise FileNotFoundError(f"SQLite database does not exist: {source}")

    with closing(sqlite3.connect(source)) as connection:
        connection.row_factory = sqlite3.Row
        rows = connection.execute(
            """SELECT p.id, p.name, p.height, p.weight, p.sprite_url,
                      GROUP_CONCAT(pt.type_name, ',') AS types
               FROM pokemon AS p
               LEFT JOIN pokemon_types AS pt ON pt.pokemon_id = p.id
               GROUP BY p.id, p.name, p.height, p.weight, p.sprite_url
               ORDER BY p.id"""
        ).fetchall()

    return [
        {
            "id": row["id"],
            "name": row["name"],
            "height": row["height"],
            "weight": row["weight"],
            "sprite_url": row["sprite_url"],
            "types": row["types"].split(",") if row["types"] else [],
        }
        for row in rows
    ]


def _load_migration_source(database_path: str | Path) -> dict[str, list[dict[str, Any]]]:
    source = Path(database_path)
    if not source.is_file():
        raise FileNotFoundError(f"SQLite database does not exist: {source}")
    with closing(sqlite3.connect(source)) as connection:
        connection.row_factory = sqlite3.Row
        pokemon = [dict(row) for row in connection.execute(
            "SELECT id, name, height, weight, sprite_url FROM pokemon ORDER BY id"
        )]
        pokemon_types = [dict(row) for row in connection.execute(
            "SELECT pokemon_id, slot, type_name FROM pokemon_types ORDER BY pokemon_id, slot"
        )]
    return {"pokemon": pokemon, "pokemon_types": pokemon_types}


def render_pokemon_page(database_path: str | Path = DEFAULT_DATABASE_PATH) -> str:
    """Render the fixture as an escaped, read-only HTML page."""
    pokemon = _load_pokemon(database_path)
    cards = []
    for item in pokemon:
        image = ""
        if item["sprite_url"]:
            image = (
                f'<img src="{html.escape(item["sprite_url"], quote=True)}" '
                f'alt="Sprite of {html.escape(item["name"], quote=True)}" '
                'loading="lazy">'
            )
        types = "".join(
            f'<span class="type">{html.escape(type_name.title())}</span>'
            for type_name in item["types"]
        ) or '<span class="muted">No types</span>'
        cards.append(
            '<article class="card">'
            f'<div class="sprite">{image}</div>'
            f'<p class="number">#{item["id"]:03}</p>'
            f'<h2>{html.escape(item["name"].title())}</h2>'
            f'<div class="types">{types}</div>'
            f'<p class="details">Height {item["height"]} · Weight {item["weight"]}</p>'
            '</article>'
        )

    content = "\n".join(cards) if cards else '<p class="empty">No Pokémon found.</p>'
    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Pokémon — Local database</title>
  <style>
    :root {{ color-scheme: light; font-family: system-ui, sans-serif; color: #202532; background: #f3f5f8; }}
    body {{ margin: 0; }}
    header {{ padding: 2rem max(1rem, calc((100vw - 1200px) / 2)); background: #202532; color: white; }}
    header h1 {{ margin: 0 0 .35rem; }}
    header p {{ margin: 0; color: #d4d9e2; }}
    main {{ max-width: 1200px; margin: 1.5rem auto; padding: 0 1rem; }}
    .grid {{ display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem; }}
    .card {{ padding: 1rem; border: 1px solid #e1e5eb; border-radius: 14px; background: white; box-shadow: 0 3px 12px #2025320b; }}
    .sprite {{ display: grid; place-items: center; height: 120px; border-radius: 10px; background: #f3f5f8; }}
    .sprite img {{ width: 112px; height: 112px; object-fit: contain; image-rendering: pixelated; }}
    .number {{ margin: .8rem 0 0; color: #737b8b; font-size: .8rem; }}
    h2 {{ margin: .15rem 0 .65rem; font-size: 1.15rem; }}
    .types {{ display: flex; flex-wrap: wrap; gap: .4rem; }}
    .type {{ padding: .22rem .55rem; border-radius: 999px; background: #e9eef8; font-size: .8rem; }}
    .details, .muted {{ color: #737b8b; font-size: .82rem; }}
    .empty {{ padding: 2rem; text-align: center; }}
    .model-panel {{ max-width: 1200px; margin: 1.25rem auto 0; padding: 1rem; border: 1px solid #e1e5eb; border-radius: 14px; background: white; }}
    .model-controls {{ display: flex; flex-wrap: wrap; align-items: end; gap: .75rem; }}
    .model-controls label {{ display: grid; gap: .3rem; font-weight: 600; }}
    select, button {{ min-height: 2.5rem; padding: .45rem .7rem; border: 1px solid #c6ccd6; border-radius: 8px; background: white; font: inherit; }}
    button {{ cursor: pointer; }}
    button:disabled {{ cursor: not-allowed; opacity: .55; }}
    #model-status {{ min-height: 1.5rem; margin: .75rem 0 0; color: #465064; }}
    .migration-panel {{ max-width: 1200px; margin: 1.25rem auto 0; padding: 1rem; border: 1px solid #e1e5eb; border-radius: 14px; background: white; }}
    .migration-actions {{ display: flex; flex-wrap: wrap; gap: .75rem; }}
    #migration-status {{ min-height: 1.5rem; }}
  </style>
</head>
<body>
  <header><h1>Pokémon database</h1><p>{len(pokemon)} Pokémon · Read-only local SQLite view</p></header>
  <section class="model-panel" aria-labelledby="model-heading">
    <h2 id="model-heading">Local AI model</h2>
    <p>Runs in this browser with WebGPU. The model is fetched only when you press Load model and kept in this browser's cache.</p>
    <div class="model-controls">
      <label for="model-select">Model
        <select id="model-select">
          <option value="Llama-3.2-3B-Instruct-q4f32_1-MLC" selected>Llama 3.2 · 3B q4f32 (recommended)</option>
          <option value="Qwen2.5-0.5B-Instruct-q4f16_1-MLC">Qwen 2.5 · 0.5B</option>
          <option value="Qwen2.5-1.5B-Instruct-q4f16_1-MLC">Qwen 2.5 · 1.5B</option>
          <option value="Qwen2.5-3B-Instruct-q4f16_1-MLC">Qwen 2.5 · 3B</option>
        </select>
      </label>
      <button id="load-model" type="button">Load model</button>
      <button id="delete-model" type="button">Delete selected model from cache</button>
    </div>
    <p id="model-status" role="status" aria-live="polite">Model not loaded. WebGPU and internet access are required for the first load. Llama's runtime registry estimates about 3 GB of GPU memory; model weights have separate license terms.</p>
  </section>
  <section class="migration-panel" aria-labelledby="migration-heading">
    <h2 id="migration-heading">Migrate this SQLite fixture</h2>
    <p>Load a model first. Start with no-write pilots of one or up to five records. The full migration actions generate all target records; Python validates the result, writes it to a new isolated destination, and checks the stored data.</p>
    <div class="migration-actions">
      <button type="button" class="migrate-target" data-target="postgresql">Migrate to PostgreSQL</button>
      <button type="button" class="migrate-target" data-target="mongodb">Migrate to MongoDB</button>
      <button type="button" class="migrate-target" data-target="mariadb">Migrate to MariaDB</button>
    </div>
    <p id="migration-status" role="status" aria-live="polite">Load a model before migrating. PostgreSQL, MongoDB, and MariaDB require local database services.</p>
  </section>
  <main><section class="grid" aria-label="Pokémon">{content}</section></main>
  <script type="module" src="/static/model_loader.js"></script>
  <script type="module" src="/static/migration.js"></script>
  <script type="module" src="/static/webmcp_tools.js"></script>
</body>
</html>
"""


def render_migration_page(target: str, destination: str) -> str:
    """Render a read-only view populated from the selected migrated database."""
    destination = _validate_migration_name(destination)
    if target == "postgresql":
        migration = read_postgresql_migration(destination)
        target_label = "PostgreSQL"
    elif target == "mongodb":
        migration = read_mongodb_migration(destination)
        target_label = "MongoDB"
    elif target == "mariadb":
        migration = read_mariadb_migration(destination)
        target_label = "MariaDB"
    else:
        raise ValueError("Unsupported migration target")

    cards = []
    types_by_pokemon: dict[int, list[str]] = {}
    for relation in migration["pokemon_types"]:
        types_by_pokemon.setdefault(relation["pokemon_id"], []).append(relation["type_name"])
    for item in migration["pokemon"]:
        image = (f'<img src="{html.escape(item["sprite_url"], quote=True)}" alt="" loading="lazy">'
                 if item["sprite_url"] else "")
        types = "".join(f'<span class="type">{html.escape(name.title())}</span>'
                         for name in types_by_pokemon.get(item["id"], []))
        cards.append(
            '<article class="card">'
            f'<div class="sprite">{image}</div><p class="number">#{item["id"]:03}</p>'
            f'<h2>{html.escape(item["name"].title())}</h2><div class="types">{types}</div>'
            f'<p>Height {item["height"]} · Weight {item["weight"]}</p></article>'
        )
    content = "".join(cards) if cards else '<p class="empty">No migrated Pokémon found.</p>'
    return f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1"><title>Migrated Pokémon</title>
<style>body{{font:16px system-ui,sans-serif;margin:2rem;background:#f3f5f8;color:#202532}}.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1rem}}.card{{padding:1rem;border:1px solid #e1e5eb;border-radius:14px;background:white}}.sprite{{height:120px;display:grid;place-items:center;background:#f3f5f8}}img{{width:112px;height:112px;object-fit:contain}}.types{{display:flex;gap:.4rem}}.type{{background:#e9eef8;border-radius:999px;padding:.2rem .5rem}}.number{{color:#737b8b}}</style>
</head><body><header><h1>Migrated Pokémon</h1><p>Read from {target_label} · {html.escape(destination)}</p></header>
<main class="grid">{content}</main></body></html>"""


def create_server(
    database_path: str | Path = DEFAULT_DATABASE_PATH, *, port: int = 8000
) -> ThreadingHTTPServer:
    """Create a server bound only to IPv4 loopback."""
    database = Path(database_path).resolve()

    class PokemonHandler(BaseHTTPRequestHandler):
        def do_GET(self) -> None:
            parsed_path = urlsplit(self.path)
            request_path = parsed_path.path
            if request_path == "/migration":
                try:
                    query = parse_qs(parsed_path.query, strict_parsing=True)
                except ValueError:
                    self.send_error(400, "Invalid migration destination")
                    return
                if set(query) != {"target", "destination"} or any(len(value) != 1 for value in query.values()):
                    self.send_error(400, "Expected one target and destination")
                    return
                try:
                    body = render_migration_page(query["target"][0], query["destination"][0]).encode("utf-8")
                except ValueError:
                    self.send_error(400, "Invalid migration destination")
                    return
                except Exception:
                    self.send_error(502, "Could not read the migrated database")
                    return
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "no-store")
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                self.wfile.write(body)
                return
            if request_path == "/api/source":
                try:
                    body = json.dumps(_load_migration_source(database), ensure_ascii=False).encode("utf-8")
                except (FileNotFoundError, sqlite3.Error):
                    self.send_error(500, "Could not read the SQLite source")
                    return
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "no-store")
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                self.wfile.write(body)
                return
            if request_path == "/static/model_loader.js":
                script_path = Path(__file__).resolve().parent / "static" / "model_loader.js"
                try:
                    body = script_path.read_bytes()
                except OSError:
                    self.send_error(404, "Not found")
                    return
                self.send_response(200)
                self.send_header("Content-Type", "text/javascript; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                self.wfile.write(body)
                return
            if request_path == "/static/migration.js":
                script_path = Path(__file__).resolve().parent / "static" / "migration.js"
                try:
                    body = script_path.read_bytes()
                except OSError:
                    self.send_error(404, "Not found")
                    return
                self.send_response(200)
                self.send_header("Content-Type", "text/javascript; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                self.wfile.write(body)
                return
            if request_path == "/static/webmcp_tools.js":
                script_path = Path(__file__).resolve().parent / "static" / "webmcp_tools.js"
                try:
                    body = script_path.read_bytes()
                except OSError:
                    self.send_error(404, "Not found")
                    return
                self.send_response(200)
                self.send_header("Content-Type", "text/javascript; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("X-Content-Type-Options", "nosniff")
                self.end_headers()
                self.wfile.write(body)
                return
            if request_path != "/":
                self.send_error(404, "Not found")
                return
            try:
                body = render_pokemon_page(database).encode("utf-8")
            except (FileNotFoundError, sqlite3.Error) as error:
                self.send_error(500, str(error))
                return
            self.send_response(200)
            self.send_header("Content-Type", "text/html; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("X-Content-Type-Options", "nosniff")
            self.end_headers()
            self.wfile.write(body)

        def do_POST(self) -> None:
            request_path = urlsplit(self.path).path
            if request_path not in {"/api/migrate", "/api/validate-batch"}:
                self.send_error(404, "Not found")
                return
            host = self.headers.get("Host", "")
            origin = self.headers.get("Origin", "")
            parsed_origin = urlsplit(origin)
            if (parsed_origin.scheme != "http" or parsed_origin.hostname not in {"127.0.0.1", "localhost"}
                    or parsed_origin.netloc != host or parsed_origin.username or parsed_origin.password):
                self.send_error(403, "Invalid request origin")
                return
            if self.headers.get_content_type() != "application/json":
                self.send_error(415, "Expected application/json")
                return
            try:
                content_length = int(self.headers.get("Content-Length", "0"))
            except ValueError:
                self.send_error(400, "Invalid content length")
                return
            if content_length < 1 or content_length > 2 * 1024 * 1024:
                self.send_error(413, "Invalid request size")
                return
            try:
                payload = json.loads(self.rfile.read(content_length))
            except (json.JSONDecodeError, UnicodeDecodeError):
                self.send_error(400, "Invalid JSON")
                return
            if request_path == "/api/validate-batch":
                if (not isinstance(payload, dict) or set(payload) != {"target", "ids", "migration"}
                        or type(payload["target"]) is not str
                        or payload["target"] not in {"postgresql", "mongodb", "mariadb"}):
                    self.send_error(400, "Expected target, ids and model-generated migration output")
                    return
                ids = payload["ids"]
                if (type(ids) is not list or not 1 <= len(ids) <= 5
                        or any(type(value) is not int or value <= 0 for value in ids)
                        or len(set(ids)) != len(ids)):
                    self.send_error(400, "Expected 1 to 5 distinct positive integer source IDs")
                    return
                try:
                    source = _load_migration_source(database)
                except (FileNotFoundError, sqlite3.Error):
                    self.send_error(500, "Could not read the SQLite source")
                    return
                if not set(ids) <= {row["id"] for row in source["pokemon"]}:
                    self.send_error(400, "Unknown source ID")
                    return
                result = validate_batch(payload["target"], ids, payload["migration"], source)
                body = json.dumps(result).encode("utf-8")
                self.send_response(200)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(body)
                return
            if not isinstance(payload, dict) or set(payload) != {"target", "migration"}:
                self.send_error(400, "Expected target and model-generated migration output")
                return
            target = payload["target"]
            migration_output = payload["migration"]
            if target not in {"postgresql", "mongodb", "mariadb"}:
                self.send_error(400, "Unsupported migration target")
                return
            try:
                if target == "postgresql":
                    result = migrate_to_postgresql(database, migration_output=migration_output)
                elif target == "mongodb":
                    result = migrate_to_mongodb(database, migration_output=migration_output)
                else:
                    result = migrate_to_mariadb(database, migration_output=migration_output)
            except ValueError:
                body = json.dumps({"error": "AI-generated migration output failed validation. Nothing was written."}).encode("utf-8")
                self.send_response(422)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(body)
                return
            except Exception:
                if target == "mongodb":
                    message = "MongoDB is unreachable. Check that the Ubuntu MongoDB service is running and that MONGODB_URI points to a reachable server."
                elif target == "mariadb":
                    message = "MariaDB migration failed. Install the Python requirements, start the service, and configure MARIADB_USER and MARIADB_PASSWORD."
                else:
                    message = "Migration failed. Check that the PostgreSQL database is running and reachable."
                body = json.dumps({"error": message}).encode("utf-8")
                self.send_response(502)
                self.send_header("Content-Type", "application/json; charset=utf-8")
                self.send_header("Content-Length", str(len(body)))
                self.send_header("Cache-Control", "no-store")
                self.end_headers()
                self.wfile.write(body)
                return
            body = json.dumps(result, ensure_ascii=False).encode("utf-8")
            self.send_response(200)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(body)))
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(body)
        def log_message(self, format: str, *args: object) -> None:
            print(f"{self.address_string()} - {format % args}")

    return ThreadingHTTPServer(("127.0.0.1", port), PokemonHandler)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--database", type=Path, default=DEFAULT_DATABASE_PATH)
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args()

    server = create_server(args.database, port=args.port)
    print(f"Pokémon database view: http://127.0.0.1:{server.server_address[1]}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping Pokémon database view.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()








