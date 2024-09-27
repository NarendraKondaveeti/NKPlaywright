const ExcelJS = require('exceljs');

async function ReadExcel(searchText, replaceText, change, filePath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile('C://Practice//ExcelTest.xlsx');
  const worksheet = workbook.getWorksheet('NK Sheet One');
  worksheet.eachRow((row, rowNumber) => {
    row.eachCell((cell, colNumber) => 
     {
/* 
python is case-sensitive(ante Excel lo alaa vunte alaa vundali ante Excel lo capita letters lo vunte ikkada alane ivali) 
ikka vella value match kaka pothe error em throw cheyadu alage a value return cheyadu 
*/
      if(cell.value === "Python")   
      {
        /* 
        Excel lo Python vnute a cell yekka Row Number, Column Number console print chesthunama
        */
        console.log('rowNumber = ', rowNumber);
        console.log('colNumber = ', colNumber)
      }
    });
  });
}
ReadExcel();