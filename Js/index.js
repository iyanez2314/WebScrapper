const puppeteer = require('puppeteer');
const cheerio = require('cheerio');
const axios = require('axios');


const url = 'https://careers.microsoft.com/us/en/search-results?keywords=software';

async function scraper(){
    // this will launch a headless version chrome
    const browser = await puppeteer.launch();

    // open a new page in the browser
    const page = await browser.newPage();

    // this will go to the url we want to scrape
    await page.goto(url);


    await page.screenshot({
        path: "./screenshot.png",
        fullPage: true
    });

    await page.close();

    await browser.close();
};

scraper();


