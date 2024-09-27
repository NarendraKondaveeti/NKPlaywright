const ExcelJS = require('exceljs');

async function ReadExcel() 
{
    const celladdress = {row:-1, column:-1};
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('C://Practice//ExcelTest.xlsx');
  const worksheet = workbook.getWorksheet('NK Sheet One');
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => 
     {
      if(cell.value === "Python")   
      {
        celladdress.row = rowNumber;
        celladdress.column = colNumber;
      }
    });
    });
    const cell = worksheet.getCell(celladdress.row, celladdress.column);
    cell.value = 'TypeScript';
    await workbook.xlsx.writeFile('C://Practice//ExcelTest.xlsx');
}

ReadExcel()

/* 
In-Built Statements:

async function ReadExcel()

Idi JavaScript in-built feature, asynchronous functions ni define cheyatam ki use chestaru.
const workbook = new ExcelJS.Workbook();

Idi ExcelJS library yokka in-built method, oka new workbook instance ni create cheyatam ki use chestaru.
await workbook.xlsx.readFile('C://Practice//ExcelTest.xlsx');

Idi ExcelJS lo in-built method, existing Excel file ni asynchronous ga read cheyatam ki use chestaru.
const worksheet = workbook.getWorksheet('NK Sheet One');

Idi ExcelJS lo in-built method, workbook lo oka specific sheet ni access cheyatam ki use chestaru.
worksheet.eachRow((row, rowNumber) => { ... });

Idi ExcelJS lo in-built method, worksheet lo prathi row ni iterate cheyatam ki use chestaru.
row.eachCell((cell, colNumber) => { ... });

Idi ExcelJS lo in-built method, prathi row lo unna prathi cell ni iterate cheyatam ki use chestaru.
await workbook.xlsx.writeFile('C://Practice//ExcelTest.xlsx');

Idi ExcelJS lo in-built method, modified workbook ni asynchronous ga file ga save cheyatam ki use chestaru.
User-Defined Statements:

const celladdress = {row:-1, column:-1};

Idi user-defined object, row and column numbers store cheyatam ki.
if(cell.value === "Python") { ... }

Idi user-defined condition, cell value "Python" unna condition satisfy chestundi.
celladdress.row = rowNumber; celladdress.column = colNumber;

Idi user-defined assignment, cell yokka row and column numbers ni celladdress object lo store chestundi.
const cell = worksheet.getCell(celladdress.row, celladdress.column);

Idi user-defined statement, celladdress object lo store aina row and column values ni use chesi 
oka specific cell ni access chestundi.
cell.value = 'TypeScript';

Idi user-defined statement, access chesina cell value ni modify cheyatam ki.
Vati Use Anti:

In-Built Statements:
Idi predefined methods and features, specific tasks ni cheyatam ki library or language yokka functionalities use chestaru.
User-Defined Statements:
Idi developers create chesina code blocks, specific logic or data ni handle cheyatam ki user ga define chestaru
*/


/* 
Summary:

Mundhu Excel file lo values ni print cheyatam ela cheyyalo telusukunnamu. Ippudu oka scenario ni consider cheddam, 
adi "Apple" ni Excel lo kanipinchadam, aa Apple yekkada undho row number and column number tho coordinates chupinchadam.

Ippudu, prathi row and cell ni iterate chesetappudu, "Apple" kanipisthe, 
aa row and column number ni console log lo print cheyyachu.

Iteration lo current row number, column number ni identify cheyatam ela ante, row number oka variable lo store avutundi, 
column number inkoka variable lo store avutundi. Iteration lo Apple kanipisthe, aa values ni log cheyadam.

"Apple" ni "iPhone" to replace cheyyali ante, Apple kanipinche row and column number ni identify chesi, aa cell value ni cell.
value lo iPhone ga update chesi, workbook ni save cheyyadam.

Iteration lo row and column numbers dynamic ga vundali, hardcoded values undakudadhu. 
Ippudu row and column values ni object lo store chesi, aa object ni loop baiti use cheyyachu.

Object yokka properties ni dynamic ga update cheyyali, loop lo update chesina values ni future lo access cheyyachu.

Ekada "Banana" kanipisthe, "Republic" ga replace cheyyadam ela cheyyalo chupinchadam jarigindi. 
Iteration lo dynamic values ni update cheyadam ki best practices follow cheyyadam.

E concepts use chesi Excel read and write functions ni separate chesi clean ga modularize cheyyatam ela cheyyalo 
next lecture lo telusukundam.
*/