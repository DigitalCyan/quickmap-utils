const { ipcRenderer } = require("electron");

document.querySelector("#readBtn").addEventListener("click", () => {
  updatePreview(ipcRenderer.sendSync("read-config"));
});

document.querySelector("#gitHubBtn").addEventListener("click", () => {
  ipcRenderer.sendSync("open-github");
});

document.querySelector("#writeBtn").addEventListener("click", () => {
  const data = {
    port: document.querySelector("#portBox").value,
    binds: {
      button_1: document.querySelector("#command1Box").value,
      button_2: document.querySelector("#command2Box").value,
      button_3: document.querySelector("#command3Box").value,
    },
    debug: document.querySelector("#debugCheck").checked,
  };
  ipcRenderer.sendSync("write-config", data);
  updatePreview(ipcRenderer.sendSync("read-config"));
});

const updatePreview = (data) => {
  document.querySelector("#previewParagraph").textContent = data;
  conf = JSON.parse(data);
};

updatePreview(ipcRenderer.sendSync("read-config"));
