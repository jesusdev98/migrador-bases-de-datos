import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, expect, it, vi } from 'vitest';
vi.mock('../src/Pokeball.jsx', () => ({ default: (props) => <div data-testid="decoration" data-props={JSON.stringify(props)} /> }));
import { App } from '../src/app.jsx';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
let root;
afterEach(async () => { if (root) await act(() => root.unmount()); root = null; document.body.innerHTML = ''; vi.unstubAllGlobals(); });

it('keeps controller nodes intact and reflects status without interpreting it as verified success', async () => {
  const changeListeners = new Set();
  vi.stubGlobal('matchMedia', () => ({ matches: false, addEventListener: (_, fn) => changeListeners.add(fn), removeEventListener: (_, fn) => changeListeners.delete(fn) }));
  document.body.innerHTML = '<button id="load-model">Load model</button><p id="model-status">Not loaded</p><p id="migration-status">Waiting</p><div id="island"></div>';
  const button = document.querySelector('button');
  root = createRoot(document.querySelector('#island'));
  await act(() => root.render(<App readEngine={() => null} />));
  expect(document.querySelector('button')).toBe(button);
  const props = () => JSON.parse(document.querySelector('[data-testid="decoration"]').dataset.props);
  expect(props()).toEqual({ motionAllowed: true, suspended: false, activity: 'idle' });
  await act(async () => {
    button.disabled = true;
    document.querySelector('#migration-status').textContent = 'Migration complete. Untrusted status';
    await new Promise(queueMicrotask);
  });
  expect(props()).toMatchObject({ suspended: true, activity: 'busy' });
  expect(document.querySelector('#island').textContent).toContain('Migration complete. Untrusted status');
  expect(document.querySelector('#island [role="status"]')).toBeNull();
  await act(() => { for (const listener of changeListeners) listener({ matches: true }); });
  expect(props().motionAllowed).toBe(false);
  await act(() => {
    for (const listener of changeListeners) listener({ matches: false });
    Object.defineProperty(document, 'hidden', { configurable: true, value: true });
    document.dispatchEvent(new Event('visibilitychange'));
  });
  expect(props()).toMatchObject({ motionAllowed: true, suspended: true });
  delete document.hidden;
  await act(() => root.unmount()); root = null;
  expect(changeListeners.size).toBe(0);
  expect(document.querySelector('button')).toBe(button);
});
