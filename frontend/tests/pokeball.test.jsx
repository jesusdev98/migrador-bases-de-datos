import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import * as THREE from 'three';
import Pokeball from '../src/Pokeball.jsx';

const graphics = vi.hoisted(() => ({ renderers: [], fail: false, attempts: 0 }));
vi.mock('three', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    WebGLRenderer: class {
      constructor() {
        graphics.attempts += 1;
        if (graphics.fail) throw new Error('WebGL unavailable');
        this.domElement = document.createElement('canvas');
        this.setAnimationLoop = vi.fn((loop) => { this.loop = loop; });
        this.setPixelRatio = vi.fn();
        this.setSize = vi.fn();
        this.render = vi.fn();
        this.dispose = vi.fn();
        graphics.renderers.push(this);
      }
    },
  };
});

let root, host, media, hidden, observers;
let geometryDispose, materialDispose;
const defaults = { motionAllowed: true, suspended: false, activity: 'idle' };
const draw = (props = {}) => act(() => root.render(<Pokeball {...defaults} {...props} />));
const latest = () => graphics.renderers.at(-1);

beforeEach(() => {
  globalThis.IS_REACT_ACT_ENVIRONMENT = true;
  graphics.renderers = [];
  graphics.fail = false;
  graphics.attempts = 0;
  hidden = false;
  Object.defineProperty(document, 'hidden', { configurable: true, get: () => hidden });
  media = new EventTarget();
  media.matches = false;
  media.addListener = vi.fn();
  media.removeListener = vi.fn();
  window.matchMedia = vi.fn(() => media);
  observers = [];
  globalThis.ResizeObserver = class {
    constructor(callback) { this.callback = callback; this.disconnect = vi.fn(); observers.push(this); }
    observe() {}
  };
  geometryDispose = vi.spyOn(THREE.BufferGeometry.prototype, 'dispose');
  materialDispose = vi.spyOn(THREE.Material.prototype, 'dispose');
  vi.stubGlobal('fetch', vi.fn(() => { throw new Error('Decoration must not request data'); }));
  host = document.createElement('div');
  document.body.append(host);
  root = createRoot(host);
});

afterEach(() => {
  act(() => root.unmount());
  host.remove();
  vi.unstubAllGlobals();
});

function expectReleased(renderer) {
  expect(renderer.setAnimationLoop).toHaveBeenLastCalledWith(null);
  expect(renderer.dispose).toHaveBeenCalledTimes(1);
  const scene = renderer.render.mock.calls[0][0];
  scene.traverse((object) => {
    if (!object.isMesh) return;
    expect(geometryDispose.mock.contexts.filter((value) => value === object.geometry)).toHaveLength(1);
    expect(materialDispose.mock.contexts.filter((value) => value === object.material)).toHaveLength(1);
  });
  expect(renderer.domElement.isConnected).toBe(false);
}

describe('decorative Poké Ball', () => {
  it('uses real procedural Three geometry, bounded GPU size and a local open/close action', () => {
    draw();
    const renderer = latest();
    expect(renderer).toBeDefined();
    expect(renderer.setPixelRatio.mock.calls[0][0]).toBeLessThanOrEqual(1.5);
    expect(renderer.setSize.mock.calls[0].slice(0, 2).every((size) => size > 0 && size <= 320)).toBe(true);
    const [scene, camera] = renderer.render.mock.calls[0];
    expect(scene.isScene).toBe(true);
    expect(camera.isOrthographicCamera || camera.isPerspectiveCamera).toBe(true);
    const meshes = [];
    scene.traverse((object) => { if (object.isMesh) meshes.push(object); });
    expect(meshes.length).toBeGreaterThanOrEqual(4);
    expect(meshes.every((mesh) => mesh.geometry.isBufferGeometry)).toBe(true);
    const button = host.querySelector('button');
    expect(button.textContent).toBe('Open Poké Ball');
    expect(button.getAttribute('aria-expanded')).toBe('false');
    act(() => button.click());
    expect(button.textContent).toBe('Close Poké Ball');
    expect(button.getAttribute('aria-expanded')).toBe('true');
    act(() => { renderer.loop(0); renderer.loop(100000); });
    expect(renderer.render.mock.calls.length).toBeGreaterThan(1);
    const ball = scene.children.find((object) => object.isGroup);
    const hinge = ball.children.find((object) => object.isGroup);
    expect(hinge.rotation.x).toBeLessThan(0);
    expect(hinge.rotation.x).toBeGreaterThan(-0.6);
    expect(ball.rotation.y).toBeLessThanOrEqual(0.05 * 0.13);
    act(() => button.click());
    expect(button.textContent).toBe('Open Poké Ball');
    const openedAngle = hinge.rotation.x;
    act(() => renderer.loop(100050));
    expect(hinge.rotation.x).toBeGreaterThan(openedAngle);
    vi.spyOn(host.querySelector('div[role="img"]'), 'getBoundingClientRect')
      .mockReturnValue({ width: 180 });
    act(() => observers[0].callback());
    expect(renderer.setSize).toHaveBeenLastCalledWith(180, 180, false);
    expect(fetch).not.toHaveBeenCalled();
    expect(host.textContent).toMatch(/decorative/i);
    draw({ suspended: true });
    expectReleased(renderer);
    expect(observers[0].disconnect).toHaveBeenCalledTimes(1);
    const renderCount = renderer.render.mock.calls.length;
    act(() => observers[0].callback());
    expect(renderer.render).toHaveBeenCalledTimes(renderCount);
  });

  it.each([
    ['motion disabled', { motionAllowed: false }],
    ['suspended', { suspended: true }],
    ['busy', { activity: 'busy' }],
  ])('keeps a noninteractive static visual when %s', (_, props) => {
    draw(props);
    expect(graphics.renderers).toHaveLength(0);
    expect(host.querySelector('button')).toBeNull();
    expect(host.querySelector('[role="img"]')).not.toBeNull();
    expect(fetch).not.toHaveBeenCalled();
  });

  it('defensively observes reduced motion and visibility, releases and safely resumes', () => {
    media.matches = true;
    draw();
    expect(graphics.renderers).toHaveLength(0);
    act(() => { media.matches = false; media.dispatchEvent(new Event('change')); });
    const first = latest();
    act(() => { hidden = true; document.dispatchEvent(new Event('visibilitychange')); });
    expectReleased(first);
    expect(host.querySelector('button')).toBeNull();
    act(() => { hidden = false; document.dispatchEvent(new Event('visibilitychange')); });
    expect(graphics.renderers).toHaveLength(2);
    const second = latest();
    act(() => { media.matches = true; media.dispatchEvent(new Event('change')); });
    expectReleased(second);
  });

  it('does not initialize in a hidden tab and yields when motion props change', () => {
    hidden = true;
    draw();
    expect(graphics.attempts).toBe(0);
    act(() => { hidden = false; document.dispatchEvent(new Event('visibilitychange')); });
    const renderer = latest();
    draw({ motionAllowed: false });
    expectReleased(renderer);
    expect(host.querySelector('button')).toBeNull();
    draw();
    const resumed = latest();
    draw({ activity: 'busy' });
    expectReleased(resumed);
  });

  it('falls back without retrying when renderer creation fails', () => {
    graphics.fail = true;
    draw();
    draw({ activity: 'busy' });
    draw();
    expect(graphics.renderers).toHaveLength(0);
    expect(graphics.attempts).toBe(1);
    expect(host.querySelector('button')).toBeNull();
    expect(host.querySelector('[role="img"]')).not.toBeNull();
  });

  it('releases on context loss and never automatically recreates a lost renderer', () => {
    draw();
    const renderer = latest();
    act(() => renderer.domElement.dispatchEvent(new Event('webglcontextlost', { cancelable: true })));
    expectReleased(renderer);
    draw({ suspended: true });
    draw();
    expect(graphics.renderers).toHaveLength(1);
    expect(host.querySelector('button')).toBeNull();
  });

  it('releases resources and ignores a queued frame after an animation failure', () => {
    draw();
    const renderer = latest();
    const queuedFrame = renderer.loop;
    renderer.render.mockImplementationOnce(() => { throw new Error('Context failure'); });
    act(() => queuedFrame(20));
    expectReleased(renderer);
    expect(host.querySelector('button')).toBeNull();
    const count = renderer.render.mock.calls.length;
    act(() => queuedFrame(40));
    expect(renderer.render).toHaveBeenCalledTimes(count);
    expect(graphics.attempts).toBe(1);
  });

  it('cleans up exactly once across StrictMode and ignores events after unmount', () => {
    const documentRemove = vi.spyOn(document, 'removeEventListener');
    const mediaRemove = vi.spyOn(media, 'removeEventListener');
    act(() => root.render(<React.StrictMode><Pokeball {...defaults} /></React.StrictMode>));
    act(() => root.unmount());
    graphics.renderers.forEach(expectReleased);
    expect(documentRemove).toHaveBeenCalledWith('visibilitychange', expect.any(Function));
    expect(mediaRemove).toHaveBeenCalledWith('change', expect.any(Function));
    expect(observers.every((observer) => observer.disconnect.mock.calls.length === 1)).toBe(true);
    const count = graphics.renderers.length;
    act(() => { document.dispatchEvent(new Event('visibilitychange')); media.dispatchEvent(new Event('change')); });
    expect(graphics.renderers).toHaveLength(count);
    root = createRoot(host);
  });
});
