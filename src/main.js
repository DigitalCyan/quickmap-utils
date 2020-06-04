const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

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

ipcMain.on("write-config", (e) => {
  console.log(
    fs.readFileSync(path.join(__dirname, "../config.json")).toString()
  );
  e.returnValue = fs
    .readFileSync(path.join(__dirname, "../config.json"))
    .toString();
});

ipcMain.on("open-github", () => {
  exec("start https://www.github.com/DigitalCyan");
});
