# AI generation with an independent persistence boundary

```text
PokéAPI seed -> SQLite fixture -> browser model -> target-format JSON
                                                    |
                                        read-only Python batch validation
                                                    |
                                      bounded AI corrections/recovery
                                                    |
                                       complete-source Python validation
                                                    |
                                    new isolated database destination
                                                    |
                                      readback compared with source
```

- `pokemon_db.py` seeds a repeatable public-data fixture; generated files are ignored.
- `static/model_loader.js` loads WebLLM and the selected model only on user action.
- `static/migration.js` supplies prompts/structural schemas, bounded model attempts,
  no-write pilots and diagnostic downloads. AI output remains untrusted.
- `batch_validation.py` compares batches against the actual source without writing
  to targets. It does not synthesize replacement model records.
- `pokemon_ui.py` binds to loopback, checks request origin/type/size, serves the UI
  and routes validation/persistence requests to Python.
- `migration_service.py` validates complete output before connecting to a target,
  writes to fresh destination names and checks readback. SQL output is relational;
  MongoDB documents use `_id` with embedded type objects.
- `webllm_probe.py` and `diagnostics/` form a separate, database-free runtime probe.

Schemas constrain shape, not exact source names through enums or constants.
Exact field values, relationships and completeness are independently checked by
Python. Rejected output must not silently overwrite or fill data from the source.
No model-generated SQL, shell commands or executable code are evaluated.

## Scope and operational limits

This is a local development prototype, not an authenticated multi-user server.
Do not expose its ports publicly. Database credentials are supplied server-side,
outside Git; model weights use browser-managed storage. Loopback/origin guards
do not replace a production authentication or network-security design.

PostgreSQL transaction handling, MariaDB DDL cleanup and MongoDB collection writes
have different failure semantics. In particular, MongoDB persistence does not
provide a cross-database rollback guarantee. Existing destination data is not
intentionally overwritten. Snapshot real databases before adapting the prototype
for non-fixture data.
