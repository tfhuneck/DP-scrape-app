const chromedriver = require('chromedriver');
const {Builder, By, Key,} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); 

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
            }) 
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(async() => {
        await driver.quit()
    });   
}
