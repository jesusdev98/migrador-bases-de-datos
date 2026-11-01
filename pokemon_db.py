"""Load the first 151 Pokémon from PokéAPI into a local SQLite fixture."""

from __future__ import annotations

import argparse
import json
import sqlite3
from contextlib import closing
from pathlib import Path
from typing import Any, Callable
from urllib.request import Request, urlopen

API_BASE_URL = "https://pokeapi.co/api/v2"
POKEMON_COUNT = 151
DEFAULT_DATABASE_PATH = Path(__file__).resolve().parent / "pokemon.sqlite3"

Fetcher = Callable[[int], dict[str, Any]]


def fetch_pokemon(pokemon_id: int, api_base_url: str = API_BASE_URL) -> dict[str, Any]:
    """Fetch one Pokémon resource from PokéAPI."""
    request = Request(
        f"{api_base_url.rstrip('/')}/pokemon/{pokemon_id}/",
        headers={"User-Agent": "pokemon-sql-migration-fixture/1.0"},
    )
    with urlopen(request, timeout=30) as response:
        return json.loads(response.read().decode("utf-8"))


def normalize_pokemon(
    payload: dict[str, Any], expected_id: int | None = None
) -> dict[str, Any]:
    """Select stable relational fields from a PokéAPI Pokémon response."""
    pokemon_id = payload["id"]
    if expected_id is not None and pokemon_id != expected_id:
        raise ValueError(
            f"PokéAPI returned Pokémon id {pokemon_id}; expected {expected_id}"
        )

    return {
        "id": pokemon_id,
        "name": payload["name"],
        "height": payload["height"],
        "weight": payload["weight"],
        "sprite_url": payload.get("sprites", {}).get("front_default"),
        "types": [
            (entry["slot"], entry["type"]["name"])
            for entry in payload.get("types", [])
        ],
    }


def create_schema(connection: sqlite3.Connection) -> None:
    """Create the normalized Pokémon tables if they do not exist."""
    connection.execute("PRAGMA foreign_keys = ON")
    connection.executescript(
        """
        CREATE TABLE IF NOT EXISTS pokemon (
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL UNIQUE,
            height INTEGER NOT NULL,
            weight INTEGER NOT NULL,
            sprite_url TEXT
        );

        CREATE TABLE IF NOT EXISTS pokemon_types (
            pokemon_id INTEGER NOT NULL,
            slot INTEGER NOT NULL,
            type_name TEXT NOT NULL,
            PRIMARY KEY (pokemon_id, slot),
            UNIQUE (pokemon_id, type_name),
            FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE
        );
        """
    )


def seed_database(
    database_path: str | Path = DEFAULT_DATABASE_PATH,
    *,
    fetcher: Fetcher | None = None,
) -> Path:
    """Cache PokéAPI data in SQLite, fetching only IDs not already present."""
    path = Path(database_path)
    path.parent.mkdir(parents=True, exist_ok=True)
    fetch = fetcher or fetch_pokemon

    with closing(sqlite3.connect(path)) as connection:
        create_schema(connection)
        for pokemon_id in range(1, POKEMON_COUNT + 1):
            exists = connection.execute(
                "SELECT 1 FROM pokemon WHERE id = ?", (pokemon_id,)
            ).fetchone()
            if exists:
                continue

            pokemon = normalize_pokemon(fetch(pokemon_id), expected_id=pokemon_id)
            with connection:
                connection.execute(
                    """INSERT INTO pokemon (id, name, height, weight, sprite_url)
                       VALUES (?, ?, ?, ?, ?)""",
                    (
                        pokemon["id"],
                        pokemon["name"],
                        pokemon["height"],
                        pokemon["weight"],
                        pokemon["sprite_url"],
                    ),
                )
                connection.executemany(
                    """INSERT INTO pokemon_types (pokemon_id, slot, type_name)
                       VALUES (?, ?, ?)""",
                    [
                        (pokemon["id"], slot, type_name)
                        for slot, type_name in pokemon["types"]
                    ],
                )

    return path


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--database",
        type=Path,
        default=DEFAULT_DATABASE_PATH,
        help=f"SQLite file to create or update (default: {DEFAULT_DATABASE_PATH})",
    )
    arguments = parser.parse_args()
    path = seed_database(arguments.database)
    with closing(sqlite3.connect(path)) as connection:
        count = connection.execute("SELECT COUNT(*) FROM pokemon").fetchone()[0]
    print(f"Loaded {count} Pokémon into {path}")


if __name__ == "__main__":
    main()
