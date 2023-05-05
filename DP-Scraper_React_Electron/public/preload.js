const { contextBridge, ipcMain, ipcRenderer } = require("electron");
const fs = require('fs');
const path = require('path');

//=====Bridges/Data APIs between Frontend/Render proccess and Backend/Main Process=======

// =======Bridge for saving Basketball Data=======
let saveBasketballData = (product) => {
    let data = {product};
    console.log(data);
    ipcRenderer.send("saveBasketballData", data);
  };
let basketballbridge = {
  saveBasketballData : saveBasketballData
};
contextBridge.exposeInMainWorld("BasketballBridge", basketballbridge);

// =======Bridge for saving Baseball Data=======
let saveBaseballData = (product) => {
    let data = {product};
    console.log(data);
    ipcRenderer.send("saveBaseballData", data);
  };
let baseballbridge = {
  saveBaseballData : saveBaseballData
};
contextBridge.exposeInMainWorld("BaseballBridge", baseballbridge);

// =======Bridge for saving Football Data=======
let saveFootballData = (product) => {
    let data = {product};
    console.log(data);
    ipcRenderer.send("saveFootballData", data);
  };
let footballbridge = {
  saveFootballData : saveFootballData
};
contextBridge.exposeInMainWorld("FootballBridge", footballbridge);

// =======Bridge for saving Other Data=======
let saveOtherData = (product) => {
    let data = {product};
    console.log(data);
    ipcRenderer.send("saveOtherData", data);
  };
let otherbridge = {
  saveOtherData : saveOtherData
};
contextBridge.exposeInMainWorld("OtherBridge", otherbridge);


// =======shorter and more effecient way to code bridge========

// contextBridge.exposeInMainWorld("newBridge", {
//   getata: (data) => ipcRenderer.send('getdata', data)
// })

// window.newBridge.getata(data)

// ipcMain.on('getata', (event, data) => {
//   fs.read
// })



// ======rewrite bridge like this, if it runs properly======
// contextBridge.exposeInIsolatedWorld("BasketballAPI", {
//   basketballapi: (data) => ipcRenderer.send('basketballSaveData', data)
// })