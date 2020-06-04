const { ipcRenderer } = require("electron");

document.querySelector("#readBtn").addEventListener("click", () => {
  updatePreview(ipcRenderer.sendSync("read-config"));
});

document.querySelector("#gitHubBtn").addEventListener("click", () => {
  ipcRenderer.sendSync("open-github");
})

const updatePreview = (data) => {
  document.querySelector("#previewParagraph").textContent = data;
  conf = JSON.parse(data);
};

updatePreview(ipcRenderer.sendSync("read-config"));
