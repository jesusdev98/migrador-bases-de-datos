const modelSelect = document.querySelector("#model-select");
const loadButton = document.querySelector("#load-model");
const deleteButton = document.querySelector("#delete-model");
const status = document.querySelector("#model-status");

let webllm;
let engine;
let loadedModelId;
let busy = false;

export function getLoadedEngine() {
  return engine && loadedModelId === selectedModel() ? engine : null;
}

function setStatus(message) {
  status.textContent = message;
}

function selectedModel() {
  return modelSelect.value;
}

async function loadSelectedModel() {
  if (busy) return;
  if (!navigator.gpu) {
    setStatus("This browser or device does not provide WebGPU. Try a current WebGPU-enabled browser.");
    return;
  }

  busy = true;
  loadButton.disabled = true;
  deleteButton.disabled = true;
  modelSelect.disabled = true;
  try {
    // Import the inference runtime only after the user explicitly requests a model load.
    webllm ??= await import("https://esm.run/@mlc-ai/web-llm@0.2.87");
    const modelId = selectedModel();
    const onProgress = (progress) => {
      const detail = progress.text || "Preparing model";
      const percentage = Number.isFinite(progress.progress)
        ? ` ${Math.round(progress.progress * 100)}%`
        : "";
      setStatus(`${detail}${percentage}`);
    };

    if (engine) {
      await engine.unload();
      engine = null;
      loadedModelId = null;
    }
    engine = await webllm.CreateMLCEngine(modelId, {
      initProgressCallback: onProgress,
    });
    loadedModelId = modelId;
    setStatus(`${modelId} is ready in this browser. Its files remain in browser cache until deleted.`);
    deleteButton.disabled = false;
  } catch (error) {
    engine = null;
    loadedModelId = null;
    setStatus(`Could not load model: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    busy = false;
    loadButton.disabled = false;
    modelSelect.disabled = false;
  }
}

async function deleteSelectedModel() {
  if (busy) return;
  busy = true;
  deleteButton.disabled = true;
  loadButton.disabled = true;
  modelSelect.disabled = true;
  try {
    webllm ??= await import("https://esm.run/@mlc-ai/web-llm@0.2.87");
    const modelId = selectedModel();
    if (engine) {
      await engine.unload();
      engine = null;
    }
    loadedModelId = null;
    await webllm.deleteModelAllInfoInCache(modelId);
    setStatus(`${modelId} was removed from this browser's model cache. Load another model when ready.`);
  } catch (error) {
    setStatus(`Could not delete model cache: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    busy = false;
    loadButton.disabled = false;
    modelSelect.disabled = false;
  }
}

loadButton.addEventListener("click", loadSelectedModel);
deleteButton.addEventListener("click", deleteSelectedModel);
modelSelect.addEventListener("change", () => {
  if (engine) {
    setStatus("Choose Load model to switch. The previous model remains cached until you delete it.");
  }
});
