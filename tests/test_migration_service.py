import os
import sqlite3
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from migration_service import (
    migrate_to_mongodb,
    migrate_to_postgresql,
    read_mongodb_migration,
    migrate_to_mariadb,
    read_mariadb_migration,
    read_postgresql_migration,
)


class MigrationServiceTests(unittest.TestCase):
    def setUp(self):
        self.temp_dir = tempfile.TemporaryDirectory()
        self.source = Path(self.temp_dir.name) / "source.sqlite3"
        with sqlite3.connect(self.source) as connection:
            connection.executescript(
                """
                CREATE TABLE pokemon (
                    id INTEGER PRIMARY KEY, name TEXT NOT NULL UNIQUE,
                    height INTEGER NOT NULL, weight INTEGER NOT NULL, sprite_url TEXT
                );
                CREATE TABLE pokemon_types (
                    pokemon_id INTEGER NOT NULL, slot INTEGER NOT NULL,
                    type_name TEXT NOT NULL, PRIMARY KEY (pokemon_id, slot),
                    FOREIGN KEY (pokemon_id) REFERENCES pokemon(id)
                );
                INSERT INTO pokemon VALUES
                    (1, 'bulbasaur', 7, 69, 'https://img.test/1.png'),
                    (2, 'ditto', 3, 40, NULL);
                INSERT INTO pokemon_types VALUES
                    (1, 1, 'grass'), (1, 2, 'poison'), (2, 1, 'normal');
                """
            )

    def postgresql_output(self):
        return {
            "pokemon": [
                {"id": 1, "name": "bulbasaur", "height": 7, "weight": 69, "sprite_url": "https://img.test/1.png"},
                {"id": 2, "name": "ditto", "height": 3, "weight": 40, "sprite_url": None},
            ],
            "pokemon_types": [
                {"pokemon_id": 1, "slot": 1, "type_name": "grass"},
                {"pokemon_id": 1, "slot": 2, "type_name": "poison"},
                {"pokemon_id": 2, "slot": 1, "type_name": "normal"},
            ],
        }

    def mongodb_output(self):
        return {"pokemon": [
            {"_id": 1, "name": "bulbasaur", "height": 7, "weight": 69,
             "sprite_url": "https://img.test/1.png", "types": [
                 {"slot": 1, "name": "grass"}, {"slot": 2, "name": "poison"}]},
            {"_id": 2, "name": "ditto", "height": 3, "weight": 40,
             "sprite_url": None, "types": [{"slot": 1, "name": "normal"}]},
        ]}

    def test_invalid_ai_output_is_rejected_before_opening_mongodb(self):
        invalid = self.mongodb_output()
        invalid["pokemon"].pop()
        with patch("migration_service.MongoClient") as mongo_client:
            with self.assertRaisesRegex(ValueError, "source Pokémon records"):
                migrate_to_mongodb(self.source, uri="mongodb://unused", migration_output=invalid)
        mongo_client.assert_not_called()

    def test_invalid_ai_output_is_rejected_before_opening_postgresql(self):
        invalid = self.postgresql_output()
        invalid["pokemon_types"].pop()
        with patch("migration_service.psycopg.connect") as connect:
            with self.assertRaisesRegex(ValueError, "source records"):
                migrate_to_postgresql(self.source, migration_output=invalid)
        connect.assert_not_called()

    def test_invalid_ai_output_is_rejected_before_opening_mariadb(self):
        invalid = self.postgresql_output()
        invalid["pokemon"].pop()
        with patch("migration_service._connect_mariadb") as connect:
            with self.assertRaisesRegex(ValueError, "source records"):
                migrate_to_mariadb(self.source, migration_output=invalid)
        connect.assert_not_called()

    def test_mariadb_creates_isolated_tables_and_verifies_readback(self):
        expected = self.postgresql_output()
        connection = FakeMariaConnection(expected)
        with patch("migration_service._connect_mariadb", return_value=connection):
            result = migrate_to_mariadb(self.source, migration_output=expected)

        self.assertEqual(result["target"], "mariadb")
        self.assertTrue(result["destination"].startswith("pokemon_migration_"))
        self.assertTrue(connection.committed)
        self.assertTrue(connection.closed)
        statements = " ".join(connection.statements)
        self.assertIn(f"`{result['destination']}_pokemon`", statements)
        self.assertIn(f"`{result['destination']}_pokemon_types`", statements)

    @unittest.skipUnless(os.environ.get("MARIADB_TEST"), "set MARIADB_TEST for the isolated MariaDB integration test")
    def test_mariadb_persists_and_reads_an_isolated_table_pair(self):
        from migration_service import _connect_mariadb

        expected = self.postgresql_output()
        result = migrate_to_mariadb(self.source, migration_output=expected)
        try:
            self.assertEqual(read_mariadb_migration(result["destination"]), expected)
        finally:
            connection = _connect_mariadb()
            try:
                with connection.cursor() as cursor:
                    cursor.execute(f"DROP TABLE IF EXISTS `{result['destination']}_pokemon_types`")
                    cursor.execute(f"DROP TABLE IF EXISTS `{result['destination']}_pokemon`")
                connection.commit()
            finally:
                connection.close()
    def tearDown(self):
        self.temp_dir.cleanup()

    def test_mongodb_creates_a_new_collection_and_embeds_types(self):
        client = FakeMongoClient()
        with patch("migration_service.MongoClient", return_value=client):
            result = migrate_to_mongodb(self.source, uri="mongodb://unused", migration_output=self.mongodb_output())

        self.assertEqual(result["pokemon_count"], 2)
        self.assertEqual(result["type_count"], 3)
        collection = client.database.collections[result["destination"]]
        self.assertEqual(collection.documents[0]["_id"], 1)
        self.assertEqual(collection.documents[0]["types"], [
            {"slot": 1, "name": "grass"}, {"slot": 2, "name": "poison"}
        ])
        self.assertEqual(collection.documents[1]["sprite_url"], None)
        self.assertTrue(client.closed)

    def test_mongodb_readback_loads_only_the_named_migration_collection(self):
        client = FakeMongoClient()
        with patch("migration_service.MongoClient", return_value=client):
            result = migrate_to_mongodb(self.source, uri="mongodb://unused", migration_output=self.mongodb_output())
            migrated = read_mongodb_migration(result["destination"])

        self.assertEqual(migrated["pokemon"], self.postgresql_output()["pokemon"])
        self.assertEqual(migrated["pokemon_types"], self.postgresql_output()["pokemon_types"])
        self.assertTrue(client.closed)

    def test_mongodb_default_uses_local_wsl_mongodb(self):
        client = FakeMongoClient()
        with patch("migration_service.MongoClient", return_value=client) as mongo_client:
            migrate_to_mongodb(self.source, migration_output=self.mongodb_output())

        mongo_client.assert_called_once_with(
            "mongodb://127.0.0.1:27017", serverSelectionTimeoutMS=5000
        )
    @unittest.skipUnless(os.environ.get("MONGO_TEST_URI"), "set MONGO_TEST_URI for isolated MongoDB integration test")
    def test_mongodb_migrates_into_and_removes_an_isolated_database(self):
        from pymongo import MongoClient
        import secrets

        uri = os.environ["MONGO_TEST_URI"]
        database_name = f"pokemon_migration_test_{secrets.token_hex(8)}"
        result = migrate_to_mongodb(self.source, uri=uri, database_name=database_name, migration_output=self.mongodb_output())
        client = MongoClient(uri, serverSelectionTimeoutMS=3000)
        try:
            documents = list(client[database_name][result["destination"]].find().sort("_id", 1))
            self.assertEqual(result["pokemon_count"], 2)
            self.assertEqual(documents, self.mongodb_output()["pokemon"])
            self.assertEqual(result["type_count"], 3)
            self.assertEqual(documents[0]["types"], [
                {"slot": 1, "name": "grass"}, {"slot": 2, "name": "poison"}
            ])
            self.assertEqual(documents[1]["name"], "ditto")
        finally:
            client.drop_database(database_name)
            client.close()
    @unittest.skipUnless(os.environ.get("PG_TEST_DSN"), "set PG_TEST_DSN for isolated PostgreSQL integration test")
    def test_postgresql_creates_isolated_schema_and_copies_rows(self):
        import psycopg
        from psycopg import sql

        result = migrate_to_postgresql(self.source, conninfo=os.environ["PG_TEST_DSN"], migration_output=self.postgresql_output())
        schema = result["destination"]
        try:
            with psycopg.connect(os.environ["PG_TEST_DSN"]) as connection:
                pokemon_count = connection.execute(
                    sql.SQL("SELECT COUNT(*) FROM {}.pokemon").format(sql.Identifier(schema))
                ).fetchone()[0]
                type_count = connection.execute(
                    sql.SQL("SELECT COUNT(*) FROM {}.pokemon_types").format(sql.Identifier(schema))
                ).fetchone()[0]
            self.assertEqual((pokemon_count, type_count), (2, 3))
            self.assertEqual(result["pokemon_count"], 2)
        finally:
            with psycopg.connect(os.environ["PG_TEST_DSN"]) as connection:
                connection.execute(sql.SQL("DROP SCHEMA {} CASCADE").format(sql.Identifier(schema)))


class FakeMongoCollection:
    def __init__(self):
        self.documents = []

    def insert_many(self, documents, ordered=True):
        self.documents.extend(documents)

    def count_documents(self, query):
        return len(self.documents)

    def find(self, query, projection):
        return FakeMongoCursor(self.documents)


class FakeMongoCursor:
    def __init__(self, documents):
        self.documents = list(documents)

    def sort(self, key, direction=1):
        self.documents.sort(key=lambda item: item[key], reverse=direction < 0)
        return self.documents


class FakeMongoAdmin:
    def command(self, name):
        return {"ok": 1}


class FakeMongoDatabase:
    def __init__(self):
        self.collections = {}

    def list_collection_names(self):
        return list(self.collections)

    def __getitem__(self, name):
        return self.collections.setdefault(name, FakeMongoCollection())


class FakeMongoClient:
    def __init__(self):
        self.database = FakeMongoDatabase()
        self.admin = FakeMongoAdmin()
        self.closed = False

    def __getitem__(self, name):
        return self.database

    def close(self):
        self.closed = True


class FakeMariaCursor:
    def __init__(self, connection):
        self.connection = connection
        self.rows = []

    def __enter__(self):
        return self

    def __exit__(self, *_args):
        return False

    def execute(self, statement, _params=None):
        self.connection.statements.append(statement)
        if statement.startswith("SELECT id,"):
            self.rows = self.connection.expected["pokemon"]
        elif statement.startswith("SELECT pokemon_id,"):
            self.rows = self.connection.expected["pokemon_types"]

    def executemany(self, statement, _rows):
        self.connection.statements.append(statement)

    def fetchall(self):
        return self.rows


class FakeMariaConnection:
    def __init__(self, expected):
        self.expected = expected
        self.statements = []
        self.committed = False
        self.closed = False

    def cursor(self):
        return FakeMariaCursor(self)

    def commit(self):
        self.committed = True

    def rollback(self):
        pass

    def close(self):
        self.closed = True


if __name__ == "__main__":
    unittest.main()








