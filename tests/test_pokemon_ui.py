import json
import sqlite3
import tempfile
import threading
import unittest
from pathlib import Path
from urllib.error import HTTPError
from urllib.request import Request, urlopen
from unittest.mock import patch

from pokemon_ui import create_server, render_pokemon_page


class PokemonUiTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.database_path = Path(self.temp_dir.name) / "pokemon.sqlite3"
        with sqlite3.connect(self.database_path) as connection:
            connection.executescript(
                """
                CREATE TABLE pokemon (
                    id INTEGER PRIMARY KEY,
                    name TEXT NOT NULL UNIQUE,
                    height INTEGER NOT NULL,
                    weight INTEGER NOT NULL,
                    sprite_url TEXT
                );
                CREATE TABLE pokemon_types (
                    pokemon_id INTEGER NOT NULL,
                    slot INTEGER NOT NULL,
                    type_name TEXT NOT NULL,
                    PRIMARY KEY (pokemon_id, slot),
                    UNIQUE (pokemon_id, type_name),
                    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id)
                );
                INSERT INTO pokemon VALUES
                    (1, 'bulbasaur', 7, 69,
                     'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png');
                INSERT INTO pokemon_types VALUES (1, 1, 'grass'), (1, 2, 'poison');
                """
            )

    def postgresql_output(self):
        return {
            "pokemon": [{"id": 1, "name": "bulbasaur", "height": 7, "weight": 69,
                         "sprite_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}],
            "pokemon_types": [
                {"pokemon_id": 1, "slot": 1, "type_name": "grass"},
                {"pokemon_id": 1, "slot": 2, "type_name": "poison"},
            ],
        }

    def mongodb_output(self):
        return {"pokemon": [{"_id": 1, "name": "bulbasaur", "height": 7, "weight": 69,
                             "sprite_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
                             "types": [{"slot": 1, "name": "grass"}, {"slot": 2, "name": "poison"}]}]}
    def tearDown(self):
        self.temp_dir.cleanup()

    def test_page_renders_pokemon_name_types_and_sprite(self):
        page = render_pokemon_page(self.database_path)

        self.assertIn("Bulbasaur", page)
        self.assertIn("Grass", page)
        self.assertIn("Poison", page)
        self.assertIn(
            'src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"',
            page,
        )
        self.assertIn("1 Pokémon", page)

    def test_migration_page_loads_records_from_the_selected_destination(self):
        from pokemon_ui import render_migration_page

        migration = self.postgresql_output()
        with patch("pokemon_ui.read_postgresql_migration", return_value=migration) as read_target:
            page = render_migration_page("postgresql", "pokemon_migration_20261029_120000_ab12cd34")

        read_target.assert_called_once_with("pokemon_migration_20261029_120000_ab12cd34")
        self.assertIn("Bulbasaur", page)
        self.assertIn("PostgreSQL", page)

    def test_migration_page_rejects_unrecognized_destination_names(self):
        from pokemon_ui import render_migration_page

        with patch("pokemon_ui.read_postgresql_migration") as read_target:
            with self.assertRaises(ValueError):
                render_migration_page("postgresql", "other_schema")
        read_target.assert_not_called()

    def test_model_controls_select_qwen_load_on_demand_and_manage_browser_cache(self):
        page = render_pokemon_page(self.database_path)

        self.assertIn('id="model-select"', page)
        self.assertIn('id="load-model"', page)
        self.assertIn('id="delete-model"', page)
        self.assertNotIn('id="delete-model" type="button" disabled', page)
        self.assertIn("Qwen2.5-0.5B-Instruct-q4f16_1-MLC", page)
        self.assertIn("Qwen2.5-1.5B-Instruct-q4f16_1-MLC", page)
        self.assertIn('value="Llama-3.2-3B-Instruct-q4f32_1-MLC" selected', page)
        self.assertIn('Llama 3.2 · 3B q4f32 (recommended)', page)
        self.assertNotIn('0.5B (recommended)', page)
        self.assertIn("cache", page.lower())
        self.assertIn('data-target="postgresql"', page)
        self.assertIn('data-target="mongodb"', page)
        self.assertIn('data-target="mariadb"', page)
        self.assertIn('Migrate to PostgreSQL', page)
        self.assertIn('Migrate to MongoDB', page)
        self.assertIn('Migrate to MariaDB', page)
        self.assertNotIn("@mlc-ai/web-llm", page)

        script_path = Path(__file__).resolve().parents[1] / "static" / "model_loader.js"
        script = script_path.read_text(encoding="utf-8")
        self.assertIn('addEventListener("click", loadSelectedModel)', script)
        self.assertIn('import("https://esm.run/@mlc-ai/web-llm@0.2.87")', script)
        self.assertIn("deleteModelAllInfoInCache", script)

        migration_script = (script_path.parent / "migration.js").read_text(encoding="utf-8")
        self.assertIn("getLoadedEngine", migration_script)
        self.assertIn("Load a model before migrating", migration_script)
        migration_action = migration_script.split("async function migrate(target, pilot = false, pilotSize = 1)", 1)[1]
        self.assertLess(migration_action.index("if (!engine)"), migration_action.index("fetch("))
        self.assertIn('schema: JSON.stringify(migrationSchema(target))', migration_script)
        self.assertIn("Return one JSON object only", migration_script)
        self.assertIn("parseMigrationJson(content)", migration_script)
        self.assertIn('fetch("/api/validate-batch"', migration_script)
        self.assertIn("attempt <= 3", migration_script)
        self.assertIn("targetDisplayName(target)", migration_script)
        self.assertIn("JSON.stringify({ target, migration })", migration_script)
        self.assertIn('window.open("about:blank", "_blank")', migration_script)
        self.assertIn('`/migration?${query.toString()}`', migration_script)
    def test_migration_endpoint_only_runs_on_valid_same_origin_explicit_post(self):
        server = create_server(self.database_path, port=0)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base_url = f"http://127.0.0.1:{server.server_address[1]}"
        migration = self.postgresql_output()
        payload = json.dumps({"target": "postgresql", "migration": migration}).encode("utf-8")
        try:
            with patch("pokemon_ui.migrate_to_postgresql", return_value={
                "target": "postgresql", "destination": "pokemon_migration_test",
                "pokemon_count": 1, "type_count": 2,
            }) as migrate:
                request = Request(
                    f"{base_url}/api/migrate", data=payload, method="POST",
                    headers={"Content-Type": "application/json", "Origin": base_url},
                )
                with urlopen(request, timeout=5) as response:
                    result = response.read().decode("utf-8")
                    self.assertEqual(response.status, 200)
                    self.assertIn("pokemon_migration_test", result)
                migrate.assert_called_once_with(self.database_path.resolve(), migration_output=migration)
        finally:
            server.shutdown()
            thread.join(timeout=5)
            server.server_close()

    def test_mariadb_target_is_dispatched_to_the_python_migrator(self):
        server = create_server(self.database_path, port=0)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base_url = f"http://127.0.0.1:{server.server_address[1]}"
        migration = self.postgresql_output()
        payload = json.dumps({"target": "mariadb", "migration": migration}).encode("utf-8")
        try:
            with patch("pokemon_ui.migrate_to_mariadb", return_value={
                "target": "mariadb", "database": "pokemon_migrator",
                "destination": "pokemon_migration_20261029_120000_ab12cd34",
                "pokemon_count": 1, "type_count": 2,
            }) as migrate:
                request = Request(
                    f"{base_url}/api/migrate", data=payload, method="POST",
                    headers={"Content-Type": "application/json", "Origin": base_url},
                )
                with urlopen(request, timeout=5) as response:
                    result = json.loads(response.read().decode("utf-8"))
                    self.assertEqual(response.status, 200)
                    self.assertEqual(result["target"], "mariadb")
                migrate.assert_called_once_with(self.database_path.resolve(), migration_output=migration)
        finally:
            server.shutdown()
            thread.join(timeout=5)
            server.server_close()

    def test_migration_view_reads_the_selected_destination_from_postgresql(self):
        server = create_server(self.database_path, port=0)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base_url = f"http://127.0.0.1:{server.server_address[1]}"
        destination = "pokemon_migration_20261029_120000_ab12cd34"
        try:
            with patch("pokemon_ui.read_postgresql_migration", return_value=self.postgresql_output()) as read_target:
                with urlopen(f"{base_url}/migration?target=postgresql&destination={destination}", timeout=5) as response:
                    page = response.read().decode("utf-8")
                    self.assertEqual(response.status, 200)
                    self.assertIn("PostgreSQL", page)
                    self.assertIn("Bulbasaur", page)
                read_target.assert_called_once_with(destination)
            with self.assertRaises(HTTPError) as error:
                urlopen(f"{base_url}/migration?target=postgresql&destination=other_schema", timeout=5)
            self.assertEqual(error.exception.code, 400)
        finally:
            server.shutdown()
            thread.join(timeout=5)
            server.server_close()

    def test_migration_view_routes_mariadb_to_its_readback(self):
        from pokemon_ui import render_migration_page

        migration = self.postgresql_output()
        with patch("pokemon_ui.read_mariadb_migration", return_value=migration) as read_target:
            page = render_migration_page("mariadb", "pokemon_migration_20261029_120000_ab12cd34")
        self.assertIn("MariaDB", page)
        self.assertIn("Bulbasaur", page)
        read_target.assert_called_once_with("pokemon_migration_20261029_120000_ab12cd34")

    def test_mongodb_connection_failure_shows_local_service_hint_without_exception_details(self):
        server = create_server(self.database_path, port=0)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base_url = f"http://127.0.0.1:{server.server_address[1]}"
        request = Request(
            f"{base_url}/api/migrate", data=json.dumps({"target": "mongodb", "migration": self.mongodb_output()}).encode("utf-8"), method="POST",
            headers={"Content-Type": "application/json", "Origin": base_url},
        )
        try:
            with patch("pokemon_ui.migrate_to_mongodb", side_effect=RuntimeError("private connection detail")):
                with self.assertRaises(HTTPError) as error:
                    urlopen(request, timeout=5)
                self.assertEqual(error.exception.code, 502)
                message = error.exception.read().decode("utf-8")
                self.assertIn("Ubuntu MongoDB service", message)
                self.assertNotIn("private connection detail", message)
        finally:
            server.shutdown()
            thread.join(timeout=5)
            server.server_close()
    def test_migration_endpoint_rejects_invalid_origin_and_target_without_writes(self):
        server = create_server(self.database_path, port=0)
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base_url = f"http://127.0.0.1:{server.server_address[1]}"
        try:
            with patch("pokemon_ui.migrate_to_postgresql") as pg, patch("pokemon_ui.migrate_to_mongodb") as mongo:
                cases = (
                    (b'{"target":"postgresql","migration":{}}', "https://attacker.invalid"),
                    (b'{"target":"../../data","migration":{}}', base_url),
                    (b'{"target":"postgresql"}', base_url),
                )
                for payload, origin in cases:
                    request = Request(
                        f"{base_url}/api/migrate", data=payload, method="POST",
                        headers={"Content-Type": "application/json", "Origin": origin},
                    )
                    with self.assertRaises(HTTPError) as error:
                        urlopen(request, timeout=5)
                    self.assertEqual(error.exception.code, 403 if origin.startswith("https://") else 400)
                pg.assert_not_called()
                mongo.assert_not_called()
        finally:
            server.shutdown()
            thread.join(timeout=5)
            server.server_close()
    def test_webmcp_tools_are_registered_without_visible_ui(self):
        page = render_pokemon_page(self.database_path)
        self.assertNotIn("WebMCP", page)
        self.assertIn("/static/webmcp_tools.js", page)

        script_path = Path(__file__).resolve().parents[1] / "static" / "webmcp_tools.js"
        script = script_path.read_text(encoding="utf-8")
        self.assertIn("document.modelContext", script)
        self.assertIn('name: "inspect_migration_interface"', script)
        self.assertIn('name: "validate_migration_interface"', script)
        self.assertIn("readOnlyHint: true", script)
        self.assertNotIn("/api/migrate", script)
    def test_local_server_serves_the_page_and_returns_404_for_unknown_routes(self):
        server = create_server(self.database_path, port=0)
        self.assertEqual(server.server_address[0], "127.0.0.1")
        thread = threading.Thread(target=server.serve_forever, daemon=True)
        thread.start()
        base_url = f"http://127.0.0.1:{server.server_address[1]}"
        try:
            with urlopen(base_url, timeout=5) as response:
                self.assertEqual(response.status, 200)
                page = response.read().decode("utf-8")
                self.assertIn("Bulbasaur", page)
                self.assertNotIn("/api/migrate", page)
            with urlopen(f"{base_url}/api/source", timeout=5) as response:
                self.assertEqual(response.status, 200)
                source = json.loads(response.read().decode("utf-8"))
                self.assertEqual(source["pokemon"][0]["id"], 1)
                self.assertEqual(source["pokemon_types"][0]["slot"], 1)
            for script_name in ("model_loader.js", "migration.js", "webmcp_tools.js"):
                with urlopen(f"{base_url}/static/{script_name}", timeout=5) as response:
                    self.assertEqual(response.status, 200)
                    self.assertIn("addEventListener", response.read().decode("utf-8"))
            with self.assertRaises(HTTPError) as error:
                urlopen(f"{base_url}/missing", timeout=5)
            self.assertEqual(error.exception.code, 404)
        finally:
            server.shutdown()
            thread.join(timeout=5)
            server.server_close()
if __name__ == "__main__":
    unittest.main()
















