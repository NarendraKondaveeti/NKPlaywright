import { test, expect } from '@playwright/test';


test('Visual Test', async ({ page }) =>{ 
    await page.goto('https://flightaware.com'); 
    /* 
    ikkada two screeshots nee comaprison chesthunam ane ippudu tisina screeshot previously thisina screeshot same vunda ledaa
    ani check chesthuunam daniki 'page.screenshot()).toMatchSnapshot('Expectedshot.png')' nee use chestham 
    ante 'page.screenshot()' present screeshot vutundi toMatchSnapshot('Expectedshot.png') lo previously screenshot vutundi

    and 

    e test case execute chesinappudu a test file name tho tests folder lo okka folder create avuthundi
    a folder lo screenshots save avuthai

    and 

    test-results folder lo kudaa okka folder create avuthundi with test file name e folder lo epected screeshot vuthundi,
    actual screeshot vutundi, and test fail aithe two screeshot madhya difference anti ani chpisthu okka screeshot create avuthundi

    okka vella test 1st run chesinappudu expected result file lekkapothe appudu test file avuthundi but playwrigt 
    toMatchSnapshot(''); lo ichina expected file name tho okka file create chesi tests folder lo place chesthundi 
    */
    expect(await page.screenshot()).toMatchSnapshot('Expectedshot.png');
});