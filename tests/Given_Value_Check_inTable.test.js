import { test, expect } from '@playwright/test';
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const orderId = "66b76d51ae2afd4c0b46938a"
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.pause();
   await page.locator("button[routerlink*='myorders']").click();  

   await page.locator("tbody").waitFor(); 

   await page.pause();
   const rows =  page.locator("tbody tr")
   
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
       console.log("rowOrderId =",rowOrderId);

      if (orderId.includes(rowOrderId)) {
  
         await rows.nth(i).locator("button").first().click();
         break; 
      }
   }

   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});