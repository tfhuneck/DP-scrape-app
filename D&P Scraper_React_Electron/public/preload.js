const { contextBridge, ipcMain, ipcRenderer } = require("electron");
const fs = require('fs');
const path = require('path');

let saveData = (newEntry) => {
    let data = {newEntry};
    console.log(data);
    ipcRenderer.send("saveData", data);
  };

let bridge = {
  saveData : saveData
};
  
contextBridge.exposeInMainWorld("Bridge", bridge);