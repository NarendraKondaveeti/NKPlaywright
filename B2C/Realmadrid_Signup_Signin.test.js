import {test, expect} from '@playwright/test'

const Email = 'realmadrid47@mailinator.com';
// const Email = `fifa${new Date().toISOString().slice(0, 10).replace(/-/g, '')}@mailinator.com`;
const Password = 'realmadrid@1234';
console.log(Email)
test('Sign-up', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.realmadrid.com/en');
    await page.click('//button[.="Accept All Cookies"]');
    await page.click('.rm-web-header__login');
    await page.locator('#rm-register-email').fill(Email); //getByPlaceholder(' ')
    await page.click('#rm-register-email-btn');
    await page.fill('#rm-password-register', Password);
    await page.locator('#rm-birthDateTime-register').fill('44/44/4444');
    await expect (page.locator('span.errorMessage.errorMessage--error')).toContainText('Incorrect date!');
    //await expect (Confirmpage.locator('.verify-content-form-title h2')).toContainText("You have signed up successfully! Close this window");
    await page.locator('#rm-birthDateTime-register').fill('15/04/1947');
    await page.click('#rm-password-register-btn');
    const WaitForLocator = page.locator('.toast-content__main .toast-content__text');
    await WaitForLocator.waitFor();
    await expect (page.locator('.toast-content__main .toast-content__text')).toContainText('confirmation email');
    const Mailinator = await context.newPage(); 
    // await Mailinator.goto('https://www.mailinator.com/', { waitUntil: 'networkidle' });
    await Mailinator.goto('https://www.mailinator.com/', { timeout: 80000 });
    await Mailinator.locator('#search').nth(0).fill(Email);
    await Mailinator.getByRole('button', { name: 'GO' }).click()
    await Mailinator.pause();
    await Mailinator.waitForLoadState('networkidle');
    await Mailinator.locator("//td[@class= 'ng-binding']").nth(0).click()
    //await Mailinator.getByRole('cell', { name: 'just now' }).nth(0).click()
    const Frame = Mailinator.frameLocator('#html_msg_body'); 
    const accountactiveEvent = context.waitForEvent('page');
    await Frame.getByRole('link', { name: 'Activate your account' }).click();
    const accountactive = await accountactiveEvent;
    // await accountactive.waitForLoadState('networkidle');
    //await accountactive.locator('//p[@class="toast-content__text"]').waitFor();
    //await expect(accountactive.locator('//p[@class="toast-content__text"]')).toContainText('La cuenta ya ha sido activada');
    await expect(accountactive.locator('//p[@class="toast-content__text"]')).toContainText('Your Madridista account is already activated, get the most out of it!');
    //await Mailinator.pause();
    //expect(await accountactive.screenshot()).toMatchSnapshot('Expectedshot.png');
    await accountactive.locator('#rm-password-register').fill(Password);
    await accountactive.locator('#rm-password-register-btn').click();
    await accountactive.locator('#name-step-name').fill('realmadrid');
    await accountactive.locator('#name-step-lastname').fill('Test');
    await accountactive.getByRole('button', { name: 'Prefix null' }).click();
    await accountactive.locator('#name-step-prefix-predict').pressSequentially("+1 (u");
    await accountactive.click('//ul[@tabindex="0"]');
    await accountactive.fill('#name-step-phone', '3172849658');
    await accountactive.click('#name-step-btn');
    await expect (accountactive.locator('.rm-main__title')).toContainText('This is your new Madridista card!');
    await accountactive.getByRole('button', { name: 'Awesome, let’s continue' }).click();
    await accountactive.getByRole('button', { name: 'Finish' }).click();
    await expect (accountactive.locator('.rm-main__title rm-main__title--final')).toContainText('Congrats, you are now a Madridista!');
    await context.close()
});

test.only('Sign-in', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto('https://www.realmadrid.com/en')
    await page.click('//button[.="Accept All Cookies"]');
    await page.click('.rm-web-header__login');
    await page.locator('#rm-register-email').fill(Email);
    await page.click('#rm-register-email-btn');
    await page.fill('#rm-password-register', Password)
    await page.click('#rm-password-register-btn');
    await page.locator('a .rm-web-header__user').click({ timeout: 60000 });
    //await page.pause();
    //await page.locator('//h2[@translate="profile.home.herocard.title"]').waitFor({ timeout: 60000 });
    //await page.waitForLoadState('networkidle', { timeout: 60000 });
    //await page.waitForLoadState('domcontentloaded');
    await expect (page.locator('//h2[@translate="profile.home.herocard.title"]')).toHaveText('This is your Madridista area', { timeout: 60000 })
    await page.click('//span[@class="ng-tns-c3167221239-1"]');
    await page.locator('//button[.="Log out"]').nth(0).click();
    
    //await page.pause();
});
