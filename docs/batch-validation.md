# Validate model batches without writing data

POST `/api/validate-batch` checks model-produced records against the actual SQLite
source. It never connects to a target database or repairs submitted records.
Feedback can include bounded expected source values and missing records as
diagnostic text; no repaired migration payload is returned. Final `/api/migrate`
validation remains authoritative.

## Request and response

Send exactly `{target, ids, migration}` as JSON with the same-origin `Origin`
header. Targets are `postgresql`, `mongodb`, and `mariadb`. IDs must be a nonempty
array of at most five distinct positive integers present in SQLite; booleans,
floating-point numbers, strings, and unknown IDs are rejected.

Valid output returns HTTP 200 with `{"valid":true,"errors":[]}`. Malformed model
content (including null) returns HTTP 200 with `valid:false` and at most 20 errors:

```json
{"valid":false,"errors":[{"path":"$.migration.pokemon[0].height","code":"type","message":"Expected JSON integer. Preserve the source value exactly: 7."}]}
```

Invalid envelopes or IDs return 400. Origin, MIME, and size protections use the
same guard path as `/api/migrate`: 403, 415, and 413 respectively. The size limit
is 2 MiB. Source read failures return 500. Error HTTP responses use the existing
server HTML error format, not model correction feedback.

## What is checked

SQL targets require exactly `pokemon` and `pokemon_types` arrays. Pokémon fields
are `id`, `name`, `height`, `weight`, `sprite_url`; relations contain `pokemon_id`,
`slot`, `type_name`. MongoDB requires only `pokemon`, with `_id` replacing `id`
and embedded `types` containing exactly `slot` and `name`.

Every value and its exact type must match SQLite (including nullable sprites).
Missing/extra fields and rows, duplicate identifiers, and changed relations are
rejected. Row ordering is ignored; relations are matched by slot, not array
position. Slots cannot be reassigned to another type. No coercion is performed.

Diagnostics use `type`, `value`, `missing_field`, `extra_field`, `duplicate_row`,
`missing_row`, or `extra_row`. Paths identify submitted fields/indices; missing
rows point to their array with identifying keys in the message. Diagnostics
stop at 20; further errors may remain. Messages may supply bounded expected
values as feedback for the model, but never modify or silently replace output.

## Verification

Run `.venv/bin/python -m unittest tests.test_batch_validation -v`, then
`.venv/bin/python -m unittest tests.test_pokemon_ui -v`. HTTP tests use temporary
SQLite fixtures, hash the source around requests, and mock all three target
migrators. Real browser inference and independent untrusted-input verification
remain separate acceptance gates.
