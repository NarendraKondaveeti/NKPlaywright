const ExcelJS = require('exceljs');
const fs = require('fs');

// Step 1: JSON file nundi data read cheyadam
const jsonData = JSON.parse(fs.readFileSync('Data.json', 'utf8'));

// Step 2: Headers ni JSON lo first object nundi teesukoni prepare cheyadam
const headers = Object.keys(jsonData[0]).map(key => ({ header: key, key: key }));

// Step 3: Excel workbook and sheet create cheyadam
const workbook = new ExcelJS.Workbook();
workbook.xlsx.readFile('C:\\Practice\\ExcelTest.xlsx')
    .then(() => {
        const worksheet = workbook.addWorksheet('Headers');  // Kotha sheet add cheyadam
        
        // Step 4: Headers nee set cheyadam
        worksheet.columns = headers;

        // Step 5: JSON data ni rows gaa add cheyadam
        jsonData.forEach(data => {
            worksheet.addRow(data);
        });

        // Step 6: Excel file ni save cheyadam
        return workbook.xlsx.writeFile('C:\\Practice\\ExcelTest.xlsx');
    })
    .then(() => {
        console.log('Excel file updated successfully with a new sheet!');
    })
    .catch((error) => {
        console.log('Error while updating Excel file:', error);
    });
