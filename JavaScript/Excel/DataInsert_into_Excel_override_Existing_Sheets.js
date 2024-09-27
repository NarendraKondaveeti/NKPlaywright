const ExcelJS = require('exceljs');
const fs = require('fs');

// Step 1: JSON data ni read cheyadam
const jsonData = JSON.parse(fs.readFileSync('Data.json', 'utf8'));

// Step 2: Oka new workbook create cheyadam
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('InsertSheet');

// Step 3: Column headers ni add cheyadam
worksheet.columns = [
    { header: 'S No', key: 'S No', width: 10 },
    { header: 'Languages', key: 'Languages', width: 20 },
    { header: 'Tools', key: 'Tools', width: 20 },
    { header: 'Duration(in months)', key: 'Duration', width: 20 }
];

// Step 4: JSON data ni rows ga add cheyadam
jsonData.forEach((data) => {
    worksheet.addRow(data);
});

// Step 5: Excel file ni save cheyadam
workbook.xlsx.writeFile('C://Practice//ExcelTest.xlsx')
    .then(() => {
        console.log('Excel file created successfully!');
    })
    .catch((error) => {
        console.log('Error while creating Excel file:', error);
    });
