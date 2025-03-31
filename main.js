const { app, BrowserWindow, ipcMain } = require('electron');
const { getNumberOfCPUs } = require('./cpuInfo');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// Handle IPC requests from the renderer process
ipcMain.handle('get-cpu-count', () => {
    return getNumberOfCPUs();
});
