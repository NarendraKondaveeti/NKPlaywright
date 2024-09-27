const ExcelJS = require('exceljs');  // 1

async function WriteFile(SeacrValue, FileLocation, ReplaceValue, Change) 
{
  const workbook = new ExcelJS.Workbook(); //3
  await workbook.xlsx.readFile(FileLocation); //4
  const worksheet = workbook.getWorksheet('NK Sheet One'); //5
  const celladdress = await ReadExcel(worksheet, SeacrValue) //6

  if (celladdress.row !== -1 && celladdress.column !== -1) { //53
    const cell = worksheet.getCell(celladdress.row, celladdress.column+Change.Colchange); //54
    cell.value = ReplaceValue; //55
    await workbook.xlsx.writeFile(FileLocation); //56
  } 
  else 
  {
    console.log(`Value "${SeacrValue}" not found in the worksheet.`);
  }
}//57

async function ReadExcel(worksheet, SeacrValue) 
{
    let celladdress = {row:-1, column:-1}; //7
  worksheet.eachRow((row, rowNumber) => //8
    {
        row.eachCell((cell, colNumber) => //9, 19, 29, 41
            {
                if(cell.value === SeacrValue)   //10, 12, 14, 16, 20, 22, 24, 26, 30, 32, 36, 38, 42, 44, 46, 48
      {
        celladdress.row = rowNumber; //33
        celladdress.column = colNumber; //34
      }
    }); //11, 13, 15, 17, 21, 23, 25, 27, 31, 35, 37, 39, 43, 45, 47, 49
    }); // 18, 28, 40, 50
    return celladdress; // 51, 52
}
WriteFile('C#', 'C://Practice//ExcelTest.xlsx', 4, {Rowchange:0, Colchange:2} ); //2