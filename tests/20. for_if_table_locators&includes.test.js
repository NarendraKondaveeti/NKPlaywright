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
 
   await page.locator("[placeholder*='Country']").pressSequentially("ind");
 
   const dropdown = page.locator(".ta-results");
   await dropdown.waitFor();
   const optionsCount = await dropdown.locator("button").count();
   for (let i = 0; i < optionsCount; ++i) {
      const text = await dropdown.locator("button").nth(i).textContent();
      if (text === " India") {
         await dropdown.locator("button").nth(i).click();
         break;
      }
   }
 
   expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
   await page.locator(".action__submit").click();
   await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
   const orderId = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
   console.log(orderId);
 // CSS selector button tag lo routerlink ane attribute lo myorders ane * tho ani value nee find chesthunam ikkada okka value vunte okkate chupisthundi
   await page.locator("button[routerlink*='myorders']").click();  
   /* ikkada "await page.locator("tbody").waitFor();" line anduku ante next manam a action cheyatmledu okka loctor lo vunna ani values nee rows ane varible lo store chesthunam, 
   akkada a auto-wait mechanism use cheytam ledu 
   so playwright a locator kosam wait cheyadu vetane search chesi match aithe values get chesukoni rows ane varible lo store chesthundi 
   ledu ante error nee throw chesthundi aduke page load ayye varuku wait cheyataniki waitfor() method use chesthunam 
   adena element load ayye varuku ani aduke locator("tbody") icham*/
   await page.locator("tbody").waitFor(); 
   /* table lo each rows find cheytaniki locator */
   const rows =  page.locator("tbody tr");
   console.log("rows =",rows)
   /* rows lo already table lo each row find chese a loactor lo vunna value nee store chesam ippudu a rows nee iterate chesthu i lo place chesthunam  */
   for (let i = 0; i < await rows.count(); ++i) {
      /* ikkada i lo okka value nee thesukoni malli dani pain naa okka single cell nee find chesthunam 
      and a cell lo vunna value nee textContent() method tho get chesthukoni dani rowOrderId ane variable lo store chesthunam */      
      const rowOrderId = await rows.nth(i).locator("th").textContent();
       console.log("rowOrderId =",rowOrderId)
      /* alaa rowOrderId lo store chesina value manam expect(orderId) chesthun value lo vunda ani check chesthunam with JAvaScript method "includes() tho"" */
      if (orderId.includes(rowOrderId)) {
         /* manam expect chesthuna value match aithe appudu a value deggara vunna first button meda click chesthunam "first()"*/
         await rows.nth(i).locator("button").first().click();
         break; // manam expected reach aina tarvata loop nundi byataki ravataniki break chesthunam
      }
   }
   /* view button meda click chesina tarvata a page loki velli a page lo vunna order ID id manam expect chesthuna order ID same or not anedi check chesthunam  */
   const orderIdDetails = await page.locator(".col-text").textContent();
   expect(orderId.includes(orderIdDetails)).toBeTruthy();
 
});