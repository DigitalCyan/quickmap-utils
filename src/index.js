const { ipcRenderer } = require("electron");

document
  .querySelector("#readBtn")
  .addEventListener("click", () => ipcRenderer.send("read-config"));
