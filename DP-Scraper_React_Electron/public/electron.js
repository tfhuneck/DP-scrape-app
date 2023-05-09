const electron = require('electron');
const { app, BrowserWindow,  ipcMain } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
const fs = require ('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const chromedriver = require('chromedriver');
const {Builder, By, Key,} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); 

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

//==========Scraping Basketball Prices=============
ipcMain.on('scrapebasketball', (event, arg) => {
    scrape("./src/json/basketballdata.json", "./src/json/basketballscraped.json")
})


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
    const price = $price.replaceAll(/\s/g,'');
    console.log(price);
    dandpPrices.push(price);    
  })
  .catch(function (error) {
      // handle error
      console.log(error);
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
        // const price = $price.split();
    console.log(price);
    blowoutPrices.push(price); 
    }) 
  .catch(function (error) {
      // handle error
      console.log(error);
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
    const price = $price.replaceAll(/\s/g,'');
    console.log(price);
    davePrices.push(price);
  })
  .catch(function (error) {
      // handle error
      console.log(error);
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
    const price = $price.split('$');
    // priceArray.push($price);
    if (price.length >=2 ) {
        price.splice(1,1);
        console.log(price)
        steelPrices.push(price);
    }else{
      console.log(price)
      steelPrices.push(price);
    }
  })
  .catch(function (error) {
      // handle error
      console.log(error);
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
    const price = $price.replaceAll(/\s/g,'');
    console.log(price);
    rbiPrices.push(price);
  })
  .catch(function (error) {
      // handle error
      console.log(error);
  })
  .finally(function () {
      // always executed
    });    
}
//============executing Scrapes============
async function executeScrape() {
    for (let i = 0; i < dandpUrls.length; i++) { 
      await getDPPrice(dandpUrls[i])
    };
    // for (let i = 0; i < blowoutUrls.length; i++) { 
    //   await getBlowoutPrice(blowoutUrls[i])  
    // };
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
    console.log(names, dandpPrices, blowoutPrices, davePrices, steelPrices, rbiPrices);
    for(let i = 0; i < names.length; i++) {
      let prices ={
       name: names[i],
       dandp: dandpPrices[i],
       blowout: blowoutPrices[i],
       dave: davePrices[i],
       steel: steelPrices[i],
       rbi: rbiPrices[i],
      }
      console.log(prices);
      products.push(prices)
      let pricesStr = JSON.stringify(products);
      fs.writeFileSync(output, pricesStr);
      console.log('Data Saved');
     }
  }
  executeScrape();
}