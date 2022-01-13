import puppeteer from 'puppeteer';

async function scrape(i) {
    console.log('starting...')
  
    let base_url = "https://rarity.tools/mypethooligan/view/"
    let rank_url = base_url+i
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.goto(rank_url, { waitUntil: 'networkidle0' });

    const result = await page.evaluate(() => {
        let elementTxtArr = null;
        document.querySelectorAll("span.font-bold.whitespace-nowrap").forEach((a)=> {
           console.log(a.innerText);
           elementTxtArr = a.innerText;
        });
        return elementTxtArr;
    });

    await browser.close();

    return {
        index: i,
        result
    }
};

for (let i =0; i <= 7; i++) {
    const results = await scrape(i)
    console.log(results)
 }