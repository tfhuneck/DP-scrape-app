const { contextBridge, ipcRenderer } = require("electron");
window.ipcRenderer = ipcRenderer;
const fs = require('fs');
const path = require('path');

// =======Console Logs========
contextBridge.exposeInMainWorld('consoleLogApi', {
  sendConsole: (message) => ipcRenderer.on('asynchronous-message', message)
})

//=====Bridges/Data APIs between Frontend/Render proccess and Backend/Main Process=======
// =======Bridge for saving Basketball Data=======
contextBridge.exposeInMainWorld('saveBasketballApi', {
  saveData: (data) => ipcRenderer.send('saveBasketball', data)
})
// =======Bridge for saving Baseball Data=======
contextBridge.exposeInMainWorld('saveBaseballApi', {
  saveData: (data) => ipcRenderer.send('saveBaseball', data)
})
// =======Bridge for saving Football Data=======
contextBridge.exposeInMainWorld('saveFootballApi', {
  saveData: (data) => ipcRenderer.send('saveFootball', data)
})
// =======Bridge for saving Other Data=======
contextBridge.exposeInMainWorld('saveOtherApi', {
  saveData: (data) => ipcRenderer.send('saveOther', data)
})

//=========Bridges for deleting Data=========
// =======Bridge for saving Basketball Data=======
contextBridge.exposeInMainWorld('deleteBasketballApi', {
  deleteData: (data) => ipcRenderer.send('deleteBasketball', data)
})
// =======Bridge for saving Baseball Data=======
contextBridge.exposeInMainWorld('deleteBaseballApi', {
  deleteData: (data) => ipcRenderer.send('deleteBaseball', data)
})
// =======Bridge for saving Football Data=======
contextBridge.exposeInMainWorld('deleteFootballApi', {
  deleteData: (data) => ipcRenderer.send('deleteFootball', data)
})
// =======Bridge for saving Other Data=======
contextBridge.exposeInMainWorld('deleteOtherApi', {
  deleteData: (data) => ipcRenderer.send('deleteOther', data)
})

// =======Bridge for Reading Json Files========
// ========Bridge for getting Basketball Data=========
contextBridge.exposeInMainWorld('getBasketballApi', {
  getData: (channel, data) => ipcRenderer.invoke('getBasketball', data).then((result) => {
    return result;
  })
})
// ========Bridge for getting Baseball Data=========
contextBridge.exposeInMainWorld('getBaseballApi', {
  getData: (channel, data) => ipcRenderer.invoke('getBaseball', data).then((result) => {
    return result;
  })
})
// ========Bridge for getting Football Data=========
contextBridge.exposeInMainWorld('getFootballApi', {
  getData: (channel, data) => ipcRenderer.invoke('getFootball', data).then((result) => {
    return result;
  })
})
// ========Bridge for getting Other Data=========
contextBridge.exposeInMainWorld('getOtherApi', {
  getData: (channel, data) => ipcRenderer.invoke('getOther', data).then((result) => {
    return result;
  })
})
// ========Bridge for getting Scraped Basketball Price Data=========
contextBridge.exposeInMainWorld('getBasketballPriceApi', {
  getData: (channel, data) => ipcRenderer.invoke('getBasketballPrice', data).then((result) => {
    return result;
  })
})
// ========Bridge for getting Scraped Baseball Price Data=========
contextBridge.exposeInMainWorld('getBaseballPriceApi', {
  getData: (channel, data) => ipcRenderer.invoke('getBaseballPrice', data).then((result) => {
    return result;
  })
})
// ========Bridge for getting Scraped Football Price Data=========
contextBridge.exposeInMainWorld('getFootballPriceApi', {
  getData: (channel, data) => ipcRenderer.invoke('getFootballPrice', data).then((result) => {
    return result;
  })
})
// ========Bridge for getting Scraped Other Price Data=========
contextBridge.exposeInMainWorld('getOtherPriceApi', {
  getData: (channel, data) => ipcRenderer.invoke('getOtherPrice', data).then((result) => {
    return result;
  })
})

// ========Bridge for calling scrapes=======
//===========Scraping Basketball===========
contextBridge.exposeInMainWorld('scrapeBasketballApi', {
  scrapeBasketball: () => ipcRenderer.invoke('scrapebasketball').then((result) => {
    return result;
  })
})
//===========Scraping Basketball===========
contextBridge.exposeInMainWorld('scrapeBaseballApi', {
  scrapeBaseball: () => ipcRenderer.invoke('scrapebaseball').then((result) => {
    return result;
  })
})
//===========Scraping Basketball===========
contextBridge.exposeInMainWorld('scrapeFootballApi', {
  scrapeFootball: () => ipcRenderer.invoke('scrapefootball').then((result) => {
    return result;
  })
})
//===========Scraping Basketball===========
contextBridge.exposeInMainWorld('scrapeOtherApi', {
  scrapeOther: () => ipcRenderer.invoke('scrapeother').then((result) => {
    return result;
  })
})
//===========Scraping Basketball===========
contextBridge.exposeInMainWorld('scrapeAllApi', {
  scrapeAll: () => ipcRenderer.invoke('scrapeall').then((result) => {
    return result;
  })
})

// =============Printing to PDF and Saving Data=========
//==============Printing Basketball================
contextBridge.exposeInMainWorld('printBasketballApi', {
  printData: () => ipcRenderer.send('printBasketball')
})
//==============Printing Baseball================
contextBridge.exposeInMainWorld('printBaseballApi', {
  printData: () => ipcRenderer.send('printBaseball')
})
//==============Printing Baseball================
contextBridge.exposeInMainWorld('printFootballApi', {
  printData: () => ipcRenderer.send('printFootball')
})
//==============Printing Baseball================
contextBridge.exposeInMainWorld('printOtherApi', {
  printData: () => ipcRenderer.send('printOther')
})

// ============Sending CSV data to Main===========
// ============Sending Basketball CSV data=============
contextBridge.exposeInMainWorld('saveBasketballCsvApi', {
  sendCsv: (data) => ipcRenderer.send('sendBasketballCsv', data) 
})
// ============Sending Baseball CSV data=============
contextBridge.exposeInMainWorld('saveBaseballCsvApi', {
  sendCsv: (data) => ipcRenderer.send('sendBaseballCsv', data) 
})
// ============Sending Football CSV data=============
contextBridge.exposeInMainWorld('saveFootballCsvApi', {
  sendCsv: (data) => ipcRenderer.send('sendFootballCsv', data) 
})
// ============Sending Other CSV data=============
contextBridge.exposeInMainWorld('saveOtherCsvApi', {
  sendCsv: (data) => ipcRenderer.send('sendOtherCsv', data) 
})

// =============Printing to CSV and Saving Data=========
//==============Printing Basketball================
contextBridge.exposeInMainWorld('printBasketballCsvApi', {
  printData: () => ipcRenderer.send('printBasketballCsv')
})
//==============Printing Baseball================
contextBridge.exposeInMainWorld('printBaseballCsvApi', {
  printData: () => ipcRenderer.send('printBaseballCsv')
})
//==============Printing Baseball================
contextBridge.exposeInMainWorld('printFootballCsvApi', {
  printData: () => ipcRenderer.send('printFootballCsv')
})
//==============Printing Baseball================
contextBridge.exposeInMainWorld('printOtherCsvApi', {
  printData: () => ipcRenderer.send('printOtherCsv')
})

//==============Printing Selected Data==================
//===============Get Selected Data to Filter==============
contextBridge.exposeInMainWorld('getSelectedApi', {
  getData: (channel, data) => ipcRenderer.invoke('getSelected', data).then((result) => {
    return result;
  })
})
//==============Printing Selected Basketball PDF================
contextBridge.exposeInMainWorld('printSelectedBasketballApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedBasketball', data)
})
//==============Printing Selected Baseball PDF================
contextBridge.exposeInMainWorld('printSelectedBaseballApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedBaseball', data)
})
//==============Printing Selected Football PDF================
contextBridge.exposeInMainWorld('printSelectedFootballApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedFootball', data)
})
//==============Printing Selected Other PDF================
contextBridge.exposeInMainWorld('printSelectedOtherApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedOther', data)
})

// ============Sending Selected CSV data to Main===========
// ============Sending Basketball CSV data=============
contextBridge.exposeInMainWorld('selectedBasketballCsvApi', {
  sendCsv: (data) => ipcRenderer.send('selectedBasketballCsv', data) 
})
// ============Sending Baseball CSV data=============
contextBridge.exposeInMainWorld('selectedBaseballCsvApi', {
  sendCsv: (data) => ipcRenderer.send('selectedBaseballCsv', data) 
})
// ============Sending Football CSV data=============
contextBridge.exposeInMainWorld('selectedFootballCsvApi', {
  sendCsv: (data) => ipcRenderer.send('selectedFootballCsv', data) 
})
// ============Sending Other CSV data=============
contextBridge.exposeInMainWorld('selectedOtherCsvApi', {
  sendCsv: (data) => ipcRenderer.send('selectedOtherCsv', data) 
})
//==============Printing Selected Basketball CSV================
contextBridge.exposeInMainWorld('printSelectedBasketballCsvApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedBasketballCsv', data)
})
//==============Printing Selected Baseball CSV================
contextBridge.exposeInMainWorld('printSelectedBaseballCsvApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedBaseballCsv', data)
})
//==============Printing Selected Football CSV================
contextBridge.exposeInMainWorld('printSelectedFootballCsvApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedFootballCsv', data)
})
//==============Printing Selected Other CSV================
contextBridge.exposeInMainWorld('printSelectedOtherCsvApi', {
  printData: (channel, data) => ipcRenderer.send('printSelectedOtherCsv', data)
})


// ==================Backup all Data===================
contextBridge.exposeInMainWorld('BackupApi', {
  backupData: () => ipcRenderer.send('Backup')
})

//==================Recover Data==================
contextBridge.exposeInMainWorld('RecoverBasketballApi', {
  upload: (data) => ipcRenderer.send('RecoverBasketball', data)
})
contextBridge.exposeInMainWorld('RecoverBaseballApi', {
  upload: (data) => ipcRenderer.send('RecoverBaseball', data)
})
contextBridge.exposeInMainWorld('RecoverFootballApi', {
  upload: (data) => ipcRenderer.send('RecoverFootball', data)
})
contextBridge.exposeInMainWorld('RecoverOtherApi', {
  upload: (data) => ipcRenderer.send('RecoverOther', data)
})