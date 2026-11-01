"""Copy a SQLite Pokémon database to an isolated PostgreSQL schema or MongoDB collection."""

from __future__ import annotations

import json
import os
import re
import secrets
import sqlite3
from contextlib import closing
from datetime import datetime, timezone
from pathlib import Path
from typing import Any

from pymongo import MongoClient
import psycopg
from psycopg import sql

DEFAULT_DATABASE_PATH = Path(__file__).resolve().parent / "pokemon.sqlite3"
DEFAULT_POSTGRESQL_CONNINFO = "dbname=pokemon_migrator"
DEFAULT_MONGODB_URI = os.environ.get("MONGODB_URI", "mongodb://127.0.0.1:27017")
_MIGRATION_NAME = re.compile(r"^pokemon_migration_\d{8}_\d{6}_[0-9a-f]{8}$")


def _validate_migration_name(name: str) -> str:
    if not isinstance(name, str) or not _MIGRATION_NAME.fullmatch(name):
        raise ValueError("Invalid migration destination")
    return name


def _read_source(database_path: str | Path) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    source = Path(database_path)
    if not source.is_file():
        raise FileNotFoundError(f"SQLite source database does not exist: {source}")
    with closing(sqlite3.connect(source)) as connection:
        connection.row_factory = sqlite3.Row
        pokemon = [dict(row) for row in connection.execute(
            "SELECT id, name, height, weight, sprite_url FROM pokemon ORDER BY id"
        )]
        types = [dict(row) for row in connection.execute(
            "SELECT pokemon_id, slot, type_name FROM pokemon_types ORDER BY pokemon_id, slot"
        )]
    if not pokemon:
        raise ValueError("SQLite source database contains no Pokémon rows")
    return pokemon, types


def _destination_name(prefix: str) -> str:
    timestamp = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
    return f"{prefix}_{timestamp}_{secrets.token_hex(4)}"


def _validate_postgresql_output(
    migration_output: Any,
    source_pokemon: list[dict[str, Any]],
    source_types: list[dict[str, Any]],
) -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    if not isinstance(migration_output, dict) or set(migration_output) != {"pokemon", "pokemon_types"}:
        raise ValueError("AI migration output must contain only pokemon and pokemon_types arrays")
    pokemon = migration_output["pokemon"]
    types = migration_output["pokemon_types"]
    if not isinstance(pokemon, list) or not isinstance(types, list):
        raise ValueError("AI migration output arrays are invalid")
    pokemon_fields = {"id", "name", "height", "weight", "sprite_url"}
    type_fields = {"pokemon_id", "slot", "type_name"}
    if any(not isinstance(row, dict) or set(row) != pokemon_fields for row in pokemon):
        raise ValueError("AI migration output has invalid Pokémon records")
    if any(not isinstance(row, dict) or set(row) != type_fields for row in types):
        raise ValueError("AI migration output has invalid type records")
    if len(pokemon) != len(source_pokemon) or len(types) != len(source_types):
        raise ValueError("AI migration output is missing source records")
    if json.dumps(pokemon, sort_keys=True) != json.dumps(source_pokemon, sort_keys=True):
        raise ValueError("AI migration output does not preserve the source Pokémon records")
    if json.dumps(types, sort_keys=True) != json.dumps(source_types, sort_keys=True):
        raise ValueError("AI migration output does not preserve the source type records")
    return pokemon, types


def _validate_mongodb_output(
    migration_output: Any,
    source_pokemon: list[dict[str, Any]],
    source_types: list[dict[str, Any]],
) -> list[dict[str, Any]]:
    if not isinstance(migration_output, dict) or set(migration_output) != {"pokemon"}:
        raise ValueError("AI migration output must contain only a pokemon array")
    documents = migration_output["pokemon"]
    if not isinstance(documents, list) or len(documents) != len(source_pokemon):
        raise ValueError("AI migration output is missing source Pokémon records")
    type_map: dict[int, list[dict[str, Any]]] = {}
    for row in source_types:
        type_map.setdefault(row["pokemon_id"], []).append(
            {"slot": row["slot"], "name": row["type_name"]}
        )
    expected = [
        {"_id": row["id"], "name": row["name"], "height": row["height"],
         "weight": row["weight"], "sprite_url": row["sprite_url"],
         "types": type_map.get(row["id"], [])}
        for row in source_pokemon
    ]
    fields = {"_id", "name", "height", "weight", "sprite_url", "types"}
    if any(not isinstance(row, dict) or set(row) != fields for row in documents):
        raise ValueError("AI migration output has invalid MongoDB documents")
    try:
        actual = sorted(documents, key=lambda row: row["_id"])
        expected.sort(key=lambda row: row["_id"])
    except (KeyError, TypeError):
        raise ValueError("AI migration output has invalid MongoDB identifiers") from None
    if json.dumps(actual, sort_keys=True) != json.dumps(expected, sort_keys=True):
        raise ValueError("AI migration output does not preserve source records and type relations")
    return actual


def _connect_mariadb():
    """Connect using local-safe defaults; credentials are supplied through environment variables."""
    import pymysql
    from pymysql.cursors import DictCursor

    user = os.environ.get("MARIADB_USER")
    if not user:
        raise RuntimeError("Set MARIADB_USER and MARIADB_PASSWORD to connect to MariaDB")
    return pymysql.connect(
        host=os.environ.get("MARIADB_HOST", "127.0.0.1"),
        port=int(os.environ.get("MARIADB_PORT", "3306")),
        user=user,
        password=os.environ.get("MARIADB_PASSWORD", ""),
        database=os.environ.get("MARIADB_DATABASE", "pokemon_migrator"),
        charset="utf8mb4",
        cursorclass=DictCursor,
        connect_timeout=5,
        autocommit=False,
    )


def migrate_to_postgresql(
    database_path: str | Path = DEFAULT_DATABASE_PATH,
    *,
    migration_output: Any,
    conninfo: str = DEFAULT_POSTGRESQL_CONNINFO,
) -> dict[str, Any]:
    """Persist AI-generated rows to a new schema and validate the stored result."""
    source_pokemon, source_types = _read_source(database_path)
    pokemon, types = _validate_postgresql_output(migration_output, source_pokemon, source_types)
    schema = _destination_name("pokemon_migration")
    with psycopg.connect(conninfo) as connection:
        connection.execute(sql.SQL("CREATE SCHEMA {}").format(sql.Identifier(schema)))
        connection.execute(sql.SQL("""
            CREATE TABLE {}.pokemon (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL UNIQUE,
                height INTEGER NOT NULL,
                weight INTEGER NOT NULL,
                sprite_url TEXT
            )
        """).format(sql.Identifier(schema)))
        connection.execute(sql.SQL("""
            CREATE TABLE {}.pokemon_types (
                pokemon_id INTEGER NOT NULL,
                slot INTEGER NOT NULL,
                type_name TEXT NOT NULL,
                PRIMARY KEY (pokemon_id, slot),
                UNIQUE (pokemon_id, type_name),
                FOREIGN KEY (pokemon_id) REFERENCES {}.pokemon(id) ON DELETE CASCADE
            )
        """).format(sql.Identifier(schema), sql.Identifier(schema)))
        connection.cursor().executemany(
            sql.SQL("INSERT INTO {}.pokemon (id, name, height, weight, sprite_url) VALUES (%s, %s, %s, %s, %s)").format(sql.Identifier(schema)),
            [(row["id"], row["name"], row["height"], row["weight"], row["sprite_url"]) for row in pokemon],
        )
        connection.cursor().executemany(
            sql.SQL("INSERT INTO {}.pokemon_types (pokemon_id, slot, type_name) VALUES (%s, %s, %s)").format(sql.Identifier(schema)),
            [(row["pokemon_id"], row["slot"], row["type_name"]) for row in types],
        )
        target_pokemon = [dict(zip(("id", "name", "height", "weight", "sprite_url"), row)) for row in connection.execute(
            sql.SQL("SELECT id, name, height, weight, sprite_url FROM {}.pokemon ORDER BY id").format(sql.Identifier(schema))
        ).fetchall()]
        target_types = [dict(zip(("pokemon_id", "slot", "type_name"), row)) for row in connection.execute(
            sql.SQL("SELECT pokemon_id, slot, type_name FROM {}.pokemon_types ORDER BY pokemon_id, slot").format(sql.Identifier(schema))
        ).fetchall()]
        if target_pokemon != pokemon or target_types != types:
            raise RuntimeError("PostgreSQL migration validation failed; transaction was rolled back")
    return {"target": "postgresql", "destination": schema, "pokemon_count": len(pokemon), "type_count": len(types)}


def migrate_to_mongodb(
    database_path: str | Path = DEFAULT_DATABASE_PATH,
    *,
    migration_output: Any,
    uri: str = DEFAULT_MONGODB_URI,
    database_name: str = "pokemon_migrator",
) -> dict[str, Any]:
    """Persist AI-generated documents to a new collection and validate readback."""
    source_pokemon, source_types = _read_source(database_path)
    documents = _validate_mongodb_output(migration_output, source_pokemon, source_types)
    collection_name = _destination_name("pokemon_migration")
    client = MongoClient(uri, serverSelectionTimeoutMS=5000)
    try:
        client.admin.command("ping")
        collection = client[database_name][collection_name]
        collection.insert_many(documents, ordered=True)
        actual = list(collection.find({}, {"_id": 1, "name": 1, "height": 1, "weight": 1, "sprite_url": 1, "types": 1}).sort("_id", 1))
        if actual != documents:
            raise RuntimeError("MongoDB migration validation failed; the new collection was retained for inspection")
    finally:
        client.close()
    return {"target": "mongodb", "database": database_name, "destination": collection_name,
            "pokemon_count": len(source_pokemon), "type_count": len(source_types)}


def migrate_to_mariadb(
    database_path: str | Path = DEFAULT_DATABASE_PATH,
    *,
    migration_output: Any,
) -> dict[str, Any]:
    """Write AI-validated rows to fresh MariaDB tables, then verify their readback."""
    source_pokemon, source_types = _read_source(database_path)
    pokemon, types = _validate_postgresql_output(migration_output, source_pokemon, source_types)
    destination = _destination_name("pokemon_migration")
    pokemon_table = f"{destination}_pokemon"
    types_table = f"{destination}_pokemon_types"
    connection = _connect_mariadb()
    created_tables: list[str] = []
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                f"CREATE TABLE `{pokemon_table}` ("
                "id INTEGER PRIMARY KEY, name VARCHAR(255) NOT NULL UNIQUE, "
                "height INTEGER NOT NULL, weight INTEGER NOT NULL, sprite_url TEXT NULL) ENGINE=InnoDB"
            )
            created_tables.append(pokemon_table)
            cursor.execute(
                f"CREATE TABLE `{types_table}` ("
                "pokemon_id INTEGER NOT NULL, slot INTEGER NOT NULL, type_name VARCHAR(64) NOT NULL, "
                "PRIMARY KEY (pokemon_id, slot), UNIQUE (pokemon_id, type_name), "
                f"FOREIGN KEY (pokemon_id) REFERENCES `{pokemon_table}`(id) ON DELETE CASCADE) ENGINE=InnoDB"
            )
            created_tables.append(types_table)
            cursor.executemany(
                f"INSERT INTO `{pokemon_table}` (id, name, height, weight, sprite_url) VALUES (%s, %s, %s, %s, %s)",
                [(row["id"], row["name"], row["height"], row["weight"], row["sprite_url"]) for row in pokemon],
            )
            cursor.executemany(
                f"INSERT INTO `{types_table}` (pokemon_id, slot, type_name) VALUES (%s, %s, %s)",
                [(row["pokemon_id"], row["slot"], row["type_name"]) for row in types],
            )
            cursor.execute(f"SELECT id, name, height, weight, sprite_url FROM `{pokemon_table}` ORDER BY id")
            target_pokemon = cursor.fetchall()
            cursor.execute(f"SELECT pokemon_id, slot, type_name FROM `{types_table}` ORDER BY pokemon_id, slot")
            target_types = cursor.fetchall()
        if target_pokemon != pokemon or target_types != types:
            raise RuntimeError("MariaDB migration validation failed")
        connection.commit()
    except Exception:
        connection.rollback()
        if created_tables:
            with connection.cursor() as cursor:
                for table in reversed(created_tables):
                    cursor.execute(f"DROP TABLE IF EXISTS `{table}`")
            connection.commit()
        raise
    finally:
        connection.close()
    return {"target": "mariadb", "database": os.environ.get("MARIADB_DATABASE", "pokemon_migrator"),
            "destination": destination, "pokemon_count": len(pokemon), "type_count": len(types)}


def read_postgresql_migration(schema: str) -> dict[str, list[dict[str, Any]]]:
    """Read back one generated migration schema without accepting arbitrary identifiers."""
    schema = _validate_migration_name(schema)
    with psycopg.connect(DEFAULT_POSTGRESQL_CONNINFO) as connection:
        pokemon = [dict(zip(("id", "name", "height", "weight", "sprite_url"), row))
                   for row in connection.execute(
                       sql.SQL("SELECT id, name, height, weight, sprite_url FROM {}.pokemon ORDER BY id")
                       .format(sql.Identifier(schema))).fetchall()]
        pokemon_types = [dict(zip(("pokemon_id", "slot", "type_name"), row))
                         for row in connection.execute(
                             sql.SQL("SELECT pokemon_id, slot, type_name FROM {}.pokemon_types ORDER BY pokemon_id, slot")
                             .format(sql.Identifier(schema))).fetchall()]
    return {"pokemon": pokemon, "pokemon_types": pokemon_types}


def read_mongodb_migration(collection_name: str) -> dict[str, list[dict[str, Any]]]:
    """Read back one generated migration collection from the fixed local database."""
    collection_name = _validate_migration_name(collection_name)
    client = MongoClient(DEFAULT_MONGODB_URI, serverSelectionTimeoutMS=5000)
    try:
        client.admin.command("ping")
        documents = list(client["pokemon_migrator"][collection_name].find(
            {}, {"_id": 1, "name": 1, "height": 1, "weight": 1, "sprite_url": 1, "types": 1}
        ).sort("_id", 1))
    finally:
        client.close()
    pokemon = [{"id": row["_id"], "name": row["name"], "height": row["height"],
                "weight": row["weight"], "sprite_url": row.get("sprite_url")}
               for row in documents]
    pokemon_types = [{"pokemon_id": row["_id"], "slot": item["slot"], "type_name": item["name"]}
                     for row in documents for item in row.get("types", [])]
    return {"pokemon": pokemon, "pokemon_types": pokemon_types}


def read_mariadb_migration(destination: str) -> dict[str, list[dict[str, Any]]]:
    """Read one verified generated MariaDB table pair."""
    destination = _validate_migration_name(destination)
    connection = _connect_mariadb()
    try:
        with connection.cursor() as cursor:
            cursor.execute(
                f"SELECT id, name, height, weight, sprite_url FROM `{destination}_pokemon` ORDER BY id"
            )
            pokemon = cursor.fetchall()
            cursor.execute(
                f"SELECT pokemon_id, slot, type_name FROM `{destination}_pokemon_types` ORDER BY pokemon_id, slot"
            )
            pokemon_types = cursor.fetchall()
        return {"pokemon": pokemon, "pokemon_types": pokemon_types}
    finally:
        connection.close()


