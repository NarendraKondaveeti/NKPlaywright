import { test, expect } from '@playwright/test';
 
 
test("Calendar validations",async({page})=>
{
 
    const monthNumber = "4";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    /* click on Calendar field by CSS selector locator */
    await page.locator(".react-date-picker__inputGroup").click();
    /* CSS selector locator for navigate to all months in the Calendar */
    await page.locator(".react-calendar__navigation__label").click();
    /* CSS selector locator for navigate to all years in the Calendar */
    await page.locator(".react-calendar__navigation__label").click();
    // click on a year what we want by playwright getByText() method 
    await page.getByText(year).click();
    /* paina year nee select chesukunakaa ikkada month select chesukovataniki 
    CSS selector(locator(".react-calendar__year-view__months__month")) use chesthunam, e locator all month nee return chesthundi in array lo
    ippudu adulo nundi manaki kavalisi month select chesukovataniki .nth() ane palywright method use chesthunam 
    aithe paina manam monthNUmber nee string format lo icham a string nee intger gaa change cheyataniki "Number()" ane methond nee use chesthunam
    aithe array zero(0) index nundi start avuthundi kabatti, manam 1 isthe adi 2nd value(0, 1 alaa two indexes) nee consider chesthundi aduke manam 
    ichina value ki 1 minus(-1) chesthunam ante ".nth(Number(monthNumber)-1)" dini meaning string nee number gaa marchi 
    a number lo nundi minus 1 thisi a value okka index nee represent chesthundi

    and ikkada manam monthNumber value lessthan 0 isthe appudu adi -1 index avuthundi ante array last nundi iterate avuthundi 
    so manaki last month select chesukutundi

    Inko point ikkada 'await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();' intha line
    aduku asalu year tho select chsukukunatu (getByText(year) tho 
    alaane 'getByText(monthNumber)' tho month kuda select chesukovochu kada ante web page lo year 2027 ane string format lo vundi
    ikkada manak kudaa const year = "2027"; alane icham kabhati manaki simple gaa 'await page.getByText(year).click();' ane line work aindi
    (const year = 2027 ante intger ichina same value kabatti work avuthundi) but months ki web page lo string format lo vunnai ante 
    [January, February, March] alaa kani ikkada manam monthNumber valuen nee const monthNumber = "4"; ani integer nee string format lo isthunam
    aduke 'await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();' line 
    ade monthNumber = "May" ani isthe appudu await page.getByText(monthNumber).click(); ane line set avuthundi

    */
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();

    /* ikkada date nee find cheyataniki XPath nee use chesam */
    await page.locator("//abbr[text()='"+date+"']").click();
 
});