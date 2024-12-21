import { test, expect } from '@playwright/test';

test("Popup validations",async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const framesPage = page.frameLocator( "#courses-iframe" ); 
    await framesPage.locator("li a[href*='lifetime-access']:visible").click();
    const textCheck =await framesPage.locator(".text h2").textContent(); 
    console.log(textCheck. split (" ")[1]);

});

/* 
const framesPage = page.frameLocator("#courses-iframe"); e line ki ardham:

page.frameLocator("#courses-iframe"): Ikkada, page object lo frameLocator method use chesthunam, adi web page lo specific iframe ni target chesthundi. Ikkada "#courses-iframe" ane CSS selector use chesi, iframe ni identify chesthunam.

const framesPage: Ikkada, page.frameLocator("#courses-iframe") result ni framesPage ane variable lo store chesthunam. Ippudu framesPage variable ni use chesi, a iframe lo unna elements ni interact cheyachu.

===========

Summary:
Ee line tho specific iframe ni target chesi, danilo unna elements tho work cheyataniki access istundi

await framesPage.locator("li a[href*='lifetime-access']:visible").click(); e line ki ardham:

framesPage.locator("li a[href*='lifetime-access']:visible"): framesPage object lo locator method ni use chesi, iframe lo li tag lo unna a (anchor) tag ni target chesthunam. href*='lifetime-access' ante, href attribute lo "lifetime-access" ane text unda ani check chesthundi. Alage, :visible ani use chesi, visible unna element ni target chesthunam.

click(): Target chesina element ni click cheyatam ki click() method use chesthunam.

await: await keyword asynchronous operation (click) complete ayye varaku wait chesthundi, taruvata next line execute avuthundi.

Summary:
Ee line tho, specific iframe lo visible unna "lifetime-access" ane link ni click chesthundi.

==========

const textCheck = await framesPage.locator(".text h2").textContent();:

framesPage object lo, .text class unna element lo h2 tag lo unna text ni retrieve chesthunam.
await keyword asynchronous operation complete ayye varaku wait chesthundi, textContent() ane method use chesi h2 tag lo text ni textCheck variable lo store chesthunam.
console.log(textCheck.split(" ")[1]);:

textCheck lo store chesina text ni space (" ") tho split chesthunam, dani valla text multiple parts (words) ga divide avuthundi.
.split(" ")[1] ante, split chesina array lo second word (index 1 lo unde value) ni select chesthundi.
console.log tho a second word ni console lo print chesthundi.
Summary:
Ee code h2 tag lo unna text ni retrieve chesi, aa text lo second word ni console lo print chesthundi.

*/