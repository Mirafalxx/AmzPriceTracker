const axios = require('axios').default;
const cheerio = require('cheerio');
// const nodemailer = require('nodemailer');

const url = 'https://www.amazon.com/dp/B07VF88TMR';
const userAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36';

const expectedPrices = {
    new: 2000,
    old: 1500
}

async function main() {
    const response = await axios.get(url, {
        headers: {
            'User-Agent': userAgent
        }
    });
    const html = response.data;
    const $ = cheerio.load(html);
    let priceElementText = $("#priceblock_ourprice").text();
    priceElementText = priceElementText.slice(1).replace(',', '');
    const price = parseFloat(priceElementText);
    console.log(price);


    if (price > expectedPrices.old) console.log('false');
    else console.log('true');
}
async function sendMail() {};

main().catch(console.error);