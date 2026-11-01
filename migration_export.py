"""Export the Pokémon SQLite fixture to PostgreSQL SQL and MongoDB JSONL."""

from __future__ import annotations

import argparse
import json
import sqlite3
from contextlib import closing
from pathlib import Path
from typing import Any

DEFAULT_DATABASE_PATH = Path(__file__).resolve().parent / "pokemon.sqlite3"
DEFAULT_OUTPUT_DIRECTORY = Path(__file__).resolve().parent / "exports"
POSTGRESQL_FILENAME = "pokemon_postgresql.sql"
MONGODB_FILENAME = "pokemon_mongodb.jsonl"


def _read_pokemon(database_path: str | Path) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    source = Path(database_path)
    if not source.is_file():
        raise FileNotFoundError(f"SQLite source database does not exist: {source}")

    with closing(sqlite3.connect(source)) as connection:
        connection.row_factory = sqlite3.Row
        pokemon = [
            dict(row)
            for row in connection.execute(
                "SELECT id, name, height, weight, sprite_url FROM pokemon ORDER BY id"
            )
        ]
        types = [
            dict(row)
            for row in connection.execute(
                """SELECT pokemon_id, slot, type_name
                   FROM pokemon_types ORDER BY pokemon_id, slot"""
            )
        ]
    return pokemon, types


def _sql_literal(value: Any) -> str:
    if value is None:
        return "NULL"
    if isinstance(value, str):
        return "'" + value.replace("'", "''") + "'"
    if isinstance(value, int):
        return str(value)
    raise TypeError(f"Unsupported SQLite value for PostgreSQL export: {type(value).__name__}")


def _postgresql_script(
    pokemon: list[dict[str, Any]], types: list[dict[str, Any]]
) -> str:
    statements = [
        "-- Generated from the Pokémon SQLite fixture by migration_export.py.",
        "BEGIN;",
        """
CREATE TABLE IF NOT EXISTS pokemon (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    height INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    sprite_url TEXT
);
""".strip(),
        """
CREATE TABLE IF NOT EXISTS pokemon_types (
    pokemon_id INTEGER NOT NULL,
    slot INTEGER NOT NULL,
    type_name TEXT NOT NULL,
    PRIMARY KEY (pokemon_id, slot),
    UNIQUE (pokemon_id, type_name),
    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id) ON DELETE CASCADE
);
""".strip(),
    ]

    for row in pokemon:
        values = ", ".join(
            _sql_literal(row[column])
            for column in ("id", "name", "height", "weight", "sprite_url")
        )
        statements.append(
            "INSERT INTO pokemon (id, name, height, weight, sprite_url) "
            f"VALUES ({values}) ON CONFLICT (id) DO UPDATE SET "
            "name = EXCLUDED.name, height = EXCLUDED.height, "
            "weight = EXCLUDED.weight, sprite_url = EXCLUDED.sprite_url;"
        )

    for row in types:
        values = ", ".join(
            _sql_literal(row[column])
            for column in ("pokemon_id", "slot", "type_name")
        )
        statements.append(
            "INSERT INTO pokemon_types (pokemon_id, slot, type_name) "
            f"VALUES ({values}) ON CONFLICT (pokemon_id, slot) DO UPDATE SET "
            "type_name = EXCLUDED.type_name;"
        )

    statements.extend(("COMMIT;", ""))
    return "\n\n".join(statements)


def _mongodb_jsonl(
    pokemon: list[dict[str, Any]], types: list[dict[str, Any]]
) -> str:
    types_by_pokemon: dict[int, list[dict[str, Any]]] = {}
    for row in types:
        types_by_pokemon.setdefault(row["pokemon_id"], []).append(
            {"slot": row["slot"], "name": row["type_name"]}
        )

    documents = [
        {
            "_id": row["id"],
            "name": row["name"],
            "height": row["height"],
            "weight": row["weight"],
            "sprite_url": row["sprite_url"],
            "types": types_by_pokemon.get(row["id"], []),
        }
        for row in pokemon
    ]
    return "".join(
        json.dumps(document, ensure_ascii=False, sort_keys=True, separators=(",", ":"))
        + "\n"
        for document in documents
    )


def export_database(
    database_path: str | Path = DEFAULT_DATABASE_PATH,
    output_directory: str | Path = DEFAULT_OUTPUT_DIRECTORY,
    *,
    overwrite: bool = False,
) -> tuple[Path, Path]:
    """Write one PostgreSQL script and one MongoDB-importable JSONL file."""
    pokemon, types = _read_pokemon(database_path)
    output_dir = Path(output_directory)
    sql_path = output_dir / POSTGRESQL_FILENAME
    jsonl_path = output_dir / MONGODB_FILENAME

    existing = [path for path in (sql_path, jsonl_path) if path.exists()]
    if existing and not overwrite:
        names = ", ".join(path.name for path in existing)
        raise FileExistsError(
            f"Export output already exists: {names}. Pass --overwrite to replace it."
        )

    output_dir.mkdir(parents=True, exist_ok=True)
    sql_path.write_text(_postgresql_script(pokemon, types), encoding="utf-8", newline="\n")
    jsonl_path.write_text(_mongodb_jsonl(pokemon, types), encoding="utf-8", newline="\n")
    return sql_path, jsonl_path


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--database",
        type=Path,
        default=DEFAULT_DATABASE_PATH,
        help=f"SQLite source database (default: {DEFAULT_DATABASE_PATH})",
    )
    parser.add_argument(
        "--output-dir",
        type=Path,
        default=DEFAULT_OUTPUT_DIRECTORY,
        help=f"Directory for export files (default: {DEFAULT_OUTPUT_DIRECTORY})",
    )
    parser.add_argument(
        "--overwrite",
        action="store_true",
        help="Replace existing generated export files",
    )
    arguments = parser.parse_args()
    sql_path, jsonl_path = export_database(
        arguments.database, arguments.output_dir, overwrite=arguments.overwrite
    )
    print(f"Created PostgreSQL SQL export: {sql_path}")
    print(f"Created MongoDB JSON Lines export: {jsonl_path}")


if __name__ == "__main__":
    main()
