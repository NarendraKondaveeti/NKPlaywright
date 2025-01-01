import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('Locators Test', async ({ page }) =>{ 
    const dropdown = page.locator("select.form-control")
    const pickvalue = page.locator('.radiotextsty'); 
    const pop_ok = page.locator('#okayBtn'); 
    const agreecheckbox = page.locator("#terms")
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
    /*
    Await ekkada action perfrom chesthundo akkada a action ki mudu rayali
    "expect(await agreecheckbox.isChecked()).toBeFalsy();"" e line lo await expect lopala 
    rasam adukunu ate isChecked() anedi action perform chesthundi 
    but toBeFalsy() action em perform cheyatam ledu just comparision chesthundi ante
    ikkada web element meda action compelet ayyaka vochina value nee maa expected value 
    tho comparison chesthunam 
    but ikkada e line "await expect(pickvalue.last()).toBeChecked();" 
    web element tho interaction lo vunnappude check box checked or not ani check chesthunam 
    aduke expect ki mudu await rasam
    */
    
});