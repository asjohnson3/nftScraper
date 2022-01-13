const puppeteer = require('puppeteer');
const { stringify } = require('querystring');

async function scrape(i) {
    console.log('starting...')
    console.log(i)
    let base_url = "https://rarity.tools/mypethooligan/view/"
    let rank_url = base_url+i
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto(rank_url, { waitUntil: 'networkidle0' });

    const result = await page.evaluate(async () => {
        console.log('Browser scope.');
        let elementTxtArr = null;
        document.querySelectorAll("span.font-bold.whitespace-nowrap").forEach((a)=> {
           console.log(a.innerText);
           elementTxtArr = a.innerText;
        });
        return elementTxtArr;
    });
    console.log(i,result);

    await browser.close();
    return(i,result)
};

for (let i =0; i <= 7; i++) {
    results= scrape(i)
    console.log(results)
 }