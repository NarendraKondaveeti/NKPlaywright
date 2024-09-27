const ExcelJS = require('exceljs');
const fs = require('fs');

// Function to load existing data from Excel
async function loadExistingData(worksheet) {
  const existingData = new Set();
  worksheet.eachRow((row, rowNumber) => {
    const rowData = row.values.slice(1).join(','); // Assuming data starts from column 1
    if (rowData.trim()) { // Only add non-empty rows
      existingData.add(rowData);
    }
  });
  return existingData;
}

// Function to read JSON data and filter unique records
function filterUniqueData(existingData, jsonData) {
  return jsonData.filter(item => {
    const itemData = Object.values(item).join(',');
    return !existingData.has(itemData);
  });
}

// Function to append unique data to Excel starting after the last non-empty row
function appendDataToWorksheet(worksheet, uniqueData) {
  let lastRowNumber = 1;
  worksheet.eachRow((row, rowNumber) => {
    if (row.values.slice(1).join(',').trim()) { // Check if the row is not empty
      lastRowNumber = rowNumber;
    }
  });
  
  uniqueData.forEach((item, index) => {
    const rowNumber = lastRowNumber + index + 1; // Calculate the next row number
    const row = worksheet.getRow(rowNumber);
    Object.values(item).forEach((value, colIndex) => {
      row.getCell(colIndex + 1).value = value; // Assign values to the new row
    });
    row.commit(); // Commit the row to the worksheet
  });
}

// Main function to update Excel file
async function updateExcelWithUniqueData(jsonPath, excelPath) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(excelPath);
  const worksheet = workbook.getWorksheet('Headers'); // Assuming 1st sheet

  const existingData = await loadExistingData(worksheet);
  const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  const uniqueData = filterUniqueData(existingData, jsonData);

  appendDataToWorksheet(worksheet, uniqueData);
  
  await workbook.xlsx.writeFile(excelPath);
  console.log('Excel file updated with unique data.');
}

// Usage
updateExcelWithUniqueData('Data.json', 'C://Practice//ExcelTest.xlsx');
