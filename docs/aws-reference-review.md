# Reuse AWS migration patterns without weakening validation

The [AWS DB Migration AI-DLC sample](https://github.com/aws-samples/sample-dbmig-aidlc) is a useful architectural reference, not a drop-in replacement for browser-generated migration records. Its [MIT-0 license](https://github.com/aws-samples/sample-dbmig-aidlc/blob/main/LICENSE) permits copying and adaptation. No code has been cloned, installed, executed, or copied into our application in this phase.

## Patterns worth adapting after the isolated model probe

| Upstream area | Applicable pattern | Required adaptation |
|---|---|---|
| `scripts/dbmig/engines/base.py`, `registry.py` | Explicit adapter contracts and engine registration | Keep PostgreSQL, MariaDB and MongoDB validation/write/readback capabilities separate. |
| `engines/base.py::batch_by_size` | Ordered batches bounded by count and source bytes | Measure tokens as well; do not infer that a small byte count guarantees exact AI output. |
| `manifest.py`, `followup.py` | Durable evidence manifest and deduplicated failure ledger | Bind evidence to source snapshot, model, prompt contract, target and record IDs; avoid secrets/raw environment values. |

These are proposals, not implemented checkpoints or a new execution framework. Our independent per-ID/value comparison and no-write rejection must remain authoritative.

## Important incompatibilities

- Upstream registry lists Oracle, SQL Server, PostgreSQL and MySQL, not dedicated MongoDB/MariaDB adapters.
- Upstream agent-driven schema/code conversion uses Kiro-oriented workflows, not our browser WebLLM execution. The Python toolkit itself does not call an LLM API.
- `commands/compare.py` compares row counts, not every record value. Equal counts would miss `caterpie` becoming `cicada`; silent-mode mismatches can return success. Do not copy that as our acceptance gate.
- Its development/test/PoC and AWS DMS handoff caveats do not establish production readiness here. Cloud services and agent tools can have costs; adopting them is not authorized by this review.

## Proposed sequence

1. Retain the real isolated WebLLM report before further prompt changes.
2. Compare what already exists in `migration_service.py` with a minimal adapter interface; avoid importing an entire framework for three backends.
3. Specify manifest fields and rejection invariants before implementing restart/checkpoint behavior.
4. Test missing/altered values, partial writes and rejected-command source hashes for each adapter; counts alone never pass a migration.

Changing from AI-generated records to AI-generated mappings plus deterministic transfer would change the user's existing requirement and needs a separate explicit decision. Reviewing this sample does not authorize that change.

Research used anonymous public primary sources. Upstream branch contents are mutable; recheck the license and exact revision before any future code copying.
