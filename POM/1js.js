import { test, expect } from '@playwright/test'; 

test('@test Test Cases Name',  async function({page}) {
    await page.locator("APjFqb").fill("Playwright")
    await page.locator(".byrV5b").nth(1).click()
});