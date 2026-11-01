const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const script = fs.readFileSync(path.join(__dirname, '../diagnostics/webllm.js'), 'utf8')
  .replace('await import(runtimeUrl)', 'await importRuntime(runtimeUrl)');

function setup({ reply = 'California, Texas, New York', fail = false, loadFailure = false, gpu = true } = {}) {
  const nodes = Object.fromEntries(['runtime','model','load','unload','case','mode','run','download','status','output'].map(id => [id, {
    value: '', textContent: '', addEventListener(event, callback) { this[event] = callback; },
  }]));
  nodes.model.value = 'Qwen2.5-3B-Instruct-q4f16_1-MLC';
  nodes.runtime.value = '0.2.86';
  nodes.case.value = 'baseline'; nodes.mode.value = 'plain';
  const calls = [], requests = [], blobs = [];
  const engine = {
    async resetChat() { calls.push('reset'); },
    async unload() { calls.push('unload'); },
    chat: { completions: { async create(request) {
      calls.push('completion'); requests.push(request);
      if (fail) throw new Error(typeof fail === 'string' ? fail : 'grammar compilation failed');
      return { choices: [{ message: { content: reply }, finish_reason: 'stop' }], usage: { completion_tokens: 12 } };
    } } },
  };
  const context = {
    document: { getElementById: id => nodes[id], createElement: () => ({ click() {}, remove() {} }), body: { appendChild() {} } },
    navigator: { userAgent: 'test browser', gpu: gpu ? {} : undefined },
    importRuntime: async url => {
      calls.push(url);
      return { prebuiltAppConfig: { model_list: [
        { model_id: nodes.model.value, model_lib: url.includes('0.2.87') ? 'new-runtime.wasm' : 'public-test.wasm' },
        { model_id: 'Qwen2.5-3B-Instruct-q4f32_1-MLC', model_lib: 'float32-variant.wasm' },
        { model_id: 'Llama-3.2-3B-Instruct-q4f32_1-MLC', model_lib: 'llama-family.wasm' },
      ] },
        async CreateMLCEngine(id) { calls.push(id); if (loadFailure) throw new Error(loadFailure); return engine; } };
    },
    Blob, URL: { createObjectURL(blob) { blobs.push(blob); return 'blob:test'; }, revokeObjectURL() {} },
    setTimeout: fn => fn(),
    fetch() { throw new Error('No source or database requests permitted'); },
  };
  vm.runInNewContext(script, context);
  return { nodes, calls, requests, blobs, entry: () => JSON.parse(nodes.output.textContent) };
}

test('initialization and run before model load make no requests', async () => {
  const h = setup(); assert.deepEqual(h.calls, []);
  await h.nodes.run.click(); assert.deepEqual(h.calls, []);
});
test('official plain baseline uses pinned runtime, reset, nonstream and no grammar', async () => {
  const h = setup(); await h.nodes.load.click(); await h.nodes.run.click();
  assert.equal(h.calls[0], 'https://esm.run/@mlc-ai/web-llm@0.2.86');
  assert.deepEqual(h.calls.slice(-2), ['reset','completion']);
  assert.equal(h.requests.length, 1);
  const request = h.requests[0];
  assert.equal(request.stream, false); assert.equal(request.response_format, undefined);
  assert.equal(request.messages[0].content, 'List three US states.');
  assert.equal(h.entry().raw_output, 'California, Texas, New York');
  assert.equal(h.entry().model_record.model_lib, 'public-test.wasm');
});
test('exact-copy case checks literal source values without retries', async () => {
  const h = setup({ reply: '{"name":"cicada","type":"bug"}' });
  await h.nodes.load.click(); h.nodes.case.value = 'copy'; await h.nodes.run.click();
  assert.equal(h.entry().exact_match, false); assert.equal(h.requests.length, 1);
  assert.equal(h.entry().raw_output, '{"name":"cicada","type":"bug"}');
});
test('JSON mode errors remain visible and downloadable without plain fallback', async () => {
  const h = setup({ fail: true }); await h.nodes.load.click();
  h.nodes.case.value = 'copy'; h.nodes.mode.value = 'json'; await h.nodes.run.click();
  assert.equal(h.requests.length, 1);
  assert.equal(h.requests[0].response_format.type, 'json_object');
  assert.equal(typeof h.requests[0].response_format.schema, 'string');
  assert.match(h.entry().error, /grammar compilation failed/);
  assert.equal(h.entry().stage, 'completion');
  await h.nodes.download.click(); const report = JSON.parse(await h.blobs[0].text());
  assert.equal(report.cases[0].runtime_version, '0.2.86'); assert.equal(report.cases.length, 1);
  assert.match(report.cases[0].error, /grammar compilation failed/);
});
test('runtime comparison unloads old engine and exports each version with its own config', async () => {
  const h = setup({ reply: '{"name":"caterpie","type":"bug"}' });
  await h.nodes.load.click(); h.nodes.case.value = 'copy'; h.nodes.mode.value = 'json';
  await h.nodes.run.click();
  const first = JSON.stringify(h.requests[0]);
  h.nodes.runtime.value = '0.2.87'; h.nodes.runtime.change();
  assert.equal(h.nodes.run.disabled, true);
  await h.nodes.run.click(); assert.equal(h.requests.length, 1);
  await h.nodes.load.click(); await h.nodes.run.click();
  assert.equal(JSON.stringify(h.requests[1]), first);
  assert.ok(h.calls.indexOf('unload') < h.calls.indexOf('https://esm.run/@mlc-ai/web-llm@0.2.87'));
  await h.nodes.download.click(); const report = JSON.parse(await h.blobs[0].text());
  assert.deepEqual(report.cases.map(c => c.runtime_version), ['0.2.86','0.2.87']);
  assert.deepEqual(report.cases.map(c => c.model_record.model_lib), ['public-test.wasm','new-runtime.wasm']);
  assert.equal(report.cases[1].runtime_url, 'https://esm.run/@mlc-ai/web-llm@0.2.87');
});
test('unsupported runtime value cannot import an arbitrary package', async () => {
  const h = setup(); h.nodes.runtime.value = 'https://untrusted.invalid/x.js';
  await h.nodes.load.click(); assert.deepEqual(h.calls, []);
  assert.match(h.entry().error, /Unsupported runtime/);
});
test('precision variant switch requires reload and keeps the exact same copy request', async () => {
  const h = setup({ reply: '{"name":"caterpie","type":"bug"}' });
  h.nodes.runtime.value = '0.2.87';
  await h.nodes.load.click(); h.nodes.case.value = 'copy'; h.nodes.mode.value = 'json';
  await h.nodes.run.click();
  h.nodes.model.value = 'Qwen2.5-3B-Instruct-q4f32_1-MLC'; h.nodes.model.change();
  assert.equal(h.nodes.run.disabled, true);
  await h.nodes.run.click(); assert.equal(h.requests.length, 1);
  await h.nodes.load.click(); await h.nodes.run.click();
  assert.equal(JSON.stringify(h.requests[0]), JSON.stringify(h.requests[1]));
  await h.nodes.download.click(); const report = JSON.parse(await h.blobs[0].text());
  assert.deepEqual(report.cases.map(c => c.model), ['Qwen2.5-3B-Instruct-q4f16_1-MLC', 'Qwen2.5-3B-Instruct-q4f32_1-MLC']);
  assert.equal(report.cases[1].model_record.model_id, 'Qwen2.5-3B-Instruct-q4f32_1-MLC');
  assert.ok(report.cases.every(c => c.runtime_version === '0.2.87'));
});
test('Llama comparison stays explicit, uses its model record and preserves the copy request', async () => {
  const h = setup({ reply: '{"name":"caterpie","type":"bug"}' });
  h.nodes.runtime.value = '0.2.87';
  await h.nodes.load.click(); h.nodes.case.value = 'copy'; h.nodes.mode.value = 'json';
  await h.nodes.run.click();
  const before = [...h.calls];
  h.nodes.model.value = 'Llama-3.2-3B-Instruct-q4f32_1-MLC'; h.nodes.model.change();
  await h.nodes.run.click(); assert.deepEqual(h.calls, before);
  await h.nodes.load.click(); await h.nodes.run.click();
  assert.equal(JSON.stringify(h.requests[0]), JSON.stringify(h.requests[1]));
  assert.ok(h.calls.includes('unload'));
  await h.nodes.download.click(); const report = JSON.parse(await h.blobs[0].text());
  assert.equal(report.cases[1].model, 'Llama-3.2-3B-Instruct-q4f32_1-MLC');
  assert.equal(report.cases[1].model_record.model_lib, 'llama-family.wasm');
});
for (const kind of ['copy', 'sql', 'mongo']) test(`${kind} JSON comparison sends a serialized structural schema, not source-value constraints`, async () => {
  const h = setup(); await h.nodes.load.click();
  h.nodes.case.value = kind; h.nodes.mode.value = 'json'; await h.nodes.run.click();
  const raw = h.requests[0].response_format.schema;
  assert.equal(typeof raw, 'string');
  assert.ok(!raw.includes('caterpie')); assert.ok(!raw.includes('const')); assert.ok(!raw.includes('enum'));
  const schema = JSON.parse(raw);
  assert.equal(schema.type, 'object'); assert.equal(schema.additionalProperties, false);
  if (kind === 'copy') assert.deepEqual(schema.required, ['name','type']);
  else {
    assert.equal(schema.properties.pokemon.type, 'array');
    const properties = schema.properties.pokemon.items.properties;
    assert.equal(properties[kind === 'mongo' ? '_id' : 'id'].type, 'integer');
    if (kind === 'mongo') assert.equal(properties.types.type, 'array');
    else assert.equal(schema.properties.pokemon_types.type, 'array');
  }
});
test('minimal baseline refuses JSON mode; changing model requires reload', async () => {
  const h = setup(); await h.nodes.load.click(); h.nodes.mode.value = 'json';
  await h.nodes.run.click(); assert.equal(h.requests.length, 0);
  h.nodes.mode.value = 'plain'; h.nodes.model.value = 'other-model';
  await h.nodes.run.click(); assert.equal(h.requests.length, 0);
});
test('missing WebGPU never imports runtime', async () => {
  const h = setup({ gpu: false }); await h.nodes.load.click();
  assert.deepEqual(h.calls, []); assert.match(h.entry().error, /WebGPU/);
});
for (const phase of ['load', 'completion']) test(`${phase} errors retain bounded prefixes and explicit clipping metadata`, async () => {
  const diagnostic = 'grammar compilation failed: ' + 'x'.repeat(70000);
  const h = setup(phase === 'load' ? { loadFailure: diagnostic } : { fail: diagnostic });
  await h.nodes.load.click();
  if (phase === 'completion') await h.nodes.run.click();
  const entry = h.entry();
  assert.equal(entry.error.length, 32000);
  assert.ok(entry.error.startsWith('Error: grammar compilation failed: '));
  assert.equal(entry.error_clipped, true);
  assert.equal(entry.error_original_characters, diagnostic.length + 'Error: '.length);
  await h.nodes.download.click();
  const report = JSON.parse(await h.blobs[0].text());
  const saved = phase === 'load' ? report.model_loads[0] : report.cases[0];
  assert.equal(saved.error, entry.error);
  assert.equal(h.requests.length, phase === 'load' ? 0 : 1);
});
