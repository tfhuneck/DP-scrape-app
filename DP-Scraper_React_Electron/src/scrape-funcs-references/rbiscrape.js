const axios = require('axios');
const cheerio = require('cheerio');

const getRbiPrice = async (url) => {
    await axios.get(url)
        .then((res) => {
            const htmlData = res.data;
            const $ = cheerio.load(htmlData);
            const $price = $('#ProductPrice-product-template', htmlData).text();
            const price = $price.replaceAll(/\s/g,'')
            console.log($price)
            console.log(price);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
          });    
}

