const puppeteer = require('puppeteer');

(async function() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://rarity.tools/mypethooligan/view/1599", { waitUntil: 'networkidle0' });

    const result = await page.evaluate(async () => {
        console.log('Browser scope.');
        let elementTxtArr = [];
        document.querySelectorAll("span.font-bold.whitespace-nowrap").forEach((a)=> {
           console.log(a.innerText);
           elementTxtArr.push(a.innerText);
        });
        return elementTxtArr;
    });
    console.log(result);

    await browser.close();
})();



// const { strictEqual } = require('assert');
// const puppeteer = require('puppeteer');
// const { stringify } = require('querystring');
// let nft_ranks = []
// const browser = await puppeteer.launch();
// const page = await browser.newPage();

// function scrapingFunc(rank) {

//     let base_url = "https://rarity.tools/mypethooligan/view/"
//     let rank_url = base_url+stringify(rank)
//     await page.goto(rank_url, { waitUntil: 'networkidle0' });

//     const result = await page.evaluate(async () => {
//         console.log('Browser scope.');
//         let elementTxtArr = [];
//         document.querySelectorAll("span.font-bold.whitespace-nowrap").forEach((a)=> {
//            console.log(a.innerText);
//            elementTxtArr.push(a.innerText);
//         });
//         return elementTxtArr;
//     });
//     console.log(result);
    
//     await browser.close();
//     return(result)
// }


// for (let i =0; i <= 10; i++) {
//     let scraped_rank = scrapingFunc(i)
//     console.log("ID:",i,"Rank:", scraped_rank)
//  }
