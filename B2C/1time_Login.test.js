import {test, expect} from "@playwright/test";

let webContext;
//Here Set the Environment variables for credentials taken from terminal by EMAIL, PASSWORD and pass to email, password varaibles
const Email = process.env.EMAIL;
const Password = process.env.PASSWORD;
/*
Environment variables set chesinappudu EmailID, Password and test run cheyataniki ilaa ivali Terminal lo 
$env:EMAIL="EmaiID"
$env:PASSWORD="Password"
npx playwright test
*/

test.beforeAll(async ({browser})=>{
    const context = await browser.newContext(); 
    const page = await context.newPage();   
    await page.goto("https://portal.azure.com/");
    await page.locator("#i0116").fill(Email);
    await page.locator("#idSIButton9").click();
    await page.locator("#i0118").fill(Password);
    await page.locator("#idSIButton9").click();
    await page.locator("#idSIButton9").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({path: '1stlogin.json'});
    webContext = await browser.newContext({storageState: '1stlogin.json'});
});

test("Test1", async ()=>{
    const page = await webContext.newPage();
    await page.goto("https://portal.azure.com/");
    await page.getByLabel('Azure AD B2C').click();
    await page.getByLabel('Toggle Policies').click()
    await page.getByRole('link', { name: 'Identity Experience Framework' }).click();
    await page.pause();
    await page.getByRole('button', { name: 'Manage' }).click();
    await page.getByRole('link', { name: 'Policy keys Add Policy keys' }).click();
});