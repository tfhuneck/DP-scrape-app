const axios = require('axios');
const cheerio = require('cheerio');

const getDavePrice = async (url) => {
    await axios.get(url)
    .then((res) => {
        const htmlData = res.data;
        const $ = cheerio.load(htmlData);
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

