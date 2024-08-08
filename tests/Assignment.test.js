const { test, expect } = require('@playwright/test');

// Playwright test framework nundi test and expect functions ni import chesthunam.

test('@Web Client App login', async ({ page }) => {
   // Test case ni define chesthunam. '@Web Client App login' ane test case peru.

   const email = "anshika@gmail.com";
   // Email id ni define chesam.

   const productName = 'zara coat 3';
   // Product name ni define chesam.

   const products = page.locator(".card-body");
   // Locator ni define chesthunam. ".card-body" class unna elements ni target chestundi.

   await page.goto("https://rahulshettyacademy.com/client");
   // URL ki navigate avuthundi.

   await page.locator("#userEmail").fill(email);
   // "#userEmail" id unna input field lo email ni fill chestundi.

   await page.locator("#userPassword").fill("Iamking@000");
   // "#userPassword" id unna input field lo password ni fill chestundi.

   await page.locator("[value='Login']").click();
   // "Login" button ni click chestundi.

   await page.waitForLoadState('networkidle'); 
   // Page load ayyye varaku wait chestundi, network lo yavva request ledhu ani state lo untundi.

   const titles = await page.locator(".card-body b").allTextContents();
   // ".card-body b" class unna elements nundi anni text contents ni allTextContents() method use chesi collect chestundi.

   console.log(titles);
   // Collected titles ni console log lo print chestundi.
})

/*
Idi code "Rahul Shetty Academy" client application lo login test chesi, available product titles ni console log lo print chestundi. 

Key Points:-
1. Import Statements:- Playwright nundi test and expect functions ni import chesthunaru.
2. Test Definition:- `test` function use chesi test case ni define chesthunaru.
3. Locators:- Page elements ni target cheyadaniki locators ni use chesthunaru.
4. Actions:- Page navigate avadam, fields fill cheyadam, button click cheyadam lantivi perform chesthunaru.
5. Wait State:- Network idle state wait chesthunaru to ensure page load complete ayindi ani.
6. Text Contents Extraction:- `allTextContents()` method use chesi targeted elements nundi text contents extract chesthunaru.
*/
