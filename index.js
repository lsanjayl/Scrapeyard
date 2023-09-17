const { fstat } = require('fs');
const puppeteer = require('puppeteer');
const url = 'https://books.toscrape.com/'

const main = async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    // await page.screenshot({path:'example.png',fullPage:true});
    // await page.screenshot({path:'example.pdf',format:'A4'});
    // const html = await page.content();
    // const title = await page.evaluate(()=>document.title);
    // const links = await page.evaluate(()=>Array.from(document.querySelectorAll('a'),(e)=>e.href));
    // const links = await page.evaluate(()=>Array.from(document.querySelectorAll('a'),(e)=>e.href));
    const cards = await page.evaluate(()=>
    Array.from(document.querySelector('section'),(e)=>({
        title:e.querySelectorAll('article h3 a').innerhtml,
    }))
    )
    // fs.writeFile('courses.json',JSON.stringify(courses),(err)=>{
    //     if(err) throw err;
    //     console.log('File saved');
    // }) 
    console.log(cards)
    await browser.close();
    console.log("123");
}
main();