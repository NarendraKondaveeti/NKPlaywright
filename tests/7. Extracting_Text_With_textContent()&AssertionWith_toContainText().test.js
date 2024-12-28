import { test, expect } from '@playwright/test';

test('Locators Test', async ({ page }) =>{ 
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent()); 
    // ikkada okka locator nundi text nee get chesthunam
    await expect (page.locator("[style*='block']")).toContainText("Incorrect");
    // ikkada okka locator lo vunna text nee manam expect chesina text to comparison chesi check chsthunam 
    //the "toContainText" method to extract the text content first and then perform the comparison.
});
