/* 
Mundu manam oka test file create chesukuntam, danini "API Part one" ani pilusthamu.
I file lo, test rasetappudu manam konni mukhyamaina information ni copy cheskuntamu.
Test rasetappudu, konni steps ni API ni use chesi skip cheyochu, ala chesinappudu konni tests ki time save avutundi.
For example, login process ni malli malli chesakunda API ni use chesi login cheyochu, danitho time save avutundi.
API calls rasetappudu, "post" method use chestamu, and required data ni API ki pass chestamu.
API call success ayyinda ledha ani check cheyyali, status code 200 vachina manam danini success ani consider chestamu.
API response lo ninchi, manaki avasaramaina token ni extract chesukuni, session storage lo store chestamu.
beforeAll lo set chesina code okka sari matrame execute avvuthundi, 
whereas beforeEach lo set chesina code prathi test mundu execute avvuthundi.
*/

import { test, expect, request } from '@playwright/test';

const loginPayLoad = {"userEmail":"anshika@gmail.com","userPassword":"Iamking@000"};

let Token

test.beforeAll( async()=>
{
    const apiContext = await request.newContext(); 
    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        
    {
        data:loginPayLoad
    });
    expect(loginResponse.ok()).toBeTruthy(); 
    //const loginResponseJson = JSON.parse(await loginResponse.text());
    const loginResponseJson = await loginResponse.json();
    Token = loginResponseJson.token;
    console.log("Token =", Token)
});

test('My Test Case', async ({ page }) => {
    // Test case logic goes here
    console.log("Test case executed successfully!");
});


/* 

1. test.beforeAll(async () => {
Purpose: Ee line beforeAll method ni declare chesthundi. beforeAll ante ee block lo unna code, 
test suite lo unna anni test cases run avataniki mundu okkasari execute avuthundi.
async () => {: Ee function ni async ga define chesaru ante, 
asynchronous operations (like API calls) ni handle cheyyataniki await keyword use chestharu.

2. const apiContext = await request.newContext();
Purpose: request.newContext() method ni use chesi, oka new API context create chesthunnaru.
await: Ee keyword valla, ee operation complete ayyaka next line execute avuthundi. 
Asynchronous ga jarigedi kabatti, await use cheyyali.
apiContext: Ee variable lo newly created API context ni store chesthunnaru. 
Ee context lo nundi miku further API requests handle cheyyachu.

3. const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", { data: loginPayLoad });
Purpose: Ee line lo, apiContext use chesi oka POST API request chesthunnaru. 
Ee request ni https://rahulshettyacademy.com/api/ecom/auth/login ane URL ki send chestharu.
data: loginPayLoad: Ee object lo loginPayLoad ane data ni request body ga pass chesthunnaru. 
Ee data lo login ki kavalsina information untundi (e.g., username and password).
loginResponse: Ee variable lo API nundi vastunna response ni store chesthunnaru.

4. expect(loginResponse.ok()).toBeTruthy();
Purpose: Ee line lo, loginResponse ni check chesthunnaru to make sure that it was successful.
loginResponse.ok(): Ee method response status code ni check chesthundi. 
If the status code is in the range of 200-299, it returns true, indicating a successful response.
toBeTruthy(): expect statement lo, ee true value ni expect chesthunnaru. 
If the response is not successful, the test will fail.

5. const loginResponseJson = await loginResponse.json();
Purpose: Ee line lo, loginResponse ni JSON format lo convert chesthunnaru to extract the data.
loginResponseJson: Ee variable lo JSON format lo response body ni store chesthunnaru.

6. const token = loginResponseJson.token;
Purpose: Ee line lo, response JSON nundi token ni extract chesthunnaru.
token: Ee variable lo, login success ayyaka server nundi vastunna authentication token ni store chesthunnaru. 
Ee token ni miku future API requests lo authentication ki use cheyyachu.
Ee lines lo, API testing process lo chala important steps cover chesaru, like context creation, API request sending, 
response validation, and token extraction. Ippudu clear ga cheppanani nenu asha chesthunnanu.
*/

