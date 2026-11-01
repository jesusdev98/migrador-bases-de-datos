import { afterEach, expect, it, vi } from 'vitest';
import { subscribeStatus } from '../src/statusBridge.js';

afterEach(() => { document.body.innerHTML = ''; vi.unstubAllGlobals(); });

it('publishes an initial read-only snapshot and observes text and disabled controls', async () => {
  document.body.innerHTML = '<p id="model-status">Not loaded</p><p id="migration-status">Waiting</p><button id="load-model">Load model</button><button class="migrate-target">Migrate</button>';
  const original = document.querySelector('#load-model');
  const click = vi.fn();
  original.onclick = click;
  const fetch = vi.fn();
  vi.stubGlobal('fetch', fetch);
  const listener = vi.fn();
  let engine = null;
  const stop = subscribeStatus(document, () => engine, listener);
  await Promise.resolve();
  expect(listener).toHaveBeenLastCalledWith({ model: 'Not loaded', migration: 'Waiting', busy: false, suspended: false });
  original.disabled = true;
  document.querySelector('#model-status').textContent = 'Loading';
  await new Promise(queueMicrotask);
  expect(listener.mock.lastCall[0]).toMatchObject({ model: 'Loading', busy: true, suspended: true });
  engine = {};
  original.disabled = false;
  document.querySelector('#model-status').textContent = 'Ready';
  await new Promise(queueMicrotask);
  expect(listener.mock.lastCall[0]).toMatchObject({ busy: false, suspended: true });
  // A selected-model change can hide a resident engine from getLoadedEngine.
  engine = null;
  document.querySelector('#model-status').textContent = 'Choose Load model';
  await new Promise(queueMicrotask);
  expect(listener.mock.lastCall[0].suspended).toBe(true);
  expect(document.querySelector('#load-model')).toBe(original);
  expect(click).not.toHaveBeenCalled();
  expect(fetch).not.toHaveBeenCalled();
  stop();
  const calls = listener.mock.calls.length;
  original.disabled = true;
  await new Promise(queueMicrotask);
  expect(listener).toHaveBeenCalledTimes(calls);
});

it('cancels scheduled initial delivery on immediate unsubscribe and tolerates absent nodes', async () => {
  const listener = vi.fn();
  subscribeStatus(document, () => null, listener)();
  await new Promise(queueMicrotask);
  expect(listener).not.toHaveBeenCalled();
  const stop = subscribeStatus(document, () => null, listener);
  await new Promise(queueMicrotask);
  expect(listener.mock.lastCall[0]).toEqual({ model: '', migration: '', busy: false, suspended: false });
  stop();
});
