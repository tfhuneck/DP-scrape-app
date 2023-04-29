const electron = require('electron');
const { app, BrowserWindow,  ipcMain } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
const fs = require ('fs');


let mainWindow = null;
app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
});

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    maximized: false,
    title: "D&P Cards Scrape Application",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js")
    }, 
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../public/index.html')}`);
  mainWindow.on('closed', function () {
    mainWindow = null
  })
  mainWindow.on('page-title-updated', function (e) {
    e.preventDefault()
  });
}

ipcMain.on("saveData", (event, data) => {
  console.log(data);
  let dataStr = JSON.stringify(data);
  fs.writeFileSync("./src/data.json", dataStr, {flag:'a'});
  console.log("Data Saved");
});


// ipcMain.on("saveData", (event, data) => {
//   console.log(data);
//   let dataStr = JSON.stringify(data);
//   fs.writeFileSync("./src/data.json", dataStr, {flag:'a'});
//   console.log("Data Saved");
// });