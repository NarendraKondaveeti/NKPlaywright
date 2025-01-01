/* 
Ikkada, manam login API nundi token pondi, order create cheyyataniki API use chesam. Tarvata, 
web page lo a order ni verify chesi, everything correct unda leda ani check chesam. 
Ikkada main advantage enti ante, 
API ni use chesi, test cases ni fast ga run cheyyadam and exact data ni verify cheyyadam.
*/


import { test, expect, request } from '@playwright/test';
/* 
loginPayLoad: Login API ki send cheyyadaniki, user email and password.
orderPayLoad: Order create cheyyadaniki, country and product ID.
*/

const loginPayLoad = {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"};
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6581ca979fd99c85e8ee7faf" }] };

let Token
let orderId

/* 
API Context Creation: request.newContext() use chesi, API calls ki context create chesam.
Login API Call: Login API ki payload (loginPayLoad) pass chesi, response JSON format lo teskunnam.
Token Extraction: Response nundi Token value store chesam.
*/

test.beforeAll( async()=>
{
    const apiContext = await request.newContext(); 
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        
    {
        data:loginPayLoad
    });
    expect(loginResponse.ok()).toBeTruthy(); 
    const loginResponseJson = await loginResponse.json();
    Token = loginResponseJson.token;
    console.log("Token =", Token)
/* 
Order Creation API Call: Token header ni use chesi, order creation API call chesam.
Order ID Extraction: Response nundi orderId ni store chesam.
*/
    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
        data : orderPayLoad, 
        headers :{
            'Authorization': Token,
            'Content-Type': 'application/json'
        }
    })
    const orderResponseJson = await orderResponse.json();
    console.log(orderResponseJson);
    orderId = orderResponseJson.orders[0];
});
/* 
Token Local Storage lo Insert: Web page open avvadaniki mundu, token ni local storage lo insert chesam.
Navigate to Orders Page: Orders page (myorders) ki navigate chesam
*/
test('Token insert in Local Storage', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value); 
    }, Token );
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("button[routerlink*='myorders']").click();  
    await page.locator("tbody").waitFor(); 
/* 
Order ID Search and Verify: Orders list lo orderId ni search chesi, match avvutondi ani confirm chesam.
Details Verification: Order details page lo, order ID match avvutondi ani final verification chesam.
*/
    const rows =  page.locator("tbody tr");
    console.log("rows =",rows)
    
    for (let i = 0; i < await rows.count(); ++i) {
      
       const rowOrderId = await rows.nth(i).locator("th").textContent();
        console.log("rowOrderId =",rowOrderId)
      
       if (orderId.includes(rowOrderId)) {
          
          await rows.nth(i).locator("button").first().click();
          break; 
       }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(orderId.includes(orderIdDetails)).toBeTruthy();
});
