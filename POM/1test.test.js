import { test, expect } from '@playwright/test'; 
/*
test('@test Test Cases Name',{timeout: 100 * 1000, headless: false}, async ({ page }) => {
    await page.goto('https://www.google.com'); // Ensure you include the `goto()` method to open the website
    await page.locator("#APjFqb").fill("Playwright");
    await page.locator(".byrV5b").nth(1).click();
});

*/
test.only('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByLabel('Search', { exact: true }).fill('playwright');
  // await page.goto('https://www.google.com/search?q=playwright&sca_esv=ec7dc56685c11165&source=hp&ei=GhZnZ-CdB6ec4-EPyK7wyQg&iflsig=AL9hbdgAAAAAZ2ckKjBKHQQ4D_FY88tcGiCBreY2vNwW&ved=0ahUKEwjgkoDIy7mKAxUnzjgGHUgXPIkQ4dUDCA8&uact=5&oq=playwright&gs_lp=Egdnd3Mtd2l6IgpwbGF5d3JpZ2h0MggQABiABBixAzIFEAAYgAQyBRAAGIAEMggQABiABBixAzIIEAAYgAQYsQMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABEjNP1C2DFjBNXABeACQAQCYAY0BoAGaCaoBBDAuMTC4AQPIAQD4AQGYAgugAtoJqAIKwgIKEAAYAxjqAhiPAcICChAuGAMY6gIYjwHCAgsQLhiABBixAxiDAcICCxAAGIAEGLEDGIMBwgIOEAAYgAQYsQMYgwEYigXCAg4QLhiABBixAxiDARiKBZgDCPEFTw6o61CmaCaSBwQxLjEwoAeWOw&sclient=gws-wiz');
  await page.getByRole('link', { name: 'Playwright: Fast and reliable' }).click();
});