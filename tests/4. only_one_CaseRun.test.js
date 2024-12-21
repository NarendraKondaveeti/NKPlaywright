import { test, expect } from '@playwright/test';
test.only('Test Case 1',  async function({page}) {
    await page.goto('https://playwright.dev/');
});


test.only('Test Case 2',  async function({page}) {
    /*adena okka case or kani cases nes mtarme execute cheyali ante a test cases deggara test taravata .only(test.only)
    ani mention chesi run chesthe a cases matrame run avuthai, ante okka file(file1) 5 cases vunnai
    and vere file(file2) lo okka 3 cases vunnai anukunte ippudu file1 lo 2 cases ki e .only add chesi
    file2 lo okka case ki .only add chesi run chesthe file1 loni a two cases and file2 loni a one case execute avuthai */
    await page.goto('https://google.com');
});
