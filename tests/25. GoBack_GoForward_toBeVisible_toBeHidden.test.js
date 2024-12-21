import { test, expect } from '@playwright/test';

test("Popup validations",async({page})=>
    {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.goto("http://google.com");
    await page.goBack() ;
    await page.goForward( );
    await page.goBack() ;
    /* adena element visible lo vunda ledaa check cheyataniki "toBeVisible()" ane method nee vadatam */
    await expect(page.locator("#displayed-text")).toBeVisible();
    await page.locator("#hide-textbox").click();
    /* adena element Hiden lo vunda ledaa check cheyataniki "toBeHidden()" ane method nee vadatam */
    await expect(page.locator("#displayed-text")).toBeHidden();
    
    });
