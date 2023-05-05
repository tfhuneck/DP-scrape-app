const electron = require('electron');
const { app, BrowserWindow,  ipcMain } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
const fs = require ('fs');

// ==========Core Electron function loading & closing App================
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
    width: 1200,
    height: 800,
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

//=======ipcMain recieving data via Bridge and saving to json files=========
// =======Save Basketball Data============
ipcMain.on("saveBasketballData", (event, data) => {
    const readData = fs.readFileSync("./src/json/basketballdata.json");
    const dataArr = []
    if(readData.length === 0) {
      dataArr.push(data);
      let dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/basketballdata.json", dataStr);
      console.log("Data Saved");
    }else {
      const parsedData = JSON.parse(readData);
      dataArr.push(...parsedData);
      dataArr.push(data);
      console.log(dataArr);
      const dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/basketballdata.json", dataStr);
      console.log("Data Saved"); 
    } 
});

// =======Save Baseball Data============
ipcMain.on("saveBaseballData", (event, data) => {
    const readData = fs.readFileSync("./src/json/baseballdata.json");
    const dataArr = []
    if(readData.length === 0) {
      dataArr.push(data);
      let dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/baseballdata.json", dataStr);
      console.log("Data Saved");
    }else {
      const parsedData = JSON.parse(readData);
      dataArr.push(...parsedData);
      dataArr.push(data);
      console.log(dataArr);
      const dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/baseballdata.json", dataStr);
      console.log("Data Saved"); 
    } 
});

// =======Save Football Data============
ipcMain.on("saveFootballData", (event, data) => {
    const readData = fs.readFileSync("./src/json/footballdata.json");
    const dataArr = []
    if(readData.length === 0) {
      dataArr.push(data);
      let dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/footballdata.json", dataStr);
      console.log("Data Saved");
    }else {
      const parsedData = JSON.parse(readData);
      dataArr.push(...parsedData);
      dataArr.push(data);
      console.log(dataArr);
      const dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/footballdata.json", dataStr);
      console.log("Data Saved"); 
    } 
});

// =======Save Other Data============
ipcMain.on("saveOtherData", (event, data) => {
    const readData = fs.readFileSync("./src/json/otherdata.json");
    const dataArr = []
    if(readData.length === 0) {
      dataArr.push(data);
      let dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/otherdata.json", dataStr);
      console.log("Data Saved");
    }else {
      const parsedData = JSON.parse(readData);
      dataArr.push(...parsedData);
      dataArr.push(data);
      console.log(dataArr);
      const dataStr = JSON.stringify(dataArr);
      fs.writeFileSync("./src/json/otherdata.json", dataStr);
      console.log("Data Saved"); 
    } 
});

//=========Read Data from JSON files and send to UI============