import { test, expect, request } from '@playwright/test';
import { APIUtils } from '../utils/APIUtils';

 
const fakePayLoadOrders = { data: [],  count: 0, message: "No Orders" };
const loginPayLoad = {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"};
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6581ca979fd99c85e8ee7faf" }] };
let response;
test.beforeAll( async()=>{
    const apiContext = await request.newContext();
    const apiutils = new APIUtils(apiContext, loginPayLoad)
    response = await apiutils.createOrder(orderPayLoad);
});
test('Token insert in Local Storage', async ({ page }) => 
    {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value); 
    }, response.Token );
    await page.goto("https://rahulshettyacademy.com/client");
 /*
  a API call nee manam intercept cheyalo, a URL route object lo first value gaa istham.
  Second value gaa, actual response ki bodulu mock response ni display cheyali ani cheppedi function lo chepthunam.
*/
await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*",
    async (route) => {
        /* 
        ikkadaa page.request ante, execution web mode nundi API mode ki switch chesthundi.
        fetch valla, route lo vunna request data nee capture chesthunam.
        */
      const response = await page.request.fetch(route.request());
      let body = JSON.stringify(fakePayLoadOrders);
      /* 
      ippudu ikkadaa, actual response nee fetch tho thisukunnaka, a response place lo manam manaki kavalisina mock data nee place chesthunam
      fulfill() method help tho.
      */
      route.fulfill(
        {
         response,
         body,
        });
      // intercepting response - API response ni playwright lo mock response tho replace chesi,
      // browser lo a data ni front end lo render chesthundi.
    });
    await page.locator("button[routerlink*='myorders']").click();  
    await page.pause();
    await page.waitForResponse('https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*')
    console.log(await page.locator(".mt-4").textContent());
});



/* 
Playwright lo route method ni network requests ni intercept cheyataniki vaadutharu. 
Dinivalla requests server ki vellakunda modifiy cheyadam leda simulate cheyadam chayyachu. 
Idi chala upayogakaram, mukhyamga testing lo:

Mocking API Responses: Actual server requests chesina avasaram lekunda, various API responses simulate cheyyachu.
Testing Edge Cases: Slow network responses, specific data return, etc., simulate chesi application ela respond chesthundo choodachu.
Blocking Requests: Tests speed penchadaniki leda network failures ni simulate cheyadaniki certain requests ni block cheyyachu.

Syntax:- await page.route(url, handler)
url: Intercept cheyyalani unnatuvanti URL pattern ni specify chesthundi. Idi string leda regular expression form lo vundachu.
handler: Intercepted request ni handle cheyyadaniki callback function.
Mandatory Arguments:
url (URL Pattern):

Intercept cheyyalani unna requests ni specify chesthundi.
Idi specific URL leda wildcard pattern (*) tho specify cheyyachu.
Example: "https://example.com/api/*".
handler (Callback Function):

Intercepted request tho yela deal cheyalo define chesthundi.
I function lo route object as argument pass chesthundi, adi intercepted request ni represent chesthundi.

await page.route("https://example.com/api/data/*", async (route) => {
  // Mocking the API response with custom data
  const fakeResponse = { data: "mocked data" };
  route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify(fakeResponse),
  });
});

options: Idi optional argument. Dini handler function ki pass cheyadam tho additional options like headers, method, 
leda postData specify cheyyachu. Kaani, e most cases lo idi vadatam avasaram ledu.

Mukhyamaina Points:-
Route Object (route): Idi intercepted request ni represent chesthundi. Dini modify cheyadam leda mock response cheyadam chayyachu.
route.fulfill(): Custom response tho request ni complete cheyyadam chesundi.
route.continue(): Request ni usual ga server ki proceed avvadaniki allow chesthundi.
route.abort(): Request ni cancel chesthundi.
*/


