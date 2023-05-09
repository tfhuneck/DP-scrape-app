const axios = require('axios');
const cheerio = require('cheerio');
const fs = require ('fs');


const data = JSON.parse(fs.readFileSync("./json/basketballdata.json"));
console.log(data);
const urls = [];
data.map((i, key) => {
    let dandpurl = i.dandp;
    urls.push(dandpurl)
})
console.log(urls);

const prices = []

export const getDPPrice = async (url) => {
    
    await axios.get(url)
    .then((res) => {
        const htmlData = res.data;
        const $ = cheerio.load(htmlData);
        const $price = $('#ProductPrice-product-template', htmlData).text();
        const price = $price.replaceAll(/\s/g,'');
        prices.push(price)
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
        console.log(prices)
        });    
}

