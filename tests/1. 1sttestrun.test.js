
// const { test, expect } = require('@playwright/test') == older version
import { test, expect } from '@playwright/test'; // ikkada @playwright/test anedi okka module a module nundi test, expect ane e in-built functions nee import chesukuntunam
// kavali ane e function ki manam alias name ichukovochu like for example “test as testcase” ante ikkada test ane word nee mana testcase ane alias name ichinatlu 
test('@test Test Cases Name',  async function({page}) {
    await page.goto('https://playwright.dev/');
});

test('Test Cases Name', async ({ page }) => {  
    await page.goto('https://playwright.dev/');
});

/*
test('Test Cases Name', async ({ page }) => { // For anonymous functions, you can skip the function keyword and use the => syntax instead.
    await page.goto('https://playwright.dev/');
});
*/
/* ikkada manam import chesthukuna test() nee use chesthunam, playwright lo adena okka test case nee rayali ante adi e test() lone rayali
e test()function lo manam two arguments ivali
// 1st argument is “string” ante ikkada Test case title istham
// 2nd argument is “body” ante ikkada a test case yekka execution code rastham, ithe ikkada function ki mudu async ante keyword istham anduku ante
a function async function ani JavaScript ki manam cheputhunatulu
//JavaScript default gaa synchronous model so e function lo rasina all steps(statements) sequence gaa execute avuthai ante okkati execute ayyakka marekani,
//so alaa sequence execution avakunda a function neeki async ani ivatam valla test execution parallel order lo jaruguthondi,
//alage each step line ki await ane keyword istham idi okka line of code execute ayye varuku next line execution nee hold chesthundi
Playwright lo test define chesetappudu, internal ga oka context object create avutundi.
A context object lo page ane property untundi.
page Object:
Playwright lo page object browser lo okka tab leka page ni represent chesthundi.
Idi key functions ni perform chesthundi like URL ki navigate cheyatam, elements ni interact cheyatam, screenshots capture cheyatam, JavaScript evaluate cheyatam,
elements ki wait cheyatam, and dialogs handle cheyatam.
*/
