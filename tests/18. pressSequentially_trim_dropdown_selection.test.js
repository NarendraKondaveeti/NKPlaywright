import { test, expect } from '@playwright/test';
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count = await products.count();
   for (let i = 0; i < count; ++i) {
      if (await products.nth(i).locator("b").textContent() === productName) {
         //add to cart
         await products.nth(i).locator("text= Add To Cart").click();
         break;
      }
   }
 
   await page.locator("[routerlink*='cart']").click();
   //await page.pause();
 
   await page.locator("div li").first().waitFor();
   const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
   expect(bool).toBeTruthy();
   
   await page.locator("text=Checkout").click();
   await page.pause();
   /*
   pressSequentially() methond :- idi manam ichina text nee input field lo enter chesi Enter press chesthundi 
   appudu manaki manam pass chesina text matching items dropdown list display avuthai
   */
   await page.locator("[placeholder*='Country']").pressSequentially("ind");
 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      /* ikkada india ku mudu space vundi playwright adena string nee comparison chesthunappudu a string Caps lo vunte manam Caps lone 
      ivali emina spaces vunte same alaane space ivali, ledaa mudu a web lo vunna element pain trim() apply chesi mana text nee comparsion leyali
      ex:-
      defore trim element text " India" after apply trime on text "text.trim()"" the web element like "india" 
      The trim() method in JavaScript only removes whitespace from the beginning and end of a string. 
      It does not remove spaces that are in the middle of the string.
       */

      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
    }
});