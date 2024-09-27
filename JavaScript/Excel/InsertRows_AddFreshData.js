const ExcelJS = require('exceljs');//1
//console.log(ExcelJS)
const fs = require('fs');//2
//console.log(fs)

// Function to load existing data from Excel and find the row with a specific value
async function loadExistingDataAndFindRow(worksheet, valueToFind) {
  const existingData = new Set(); //8 o/p:-Set(0) {}
  // console.log(existingData)
  let insertAfterRowNumber = null;//9
  // console.log(insertAfterRowNumber)

  worksheet.eachRow((row, rowNumber) => {//10
    const rowData = row.values.slice(1).join(','); // Assuming data starts from column 1 //11, 16, 21, 26, 32, 37, 42, 47, 52, 57
   // console.log(rowData)
    if (rowData.trim()) { // Only add non-empty rows//12, 17, 22, 27, 33, 38, 43, 48, 53, 58,
      existingData.add(rowData);//13, 18, 23, 28, 34, 39, 44, 49, 54, 59
    }
    if (rowData.includes(valueToFind)) { // Check if row contains the specific value //14, 19, 24, 29, 35, 40, 45, 50, 55, 60
      insertAfterRowNumber = rowNumber; // 30
    }
  }); //15, 20, 25, 31, 36, 41, 46, 51, 56, 61

  return { existingData, insertAfterRowNumber }; //62, 63
}
// Function to read JSON data and filter unique records
function filterUniqueData(existingData, jsonData) {
  return jsonData.filter(item => {
    const itemData = Object.values(item).join(',');
    //console.log(itemData)
    return !existingData.has(itemData);
  });
}
// Function to insert new data after a specific row and move existing data down
async function insertDataAfterRow(worksheet, insertAfterRowNumber, uniqueData) {
  if (insertAfterRowNumber === null) {
    console.log('Row with the specified value not found.');
    return;
  }
  // Move existing rows down
  for (let rowIndex = worksheet.rowCount; rowIndex > insertAfterRowNumber; rowIndex--) {
    const row = worksheet.getRow(rowIndex);
      //  console.log(row)
    row.eachCell({ includeEmpty: true }, (cell, colNumber) => {
      const value = cell.value;
      // console.log(value)
      worksheet.getRow(rowIndex + uniqueData.length).getCell(colNumber).value = value;
    });
    row.commit();
  }
  // Insert new data after the identified row
  uniqueData.forEach((item, index) => {
    const rowNumber = insertAfterRowNumber + index + 1;
    // console.log(rowNumber)
    const row = worksheet.getRow(rowNumber);
     // console.log(row)
    Object.values(item).forEach((value, colIndex) => {
      row.getCell(colIndex + 1).value = value; // Assign values to the new row
    });
    row.commit(); // Commit the row to the worksheet
  });
}
// Main function to update Excel file
async function updateExcelWithUniqueData(jsonPath, excelPath, valueToFind) {
  const workbook = new ExcelJS.Workbook();//4
  // console.log(workbook)
  await workbook.xlsx.readFile(excelPath);//5
  const worksheet = workbook.getWorksheet('Headers'); // Assuming 1st sheet //6
  // console.log(worksheet)

  const { existingData, insertAfterRowNumber } = await loadExistingDataAndFindRow(worksheet, valueToFind);//7
  // console.log(existingData)
  // console.log(insertAfterRowNumber)

  const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8')); //64
  // console.log(jsonData)
  const uniqueData = filterUniqueData(existingData, jsonData);
  // console.log(uniqueData)

  await insertDataAfterRow(worksheet, insertAfterRowNumber, uniqueData);
  
  await workbook.xlsx.writeFile(excelPath);
  console.log('Excel file updated with unique data.');
}
// Usage
updateExcelWithUniqueData('Data.json', 'C://Practice//ExcelTest.xlsx', 'Python');//3

/* 
Insert rows and insert Fresh values after condition match but below existing data override by new data
const ExcelJS = require('exceljs');
const fs = require('fs');

// Function to load existing data from Excel
async function loadExistingData(worksheet) {
  const existingData = new Map();
  worksheet.eachRow((row, rowNumber) => {
    const rowData = row.values.slice(1).join(','); // Assuming data starts from column 1
    if (rowData.trim()) { // Only add non-empty rows
      existingData.set(rowData, rowNumber);
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

// Function to find the insertion point and move existing rows down
async function findInsertionPointAndMoveRows(worksheet, uniqueData) {
  let insertionPointRowNumber = 0;

  // Find the insertion point
  worksheet.eachRow((row, rowNumber) => {
    if (row.values.includes('python')) { // Replace 'python' with your specific value
      insertionPointRowNumber = rowNumber;
    }
  });

  if (insertionPointRowNumber === 0) {
    throw new Error('Insertion point not found.');
  }

  // Move existing rows down
  const numberOfRowsToInsert = uniqueData.length;
  for (let i = worksheet.rowCount; i >= insertionPointRowNumber + 1; i--) {
    const row = worksheet.getRow(i);
    row.number += numberOfRowsToInsert; // Update row number
    row.commit(); // Commit the row to the worksheet
  }

  return insertionPointRowNumber;
}

// Function to append unique data to Excel starting after the insertion point
function appendDataToWorksheet(worksheet, uniqueData, insertionPointRowNumber) {
  uniqueData.forEach((item, index) => {
    const rowNumber = insertionPointRowNumber + index + 1; // Calculate the next row number
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

  const insertionPointRowNumber = await findInsertionPointAndMoveRows(worksheet, uniqueData);
  appendDataToWorksheet(worksheet, uniqueData, insertionPointRowNumber);

  await workbook.xlsx.writeFile(excelPath);
  console.log('Excel file updated with unique data.');
}

// Usage
updateExcelWithUniqueData('Data.json', 'C://Practice//ExcelTest.xlsx');

*/