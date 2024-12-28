import { test, expect } from '@playwright/test'; 

test.only('@test Test Cases Name', async ({ page }) => {
    await page.goto('https://www.google.com'); 
    await page.pause(); // Opens Playwright Inspector
    await page.locator("#APjFqb").fill("Playwright");
    await page.locator(".byrV5b").nth(1).click();
});
