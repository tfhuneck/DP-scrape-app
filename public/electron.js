const electron = require('electron');
const { dialog } = require('electron')
const { app, BrowserWindow,  ipcMain } = electron;
const path = require('path');
const url = require('url');
const isDev = require('electron-is-dev');
const fs = require ('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const chromedriver = require('chromedriver');
const {Builder, By, Key,} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); 
const os = require('os');

//==========Comand for win32 app==========
if (require('electron-squirrel-startup')) app.quit();

//==========Core Electron function loading & closing App================
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
      enableRemoteModule:true,
      preload: path.join(__dirname, "./preload.js")
    }, 
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  // mainWindow.loadFile(path.join(__dirname, "../build/index.html"));
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

//============Deleting selected Item from file========
const deleteData = (destination, data) => {
  const readData = fs.readFileSync(destination);
  const parsedData = JSON.parse(readData);
  console.log(data)
  console.log(parsedData)
  const filtered = parsedData.filter((el) => {
    return data.some((f) => {
      return el.name !== f.name;
    })
  })
  console.log(filtered);
  const dataStr = JSON.stringify(filtered);
  fs.writeFileSync(destination, dataStr);
  console.log("Item Deleted"); 
}

// =======Save Basketball Data============
ipcMain.on("saveBasketball", (event, data) => {
   saveData(path.join(__dirname,"../src/json/basketballdata.json"), data);
});
// =======Save Baseball Data============
ipcMain.on("saveBaseball", (event, data) => {
   saveData(path.join(__dirname,"../src/json/baseballdata.json"), data); 
});
// =======Save Football Data============
ipcMain.on("saveFootball", (event, data) => {
    saveData(path.join(__dirname,"../src/json/footballdata.json"), data);
});
// =======Save Other Data============
ipcMain.on("saveOther", (event, data) => {
   saveData(path.join(__dirname,"../src/json/otherdata.json"), data);
});

//===========Delete Items in Data Editor=========
// =======delete Basketball Data============
ipcMain.on("deleteBasketball", (event, data) => {
  deleteData(path.join(__dirname,"../src/json/basketballdata.json"), data);
});
// =======delete Baseball Data============
ipcMain.on("deleteBaseball", (event, data) => {
  deleteData(path.join(__dirname,"../src/json/baseballdata.json"), data); 
});
// =======delete Football Data============
ipcMain.on("deleteFootball", (event, data) => {
   deleteData(path.join(__dirname,"../src/json/footballdata.json"), data);
});
// =======delete Other Data============
ipcMain.on("deleteOther", (event, data) => {
  deleteData(path.join(__dirname,"../src/json/otherdata.json"), data);
});

// =========Read Data from JSON files and send to UI============
//=========Get Basketball data==========
ipcMain.handle('getBasketball', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/basketballdata.json")));
  return response;
})
//=========Get Baseball data==========
ipcMain.handle('getBaseball', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/baseballdata.json")));
  return response;
})
//=========Get Football data==========
ipcMain.handle('getFootball', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/footballdata.json")));
  return response;
})
//=========Get Other data==========
ipcMain.handle('getOther', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/otherdata.json")));
  return response;
})
//=========Get Scraped Basketball Price data==========
ipcMain.handle('getBasketballPrice', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/basketballscraped.json")));
  return response;
})
//=========Get Scraped Baseball Price data==========
ipcMain.handle('getBaseballPrice', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/baseballscraped.json")));
  return response;
})
//=========Get Scraped Football Price data==========
ipcMain.handle('getFootballPrice', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/footballscraped.json")));
  return response;
})
//=========Get Scraped Other Price data==========
ipcMain.handle('getOtherPrice', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname,"../src/json/otherscraped.json")));
  return response;
})

//============Scraping Functions=============
//==========Scraping Basketball Prices=============
ipcMain.handle('scrapebasketball', async (event, arg) => {
  await scrape(path.join(__dirname, "../src/json/basketballdata.json"), path.join(__dirname, "../src/json/basketballscraped.json"))
  return 'The Scrape is Complete. Basketball Price Data was updated.' 
});
//==========Scraping Baseball Prices=============
ipcMain.handle('scrapebaseball', async (event, arg) => {
  await scrape(path.join(__dirname, "../src/json/baseballdata.json"), path.join(__dirname, "../src/json/baseballscraped.json"))
  return 'The Scrape is Complete. Baseball Price Data was updated.' 
});
//==========Scraping Football Prices=============
ipcMain.handle('scrapefootball', async (event, arg) => {
  await scrape(path.join(__dirname, "../src/json/footballdata.json"), path.join(__dirname, "../src/json/footballscraped.json"))
  return 'The Scrape is Complete. Football Price Data was updated.' 
});
//==========Scraping Other Prices=============
ipcMain.handle('scrapeother', async (event, arg) => {
  await scrape(path.join(__dirname, "../src/json/otherdata.json"), path.join(__dirname, "../src/json/otherscraped.json"))
  return 'The Scrape is Complete. Other Price Data was updated.' 
});
//==========Scraping All Prices=============
ipcMain.handle('scrapeall', async (event, arg) => {
  await scrape(path.join(__dirname, "../src/json/basketballdata.json"), path.join(__dirname, "../src/json/basketballscraped.json"))
  await scrape(path.join(__dirname, "../src/json/baseballdata.json"), path.join(__dirname, "../src/json/baseballscraped.json"))
  await scrape(path.join(__dirname, "../src/json/footballdata.json"), path.join(__dirname, "../src/json/footballscraped.json"))
  await scrape(path.join(__dirname, "../src/json/otherdata.json"), path.join(__dirname, "../src/json/otherscraped.json"))
  return 'All Scrapes are Complete. All Price Data was updated.)' 
});

//=========Main Scrape function===========
async function scrape(input, output) {
  const data = JSON.parse(fs.readFileSync(input));
  const names =[];
  const products = [];
  const dandpUrls = [];
  const blowoutUrls = [];
  const daveUrls = [];
  const steelUrls = [];
  const rbiUrls = [];
  const dandpPrices = [];
  const blowoutPrices = [];
  const davePrices = [];
  const steelPrices = [];
  const rbiPrices = [];
//==========Mapping url data for scrape========
  data.map((i, key) => {
    let pname = i.name;
    names.push(pname)
  });
  data.map((i, key) => {
    let dandpurl = i.dandp;
    dandpUrls.push(dandpurl)
  });
  data.map((i, key) => {
    let blowouturl = i.blowout;
    blowoutUrls.push(blowouturl)
  });
  data.map((i, key) => {
    let daveurl = i.dave;
    daveUrls.push(daveurl)
  });
  data.map((i, key) => {
    let steelurl = i.steel;
    steelUrls.push(steelurl)
  });
  data.map((i, key) => {
    let rbiurl = i.rbi;
    rbiUrls.push(rbiurl)
  });
//==========Scraping Scripts==========
//============D&p Scrape=========
const getDPPrice = async (url) => {
  await axios.get(url)
  .then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);
    const $price = $('#ProductPrice-product-template', htmlData).text();
    const price = $price.replaceAll(/\s|,/g,'');
    mainWindow.webContents.send('asynchronous-message', 'D&P Cards price: ' + price);
    dandpPrices.push(price);    
  })
  .catch(function (error) {
      // handle error
      mainWindow.webContents.send('asynchronous-message', 'D&P Scrape Error: ' + error);
      dandpPrices.push('-'); 
  })
  .finally(function () {
      // always executed
    });    
}
//==========Blowout Scrape=========
const getBlowoutPrice = async (url) => {
  let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
  await driver.get(url)
  .then(async () => {
    let $price = await driver.findElement(By.className('price-box'));
    let price = await $price.findElement(By.className('price')).getText();
    const formatPrice = price.replaceAll(/,/g,'');
        // const price = $price.split();
    mainWindow.webContents.send('asynchronous-message', 'Blowout Cards Price: ' + price);
    blowoutPrices.push(formatPrice); 
    }) 
  .catch(function (error) {
      // handle error
      mainWindow.webContents.send('asynchronous-message', 'Blowout Cards Error: ' + error);
      blowoutPrices.push('-');
  })
  .finally(async() => {
      await driver.quit()
  });   
}
//=============Dave&Adams Scrape=========
const getDavePrice = async (url) => {
  await axios.get(url)
  .then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);
    const $price = $('table.item-pricing', htmlData).find('strong.price').text();
    const price = $price.replaceAll(/\s|,/g,'');
    mainWindow.webContents.send('asynchronous-message', 'Dave & Adams Price: ' + price);
    davePrices.push(price);
  })
  .catch(function (error) {
      // handle error
      mainWindow.webContents.send('asynchronous-message', 'Dave & Adams Error: ' + error);
      davePrices.push('-');
  })
  .finally(function () {
      // always executed
      });    
}
//=============Steel City Scrape=============
const getSteelPrice = async (url) => {
  await axios.get(url)
  .then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);
    const $price = $('.p-price', htmlData).children('span').text();
    const formatPrice = $price.replaceAll(/,/g,'');
    const price = formatPrice.split('$');
    // priceArray.push($price);
    if (price.length >=2 ) {
        price.splice(1,1);
        let priceFinal = '$' + price
        mainWindow.webContents.send('asynchronous-message', 'Steel City Collectibles Price: ' + priceFinal)
        steelPrices.push(priceFinal);
    }else{
      let priceFinal = '$' + price
      mainWindow.webContents.send('asynchronous-message', 'Steel City Collectibles Price: ' + priceFinal)
      steelPrices.push(priceFinal);
    }
  })
  .catch(function (error) {
      // handle error
      mainWindow.webContents.send('asynchronous-message', 'Steel City Collectibles Error: ' + error);
      steelPrices.push('-')
  })
  .finally(function () {
      // always executed
    });    
}
//===============RBICru7 Scrape==============
const getRbiPrice = async (url) => {
  await axios.get(url)
  .then((res) => {
    const htmlData = res.data;
    const $ = cheerio.load(htmlData);
    const $price = $('#ProductPrice-product-template', htmlData).text();
    const price = $price.replaceAll(/\s|,/g,'');
    mainWindow.webContents.send('asynchronous-message', 'RBI Cru7 Price: ' + price);
    rbiPrices.push(price);
  })
  .catch(function (error) {
      // handle error
      mainWindow.webContents.send('asynchronous-message', 'RBI Cru7 Error: ' + error);
      rbiPrices.push('-');
  })
  .finally(function () {
      // always executed
    });    
}
//============executing Scrapes============
async function executeScrape() {
    for (let i = 0; i < blowoutUrls.length; i++) { 
      await getBlowoutPrice(blowoutUrls[i])  
    };
    for (let i = 0; i < dandpUrls.length; i++) { 
      await getDPPrice(dandpUrls[i])
    };
    for (let i = 0; i < daveUrls.length; i++) {
      await getDavePrice(daveUrls[i])
    };
    for (let i = 0; i < steelUrls.length; i++) {
      await getSteelPrice(steelUrls[i])
    };
    for (let i = 0; i < rbiUrls.length; i++) {
      await getRbiPrice(rbiUrls[i])
    };
  //===========Using For Loop to save Data to Scraped Json FIle==============
  mainWindow.webContents.send('asynchronous-message', names + dandpPrices + blowoutPrices + davePrices + steelPrices + rbiPrices);
    for(let i = 0; i < names.length; i++) {
      let prices ={
       name: names[i],
       dandp: dandpPrices[i],
       blowout: blowoutPrices[i],
       dave: davePrices[i],
       steel: steelPrices[i],
       rbi: rbiPrices[i],
      }
      // mainWindow.webContents.send('asynchronous-message', prices);
      products.push(prices)
      let pricesStr = JSON.stringify(products);
      fs.writeFileSync(output, pricesStr);
      mainWindow.webContents.send('asynchronous-message', 'Data Saved');
     }
  }
await executeScrape()
 .then(res => mainWindow.webContents.send('asynchronous-message', 'scrape complete'))
 .catch((error) => mainWindow.webContents.send('asynchronous-message', error))
}

//=====================Printing Data to PDF======================
const printToPdf = async (url, fileName) => {
  const win = new BrowserWindow({
    width: 900,
    height: 900,
    maximized: false,
    title: "Print to PDF",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js")
    }, 
  });
  const htmlPath = path.join(__dirname, url)
  const pdfPath = path.join(os.homedir(), 'Desktop', fileName)
  await win.loadFile(htmlPath)
  .then(() => { setTimeout(() => {
    win.webContents.printToPDF({}).then(data =>{
          fs.writeFile(pdfPath, data, (error) => {
          console.log('Write PDF succesfully');
          dialog.showErrorBox(fileName,'saved to Desktop');
        })
    })}, 2000)
  }) 
};

//=====================Printing Data to CSV======================
const printToCsv = async (url, fileName, dataApi) => {
  const win = new BrowserWindow({
    width: 900,
    height: 900,
    maximized: false,
    title: "Print to CSV",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "./preload.js")
    }, 
  });
  const htmlPath = path.join(__dirname, url);
  const csvPath = path.join(os.homedir(), 'Desktop', fileName);
  await win.loadFile(htmlPath)
  .then(() => { ipcMain.on(dataApi, (event, data) => {
      setTimeout(() => {
      fs.writeFile(csvPath, data, (error) => {
        console.log('Write CSV succesfully');
        dialog.showErrorBox(fileName,'saved to Desktop');
      })
    }, 2000) 
  })})
};

// ================Printing to PDF================
// =================Printing Basketball=============
ipcMain.on('printBasketball', async () => {
  printToPdf('../src/printBasketball.html','Basketball_Prices.pdf')
});
// =================Printing Baseball=============
ipcMain.on('printBaseball', async () => {
  printToPdf('../src/printBaseball.html','Baseball_Prices.pdf')
});
// =================Printing Football=============
ipcMain.on('printFootball', async () => {
  printToPdf('../src/printFootball.html','Football_Prices.pdf')
});
// =================Printing Other=============
ipcMain.on('printOther', async () => {
  printToPdf('../src/printOther.html','Other_Prices.pdf')
});

// ================Printing to CSV================
// =================Printing Basketball=============
ipcMain.on('printBasketballCsv', async () => {
  printToCsv('../src/printBasketball.html','Basketball_Prices.csv', 'sendBasketballCsv')
});
// =================Printing Baseball=============
ipcMain.on('printBaseballCsv', async () => {
  printToCsv('../src/printBaseball.html','Baseball_Prices.csv', 'sendBaseballCsv')
});
// =================Printing Football=============
ipcMain.on('printFootballCsv', async () => {
  printToCsv('../src/printFootball.html','Football_Prices.csv', 'sendFootballCsv')
});
// =================Printing Other=============
ipcMain.on('printOtherCsv', async () => {
  printToCsv('../src/printOther.html','Other_Prices.csv', 'sendOtherCsv')
});

//==================Print Selected==================
// =================Get Selected Data to Filter=============
ipcMain.handle('getSelected', (event, arg) => {
  const response = JSON.parse(fs.readFileSync(path.join(__dirname, "../src/json/selectedData.json")));
  return response;
})
// =================Printing Selected Function PDF=============
const printSelected = (data, pricedata, printUrl, printPdf) => {
  const readData = fs.readFileSync(pricedata);
  const parsedData = JSON.parse(readData);
  console.log(data)
  // console.log(parsedData)
    let selected = parsedData.filter((el) => {
      return data.some((f) => {
        return el.name == f;
      }) 
    })
  console.log(selected)
  let dataStr = JSON.stringify(selected)
  fs.writeFileSync(path.join(__dirname,"../src/json/selectedData.json"), dataStr)
  printToPdf(printUrl, printPdf);
}
//=====================Print Selected Basketball PDF==================
ipcMain.on('printSelectedBasketball', (event, data) => {
  printSelected(data, path.join(__dirname,'../src/json/basketballscraped.json'), '../src/printSelectedBasketball.html', 'Selected_Pricelist_Basketball.pdf')
});
//=====================Print Selected Baseball PDF==================
ipcMain.on('printSelectedBaseball', (event, data) => {
  printSelected(data, path.join(__dirname,'../src/json/baseballscraped.json'), '../src/printSelectedbaseball.html', 'Selected_Pricelist_Baseball.pdf')
});
//=====================Print Selected Football PDF==================
ipcMain.on('printSelectedFootball', (event, data) => {
  printSelected(data, path.join(__dirname,'../src/json/footballscraped.json'), '../src/printSelectedFootball.html', 'Selected_Pricelist_Football.pdf')
});
//=====================Print Selected Other PDF==================
ipcMain.on('printSelectedOther', (event, data) => {
  printSelected(data, path.join(__dirname,'../src/json/otherscraped.json'), '../src/printSelectedOther.html', 'Selected_Pricelist_Other.pdf')
});

// =================Export selection to CSV=================
// =================Printing Selected Function CSV=============
const printSelectedCsv = (data, pricedata, printUrl, printCsv, dataApi) => {
  const readData = fs.readFileSync(pricedata);
  const parsedData = JSON.parse(readData);
  console.log(data)
  // console.log(parsedData)
    let selected = parsedData.filter((el) => {
      return data.some((f) => {
        return el.name == f;
      }) 
    })
  console.log(selected)
  let dataStr = JSON.stringify(selected)
  fs.writeFileSync(path.join(__dirname,"../src/json/selectedData.json"), dataStr)
  printToCsv(printUrl, printCsv, dataApi);
}
//=====================Print Selected Basketball CSV==================
ipcMain.on('printSelectedBasketballCsv', (event, data) => {
  printSelectedCsv(data, path.join(__dirname,'../src/json/basketballscraped.json'), '../src/printSelectedBasketball.html', 'Selected_Pricelist_Basketball.csv', 'selectedBasketballCsv')
});
//=====================Print Selected Baseball CSV==================
ipcMain.on('printSelectedBaseballCsv', (event, data) => {
  printSelectedCsv(data, path.join(__dirname,'../src/json/baseballscraped.json'), '../src/printSelectedbaseball.html', 'Selected_Pricelist_Baseball.csv', 'selectedBaseballCsv')
});
//=====================Print Selected Football CSV==================
ipcMain.on('printSelectedFootballCsv', (event, data) => {
  printSelectedCsv(data, path.join(__dirname,'../src/json/footballscraped.json'), '../src/printSelectedFootball.html', 'Selected_Pricelist_Football.csv', 'selectedFootballCsv')
});
//=====================Print Selected Other CSV==================
ipcMain.on('printSelectedOtherCsv', (event, data) => {
  printSelectedCsv(data, path.join(__dirname,'../src/json/otherscraped.json'), '../src/printSelectedOther.html', 'Selected_Pricelist_Other.csv', 'selectedOtherCsv')
});


//===================Back Up All Data=============
ipcMain.on('Backup', () => {
  const backupPath = (fileName) => {
    const filepath = path.join(os.homedir(), 'Desktop', 'Price-Scraper-Backup', fileName)
    return filepath;
  }
  const dir = path.join(os.homedir(), 'Desktop', 'Price-Scraper-Backup',)
  const basketball = fs.readFileSync(path.join(__dirname,"../src/json/basketballdata.json"));
  const baseball = fs.readFileSync(path.join(__dirname,"../src/json/baseballdata.json"));
  const football = fs.readFileSync(path.join(__dirname,"../src/json/footballdata.json"));
  const other = fs.readFileSync(path.join(__dirname,"../src/json/otherdata.json"));
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }
  fs.writeFileSync(backupPath('basketballdata.json'), basketball);
  fs.writeFileSync(backupPath('baseballdata.json'), baseball);
  fs.writeFileSync(backupPath('footballdata.json'), football);
  fs.writeFileSync(backupPath('otherdata.json'), other);
});

//======================Recover Data=================
ipcMain.on('RecoverBasketball', (event, data) => {
  const dataStr = JSON.stringify(data)
  fs.writeFileSync(path.join(__dirname,"../src/json/basketballdata.json"), dataStr);
});
ipcMain.on('RecoverBaseball', (event, data) => {
  const dataStr = JSON.stringify(data)
  fs.writeFileSync(path.join(__dirname,"../src/json/baseballdata.json"), dataStr);
});
ipcMain.on('RecoverFootball', (event, data) => {
  const dataStr = JSON.stringify(data)
  fs.writeFileSync(path.join(__dirname,"../src/json/footballdata.json"), dataStr);
});
ipcMain.on('RecoverOther', (event, data) => {
  const dataStr = JSON.stringify(data)
  fs.writeFileSync(path.join(__dirname,"../src/json/otherdata.json"), dataStr);
});
