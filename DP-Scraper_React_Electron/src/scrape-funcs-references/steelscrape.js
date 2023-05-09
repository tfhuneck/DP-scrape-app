const axios = require('axios');
const cheerio = require('cheerio');

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
            }
            console.log($price);
            console.log(price)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
          });    
}
