import { test, expect } from '@playwright/test';

test("Popup validations",async({page})=>
    {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    /* ikkada  #displayed-text e paticular locator deggara screenshot thisthunam,
    'path:'partialScreenshot.png' ikkada path isthunam and a screenshot name isthunam
    */
    await page.locator('#displayed-text').screenshot({path:'partialScreenshot.png'})
    await page.locator("#hide-textbox").click();
    /* ikkada entire page screenshot thisthunam*/
    await page.screenshot({path: 'screenshot.png'});
    await expect(page.locator("#displayed-text")).toBeHidden();
    });