// utils/login.js
export async function login(page) {
    const username = page.locator("#username");
    const password = page.locator("[type='password']");
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await username.fill('rahulshettyacademy');
    await password.fill('learning');
}