
const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const chromedriver = require('chromedriver');
const {Builder, By, Key,} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome'); 
    

getBlowoutPrice = async (url) => {
 
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

getBlowoutPrice('https://www.blowoutcards.com/2021-panini-donruss-football-blaster-box.html')
getBlowoutPrice('https://www.blowoutcards.com/2021-22-panini-nba-hoops-basketball-blaster-box.html')


const getDPPrice = async (url) => {
    
    await axios.get(url)
        .then((res) => {
            const htmlData = res.data;
            const $ = cheerio.load(htmlData);
            const priceArray = [];

            const $price = $('#ProductPrice-product-template', htmlData).text();
            const price = $price.replaceAll(/\s/g,'').replace('$', '');
            priceArray.push(price);

            console.log(price);
            console.log(priceArray)
            // console.log(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
          });    
}


getDPPrice('https://dandpsportscards.com/collections/new-releases/products/2021-panini-donruss-optic-football-h2-box')


const getSteelPrice = async (url) => {
    
    await axios.get(url)
        .then((res) => {
            const htmlData = res.data;
            const $ = cheerio.load(htmlData);
            const priceArray = [];

            const $price = $('.p-price', htmlData).children('span').text();
            const price = $price.split('$');
            // priceArray.push($price);
            
            if (price.length >=2 ) {
                price.splice(1,1);
            }

            console.log($price);
            // console.log(priceArray)
            console.log(price)
            // console.log(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
          });    
}

getSteelPrice('https://www.steelcitycollectibles.com/i/2019-panini-victory-lane-racing-blaster-box');
getSteelPrice('https://www.steelcitycollectibles.com/i/2018-19-panini-certified-basketball-hobby-box');
getSteelPrice('https://www.steelcitycollectibles.com/i/2022-panini-prizm-football-hobby-box');
getSteelPrice('https://www.steelcitycollectibles.com/i/2021-22-panini-chronicles-draft-picks-collegiate-basketball-hobby-16-box-case');

const getDavePrice = async (url) => {
    
    await axios.get(url)
        .then((res) => {
            const htmlData = res.data;
            const $ = cheerio.load(htmlData);
            const priceArray = [];

            const $price = $('table.item-pricing', htmlData).find('strong.price').text();
            const price = $price.replaceAll(/\s/g,'').replace('$', '');
            // priceArray.push(price);

            console.log($price)
            console.log(price);
            // console.log(priceArray)
            // console.log(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
          });    
}

getDavePrice('https://www.dacardworld.com/sports-cards/2022-23-panini-prizm-draft-basketball-hobby-box');
getDavePrice('https://www.dacardworld.com/sports-cards/2020-21-panini-flux-basketball-asia-tmall-box');


const getRbiPrice = async (url) => {
    
    await axios.get(url)
        .then((res) => {
            const htmlData = res.data;
            const $ = cheerio.load(htmlData);
            const priceArray = [];

            const $price = $('#ProductPrice-product-template', htmlData).text();
            const price = $price.replaceAll(/\s/g,'').replace('$', '');
            priceArray.push(price);

            console.log($price)
            console.log(price);
            console.log(priceArray)
            // console.log(res.data);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
          });    
}

getRbiPrice('https://rbicru7.com/collections/nba-basketball/products/presell-2022-23-donruss-elite-basketball-hobby-box-releases-3-15')




// const getBlowoutPrice = async (url) => {
    
//     await axios.get(url, {
//         headers: {
//           'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0'
//         //   'Mozilla/5.0 (platform; rv:geckoversion) Gecko/geckotrail Firefox/firefoxversion'
//         //   'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
//         }
//       })
//         .then((res) => {
//             const htmlData = res.data;
//             const $ = cheerio.load(htmlData);
//             const priceArray = [];

//             const $price = $('.product-type-data', htmlData).find('.price').text();
//             // const price = $price.replaceAll(/\s/g,'');
//             priceArray.push($price);

//             // console.log($price);
//             // console.log(priceArray)
//             console.log(res.data);
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//             console.log('FAILED');
//         })
//         .finally(function () {
//             // always executed
//           });    
// }





// TO DO 

    // write get price functions for other websites 
    // Think about maybe including title
    // How to store values? array or maybe object


