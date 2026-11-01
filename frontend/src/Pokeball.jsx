import React, { useEffect, useId, useRef, useState } from 'react';
import * as THREE from 'three';

const motionQuery = '(prefers-reduced-motion: reduce)';
const frameStyle = {
  width: '100%', maxWidth: 320, aspectRatio: '1', position: 'relative',
  margin: '0 auto', overflow: 'hidden', background: 'transparent',
};

function StaticBall() {
  const gradient = useId();
  return (
    <svg viewBox="0 0 320 320" role="img" aria-label="Decorative Poké Ball (static)"
      style={{ display: 'block', width: '100%', height: '100%' }}>
      <defs>
        <radialGradient id={`${gradient}-red`} cx="32%" cy="25%" r="80%">
          <stop offset="0" stopColor="#ff7a81" /><stop offset=".4" stopColor="#ef3948" />
          <stop offset="1" stopColor="#ac1d2b" />
        </radialGradient>
        <radialGradient id={`${gradient}-white`} cx="32%" cy="22%" r="80%">
          <stop offset="0" stopColor="#ffffff" /><stop offset=".65" stopColor="#f2f1ee" />
          <stop offset="1" stopColor="#aaa9a6" />
        </radialGradient>
      </defs>
      <ellipse cx="160" cy="254" rx="70" ry="9" fill="#242424" opacity=".10" />
      <circle cx="160" cy="160" r="80" fill={`url(#${gradient}-white)`} />
      <path d="M80 160a80 80 0 0 1 160 0Z" fill={`url(#${gradient}-red)`} />
      <path d="M80 160q80 20 160 0" fill="none" stroke="#242424" strokeWidth="8" />
      <circle cx="160" cy="169" r="19" fill="#f6f5f1" stroke="#242424" strokeWidth="7" />
      <circle cx="160" cy="169" r="10" fill="#e1e1dd" />
    </svg>
  );
}

export default function Pokeball({ motionAllowed, suspended, activity }) {
  const host = useRef(null);
  const openTarget = useRef(false);
  const [open, setOpen] = useState(false);
  const [failed, setFailed] = useState(false);
  const [environment, setEnvironment] = useState(() => ({
    hidden: typeof document === 'undefined' || document.hidden,
    reduced: typeof window === 'undefined' || !window.matchMedia || window.matchMedia(motionQuery).matches,
  }));

  useEffect(() => {
    const media = window.matchMedia?.(motionQuery);
    const update = () => setEnvironment({ hidden: document.hidden, reduced: !media || media.matches });
    update();
    document.addEventListener('visibilitychange', update);
    if (media?.addEventListener) media.addEventListener('change', update);
    else media?.addListener(update);
    return () => {
      document.removeEventListener('visibilitychange', update);
      if (media?.removeEventListener) media.removeEventListener('change', update);
      else media?.removeListener(update);
    };
  }, []);

  const active = motionAllowed && !suspended && activity === 'idle'
    && !environment.hidden && !environment.reduced && !failed;

  useEffect(() => {
    if (!active || !host.current) return;
    const container = host.current;
    let renderer, observer, disposed = false;
    const geometries = new Set();
    const materials = new Set();
    const dispose = () => {
      if (disposed) return;
      disposed = true;
      observer?.disconnect();
      if (renderer) {
        renderer.domElement.removeEventListener('webglcontextlost', contextLost);
        renderer.setAnimationLoop(null);
      }
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer?.dispose();
      renderer?.domElement.remove();
    };
    const fail = () => {
      dispose();
      setFailed(true); // A failed context stays static until a fresh component mount.
    };
    function contextLost(event) {
      event.preventDefault();
      fail();
    }
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.domElement.setAttribute('aria-hidden', 'true');
      renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;';
      renderer.domElement.addEventListener('webglcontextlost', contextLost);
      container.append(renderer.domElement);
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 30);
      camera.position.set(0, 1.4, 5.8);
      camera.lookAt(0, 0.1, 0);
      scene.add(new THREE.HemisphereLight(0xffffff, 0x68717c, 2.5));
      const key = new THREE.DirectionalLight(0xffffff, 3);
      key.position.set(-3, 5, 4);
      scene.add(key);
      const ball = new THREE.Group();
      scene.add(ball);
      const material = (color) => {
        const value = new THREE.MeshStandardMaterial({ color, roughness: 0.42, metalness: 0.08, side: THREE.DoubleSide });
        materials.add(value);
        return value;
      };
      const red = material('#d83f47');
      const white = material('#fafaf7');
      const black = material('#222b34');
      const mesh = (geometry, surface, parent = ball) => {
        geometries.add(geometry);
        const value = new THREE.Mesh(geometry, surface);
        parent.add(value);
        return value;
      };
      const hinge = new THREE.Group();
      hinge.position.set(0, 0.025, -0.94);
      ball.add(hinge);
      const top = mesh(new THREE.SphereGeometry(1, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), red, hinge);
      top.position.z = 0.94;
      const inside = mesh(new THREE.CircleGeometry(0.99, 40), black, hinge);
      inside.rotation.x = Math.PI / 2;
      inside.position.z = 0.94;
      const bottom = mesh(new THREE.SphereGeometry(1, 40, 20, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), white);
      bottom.position.y = -0.025;
      mesh(new THREE.CylinderGeometry(1.005, 1.005, 0.085, 40), black);
      const buttonRim = mesh(new THREE.CylinderGeometry(0.235, 0.235, 0.13, 32), black);
      buttonRim.rotation.x = Math.PI / 2;
      buttonRim.position.z = 1;
      const button = mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.145, 32), white);
      button.rotation.x = Math.PI / 2;
      button.position.z = 1.04;

      const resize = () => {
        if (disposed) return;
        try {
          const width = Math.max(1, Math.min(container.getBoundingClientRect().width || 320, 320));
          renderer.setSize(width, width, false);
          camera.aspect = 1;
          camera.updateProjectionMatrix();
          renderer.render(scene, camera);
        } catch { fail(); }
      };
      if (typeof ResizeObserver !== 'undefined') {
        observer = new ResizeObserver(resize);
        observer.observe(container);
      }
      resize();
      let previousTime;
      let angle = openTarget.current ? -1.65 : 0;
      if (!disposed) renderer.setAnimationLoop((time) => {
        if (disposed) return;
        // Check the live environment too: a queued frame must yield immediately.
        if (document.hidden || window.matchMedia?.(motionQuery).matches) {
          dispose();
          setEnvironment({ hidden: document.hidden, reduced: !!window.matchMedia?.(motionQuery).matches });
          return;
        }
        try {
          const delta = previousTime === undefined ? 0 : Math.min(Math.max((time - previousTime) / 1000, 0), 0.05);
          previousTime = time;
          const target = openTarget.current ? -1.65 : 0;
          angle += (target - angle) * (1 - Math.exp(-7 * delta));
          hinge.rotation.x = angle;
          ball.rotation.y += delta * 0.13;
          renderer.render(scene, camera);
        } catch { fail(); }
      });
    } catch { fail(); }
    return dispose;
  }, [active]);

  const toggle = () => {
    openTarget.current = !openTarget.current;
    setOpen(openTarget.current);
  };
  return (
    <section aria-label="Decorative Poké Ball" style={{ textAlign: 'center' }}>
      <div style={frameStyle}>
        <div ref={host} role={active ? 'img' : undefined}
          aria-label={active ? 'Decorative three-dimensional Poké Ball' : undefined}
          style={{ position: 'absolute', inset: 0, display: active ? 'block' : 'none' }} />
        {!active && <StaticBall />}
      </div>
      <p style={{ fontSize: '0.85rem' }}>Decorative only — not a migration or model control.</p>
      {active && <button type="button" onClick={toggle} aria-expanded={open}>
        {open ? 'Close Poké Ball' : 'Open Poké Ball'}
      </button>}
    </section>
  );
}
