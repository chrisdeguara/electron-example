const { contextBridge, ipcRenderer } = require('electron');

// Expose a safe API to the renderer
contextBridge.exposeInMainWorld('electron', {
  getCpuCount: () => ipcRenderer.invoke('get-cpu-count')
});
