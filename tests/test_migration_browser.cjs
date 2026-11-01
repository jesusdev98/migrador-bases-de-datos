const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const script = fs.readFileSync(path.join(__dirname, '../static/migration.js'), 'utf8').replace(/^import .*;\s*/, '');
const source = { pokemon: [{ id: 1, name: 'bulbasaur', height: 7, weight: 69, sprite_url: null }], pokemon_types: [{ pokemon_id: 1, slot: 1, type_name: 'grass' }] };
function output(target) {
  return target === 'mongodb' ? { pokemon: [{ _id: 1, name: 'bulbasaur', height: 7, weight: 69, sprite_url: null, types: [{ slot: 1, name: 'grass' }] }] } : source;
}
function harness({ target = 'postgresql', replies = [], validations = [], loaded = true, rows = source, resetFailure = false } = {}) {
  const elements = [];
  function element() {
    const e = { disabled: false, textContent: '', dataset: {}, click() {}, addEventListener(k, fn) { this[k] = fn; }, appendChild(child) { elements.push(child); }, remove() {}, setAttribute() {}, insertAdjacentElement(_, child) { elements.push(child); } };
    return e;
  }
  const status = element(), button = element(), select = element();
  button.dataset.target = target; select.value = 'selected-model';
  const calls = [], prompts = [], blobs = [], revoked = [], states = [], resets = [];
  const engine = { async resetChat() { resets.push('reset'); if (resetFailure) throw new Error('Reset failed'); }, chat: { completions: { async create(request) {
    prompts.push(request); states.push(status.textContent);
    const reply = replies.shift() ?? JSON.stringify(output(target));
    if (reply instanceof Error) throw reply;
    return typeof reply === 'string' ? { choices: [{ message: { content: reply }, finish_reason: 'stop' }], usage: { completion_tokens: 42 } } : reply;
  } } } };
  const context = { document: { querySelector: s => s === '#migration-status' ? status : select, querySelectorAll: s => s === '.migrate-target' ? [button] : [select], createElement: () => element(), body: { appendChild() {} } }, window: { open: () => null }, getLoadedEngine: () => loaded ? engine : null, URLSearchParams, Blob, URL: { createObjectURL(blob) { blobs.push(blob); return 'blob:test'; }, revokeObjectURL(url) { revoked.push(url); } }, setTimeout: fn => fn(), console,
    fetch: async (url, options) => {
      calls.push({ url, body: options?.body && JSON.parse(options.body) }); states.push(status.textContent);
      if (url === '/api/source') return { ok: true, json: async () => rows };
      if (url === '/api/validate-batch') {
        const value = validations.shift() ?? { valid: true, errors: [] };
        if (value instanceof Error) throw value;
        return { ok: true, status: 200, json: async () => value };
      }
      return { ok: true, json: async () => ({ target, destination: 'test', pokemon_count: rows.pokemon.length, type_count: 1 }) };
    } };
  vm.runInNewContext(script, context);
  const label = target === 'postgresql' ? 'PostgreSQL' : target === 'mongodb' ? 'MongoDB' : 'MariaDB';
  return { run: () => button.click(), pilot: () => elements.find(e => e.textContent === `Test one Pokémon for ${label} (no writes)`).click(), batchPilot: () => elements.find(e => e.textContent === `Test up to five Pokémon for ${label} (no writes)`).click(), setPilotId: id => { elements.find(e => e.id === 'pilot-pokemon-id').value = String(id); }, calls, prompts, resets, status, states, elements, blobs, revoked, button, select };
}
const writes = h => h.calls.filter(c => c.url === '/api/migrate');
for (const target of ['postgresql','mariadb','mongodb']) test(`${target} uses explicit structural schema and reset for every completion`, async () => {
  const h = harness({ target, replies: ['bad'] }); await h.pilot();
  assert.equal(h.resets.length, h.prompts.length);
  for (const request of h.prompts) {
    assert.equal(request.stream, false);
    assert.equal(request.response_format.type, 'json_object');
    const schema = JSON.parse(request.response_format.schema);
    assert.equal(schema.type, 'object'); assert.equal(schema.additionalProperties, false);
    assert.equal(schema.properties.pokemon.type, 'array');
    assert.ok(!/"const"|"enum"|caterpie|bulbasaur/.test(request.response_format.schema));
    if (target === 'mongodb') assert.equal(schema.properties.pokemon.items.properties.types.type, 'array');
    else assert.equal(schema.properties.pokemon_types.type, 'array');
  }
});
test('reset failure stops before inference or target write', async () => {
  const h = harness({ resetFailure: true }); await h.run();
  assert.equal(h.resets.length, 1); assert.equal(h.prompts.length, 0); assert.equal(writes(h).length, 0);
  assert.equal(h.button.disabled, false);
});
for (const target of ['postgresql','mariadb','mongodb']) test(`${target} bounded pilot selects five starting at chosen ID and never writes`, async () => {
  const rows = { pokemon: Array.from({ length: 8 }, (_, i) => ({ ...source.pokemon[0], id: i + 1 })),
    pokemon_types: Array.from({ length: 8 }, (_, i) => ({ pokemon_id: i + 1, slot: 1, type_name: 'grass' })) };
  const selected = { pokemon: rows.pokemon.slice(2,7), pokemon_types: rows.pokemon_types.slice(2,7) };
  const expected = target === 'mongodb' ? { pokemon: selected.pokemon.map(({ id, ...row }) => ({ _id: id, ...row, types: [{ slot: 1, name: 'grass' }] })) } : selected;
  const h = harness({ target, rows, replies: [JSON.stringify(expected)] }); h.setPilotId(3); await h.batchPilot();
  assert.deepEqual(JSON.parse(h.prompts[0].messages[1].content), selected);
  assert.deepEqual(h.calls[1].body.ids, [3,4,5,6,7]);
  assert.equal(writes(h).length, 0); assert.match(h.status.textContent, /5 Pokémon/);
});
test('bounded pilot handles the last source record without inventing padding records', async () => {
  const h = harness(); await h.batchPilot();
  assert.equal(h.prompts.length, 1);
  assert.deepEqual(h.calls[1].body.ids, [1]);
  assert.equal(writes(h).length, 0);
  assert.match(h.status.textContent, /1 Pokémon/);
});
test('bounded pilot without a loaded model does not read source or generate', async () => {
  const h = harness({ loaded: false }); await h.batchPilot();
  assert.equal(h.calls.length, 0); assert.equal(h.prompts.length, 0);
});
test('bounded pilot exhausted attempts never submit a target write', async () => {
  const h = harness({ replies: ['bad','bad','bad'] }); await h.batchPilot();
  assert.equal(h.prompts.length, 3); assert.equal(h.resets.length, 3);
  assert.equal(writes(h).length, 0); assert.equal(h.button.disabled, false);
});
test('PostgreSQL and MariaDB use identical model instructions and source for the same input', async () => {
  const pg = harness({ target: 'postgresql' }), maria = harness({ target: 'mariadb' });
  await pg.pilot(); await maria.pilot();
  assert.equal(JSON.stringify(pg.prompts[0]), JSON.stringify(maria.prompts[0]));
  assert.equal(pg.calls[1].body.target, 'postgresql');
  assert.equal(maria.calls[1].body.target, 'mariadb');
});
test('full migration retains validated AI rows and regenerates only rejected record then revalidates merge', async () => {
  const second = { ...source.pokemon[0], id: 10, name: 'caterpie' };
  const rows = { pokemon: [...source.pokemon, second], pokemon_types: [...source.pokemon_types, { pokemon_id: 10, slot: 1, type_name: 'bug' }] };
  const bad = JSON.parse(JSON.stringify(rows)); bad.pokemon[1].name = 'cicada';
  const failure = { valid: false, errors: [{ path: '$.migration.pokemon[1].name', code: 'value', message: 'Preserve caterpie.' }] };
  const singletonFailure = { valid: false, errors: [{ path: '$.migration.pokemon[0].name', code: 'value', message: 'Preserve caterpie.' }] };
  const good = { pokemon: [second], pokemon_types: [rows.pokemon_types[1]] };
  const h = harness({ rows, replies: [JSON.stringify(bad), JSON.stringify(bad), JSON.stringify(bad), JSON.stringify(good)], validations: [failure, failure, failure, { valid: true, errors: [] }, singletonFailure] });
  await h.run();
  assert.equal(h.prompts.length, 4);
  assert.deepEqual(JSON.parse(h.prompts[3].messages[1].content), good);
  const checks = h.calls.filter(c => c.url === '/api/validate-batch');
  assert.deepEqual(checks.map(c => c.body.ids), [[1,10],[1,10],[1,10],[1],[10],[10],[1,10]]);
  assert.deepEqual(checks.at(-1).body.migration, rows);
  assert.deepEqual(writes(h)[0].body.migration, rows);
});
test('exhausted singleton recovery is bounded and never writes', async () => {
  const rows = { pokemon: [source.pokemon[0], { ...source.pokemon[0], id: 2 }], pokemon_types: [] };
  const failure = { valid: false, errors: [{ path: '$', code: 'value', message: 'Wrong value.' }] };
  const h = harness({ rows, replies: Array(3).fill(JSON.stringify(rows)).concat(['bad','bad','bad']), validations: Array(4).fill(failure) });
  await h.run();
  assert.equal(h.prompts.length, 6); assert.equal(writes(h).length, 0);
  assert.match(h.status.textContent, /after 3 attempts/);
});
test('duplicate identities never enter selective recovery', async () => {
  const rows = { pokemon: [source.pokemon[0], { ...source.pokemon[0], id: 2 }], pokemon_types: [] };
  const bad = { pokemon: [source.pokemon[0], source.pokemon[0]], pokemon_types: [] };
  const failure = { valid: false, errors: [{ path: '$', code: 'duplicate_row', message: 'Duplicate ID.' }] };
  const h = harness({ rows, replies: Array(3).fill(JSON.stringify(bad)), validations: Array(3).fill(failure) });
  await h.run(); assert.equal(h.prompts.length, 3);
  assert.equal(h.calls.filter(c => c.url === '/api/validate-batch').length, 3);
  assert.equal(writes(h).length, 0);
});
for (const target of ['postgresql', 'mongodb', 'mariadb']) test(`${target} orders validated AI records for final validation without replacing values`, async () => {
  const rows = { pokemon: [source.pokemon[0], { ...source.pokemon[0], id: 2, name: 'ivysaur' }],
    pokemon_types: [...source.pokemon_types, { pokemon_id: 1, slot: 2, type_name: 'poison' }] };
  const expected = target === 'mongodb' ? { pokemon: rows.pokemon.map(({ id, ...row }) => ({
    _id: id, ...row, types: rows.pokemon_types.filter(t => t.pokemon_id === id).map(t => ({ slot: t.slot, name: t.type_name })),
  })) } : rows;
  const shuffled = JSON.parse(JSON.stringify(expected));
  shuffled.pokemon.reverse();
  if (target === 'mongodb') shuffled.pokemon.forEach(row => row.types.reverse());
  else shuffled.pokemon_types.reverse();
  const h = harness({ target, rows, replies: [JSON.stringify(shuffled)] });
  await h.run();
  assert.deepEqual(h.calls[1].body.migration, shuffled);
  assert.equal(h.prompts.length, 1);
  assert.deepEqual(writes(h)[0].body.migration, expected);
});
for (const target of ['postgresql', 'mongodb', 'mariadb']) test(`preserves ${target} successful output and validates exact envelope`, async () => {
  const h = harness({ target, replies: ['```json\n' + JSON.stringify(output(target)) + '\n```'] }); await h.run();
  assert.deepEqual(h.calls.map(c => c.url), ['/api/source', '/api/validate-batch', '/api/migrate']);
  assert.deepEqual(h.calls[1].body, { target, ids: [1], migration: output(target) });
  assert.deepEqual(writes(h)[0].body, { target, migration: output(target) });
  assert.match(h.status.textContent, /Migration complete/); assert.equal(h.select.disabled, false);
});
test('no loaded model makes no requests', async () => {
  const h = harness({ loaded: false }); await h.run(); assert.equal(h.calls.length, 0); assert.equal(h.prompts.length, 0); assert.match(h.status.textContent, /Load a model/);
});
test('MongoDB mapping instructions survive all corrections without transforming the source locally', async () => {
  const h = harness({ target: 'mongodb', replies: ['invalid', 'invalid', 'invalid'] });
  await h.pilot();
  assert.equal(h.prompts.length, 3);
  for (const prompt of h.prompts) {
    const instruction = prompt.messages[0].content;
    assert.match(instruction, /Rename each source id field to _id/);
    assert.match(instruction, /Do not keep an id field/);
    assert.match(instruction, /match pokemon_id to that Pokémon's source id/);
    assert.match(instruction, /type_name to name/);
    assert.match(instruction, /Do not return pokemon_types/);
    assert.deepEqual(JSON.parse(prompt.messages[1].content), source);
  }
  assert.equal(writes(h).length, 0);
});
for (const target of ['postgresql', 'mongodb', 'mariadb']) test(`${target} states root skeleton and singleton array rule on every attempt`, async () => {
  const h = harness({ target, replies: ['invalid'] }); await h.run();
  const skeleton = target === 'mongodb' ? '{"pokemon":[]}' : '{"pokemon":[],"pokemon_types":[]}';
  for (const prompt of h.prompts) {
    assert.ok(prompt.messages[0].content.includes(skeleton));
    assert.match(prompt.messages[0].content, /arrays even for one record/);
    assert.match(prompt.messages[0].content, /Do not return a root array/);
  }
});
test('prompt describes fields without a null sprite example and preserves source URL instructions', async () => {
  const h = harness(); await h.run();
  const instructions = h.prompts[0].messages[0].content;
  assert.ok(!instructions.includes('"sprite_url":null'));
  assert.match(instructions, /Copy every sprite_url verbatim/);
  assert.match(instructions, /Include every source type relation/);
});
for (const bad of ['{broken', 'null', '3', '{"pokemon":[]}']) test(`corrects ${bad} with original input and actionable feedback`, async () => {
  const error = { path: '$.pokemon', code: 'count', message: 'Expected 1 record.' };
  const h = harness({ replies: [bad], validations: bad === '{broken' ? [] : [{ valid: false, errors: [error] }] }); await h.run();
  assert.equal(h.prompts.length, 2); assert.equal(writes(h).length, 1);
  assert.equal(h.prompts[1].messages.length, 2);
  assert.ok(h.prompts[1].messages[0].content.startsWith(h.prompts[0].messages[0].content));
  assert.ok(h.prompts[1].messages.every(m => m.role !== 'assistant'));
  const correction = JSON.parse(h.prompts[1].messages[1].content);
  assert.deepEqual(correction, source);
  assert.equal(correction.previous_response, undefined);
  assert.match(h.prompts[1].messages[0].content, /JSON|Expected 1/);
  assert.ok(h.states.some(s => /Correcting/.test(s)));
});
test('content errors are passed back; source never fills output', async () => {
  const bad = { pokemon: [{ id: 1 }], pokemon_types: [] };
  const h = harness({ replies: [JSON.stringify(bad)], validations: [{ valid: false, errors: [{ path: '$.pokemon[0].name', code: 'value', message: 'Preserve name.' }] }] }); await h.run();
  assert.deepEqual(h.calls[1].body.migration, bad); assert.match(h.prompts[1].messages[0].content, /Preserve name/);
});
test('three failed attempts stop exact batch without writes', async () => {
  const h = harness({ replies: ['bad', 'bad', 'bad'] }); await h.run();
  assert.equal(h.prompts.length, 3); assert.equal(writes(h).length, 0); assert.match(h.status.textContent, /postgresql.*batch 1.*JSON/i); assert.equal(h.button.disabled, false);
});
test('length finish reason rejects even valid JSON', async () => {
  const h = harness({ replies: Array.from({ length: 3 }, () => ({ choices: [{ message: { content: JSON.stringify(source) }, finish_reason: 'length' }] })) }); await h.run();
  assert.equal(h.prompts.length, 3); assert.equal(writes(h).length, 0); assert.match(h.status.textContent, /truncat/i);
});
for (const failure of [new Error('offline'), { valid: 'yes', errors: [] }, { valid: true, errors: [{ path: '$', code: 'bad', message: 'bad' }] }]) test('validation transport/protocol failure halts without correction or write', async () => {
  const h = harness({ validations: [failure] }); await h.run(); assert.equal(h.prompts.length, 1); assert.equal(writes(h).length, 0); assert.match(h.status.textContent, /batch 1/i);
});
test('download diagnostics retains real bounded output and metadata', async () => {
  const h = harness({ replies: ['x'.repeat(40000)] }); await h.run();
  const download = h.elements.find(e => /Download.*diagnostic/i.test(e.textContent)); assert.ok(download); await download.click();
  const data = JSON.parse(await h.blobs[0].text());
  assert.equal(data.attempts[0].raw_response.length, 32000); assert.equal(data.attempts[0].raw_response_clipped, true);
  assert.equal(data.attempts[0].model, 'selected-model'); assert.deepEqual(data.attempts[0].ids, [1]);
  assert.equal(data.attempts[0].finish_reason, 'stop'); assert.equal(data.attempts[0].usage.completion_tokens, 42);
  assert.ok(data.attempts[0].duration_ms >= 0); assert.ok(data.attempts[0].validation_errors.length); assert.deepEqual(h.revoked, ['blob:test']);
});
test('diagnostic attempts are capped per run and reset on next run', async () => {
  const rows = { pokemon: Array.from({ length: 505 }, (_, i) => ({ id: i + 1 })), pokemon_types: [] };
  const replies = Array.from({ length: 101 }, (_, i) => JSON.stringify({ pokemon: rows.pokemon.slice(i * 5, i * 5 + 5), pokemon_types: [] }));
  const h = harness({ rows, replies }); await h.run();
  const download = h.elements[0]; await download.click(); const data = JSON.parse(await h.blobs[0].text());
  assert.equal(data.attempts.length, 100); assert.equal(data.dropped_attempts, 1);
  rows.pokemon = rows.pokemon.slice(0, 1);
  replies.push(JSON.stringify(rows));
  await h.run(); await download.click();
  const next = JSON.parse(await h.blobs[1].text());
  assert.equal(next.attempts.length, 1); assert.equal(next.dropped_attempts, 0);
});
for (const target of ['postgresql', 'mongodb', 'mariadb']) test(`${target} pilot validates one Pokemon with all relations and never writes`, async () => {
  const rows = { pokemon: [source.pokemon[0], { ...source.pokemon[0], id: 2 }], pokemon_types: [...source.pokemon_types, { pokemon_id: 1, slot: 2, type_name: 'poison' }, { pokemon_id: 2, slot: 1, type_name: 'normal' }] };
  const expected = target === 'mongodb' ? { pokemon: [{ ...output(target).pokemon[0], types: [{ slot: 1, name: 'grass' }, { slot: 2, name: 'poison' }] }] } : { pokemon: [rows.pokemon[0]], pokemon_types: rows.pokemon_types.slice(0, 2) };
  const h = harness({ target, rows, replies: [JSON.stringify(expected)] });
  await h.pilot();
  assert.deepEqual(h.calls.map(c => c.url), ['/api/source', '/api/validate-batch']);
  assert.deepEqual(h.calls[1].body, { target, ids: [1], migration: expected });
  const input = JSON.parse(h.prompts[0].messages[1].content);
  assert.equal(input.pokemon.length, 1); assert.equal(input.pokemon_types.length, 2);
  assert.match(h.status.textContent, /Pilot validated.*No data was written/);
});
test('pilot without model makes no requests', async () => {
  const h = harness({ loaded: false }); await h.pilot(); assert.equal(h.calls.length, 0);
});
test('pilot targets Caterpie ID 10 and preserves all matching relations without source fallback', async () => {
  const caterpie = { ...source.pokemon[0], id: 10, name: 'caterpie' };
  const rows = { pokemon: [...source.pokemon, caterpie], pokemon_types: [...source.pokemon_types, { pokemon_id: 10, slot: 1, type_name: 'bug' }] };
  const expected = { pokemon: [caterpie], pokemon_types: [rows.pokemon_types[1]] };
  const bad = { ...expected, pokemon: [{ ...caterpie, name: 'cicada' }] };
  const h = harness({ rows, replies: [JSON.stringify(bad), JSON.stringify(expected)], validations: [{ valid: false, errors: [{ path: '$.migration.pokemon[0].name', code: 'value', message: 'Preserve exactly: "caterpie".' }] }] });
  h.setPilotId(10); await h.pilot();
  assert.deepEqual(JSON.parse(h.prompts[0].messages[1].content), expected);
  assert.deepEqual(h.calls.filter(c => c.url === '/api/validate-batch').map(c => c.body.migration), [bad, expected]);
  assert.equal(writes(h).length, 0);
  assert.match(h.status.textContent, /ID 10/);
});
test('unknown pilot ID stops without generation or writes', async () => {
  const h = harness(); h.setPilotId(999); await h.pilot();
  assert.equal(h.prompts.length, 0); assert.equal(writes(h).length, 0);
  assert.match(h.status.textContent, /not present/);
});
