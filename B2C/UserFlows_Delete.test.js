import {test, expect} from "@playwright/test";
import Userflows_Names from './Userflows_Names';

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

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
    await page.getByRole('link', { name: 'User flows Add User flows to' }).click()

    await page.pause();
    const deleteRowByName = async (rowName) => {
        const row = page.getByRole('row', { name: rowName });
    
        // Wait for the grid cell to be visible and click it
        await row.getByRole('gridcell').nth(3).waitFor({ state: 'visible' });
        await row.getByRole('gridcell').nth(3).click();
    
        await page.getByText('Delete', { exact: true }).click();
    
        // Wait for the confirmation button and click it
        await page.getByRole('button', { name: 'Yes' }).waitFor({ state: 'visible' });
        await page.getByRole('button', { name: 'Yes' }).click();
      };
    
      // List of row names to delete
    
      // Loop through each row name and perform the delete action
      for (const rowName of Userflows_Names) {
        await deleteRowByName(rowName);

      }
});