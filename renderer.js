const { ipcRenderer } = require('electron');

ipcRenderer.invoke('get-cpu-count').then(cpuCount => {
    document.getElementById('cpu-info').innerText = `Number of CPUs: ${cpuCount}`;
});
