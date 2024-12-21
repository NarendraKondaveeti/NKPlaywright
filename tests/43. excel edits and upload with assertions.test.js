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
    await WriteFile(SeacrValue, downloadPath, ReplaceValue, Change);
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles(downloadPath);


    const textlocator = page.getByText(SeacrValue);
    const desiredRow = page.getByRole('row').filter({has :textlocator });
    await expect(desiredRow.locator("#cell-4-undefined")).toContainText(ReplaceValue);
});


/*
Playwright Statement (Line 1):


javascript
Copy code
const textlocator = page.getByText(SeacrValue);
Explanation:
Ikkada page.getByText(SeacrValue) ane method ni use chesi, mi page lo SeacrValue ane value unnaa element ni locate chestunnaru.
Idi mi page lo SeacrValue text undaane element ni identify cheyyadaniki use avuthundi.
I locator textlocator variable lo store chestunnaru, which can be used later.
Playwright Statement (Line 2):


javascript
Copy code
const desiredRow = page.getByRole('row').filter({ has: textlocator });
Explanation:
page.getByRole('row') method ni use chesi, mi page lo unna row role elements ni select chestunnaru.
filter({ has: textlocator }) ane method ni use chesi, a rows lo SeacrValue text unnadi ye row lo undho a row ni select chestunnaru.
Ikkada, desiredRow lo a row store avuthundi, which contains the SeacrValue text.
Playwright Statement (Line 3):


javascript
Copy code
await expect(desiredRow.locator("#cell-4-undefined")).toContainText(ReplaceValue);
Explanation:
desiredRow.locator("#cell-4-undefined") statement ni use chesi, desiredRow lo specific cell (which has #cell-4-undefined id) ni locate chestunnaru.
toContainText(ReplaceValue) assertion ni use chesi, mi desiredRow lo ReplaceValue text undho ledo ani check chestunnaru.
Ikkada expect statement ni await cheyyadam valla, Playwright asynchronous ga wait chestundi until ReplaceValue mi specified cell lo undaane check cheyyadaniki.
Summary:
Line 1: SeacrValue text unnadi mi page lo locate cheyyatam.
Line 2: SeacrValue text unnadi row ni filter cheyyatam.
Line 3: A specific row lo oka cell ki, ReplaceValue undaane verify cheyyatam.
Ila miku page lo unna specific content and element ni identify chesi, a element lo desired text undaane check chestaru using Playwright methods.
*/
