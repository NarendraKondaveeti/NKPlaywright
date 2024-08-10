import { test, expect } from '@playwright/test';
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   await page.pause();
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

   /* Manam Expecte chesthuna item kanipisthunda ledaa nai checkchesthunam with "isVisible()" 
   ikkada okka tag lo e text vunadi ade locator ani cheputhunam 
   daniki tag name(h3) ichi a tag lo :has-text() lo manam anukutuna text ichatsm 
    */
   const bool = await page.locator("h3:has-text('zara coat 3')").isVisible();
   console.log("bool =", bool)
   // ikkada bool lo paina value visible vunte true ani store avuthundi ade value visible lo lekkapothe false ani store avuthundi
      expect(bool).toBeTruthy(); // bool true or false ani check chesthunama
});