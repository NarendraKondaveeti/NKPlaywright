import { test, expect } from '@playwright/test';
import { login } from '../utils/login';

test('@test Locators Test', async ({ page }) =>{ 
    const dropdown = page.locator("select.form-control")
    const pickvalue = page.locator('.radiotextsty'); 
    const pop_ok = page.locator('#okayBtn'); 
    const agreecheckbox = page.locator("#terms")
    //=======above store the locators in variables=========//
    await login(page);  
    await dropdown.selectOption('consult'); 
    await pickvalue.last().click(); 
    await pop_ok.click();
    console.log(await pickvalue.last().isChecked()); //true
    /*
    isChecked() method tho okka adena check/Radio button select ainda leda ani check chesukovochu, 
    element check chesi vunte true ani lekkapothe false return chesthundi, aithe isChecked() method not used for assertion
    */
    await expect(pickvalue.last()).toBeChecked();
    /*
    toBeChecked() method tho check/Radio button checke or not ani assertion apply cheyochu, 
    if assertion is pass test case executed successfuly otherwise test cases will fail
    */
    await agreecheckbox.click();
    await expect(agreecheckbox).toBeChecked();
    await agreecheckbox.uncheck();
    /*
    adena element nee check(click() method) chesinatrvata adi checked or not anedi toBeChecked() method not assertion chesi check cheyochu
    but diselect(uncheck()) chesina vattiki assesstion apply cheyalem anduku ante ikkada for selected options ki toBeCheckd() ane assesstion vundi kani unchecked ki ledt
    */
    expect(await agreecheckbox.isChecked()).toBeFalsy();
    /*
    aithe assertions cheyalemu kani a elemnt yakka state my expected behaviour lo match avuthunda ledaa check cheyochu
    daniki isChecked(), toBeFalsy(), toBeTruthy() methods validate cheyochu
    if mana expected behaviour anukunte manam isChecked()).toBeTruthy(); ani comparison cheyesu 
    */
     
});