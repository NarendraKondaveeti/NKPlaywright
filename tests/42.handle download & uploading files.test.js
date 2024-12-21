import { test, expect } from '@playwright/test';
const ExcelJS = require('exceljs');


async function WriteFile(SeacrValue, FileLocation, ReplaceValue, Change)
{
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(FileLocation);


  // Get the correct worksheet by name
  const worksheet = workbook.getWorksheet('Sheet1'); // Updated sheet name


  if (!worksheet) {
    console.log('Worksheet not found! Please check the sheet name.');
    return;
  }


  const celladdress = await ReadExcel(worksheet, SeacrValue);


  if (celladdress.row !== -1 && celladdress.column !== -1) {
    const cell = worksheet.getCell(celladdress.row, celladdress.column + Change.colChange);
    cell.value = ReplaceValue;
    await workbook.xlsx.writeFile(FileLocation);
  }
  else
  {
    console.log(`Value "${SeacrValue}" not found in the worksheet.`);
  }
}


async function ReadExcel(worksheet, SeacrValue)
{
    let celladdress = {row:-1, column:-1};
    worksheet.eachRow((row, rowNumber) =>
    {
        row.eachCell((cell, colNumber) =>
        {
            if(cell.value === SeacrValue)
            {
                celladdress.row = rowNumber;
                celladdress.column = colNumber;
            }
        });
    });
    return celladdress;
}


test('Upload download excel validation', async ({ page }) => {
    const SeacrValue = 'Mango';
    const ReplaceValue = '450';
    const FileLocation = 'C:/Users/v-konare/Downloads/download.xlsx';
    const Change = { rowChange: 0, colChange: 2 };


    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    const downloadPromise = page.waitForEvent('download');
    await page.locator("#downloadButton").click();
    const download = await downloadPromise;
    const downloadPath = await download.path();
    console.log(downloadPath)
    await WriteFile(SeacrValue, downloadPath, ReplaceValue, Change);
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles(downloadPath);
});




/*
User Statement (Line 1):


javascript
Copy code
const downloadPromise = page.waitForEvent('download');
Explanation:
Ikkada page.waitForEvent('download') ane Playwright statement lo, miru download event ki wait chestunnaru.
Miru download event ni wait chesthunnaru kabatti, miru ikkada Promise ni assign chestunnaru downloadPromise ane variable ki.
Idi user action anticipation ni represent chesthundi, but actual action ikkada jaragatledhu.


Playwright Statement (Line 2):
javascript
Copy code
await page.locator("#downloadButton").click();
Explanation:
Ikkada #downloadButton ane button ni Playwright click chestundi.
Idi actual user action ni initiate chesthundi.
Playwright ika button click chesthundi download start avvadam kosam.


Playwright Statement (Line 3):
javascript
Copy code
const download = await downloadPromise;
Explanation:
Ikkada downloadPromise (which was a Promise) ni await chestunnaru, which means miru download event complete avvadaniki wait chestunnaru.
Playwright action initiate ayyaka, miru Promise ni resolve chestunnaru, which means download event actualga complete ayyi, mi variable download lo download object ni capture chestunnaru.


Playwright Statement (Line 4):
javascript
Copy code
const downloadPath = await download.path();
Explanation:
Ikkada download object nunchi path() method ni call chesi, miru actualga downloaded file path ni capture chestunnaru.
Idi mi Playwright action complete avvadam and actualga downloaded file path ni collect cheyyadam ki use avuthundi.
Summary:
Lines 1, 3, and 4: Playwright statements to handle or interact with user events.
Line 2: User statement that triggers the download action in Playwright.
Context:
Lines 1 and 3: Promise ni create chestaru, and download object ni Promise resolve ayyaka store chestaru.
Lines 2 and 4: User actions ni interact cheyatam or respond cheyatam.
Idi mi Playwright flow context ni explain chesthundi. Inka doubts unte, cheppandi.
*/
