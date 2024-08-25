import {test, expect} from '@playwright/test'

// const Email = 'nkfifa11@mailinator.com';
const Email = `fifa${new Date().toISOString().slice(0, 10).replace(/-/g, '')}@mailinator.com`;
const Password = 'fifa@1234';
console.log(Email)
test('Sign-up', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto('https://www.fifa.com/en')
    await page.click('button:has-text("I Accept")');
    await page.click('button[aria-label="My Account"]');

    const SignUp = context.waitForEvent('page')
    await page.getByRole('link', { name: 'Sign Up' }).click();
    const SignUpPage = await SignUp;
    await SignUpPage.locator('#firstname').fill('NKFifa');
    await SignUpPage.locator('#email').fill(Email);
    await SignUpPage.locator('#gender').selectOption('Male');
    await SignUpPage.locator('#day').selectOption('15');
    await SignUpPage.locator('#month').selectOption('August');
    await SignUpPage.locator('#year').selectOption('1947');
    await SignUpPage.locator('#country').selectOption('India');
    await SignUpPage.locator('#preferredLanguage').selectOption('English');
    await SignUpPage.click('button[type=submit]');
    await SignUpPage.locator('#password').nth(0).fill(Password);
    await SignUpPage.locator('#confirm-password').nth(0).fill(Password);
    await SignUpPage.click('#newsletter');
    await SignUpPage.click('#partnerconsent');
    await SignUpPage.click('#TandC');
    await SignUpPage.click('button[type="submit"]');
    
    const Mailinator = await context.newPage();
    await Mailinator.goto('https://www.mailinator.com/')
    await Mailinator.waitForLoadState('networkidle');
    await Mailinator.locator('#search').nth(0).fill(Email);
    await Mailinator.getByRole('button', { name: 'GO' }).click()
    await Mailinator.getByRole('cell', { name: 'FIFA' }).nth(0).click()

    const Frame = Mailinator.frameLocator('#html_msg_body'); 
    const ConfirmpageEvent = context.waitForEvent('page');
    await Frame.locator('//span[@style="font-weight: bold"]').click();
    const Confirmpage = await ConfirmpageEvent;
    await expect (Confirmpage.locator('.verify-content-form-title h2')).toContainText("You have signed up successfully! Close this window");
    await Confirmpage.locator('#close-window').nth(0).click();
    await Mailinator.close()
    await SignUpPage.click('button[aria-label="My Account"]');
    await expect(SignUpPage.locator(`//p[normalize-space(text())='${Email}']`)).toHaveText(Email);
    await SignUpPage.getByRole('link', { name: 'Sign Out' }).click(); 
    await context.close()
}); 
test('Sign-in', async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto('https://www.fifa.com/en')
    await page.click('button:has-text("I Accept")');
    await page.click('button[aria-label="My Account"]');
    const Signin = context.waitForEvent('page')
    await page.click('a[label="Sign In"]');
    const SigninPage = await Signin;
    await SigninPage.locator('#email').nth(0).fill(Email);
    await SigninPage.locator('#password').nth(0).fill(Password);
    await SigninPage.locator('#loginFormSubmitBtn').nth(0).click();
    await SigninPage.click('button[aria-label="My Account"]');
    await expect(SigninPage.locator(`//p[normalize-space(text())='${Email}']`)).toHaveText(Email);
    await SigninPage.getByRole('link', { name: 'Sign Out' }).click(); 
    await SigninPage.pause();
});
