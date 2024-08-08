
import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { promises } from 'dns';


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

/*
1. `async`

Type:JavaScript built-in keyword.
Purpose:A function declared with `async` keyword allows you to write asynchronous code using `await` keyword. An `async` function always returns a promise.

2. `{browser}`

Type:Playwright built-in property.
Purpose:This is an object provided by Playwright when you use the `test` function. It represents the browser instance used to create new contexts or pages. `{browser}` is destructured from the argument passed to the test function.
Source:Provided by Playwright.

3. `browser.newContext()`

Type:Playwright method.
Purpose:Creates a new browser context. Each context is an isolated session within the browser, allowing you to simulate multiple users or sessions.
Source:Provided by Playwright.

4. `web.newPage()`

Type:Playwright method.
Purpose:Opens a new page (tab) within the current browser context.
Source:Provided by Playwright.
Note:`web` is a user-defined variable name, and you could name it anything. It holds the context created by `browser.newContext()`.

5. `Promise.all()`

Type:JavaScript built-in function.
Purpose:Takes an array of promises and returns a single promise that resolves when all of the input promises have resolved. If any of the input promises are rejected, the returned promise is also rejected.
Source:Provided by JavaScript.

6. `web.waitForEvent('page')`

Type:Playwright method.
Purpose:Waits for the specified event (in this case, the 'page' event) to occur. The 'page' event is emitted when a new page (tab or window) is opened within the context.
Source:Provided by Playwright.
Note:`'page'` is a string that specifies the event type to wait for. It's specific to Playwright's API for event handling.

Code Example with Comments:

Summary:-
`async` and `Promise.all` are JavaScript built-in features for handling asynchronous operations.
`{browser}`, `browser.newContext()`, `web.newPage()`, and `web.waitForEvent('page')` are Playwright-specific methods and properties used for browser automation.
`'page'` is an event type string used with Playwright's event handling system.
Variables like `web` and `site` are user-defined and can be named anything.
*/