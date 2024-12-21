import { test, expect } from '@playwright/test';
 test('Security test request intercept', async ({ page }) => {
 
    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("anshika@gmail.com");
    await page.locator("#userPassword").fill("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
 
    await page.locator("button[routerlink*='myorders']").click();
  /*
    Ikkada, page.route() ane Playwright method ni use chesi,
    original valid URL nee intercept chestunnam (ante appi danini capture chestunnam),
    daniki boddulu (instead of that) manam vere specific URL (fake or fixed) ni send chesthunam,
    with route.continue() method ni vaadi.
*/
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))
    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator("p").last()).toHaveText("You are not authorize to view this order");
 
})

/* 
Explanation:
page.route() method ni use chesi, original valid API request ni intercept chesthunam.
Appudu, aa valid URL ki boddulu, manam vere fixed URL (ee case lo, oka specific order ID tho unna URL) ni route.continue() method dwara pass chesthunam.
Ikkada "fake" URL ante, original URL ni override chesi, manam define chesina URL ki requests ni redirect chesthunam ani artham.
*/