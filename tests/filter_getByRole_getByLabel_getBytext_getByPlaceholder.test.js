import { test, expect } from '@playwright/test';
 
test('Playwright Special locators', async ({ page }) => {
  
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    /* adena placeholder field vunte daniki playwright default locator method getByPlaceholder() nee use chestham */
    await page.getByPlaceholder("Password").fill("abc123");
    /* adena loactor nee name tho find theyali ante Playwright default method is getByRole() idule first tag name isthe 
    playwright a page lo vunna a tag name tho match aina values anitini fillter chesthundi next adulo manaki value nee name: "value isthe" playwright a value find chesthundi */
    await page.getByRole("button", {name: 'Submit'}).click();
    /* aden Text get chesukovataniki getByText() idi playwright provide chese default loactor methadeye */
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link",{name : "Shop"}).click();
    /* ikkada 'locator("app-card")' idi CSS-loactor a locator lo manaki 4 items match avuthunai adule manaki kavalisina value nee
    find chesi fillter()method use chethunam a filter method lo manaki 4 option vunai vatilo okkati hasText option e option ki
    manam expect chesthuna value nee ivali appudu adi manam expect chesthuna valune find chesthundi 
    tarvata a item lo vunna button nee getByRole locator lo find chesi click chesthunam  */
    await page.locator("app-card").filter({hasText: 'Nokia Edge'}).getByRole("button").click();
 
});