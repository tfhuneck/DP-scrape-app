const fs = require('fs');

const {Builder, By, Key, until} = require('selenium-webdriver');

// const   webdriver = require("selenium-webdriver"), 
//         By = webdriver.By, 
//         until = webdriver.until;
chrome = require('selenium-webdriver/chrome');


const screen = {
    width: 640,
    height: 480
  };
  
let driver = new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options().headless())//.windowSize(screen))
      //.setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
      .build();






// const driver = new webdriver.Builder().forBrowser('chrome').build();


// works !
// driver.get(dnpcardsUrl);
// driver.findElement(By.css('.product-single__price')).getText().then(txt=>{
//     console.log("the text of button is : " + txt)
//     fs.writeFile('test.txt', txt, err => {
//         if (err) throw err;
//         console.log(err);
//     })
// });

let getProductPrice = (url, className) => {
    driver.get(url);
    driver.findElement(By.css(className)).getText().then(price=>{
        console.log("the text of button is : " + price)
        const result = {
            "url": url,
            "price": price
        }
        // return txt;
        fs.writeFile('test.json', JSON.stringify(result), err => {
            if (err) throw err;
            console.log(err);
        })
    });
}
const   dnpcardsUrl = "https://dandpsportscards.com/products/2020-topps-update-series-baseball-jumbo-box-presale",
        dnpcardsClassName = '.product-single__price',

        blowoutUrl = "https://www.blowoutcards.com/2020-topps-update-series-baseball-jumbo-box.html",
        blowoutClassName = ".price-box",

        steelcityUrl = "https://www.steelcitycollectibles.com/i/2020-topps-update-series-baseball-hta-hobby-jumbo-box",
        steelcityClassName = ".p-price",

        daveadamsUrl = "https://www.dacardworld.com/sports-cards/2020-topps-update-series-baseball-hobby-jumbo-box",
        daveadamsClassName = ".pricing",

        ribcru7Url = "https://rbicru7.com/products/2020-topps-series-2-jumbo-baseball-box?_pos=1&_sid=4e981342d&_ss=r",
        ribcru7ClassName = ".product-single__price"
        urls = [
            dnpcardsUrl,
            blowoutUrl,
            steelcityUrl,
            daveadamsUrl,
            ribcru7Url
        ]



//testing 
// getProductPrice(dnpcardsUrl, dnpcardsClassName);
// getProductPrice(blowoutUrl, blowoutClassName);
// getProductPrice(steelcityUrl, steelcityClassName);
// getProductPrice(daveadamsUrl, daveadamsClassName);
getProductPrice(ribcru7Url, ribcru7ClassName);
