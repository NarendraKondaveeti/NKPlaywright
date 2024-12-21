import { test, expect } from '@playwright/test';
 
test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    /* Playwright manaki koni default lactors nee provide chesthundi vatili okkati getByLabel() method,
    idi Checkboxes, radiobuttons, dropdowns nee handle cheyataniki use avuthundi */
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    /* npx playwright test --ui  idi okka test execution command idi run chesthe execution start avakundaa playwright okka UI tool nee open chesthundi
    adulo project lo vunna ani files vuntai alage adena file mutiple cases vunte each case ki run button chupisthundi, manam kavali ante ani test files nee okka sari execute cheyosu 
    or okka file nee run chesukovochu, or file lo single or mutiple cases nee run chesukovochu id manaki Terminal lo test results em ivadu
    test execution complete ayyakaa ani a tool nee vunai logs, screenshots alaa anni
    and alage a tool open chesi aden test run chesi malli update chesi save chesthe a tool automatically execution start chesthundi
    */
});