import { test, expect } from '@playwright/test';
// Needed when specific configurations or multiple contexts are required.
test('Test Cases Name',  async ({browser})=> {// here browser is fixture and that extract from @playwright/test 
// module the test can understand the browser fixture without import
    // const context = await browser.newContext();
    const context = await browser.newContext({
        viewport: { width: 180, height: 720 },
        userAgent: 'MyUserAgent' 
        /* It tells the server about the browser type, version, operating system
        example Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36
        */
      });
    // Create a new isolated context, here context is API object in playwright that provide isolated environments 
    // (it means every time it provide new setup/environments )
        const page = await context.newPage();
    // Open a new page within the context
    await page.goto('https://playwright.dev/');
    // actually manam new fresh browser and new page use cheyali anukunappudu mannam e 
    // 'const context = await browser.newContext();' 
    // 'const page = await bro.newPage(); '
    //two lines rayalisina avasarme ledu playwright manaki e page ane property tho a two files nee handle 
    // chesthundi but manaki browser lunch lo and page opening emina configurations cheyali ante e two line rastham
    //like const context1 = await browser.newContext({viewport: { width: 1280, height: 720 }, 
    // userAgent: 'MyUserAgent'}); ante browser a size lo open avali anedi ivochu
});
/*
this Suitable for most tests where fresh context and page per test are sufficient.s
test('Test Cases Name', async ({ page }) =>) {
    await page.goto('https://playwright.dev/');
});

/*
Page Object in Playwright:- Purpose: The Page object represents a single tab or page in the browser and 
provides various methods to interact with the page's content.
Capabilities:-
Navigation: page.goto(url) – Navigate to a specific URL.
Interaction: page.click(selector) – Click on an element.
Input: page.fill(selector, value) – Fill in a text input field.
Assertions: page.waitForSelector(selector) – Wait for a specific element to appear.
Screenshots: page.screenshot() – Take a screenshot of the page.
Network Requests: page.on('request') – Intercept network requests.
*/
