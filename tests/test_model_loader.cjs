const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const script = fs.readFileSync(path.join(__dirname, '../static/model_loader.js'), 'utf8')
  .replace('export function', 'function')
  .replaceAll('await import("https://esm.run/@mlc-ai/web-llm@0.2.87")', 'await importRuntime("https://esm.run/@mlc-ai/web-llm@0.2.87")');
function setup() {
  const nodes = Object.fromEntries(['#model-select','#load-model','#delete-model','#model-status'].map(id => [id, {
    value: '', textContent: '', addEventListener(event, fn) { this[event] = fn; },
  }]));
  nodes['#model-select'].value = 'Llama-3.2-3B-Instruct-q4f32_1-MLC';
  const calls = [];
  const engine = { async unload() { calls.push('unload'); } };
  const context = { document: { querySelector: id => nodes[id] }, navigator: { gpu: {} },
    async importRuntime(url) { calls.push(url); return {
      async CreateMLCEngine(id) { calls.push(`load:${id}`); return engine; },
      async deleteModelAllInfoInCache(id) { calls.push(`delete:${id}`); },
    }; },
  };
  vm.runInNewContext(script, context);
  return { nodes, calls, engine, get: () => context.getLoadedEngine() };
}
test('Llama loads only on explicit click from pinned 0.2.87', async () => {
  const h = setup(); assert.deepEqual(h.calls, []); assert.equal(h.get(), null);
  await h.nodes['#load-model'].click();
  assert.deepEqual(h.calls, ['https://esm.run/@mlc-ai/web-llm@0.2.87', 'load:Llama-3.2-3B-Instruct-q4f32_1-MLC']);
  assert.equal(h.get(), h.engine);
});
test('changing model blocks stale engine; loading unloads old one; deletion uses selected ID', async () => {
  const h = setup(); await h.nodes['#load-model'].click();
  h.nodes['#model-select'].value = 'Qwen2.5-3B-Instruct-q4f16_1-MLC';
  h.nodes['#model-select'].change(); assert.equal(h.get(), null);
  await h.nodes['#load-model'].click();
  assert.deepEqual(h.calls.slice(-2), ['unload','load:Qwen2.5-3B-Instruct-q4f16_1-MLC']);
  await h.nodes['#delete-model'].click(); assert.equal(h.get(), null);
  assert.equal(h.calls.at(-1), 'delete:Qwen2.5-3B-Instruct-q4f16_1-MLC');
});
