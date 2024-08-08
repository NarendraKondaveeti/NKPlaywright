import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('Locators Test', async ({ page }) =>{ 
    const dropdown = page.locator("select.form-control")
    const pickvalue = page.locator('.radiotextsty'); 
    const pop_ok = page.locator('#okayBtn'); 
    const agreecheckbox = page.locator("#terms")
    const documentLink = page.locator("[href*='documents-request']"); // CSS-selector "href" is Attribute, 
    //=======above store the locators in variables=========//
    await login(page);  
    await dropdown.selectOption('consult'); 
    await pickvalue.last().click(); 
    await pop_ok.click();
    console.log(await pickvalue.last().isChecked());
    await expect(pickvalue.last()).toBeChecked();
    await agreecheckbox.click();
    await expect(agreecheckbox).toBeChecked();
    await agreecheckbox.uncheck();
    expect(await agreecheckbox.isChecked()).toBeFalsy();
    await expect(documentLink).toHaveAttribute("class", "blinkingText")
    /*
    adena attribute manam expect chesthuna value vunado ledo check cheyataniki toHaveAttribute("type", "text") ane method nee use chestham
    */
});