const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const opn = require("opn");

app.on("ready", () => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWin.menuBarVisible = false;
  mainWin.loadFile("./src/index.html");
});

ipcMain.on("read-config", (e) => {
  e.returnValue = fs
    .readFileSync(path.join(__dirname, "../config.json"))
    .toString();
});

ipcMain.on("write-config", (e, arg) => {
  fs.writeFileSync(
    path.join(__dirname, "../config.json"),
    JSON.stringify(arg, null, 2)
  );
  e.returnValue = 0;
});

ipcMain.on("open-github", (e) => {
  opn("https://www.github.com/DigitalCyan");
  e.returnValue = 0;
});
