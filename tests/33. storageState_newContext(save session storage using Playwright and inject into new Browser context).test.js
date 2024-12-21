import { test, expect } from '@playwright/test';


let webContext;
const Email = "anshika@gmail.com";
const Password = "Iamking@000";


test.beforeAll(async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();  
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(Email);
    await page.locator("#userPassword").fill(Password);
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path: '1stlogin.json'});
    webContext = await browser.newContext({storageState: '1stlogin.json'});


});


test("1st Case", async({})=>{
    const productName = 'zara coat 3';
    const page = await webContext.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   const products = page.locator(".card-body");
   const titles = await products.allTextContents();  
   const count = await products.count();
   console.log("Count", count);
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         await products.nth(i).locator("text= Add To Cart").click();  
         break;
      }
    }
});


test("2nd Case", async({})=>{
    const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client");
    const products = page.locator(".card-body");
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);
});

/*
const context = await browser.newContext();

const: Idi JavaScript lo manam define chesina keyword, variable ni declare cheyyadaniki vadutharu.
context: Idi manam petti na variable name, idi user-defined statement.
await browser.newContext(): browser.newContext() ane di Playwright provide chesina method. Idi oka new browser context ni create chestundi. await ane di asynchronous operation ki wait cheyyadaniki vadutharu.
const page = await context.newPage();


const: Manam define chesina keyword, variable ni declare cheyyadaniki.
page: Manam petti na variable name, idi user-defined statement.
await context.newPage(): context.newPage() ane di Playwright provide chesina method. Idi a context lo oka new page (tab) ni create chestundi.
await context.storageState({path: '1stlogin.json'});


await context.storageState: context.storageState() ane di Playwright provide chesina method. Idi storage state ni (cookies, local storage, etc.) oka file lo save cheyyadaniki use chestharu.
{path: '1stlogin.json'}: Ikkada {path: '1stlogin.json'} ane object lo path ni define chesaru, idi user-defined statement.
webContext = await browser.newContext({storageState: '1stlogin.json'});


webContext: Idi manam define chesina variable name.
await browser.newContext({storageState: '1stlogin.json'}): Ikkada browser.newContext() Playwright provide chesina method, idi new context ni create chestundi. {storageState: '1stlogin.json'} ane object lo storage state ni initialize chesthunnaru, adi user-defined statement.
const page = await webContext.newPage();


const: Manam define chesina keyword, variable ni declare cheyyadaniki.
page: Manam petti na variable name, idi user-defined statement.
await webContext.newPage(): webContext.newPage() Playwright provide chesina method, idi web context lo oka new page ni create chestundi.
Playwright provide chesina methods/services:
browser.newContext(): Oka new browser context create chesthundi, where cookies, storage, etc., store cheyyadam jaruguthundi.
context.newPage(): E context lo oka new page (tab) ni create chesthundi.
context.storageState(): Current storage state ni save cheyyadaniki use chesthundi.
E methods Playwright provide chesindi and manaki browser automation lo help chesthayi. await ane keyword asynchronous operations ki wait cheyyadaniki use chestham.
*/
