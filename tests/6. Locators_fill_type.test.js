import { test, expect } from '@playwright/test';

test('Locators Test', async ({ page }) =>{ 
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();
    //manam ade input field lo value nee ivali ante "type" or "fill" ane methods nee use chesi value nee input field lo istham 
    //advanced versions lo "type" method nee deprecate chesaru only fill method matrame use cheyali input field lo value ivali ante
});
