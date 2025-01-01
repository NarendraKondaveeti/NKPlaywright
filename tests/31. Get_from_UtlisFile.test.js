/* 
What We Did in this Test Script file
Initialization:

apiContext ane context create chesam using request.newContext().
APIUtils instance ni create chesi, apiContext mariyu loginPayLoad ni pass chesam.
Create Order and Get Response:

apiutils.createOrder(orderPayLoad) ni call chesi, order creation chesi response ni response variable 
lo store chesam.
Token Storage in Local Storage:

Test lo Token ni browser Local Storage lo store chesam using page.addInitScript.
Verify Order in My Orders Page:

orderId ni verify chestunnamu by comparing it with the order details on the page.
*/

import { test, expect, request } from '@playwright/test';
import { APIUtils } from '.../utils/APIUtils';

const loginPayLoad = {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"};
const orderPayLoad = { orders: [{ country: "Cuba", productOrderedId: "6581ca979fd99c85e8ee7faf" }] };

let response;
test.beforeAll( async()=>
{
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
    await page.locator("button[routerlink*='myorders']").click();  
    await page.locator("tbody").waitFor(); 

    const rows =  page.locator("tbody tr");
    
    for (let i = 0; i < await rows.count(); ++i) {
      
       const rowOrderId = await rows.nth(i).locator("th").textContent();
        console.log("rowOrderId =",rowOrderId)
      
       if (response.orderId.includes(rowOrderId)) {
          
          await rows.nth(i).locator("button").first().click();
          break; 
       }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();
});

/* 
1. APIUtils Class Creation
Explanation: Manam first APIUtils ane oka class create chesam.
Purpose: Ee class lo mana functions (methods) ni group cheyadaniki use chestham. Ikkada, 
manam API calls cheyadaniki getToken() mariyu createOrder() methods ni define chestham.

2. Constructor lo this keyword Usage
Explanation: constructor(apiContext, loginPayLoad) ane function lo this.apiContext = apiContext mariyu 
this.loginPayLoad = loginPayLoad ni set chesam.
Purpose: this keyword tho manam class instance (object) lo unna apiContext mariyu 
loginPayLoad properties ki values assign chestham. 
Ikkada, this.apiContext ante ee class object lo unde apiContext ane property ki current value ni assign chestham.

3. getToken() Method lo
Explanation: this.apiContext ni getToken() method lo API call ki use chesam.
Purpose: Ikkada, this.apiContext ane di manam constructor lo set chesina value ni refer chesthundi. 
So, getToken() method lo apiContext ni use chesi, API request ni send chesthundi.

4. createOrder() Method lo
Explanation: response.Token = await this.getToken(); ane line lo this.getToken() ni call chesam.
Purpose: this.getToken() ane di APIUtils class lo unde getToken() method ni refer chesthundi. 
Dini valla manam object context lo unde method ni call chesi token value ni retrieve chestham.

5. Final Output lo
Explanation: return response; ane line tho, manam response object ni return chestham.
Purpose: Ee response object lo orderId mariyu Token values untayi, vati ni use chesi inka mundu test script lo use chestham.

Summary:
this keyword class instance (object) lo unde properties mariyu methods ni refer cheyadaniki use chestham.
this.apiContext mariyu this.loginPayLoad properties ni constructor lo set chesi, vatini methods lo use chestham.

this keyword oka class lo use chesina appudu, adi aa class object lo unde properties mariyu methods ni refer chesthundi.
*/

