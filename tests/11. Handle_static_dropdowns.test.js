import { test, expect } from '@playwright/test';
import { login } from '../utils/login';
/* repeated code put in the login.js file and that file in the utils folder, 
and that code write in the login function and import that function into this file
*/
test('Locators Test', async ({ page }) =>{ 
    const dropdown = page.locator("select.form-control")
    const pickvalue = page.locator('.radiotextsty'); 
    // idi CSS-Selector class, class nee . tho represent chesthunam
    const pop_ok = page.locator('#okayBtn'); 
    // idi CSS-Selector ID, id nee # tho represent chesthunam
    await login(page);  // Utility function call cheyyadam
    await dropdown.selectOption('consult'); 
    // selectOption method nee use chesi manaki kavalisina value pick chesukutunam
    await pickvalue.last().click(); 
   /* 
    okka locator lo multiple values vunnappudu last value nee select chesukovataniki last() 
    ane method nee use chestha 
    laag adena paticular level value select chesukovali ante nth(value) 
    e mthod nee use chesi select chesukovochu
    */
    await pop_ok.click();
    await page.pause(); 
/*akkadena manam web page manam chesina action a jaruguthuna ledaa ani check chesukovali ante e pause() method ause avuthundi,
execution nee pause chesthundi and alage manaki okka playwright interface tool open avuthundi
*/
});
