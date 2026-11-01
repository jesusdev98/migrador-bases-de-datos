// Observe controller-owned DOM without taking ownership of actions or state.
export function subscribeStatus(document, readEngine, listener) {
  let active = true;
  let engineSeen = false;
  const publish = () => {
    if (!active) return;
    engineSeen ||= Boolean(readEngine());
    const busy = Boolean(document.querySelector(
      '#load-model:disabled, #model-select:disabled, .migrate-target:disabled',
    ));
    listener({
      model: document.querySelector('#model-status')?.textContent || '',
      migration: document.querySelector('#migration-status')?.textContent || '',
      busy,
      // getLoadedEngine hides a resident engine when the selection changes.
      // Conservatively yield graphics until the next page visit once seen.
      suspended: busy || engineSeen,
    });
  };
  const observer = new MutationObserver(publish);
  for (const selector of ['.model-panel', '.migration-panel', '#model-status', '#migration-status', '#load-model', '#model-select', '.migrate-target']) {
    for (const node of document.querySelectorAll(selector)) {
      observer.observe(node, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['disabled'] });
    }
  }
  queueMicrotask(publish);
  return () => { active = false; observer.disconnect(); };
}
