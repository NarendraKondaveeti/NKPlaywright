import {test, expect} from "@playwright/test";
import  Policykey_Names  from './Policykey_Names';

//Here Set the Environment variables for credentials taken from terminal by EMAIL, PASSWORD and pass to email, password varaibles
const email = process.env.EMAIL;
const password = process.env.PASSWORD;
/*
Environment variables set chesinappudu EmailID, Password and test run cheyataniki ilaa ivali Terminal lo 
$env:EMAIL="EmaiID"
$env:PASSWORD="Password"
npx playwright test
*/

test('UserFlows Delete', async ({ page }) =>{
    test.setTimeout(120000); // 120 seconds
    await page.goto('https://portal.azure.com/'); 
    await page.locator("#i0116").fill(email);
    await page.locator("#idSIButton9").click();
    await page.locator("#i0118").fill(password);
    await page.locator("#idSIButton9").click();
    await page.locator("#idSIButton9").click();
    await page.getByLabel('Azure AD B2C').click();
    await page.getByLabel('Toggle Policies').click()
    await page.getByRole('link', { name: 'Identity Experience Framework' }).click();
    await page.pause();
    await page.getByRole('button', { name: 'Manage' }).click();
    await page.getByRole('link', { name: 'Policy keys Add Policy keys' }).click();
    //========================//
// Function to perform the delete operation
async function deleteRowByName(rowName) {
    // Click the context menu for the row
    await page.getByRole('row', { name: `${rowName} Context menu` }).getByLabel('Context menu').click();

    // Click the delete option from the menu
    await page.getByRole('menuitem', { name: 'Delete' }).click();

    // Fill in the confirmation field with the row name
    await page.getByLabel('Type the name of the key').fill(rowName);

    // Confirm the deletion
    await page.getByRole('button', { name: 'Delete', exact: true }).click();
}


// Loop through each row name and perform the delete action
for (const rowName of Policykey_Names) {
    await deleteRowByName(rowName);
}

});