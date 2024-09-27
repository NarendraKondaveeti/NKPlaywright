const ExcelJS = require('exceljs');
const fs = require('fs');

// Step 1: JSON data ni correct path lo read cheyadam
const jsonData = JSON.parse(fs.readFileSync('Data.json', 'utf8'));

// Step 2: Existing workbook ni load cheyadam
const workbook = new ExcelJS.Workbook();

workbook.xlsx.readFile('C:\\Practice\\ExcelTest.xlsx')
    .then(() => {
        // Step 3: Kotha sheet add cheyadam
        const worksheet = workbook.addWorksheet('New Sheet'); 

        // Step 4: Column headers ni add cheyadam
        worksheet.columns = [
            { header: 'S No', key: 'S No', width: 10 },
            { header: 'Languages', key: 'Languages', width: 20 },
            { header: 'Tools', key: 'Tools', width: 20 },
            { header: 'Duration(in months)', key: 'Duration', width: 20 }
        ];

        // Step 5: JSON data ni rows ga add cheyadam
        jsonData.forEach((data) => {
            worksheet.addRow(data);
        });

        // Step 6: File ni malli save cheyadam
        return workbook.xlsx.writeFile('C:\\Practice\\ExcelTest.xlsx');
    })
    .then(() => {
        console.log('Excel file updated successfully with a new sheet!');
    })
    .catch((error) => {
        console.log('Error while updating Excel file:', error);
    });
