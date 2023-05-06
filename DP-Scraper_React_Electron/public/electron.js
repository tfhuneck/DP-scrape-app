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

//=======ipcMain recieving data via Bridge and saving to json files========
const saveData = (destination, data) => {
  const readData = fs.readFileSync(destination);
    const dataArr = []
    if(readData.length === 0) {
      dataArr.push(data);
      console.log(dataArr);
      let dataStr = JSON.stringify(dataArr);
      fs.writeFileSync(destination, dataStr);
      console.log("Data Saved");
    }else {
      const parsedData = JSON.parse(readData);
      dataArr.push(...parsedData);
      dataArr.push(data);
      console.log(dataArr);
      const dataStr = JSON.stringify(dataArr);
      fs.writeFileSync(destination, dataStr);
      console.log("Data Saved"); 
    } 
}
// =======Save Basketball Data============
ipcMain.on("saveBasketball", (event, data) => {
   saveData("./src/json/basketballdata.json", data);
});
// =======Save Baseball Data============
ipcMain.on("saveBaseball", (event, data) => {
   saveData("./src/json/baseballdata.json", data); 
});
// =======Save Football Data============
ipcMain.on("saveFootball", (event, data) => {
    saveData("./src/json/footballdata.json", data);
});
// =======Save Other Data============
ipcMain.on("saveOther", (event, data) => {
   saveData("./src/json/otherdata.json", data);
});

//=========Read Data from JSON files and send to UI============
//=========Get Basketball data==========
ipcMain.handle('getBasketball', (event, arg) => {
  const response = JSON.parse(fs.readFileSync("./src/json/basketballdata.json"));
  return response;
})
//=========Get Baseball data==========
ipcMain.handle('getBaseball', (event, arg) => {
  const response = JSON.parse(fs.readFileSync("./src/json/baseballdata.json"));
  return response;
})
//=========Get Football data==========
ipcMain.handle('getFootball', (event, arg) => {
  const response = JSON.parse(fs.readFileSync("./src/json/footballdata.json"));
  return response;
})
//=========Get Other data==========
ipcMain.handle('getOther', (event, arg) => {
  const response = JSON.parse(fs.readFileSync("./src/json/otherdata.json"));
  return response;
})