const puppeteer = require('puppeteer');

async function scrapper(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);


    const [el] = await page.$x('//*[@id="price_inside_buybox"]');
    const txt2 = await el.getProperty('textContent');
    const price = await txt2.jsonValue();


    console.log(price);

    browser.close()
}

scrapper('https://www.amazon.com/Pilot-Precise-Retractable-Ink-5mm-26062/dp/B001E6A9M8/ref=sr_1_1?dchild=1&keywords=pilot&qid=1599915891&sr=8-1');