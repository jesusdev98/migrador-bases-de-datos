import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const motionQuery = '(prefers-reduced-motion: reduce)';
const frameStyle = {
  width: '100%', maxWidth: 320, aspectRatio: '1', position: 'relative',
  margin: '0 auto', borderRadius: 24, overflow: 'hidden', background: '#e9e9e4',
};

function StaticBall() {
  return (
    <svg viewBox="0 0 320 320" role="img" aria-label="Decorative Poké Ball (static)"
      style={{ display: 'block', width: '100%', height: '100%' }}>
      <ellipse cx="160" cy="259" rx="83" ry="12" fill="#d0d0cb" />
      <circle cx="160" cy="153" r="94" fill="#fafaf7" stroke="#222b34" strokeWidth="8" />
      <path d="M66 153a94 94 0 0 1 188 0Z" fill="#d83f47" />
      <path d="M67 153h186" stroke="#222b34" strokeWidth="13" />
      <circle cx="160" cy="153" r="24" fill="#fafaf7" stroke="#222b34" strokeWidth="10" />
      <circle cx="160" cy="153" r="11" fill="#e1e4e3" />
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
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.domElement.setAttribute('aria-hidden', 'true');
      renderer.domElement.style.cssText = 'display:block;width:100%;height:100%;';
      renderer.domElement.addEventListener('webglcontextlost', contextLost);
      container.append(renderer.domElement);
      const scene = new THREE.Scene();
      scene.background = new THREE.Color('#e9e9e4');
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
