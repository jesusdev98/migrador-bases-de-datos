# Verify a change and preserve a recovery point

## Deterministic checks

```sh
python -m unittest discover -s tests -v
node --test tests/test_migration_browser.cjs tests/test_model_loader.cjs tests/test_webllm_probe.cjs
```

Node.js is used for browser-orchestration tests, not server-side inference.
Live integrations are opt-in: `PG_TEST_DSN`, `MONGO_TEST_URI`, and `MARIADB_TEST`.
MariaDB also requires its connection environment variables. Tests create isolated
schemas, collections/databases or table pairs and clean up their own test data.
Do not point integration tests at important datasets or overprivileged accounts.

## Real browser checks

1. Load Llama explicitly and test ID 10 without writes for the chosen target.
2. Test up to five records starting at IDs 1 and 6; retain diagnostic reports locally.
3. Only then launch a full fixture migration explicitly.
4. Read back the exact destination and compare all values/relations, not just counts.

See [status](status.md) for real runs already observed and [model diagnostics](model-diagnostics.md)
for the bounded retry/recovery policy. Mocks cannot prove model fidelity.

## Git recovery

The initial commit captures the current implementation before the planned
MongoDB-specific missing-record recovery change. Keep subsequent behavior changes
in separate commits with their tests and docs.

Inspect history with `git log --oneline` and a change with `git show <commit>`.
To inspect an older version without overwriting current work, use a separate
worktree, for example `git worktree add --detach ../migrator-baseline <commit>`.
Code rollback does not undo destination database writes. Do not run destructive
resets or force-push just to inspect an earlier commit.

## Public repository hygiene

Do not commit `.env` files, secrets, model assets, generated databases/exports,
downloaded diagnostic reports, or internal conversation/recovery notes. The
`.gitignore` protects common local paths; explicit staging and a staged-file scan
are still required before publication. Never publish credentials to make a clone
immediately runnable; document environment variable names instead.
