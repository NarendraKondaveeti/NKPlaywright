import { test, expect } from '@playwright/test';
test('Locators Test', async ({ page }) =>{
    test.slow();
    const username = page.locator("#username")  
    const password = page.locator("[type='password']") 
    const loginButton = page.locator("#signInBtn")
    const cardTitle = page.locator(".card-body a")
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await username.fill('rahulshetty'); 
    await password.fill('learning');
    await username.fill(''); 
    await username.fill('rahulshettyacademy'); 
    await loginButton.click();
    //console.log(await cardTitle.first().textContent())
    await page.waitForSelector('.card-body a');
    //await page.waitForTimeout(4000);
    console.log(await cardTitle.allTextContents(".card-body a")) 
    /* allTextContents() method DOM lo locator immediately available unnappudu a locator ni find chesi, text contents ni return chesthundi. Kani, locator availability lekunda unte, method wait cheyakunda(like textContext, fill,...), immediately empty array [] return chesthundi
    anduku ante allTextContents use chesinappudu playwright first empty array create cheesthundi tarvata element find aithe appudu values nee a empty array lo insert chesthundi
    daniki manam "await page.waitForTimeout(4000)" rasthe page 4seconds waiting lo vutundi e lopu allTextContents() method loactor nee find chesi values nee array lo insert chesthundi
    aithe manam ikkada "await page.waitForTimeout(4000)" rayali ani em ledu dani kante better gaa "await page.waitForSelector('.card-body a');" or "console.log(await cardTitle.first().textContent())" nee use cheyochu
    vitiki alagu a element kosam wait chesthe mechanism vundi kabatti a element load ayya varuku page nee waiting lo vuchuthai inka ellagu DOM lo locator available lo vundi kabatti allTextContents() method elements nee get chesthukuntundi
    ikkada "await page.waitForTimeout(4000)" hard code avuthundi aduku ante element 2000 lope load aithe 4000 varuku wait chesthundi danikante "waitForSelector()" or "textContent()" nee use cheyatam bettert
    */
});

/*
Explanation:-

1.Import:- 
`@playwright/test` nunchi `test` and `expect` functions ni import chesukutunam.
`test` function ni use chesi test cases ni define chesthunam and `expect` function ni use chesi assertions chesukovachu.

2.Test Definition:-
`test('Locators Test', async ({ page }) => {...});` line to test case ni define chesthunam.
`test.slow();` function ni use chesi test ni slow mode lo run cheyyadam.

3.Locators Definition:-
`const username = page.locator("#username");`
`const password = page.locator("[type='password']);`
`const loginButton = page.locator("#signInBtn");`
`const cardTitle = page.locator(".card-body a");`
`locator` function ni use chesi elements ni identify chesthunam.

4.Page Navigation and Actions:-
`await page.goto('https://rahulshettyacademy.com/loginpagePractise/');` page ni navigate chesthunam.
`await username.fill('rahulshetty');` username field ni fill chesthunam.
`await password.fill('learning');` password field ni fill chesthunam.
`await username.fill('');` username field ni clear chesthunam.
`await username.fill('rahulshettyacademy');` username field ni malli fill chesthunam.
`await loginButton.click();` login button click chesthunam.

5.Wait for Selector:-
`await page.waitForSelector('.card-title');`
e line `.card-title` element visible avvadaniki wait chesthundi.

6.Extract Text Contents:-
`console.log(await cardTitle.allTextContents());`
e line `cardTitle` locators ki sammaninchina text contents ni extract chesi console lo print chesthundi.

Note:
`await page.waitForSelector('.card-title');` line `.card-title` element render ayye varaku wait chestundi. I line use chesukovadam valla `.card-body a` elements correct ga load ayyi, `allTextContents()` function correct output isthundi.

*/