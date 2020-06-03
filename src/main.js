const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

app.on('ready', () => {
  const mainWin = new BrowserWindow({
    width: 600,
    height: 500,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWin.menuBarVisible = false;
  mainWin.loadFile('./src/index.html')
})

ipcMain.on('read-config', (e) => {
  console.log('reading config.json...')
})