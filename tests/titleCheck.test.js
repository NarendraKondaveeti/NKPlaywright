
import { test, expect } from '@playwright/test'; 
import { title } from 'process';
test('Test Case 1',  async function({page}) {
    await page.goto('https://playwright.dev/');
    const title = await page.title();
    console.log(await title)
});


test('Test Case 2',  async function({page}) { 
    await page.goto('https://google.com');
    await expect(page).toHaveTitle("Google")
});