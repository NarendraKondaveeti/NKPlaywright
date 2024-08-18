import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
import { Console } from 'console';

test('Locators Test', async ({ page }) =>{ 
    const dropdown = page.locator("select.form-control")
    const pickvalue = page.locator('.radiotextsty'); 
    const pop_ok = page.locator('#okayBtn'); 
    const agreecheckbox = page.locator("#terms")
    const loginButton = page.locator("#signInBtn")
    await login(page);  
    await loginButton.click();
    page.route('**/*.{jpg,png,jpeg}', route=> route.abort());
    page.on('request', request => console.log(request.url()));
    page.on('response', response => console.log(response.url(), response.status()));
    console.log(await page.locator(".card-body a").first().textContent())
    console.log(await page.locator(".card-body a").nth(0).textContent())  
    console.log(await page.locator(".card-body a").nth(1).textContent())
});

/* 
Code Line: page.route('**/*.{jpg,png,jpeg}', route => route.abort());
Type: Playwright Statement
Purpose:
URL Matching: page.route() method ni use chesi, miru **/*.{jpg,png,jpeg} ani URL pattern ni match cheyyachu. Idi ante, URL lo jpg, png, jpeg file extensions unna prathi request ni match chestundi.
Abort: route.abort() ani valla, vaati requests ni block (abort) chesthundi, so avanni browser lo load avavu.
Usage:
Example: E method vaadadam valla unnecessary images ni load avakunda appadam jarugutundi, which might speed up the page loading.
Customization: I line lo URL pattern ni change chesi vere file types ni kuda block cheyyachu.
Code Line: page.on('request', request => console.log(request.url()));
Type: Playwright Statement
Purpose:
Event Listener: page.on('request') ni use chesi, prathi sari request browser ninchi API ki reach ayina appudu event ni capture chesthundi.
Logging: request.url() method to request URL ni console lo print chesthundi.
Usage:
Example: E method vaadadam valla miru e URLs ki requests veltunnayo chudachu, which is useful for debugging or tracking purposes.
Customization: Request URL to paatu vere request properties like method, headers kuda log cheyyachu.
Code Line: page.on('response', response => console.log(response.url(), response.status()));
Type: Playwright Statement
Purpose:
Event Listener: page.on('response') method to prathi response vastunnapudu, adi e URL ki sambandhinchindi ani capture chesthundi.
Logging: response.url() to response URL ni, response.status() to response status code (e.g., 200, 404) ni log chesthundi.
Usage:
Example: E method vaadadam valla miru responses ni track cheyyachu, which is useful to see if the requests are successful or if there are any errors.
Customization: Vere response properties like headers, timing, body kuda log cheyyachu.
Overall Purpose of These Lines:
Page.route: Specific file types (images) ni block chesi page load time ni penchadam.
Page.on('request'): Prathi request URL ni log chesi, test execution lo requests ela veltunnayo chudadam.
Page.on('response'): Prathi response URL and status code ni log chesi, success or failure details track cheyyadam.
Idi request and response methods ni vaadini, miru complete network traffic ni debug cheyyachu and specific resources ni block cheyyadam valla, tests run avvadaniki avasaram lekapothe unnecessary elements ni thappinchu vachu.
*/

/*e lecture lo, manam request intercept chesi ela abort cheyyalo chuddam. Ante, 
browser ki request reach avakunda ela appalo nerchukuntam. Playwright ni vadukoni, server down undi ani scenario test cheyyachu. 
Server response ivvakunda, browser ela behave chesthundi ani chudachu. Idi server down scenario ni simulate cheyyadam ani artham.

Playwright lo, requests ni intercept cheyadam ante, vaati URL ni modify cheyyadam, lekunda vaatini completely block cheyyadam. 
manam unnecessary files (e.g., images, CSS files) ni block chesi, page loading speed ni penchachu. 
Alanti blocking ki `route.abort()` method use chesi chesstam.

Additionally, Playwright prathi request and response ni track chesthundi. Ee track chese information to, 
application lo jarigina prathi call gurinchi logs chudachu, especially appudu tests fail ayye time lo. 
Status codes ni kuda check cheyyachu, like 400 or 500 series errors, vaati base meeda test failures ni debug cheyyachu.

E methods vaadadam tho, miru testing scenarios ni chala flexible gaa and advanced gaa create cheyyachu.```

Key Points:-
- Requests ni intercept cheyyadam, abort cheyyadam.
- Server down simulation cheyyadam.
- Unnecessary files block chesi, page speed penchadam.
- Playwright to prathi request, response track chesi, logs lo store cheyyadam.
- Test failures debug cheyyadaniki status codes ni use cheyyadam.
 */