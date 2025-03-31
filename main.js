const { app, BrowserWindow, ipcMain } = require('electron');
const path  = require('path');
const { getNumberOfCPUs } = require('./cpuInfo');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true, // Enforces separation of Electron APIs from the renderer context
            nodeIntegration: false, // Prevents direct access to Node.js APIs in the renderer
            preload: path.join(__dirname, 'preload.js') // Use a preload script to expose safe APIs
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
