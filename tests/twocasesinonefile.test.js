import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { promises } from 'dns';
test('Locators Test', async ({ page }) =>{
    test.slow();
    const username = page.locator("#username")  
    const password = page.locator("[type='password']") 
    const loginButton = page.locator("#signInBtn")
    const cardTitle = page.locator(".card-body a")
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await username.fill('rahulshetty'); 
    await password.fill('learning');
    await username.fill(''); 
    await username.fill('rahulshettyacademy'); 
    await loginButton.click();
    await page.waitForSelector('.card-body a');
    console.log(await cardTitle.allTextContents(".card-body a")) 
    
});

test("Handling Pages/Windows", async({browser})=>{ 
    const web = await browser.newContext();  // 
    const site = await web.newPage();
    await login(site);
    const username = site.locator("#username");
    const documentLink = site.locator("[href*='documents-request']")
    const [newsite] = await Promise.all([
        web.waitForEvent('page'),
        documentLink.click(),
    ]);
    const txt = await newsite.locator(".red").textContent();
    console.log(txt);
    const txtarray = txt.split("@")  // txt lo vunna string @ mudu okka value @ tarvata okka value gaa separate avuthai
    console.log(txtarray);
    const arraytxt = txtarray[1].split(" ")[0] 
    // txtarray lo vunna string "space" mudu okka value "space" tarvata okka value gaa separate avuthai and 0 index value nee e variable store avuthundi
    console.log(arraytxt);
    const array_txt = arraytxt.split(".")[0] 
    // arraytxt lo vunna string dot(.) mudu okka value dot(.) tarvata okka value gaa separate avuthai and 0 index value nee e variable store avuthundi
    console.log(array_txt);
    await username.fill(array_txt)
    //usernam field lo array_txt lo vunna value nee fill chesthunam
    await site.pause();

});