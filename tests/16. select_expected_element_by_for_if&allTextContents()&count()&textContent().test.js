import { test, expect } from '@playwright/test';
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';  // Expected product name ikkada variable lo store chesam
   const products = page.locator(".card-body"); // parent locator
    //const products2 = page.locator(".card-body b"); // parent locator
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await products.first().waitFor();
   const titles = await products.allTextContents();  
   // Get all values from the parent locator and store in titles variable
   console.log(titles); 
   const count = await products.count(); 
   // parent locator lo vunna values enni anedi count chesthunam
   console.log("Count", count);
   for (let i = 0; i < count; ++i) { 
      // count vunna ani values nee okkatiga i ane variable loki thesukuntunam
    // i lo vunna value manam expected value same or not anedi comaprison chesthunam, 
    // both are same aithe appudthu if condtion  loki entry avutham
      if (await products.nth(i).locator("b").textContent() === productName) {  
         // ikkada product.nth(i) parent locator malli a locator level vere locator(locator("b")) 
         // apply chesthunam
         // i lo vunna value manam expecte chesthuna value same aithe click chesthunaaa
         await products.nth(i).locator("text= Add To Cart").click();  
         // ikkada product.nth(i) parent locator malli a locator level vere locatorlocator
         // ("text= Add To Cart") apply chesthunam
         break; 
         // mana condtion reach ayyakka malli for loop nee break chesthunam next iterate avakundaa
      }
   }
});