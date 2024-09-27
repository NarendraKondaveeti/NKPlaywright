const ExcelJS = require('exceljs');  // 1

async function WriteFile(SeacrValue, FileLocation, ReplaceValue) 
{
  const workbook = new ExcelJS.Workbook(); //3
  await workbook.xlsx.readFile(FileLocation); //4
  const worksheet = workbook.getWorksheet('NK Sheet One'); //5
  const celladdress = await ReadExcel(worksheet, SeacrValue) //6

  if (celladdress.row !== -1 && celladdress.column !== -1) { //43
    const cell = worksheet.getCell(celladdress.row, celladdress.column); 
    cell.value = ReplaceValue; 
    await workbook.xlsx.writeFile(FileLocation); 
  } 
  else 
  {
    console.log(`Value "${SeacrValue}" not found in the worksheet.`); //44
  }
}//45

async function ReadExcel(worksheet, SeacrValue) 
{
    let celladdress = {row:-1, column:-1}; //7
  worksheet.eachRow((row, rowNumber) => //8
    {
        row.eachCell((cell, colNumber) => //9, 17, 25, 33
            {
                if(cell.value === SeacrValue)   //10, 12, 14, 18, 20, 22, 26, 28, 30, 34, 36, 38
      {
        celladdress.row = rowNumber;
        celladdress.column = colNumber;
      }
    }); //11, 13, 15, 19, 21, 23, 27, 29, 31, 35, 37, 39
    }); //16, 24, 32, 40
    return celladdress; // 41, 42
}
WriteFile('Python', 'C://Practice//ExcelTest.xlsx', 'C#' ); //2