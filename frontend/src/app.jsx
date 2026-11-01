import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Pokeball from './Pokeball.jsx';
import { subscribeStatus } from './statusBridge.js';
import './styles.css';

export function App({ readEngine }) {
  const [status, setStatus] = useState({ model: '', migration: '', busy: false, suspended: true });
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [hidden, setHidden] = useState(document.hidden);
  useEffect(() => subscribeStatus(document, readEngine, setStatus), [readEngine]);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updateMotion = (event) => setMotionAllowed(!event.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updateMotion(preference);
    preference.addEventListener('change', updateMotion);
    document.addEventListener('visibilitychange', updateVisibility);
    return () => {
      preference.removeEventListener('change', updateMotion);
      document.removeEventListener('visibilitychange', updateVisibility);
    };
  }, []);
  return <section className="workspace-hero" aria-label="Migration workspace">
    <div className="hero-copy">
      <p className="eyebrow">LOCAL WORKSPACE / SQLITE → YOUR DATABASE</p>
      <h2>Small dataset.<br /><span>Real migration discipline.</span></h2>
      <p>Explore the fixture, test without writes, then migrate explicitly. Python validates the model's output before persistence.</p>
      <ol className="workflow"><li>Load a model</li><li>Run a no-write pilot</li><li>Migrate &amp; verify readback</li></ol>
      <details className="status-context"><summary>Current controller messages</summary>
        <p>{status.model}</p><p>{status.migration}</p>
        <small>Messages mirror the controls below; they are not independent verification.</small>
      </details>
    </div>
    <div className="hero-decoration">
      <Pokeball motionAllowed={motionAllowed} suspended={hidden || status.suspended} activity={status.busy ? 'busy' : 'idle'} />
      <p className="decoration-caption">A little exploration. No database actions.</p>
    </div>
  </section>;
}

const container = document.getElementById('interface-root');
if (container) {
  // The same-origin controller is already evaluated by the original modules.
  // Keep its URL external to both the bundle and the isolated test renderer.
  const controllerUrl = '/static/model_loader.js';
  import(/* @vite-ignore */ controllerUrl).then(({ getLoadedEngine }) => {
    createRoot(container).render(<App readEngine={getLoadedEngine} />);
  });
}
