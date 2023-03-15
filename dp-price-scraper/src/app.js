// npm install axios;
// npm install cheerio axios;

const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
const { get } = require('http');

const getdpPrice = async (url) => {
    
    await axios.get(url)
        .then((res) => {
            const htmlData = res.data;
            const $ = cheerio.load(htmlData);
            const priceArray = [];

            const $price = $('#ProductPrice-product-template', htmlData).text();
            const price = $price.replaceAll(/\s/g,'');
            priceArray.push(price);

            console.log(price);
            console.log(priceArray)
            // console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
          });
        
}


// TO DO 

    // write get price functions for other websites 
    // Think about maybe including title
    // How to store values? array or maybe object

getdpPrice('https://dandpsportscards.com/collections/new-releases/products/2021-panini-donruss-optic-football-h2-box')
