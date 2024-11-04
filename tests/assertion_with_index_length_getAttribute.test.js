import { test, expect } from '@playwright/test';
 
test("@test @test2 Calendar validations",async({page})=>
{
    const monthNumber = "6";
    const date = "15";
    const year = "2027";
    const expectedList = [monthNumber,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(monthNumber)-1).click();
    await page.locator("//abbr[text()='"+date+"']").click();
    //await page.pause()
    /* ikkada "monthNumber, date, year" e muditiki comman gaa vunna locator nee tisukunam dani inputs variable lo place chesthunam*/
    const inputs = page.locator(".react-date-picker__inputGroup input")
    /* ikkada inputs meda vunna length (it's javascript) method apply chesam aduku ante each and every value nee iterate chesthunam 
    ante indirect gaa '.react-date-picker__inputGroup input' ane locator lo vunna ani value nee iterate chesthunam 
    ante '.react-date-picker__inputGroup input' location vunna ani values complete ayye varuku for loop iterate avuthundi
    */
    for (let index = 0; index <inputs.length; index++)
    {
      /* ikkada '.react-date-picker__inputGroup input' meda for iterate chesthunappudu okko value nee index gaa thisukoni
      each index lo vunna valune getAttribute() playwright method tho value nee return chesi value variable lo store chesuthunam
      */
      const value = await inputs[index].getAttribute("value");
      /* ikkada index base meda okka value vosi value lo stor avuthundi aduke mana expected array nee kudaa index base medaa comparioson chesthuna
      ante 1st iteration lo  June = 6
      2nd iteration lo 15  = 15
      3rd iteration 2027 = 2027
       */
      expect(value).toEqual(expectedList[index]);

  }

});
