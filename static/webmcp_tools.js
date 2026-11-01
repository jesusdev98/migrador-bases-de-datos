const modelContext = document.modelContext;
if (!modelContext || typeof modelContext.registerTool !== "function") {
  // WebMCP is experimental and may be disabled in this browser.
} else {
  const controller = new AbortController();

  function inspectInterface() {
    const migrationTargets = [...document.querySelectorAll(".migrate-target")]
      .map((button) => button.dataset.target);
    const modelSelect = document.querySelector("#model-select");
    return {
      page: "Pokémon SQLite migration interface",
      migrationTargets,
      modelOptions: modelSelect
        ? [...modelSelect.options].map((option) => option.value)
        : [],
      modelStatus: document.querySelector("#model-status")?.textContent?.trim() ?? null,
      migrationStatus: document.querySelector("#migration-status")?.textContent?.trim() ?? null,
    };
  }

  const tools = [
    {
      name: "inspect_migration_interface",
      description: "Inspect the available Pokémon migration targets and browser model controls without changing data.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false, consequentialHint: false },
      execute: async () => JSON.stringify(inspectInterface()),
    },
    {
      name: "validate_migration_interface",
      description: "Check that the migration page exposes the expected model controls, target actions, and accessible status regions without changing data.",
      inputSchema: { type: "object", properties: {}, additionalProperties: false },
      annotations: { readOnlyHint: true, untrustedContentHint: false, consequentialHint: false },
      execute: async () => {
        const targets = [...document.querySelectorAll(".migrate-target")]
          .map((button) => button.dataset.target)
          .sort();
        const checks = {
          modelSelector: Boolean(document.querySelector("#model-select")),
          modelLoadAction: Boolean(document.querySelector("#load-model")),
          modelCacheDeleteAction: Boolean(document.querySelector("#delete-model")),
          postgresTarget: targets.includes("postgresql"),
          mongoTarget: targets.includes("mongodb"),
          migrationStatusIsAccessible: document.querySelector("#migration-status")?.getAttribute("role") === "status",
          modelStatusIsAccessible: document.querySelector("#model-status")?.getAttribute("role") === "status",
        };
        const failures = Object.entries(checks)
          .filter(([, passed]) => !passed)
          .map(([name]) => name);
        return JSON.stringify({ valid: failures.length === 0, checks, failures });
      },
    },
  ];

  Promise.all(tools.map((tool) => modelContext.registerTool(tool, { signal: controller.signal })))
    .catch(() => controller.abort());
  window.addEventListener("pagehide", () => controller.abort(), { once: true });
}
