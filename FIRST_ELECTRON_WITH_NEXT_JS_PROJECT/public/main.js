const { app, BrowserWindow } = require("electron");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      enableRemoteModule: true,
    },
  });

  mainWindow.loadURL("http://localhost:3000");

  mainWindow.on("closed", function () {
    app.quit();
  });
}

app.on("ready", createWindow);
