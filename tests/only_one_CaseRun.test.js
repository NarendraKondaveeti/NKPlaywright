import { test, expect } from '@playwright/test';
test('Test Case 1',  async function({page}) {
    await page.goto('https://playwright.dev/');
});


test.only('Test Case 2',  async function({page}) {
    //adena okka cases ne execute cheyali ante a test cases deggara test taravata .only any mention chesi run chesthe a cases okkate execute avuthundi
    await page.goto('https://google.com');
});
