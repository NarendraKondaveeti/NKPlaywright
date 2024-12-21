import { test, expect } from '@playwright/test';
// const username = page.locator("#username") ikkaa ivakudadu
test.only('Locators Test', async ({ page }) =>{
    test.slow();
    const username = page.locator("#username")  
    // ikkada manam "await" em mention cheyalisina avasaram ledu aduku ante ikkada manam just value nee variable store chesthunam ante but action em cheytamaledu (ante fill values, click on element)
    // ikkada locator nee okka variable lo store chesukoni a varaible nee reuse chesukutam a locator ki bodulu
    const password = page.locator("[type='password']") 
    // e variable declaration manam test function lone cheyali adukun ante test function bhayata manam page object nee use cheyaledu so manaki "page is not defined playwright" issue vosthundi
    const loginButton = page.locator("#signInBtn")
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await username.fill('rahulshetty');  // ikkada manam username ane input field lo okka value nee fill chestham (ex:-rahulshetty)
    await password.fill('learning');
    await username.fill(''); // ikkada manam previously username field lo fill chesina value nee wiped out chesthunam ante a field nundi a name nee remove chesthunam
    await username.fill('rahulshettyacademy'); // alaa remove chesina field lo malli vere value nee fill chesthunam 
    await loginButton.click();
    //console.log(await page.locator(".card-body a").textContent()); // here getting "Error: strict mode violation" because e locator tho multiple values match avuthunai e value nee return cheyalo playwright ki ardam kaka e error isthundi 
    console.log(await page.locator(".card-body a").first().textContent()) // ikkada manaki e element kavale(ex:-first) playwright ki cheputhunam
    console.log(await page.locator(".card-body a").nth(0).textContent())  // ikkada manaki e element kavale playwright ki index value tho cheputhunam (0 index ante first element ani ardam)
    console.log(await page.locator(".card-body a").nth(1).textContent()) // ikkada manaki e element kavale playwright ki index value tho cheputhunam (1 index ante 2nd element ani ardam)
    //second() method Playwright lo available ledu. "nth(1)"" method ni use chesukondi
});

/* idi Hard code aduku ante ikkada same loactor nee malli ekkadana use cheyani ante malli a locator antha ravali and 
future appudena a locator change aithe a ani places lo update cheyali aduke paina locators nee okka variable lo store chesi a variable nee use chesthunama 
appudu loactor emina change aina a okka variable place lo change chesthe saripothundi

test('Locators Test', async ({ page }) =>{ 
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/'); 
    await page.locator("#username").fill("rahulshetty");
    await page.locator("[type='password']").fill("learning");
    await page.locator("#signInBtn").click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect (page.locator("[style*='block']")).toContainText("Incorrect");
});
*/