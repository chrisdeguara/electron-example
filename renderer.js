(async () => {
    const cpuCount = await window.electron.getCpuCount();
    document.getElementById('cpu-info').innerText = `Number of CPUs: ${cpuCount}`;
  })();