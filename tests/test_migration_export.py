import json
import sqlite3
import tempfile
import unittest
from pathlib import Path

from migration_export import export_database


class MigrationExportTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.root = Path(self.temp_dir.name)
        self.source = self.root / "source.sqlite3"
        self.output_dir = self.root / "exports"
        with sqlite3.connect(self.source) as connection:
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
                    (1, 'bulbasaur', 7, 69, 'https://img.test/1.png'),
                    (2, 'Mr. O''Brien', 4, 60, NULL);
                INSERT INTO pokemon_types VALUES
                    (1, 1, 'grass'), (1, 2, 'poison'), (2, 1, 'normal');
                """
            )

    def tearDown(self):
        self.temp_dir.cleanup()

    def test_postgres_sql_preserves_schema_relations_and_escapes_strings(self):
        sql_path, _ = export_database(self.source, self.output_dir)
        sql = sql_path.read_text(encoding="utf-8")

        self.assertIn("CREATE TABLE IF NOT EXISTS pokemon", sql)
        self.assertIn("CREATE TABLE IF NOT EXISTS pokemon_types", sql)
        self.assertIn("Mr. O''Brien", sql)
        self.assertIn("ON CONFLICT (pokemon_id, slot) DO UPDATE", sql)
        self.assertIn("INSERT INTO pokemon_types", sql)
        self.assertTrue(sql.strip().endswith("COMMIT;"))

        replay = sqlite3.connect(":memory:")
        replay.executescript(sql)
        self.assertEqual(replay.execute("SELECT COUNT(*) FROM pokemon").fetchone()[0], 2)
        self.assertEqual(replay.execute("SELECT COUNT(*) FROM pokemon_types").fetchone()[0], 3)
        replay.close()

    def test_mongodb_jsonl_preserves_each_pokemon_and_ordered_type_slots(self):
        _, jsonl_path = export_database(self.source, self.output_dir)
        lines = jsonl_path.read_text(encoding="utf-8").splitlines()
        documents = [json.loads(line) for line in lines]

        self.assertEqual(len(documents), 2)
        self.assertEqual(documents[0], {
            "_id": 1,
            "height": 7,
            "name": "bulbasaur",
            "sprite_url": "https://img.test/1.png",
            "types": [
                {"slot": 1, "name": "grass"},
                {"slot": 2, "name": "poison"},
            ],
            "weight": 69,
        })
        self.assertIsNone(documents[1]["sprite_url"])
        self.assertEqual(documents[1]["types"], [{"slot": 1, "name": "normal"}])

    def test_export_refuses_overwrite_unless_requested(self):
        export_database(self.source, self.output_dir)
        sql_path = self.output_dir / "pokemon_postgresql.sql"
        original = sql_path.read_text(encoding="utf-8")

        with self.assertRaises(FileExistsError):
            export_database(self.source, self.output_dir)
        self.assertEqual(sql_path.read_text(encoding="utf-8"), original)

        export_database(self.source, self.output_dir, overwrite=True)
        self.assertEqual(sql_path.read_text(encoding="utf-8"), original)


if __name__ == "__main__":
    unittest.main()
