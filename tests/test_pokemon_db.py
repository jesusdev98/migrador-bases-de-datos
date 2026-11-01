import sqlite3
import tempfile
import unittest
from contextlib import closing
from pathlib import Path

from pokemon_db import normalize_pokemon, seed_database


class PokemonDatabaseTests(unittest.TestCase):
    def test_normalize_pokemon_keeps_sprite_url_and_types(self):
        pokemon = normalize_pokemon({
            "id": 1,
            "name": "bulbasaur",
            "height": 7,
            "weight": 69,
            "sprites": {"front_default": "https://example.test/bulbasaur.png"},
            "types": [
                {"slot": 1, "type": {"name": "grass"}},
                {"slot": 2, "type": {"name": "poison"}},
            ],
        })

        self.assertEqual(pokemon, {
            "id": 1,
            "name": "bulbasaur",
            "height": 7,
            "weight": 69,
            "sprite_url": "https://example.test/bulbasaur.png",
            "types": [(1, "grass"), (2, "poison")],
        })

    def test_seed_database_stores_first_151_pokemon_and_is_repeatable(self):
        with tempfile.TemporaryDirectory() as temp_dir:
            database_path = Path(temp_dir) / "pokemon.sqlite3"
            calls = []

            def fetcher(pokemon_id):
                calls.append(pokemon_id)
                return {
                    "id": pokemon_id,
                    "name": f"pokemon-{pokemon_id}",
                    "height": 10,
                    "weight": 20,
                    "sprites": {"front_default": f"https://example.test/{pokemon_id}.png"},
                    "types": [{"slot": 1, "type": {"name": "normal"}}],
                }

            seed_database(database_path, fetcher=fetcher)
            seed_database(database_path, fetcher=fetcher)

            with closing(sqlite3.connect(database_path)) as connection:
                pokemon_count = connection.execute("SELECT COUNT(*) FROM pokemon").fetchone()[0]
                type_count = connection.execute("SELECT COUNT(*) FROM pokemon_types").fetchone()[0]
                first = connection.execute(
                    "SELECT name, sprite_url FROM pokemon WHERE id = 1"
                ).fetchone()
                last = connection.execute(
                    "SELECT name FROM pokemon WHERE id = 151"
                ).fetchone()

            self.assertEqual(pokemon_count, 151)
            self.assertEqual(type_count, 151)
            self.assertEqual(first, ("pokemon-1", "https://example.test/1.png"))
            self.assertEqual(last, ("pokemon-151",))
            self.assertEqual(calls, list(range(1, 152)))

    def test_normalize_pokemon_rejects_mismatched_id(self):
        with self.assertRaises(ValueError):
            normalize_pokemon({"id": 2, "name": "ivysaur"}, expected_id=1)


if __name__ == "__main__":
    unittest.main()
