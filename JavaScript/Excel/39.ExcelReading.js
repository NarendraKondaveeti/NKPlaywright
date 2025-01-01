const ExcelJS = require('exceljs');

async function ReadExcel(searchText, replaceText, change, filePath) {

  const workbook = new ExcelJS.Workbook();

  await workbook.xlsx.readFile('C://Practice//ExcelTest.xlsx');

  const worksheet = workbook.getWorksheet('NK Sheet One');

  worksheet.eachRow((row, rowNumber) => {

    row.eachCell((cell, colNumber) => {

      console.log(cell.value);
    });
  });

}

ReadExcel();

/* 
const ExcelJS = require('exceljs');

JavaScript Statement:
Explanation: I line oka JavaScript statement. require('exceljs') ane JavaScript function ni vadutundi,
idi ExcelJS ane variable lo exceljs library ni import chestundi. 
const keyword vadutundi variable ni define cheyadaniki, idi value ni future lo marchaledu.

async function ReadExcel(searchText, replaceText, change, filePath) {

User-Defined Statement:
Explanation: e line oka user-defined statement. Idi ReadExcel ane oka function ni define chesthundi.
async keyword vadutam valla, idi asynchronous ga execute avvadani ki cheppadam jarugutundi. 
e function 4 parameters (searchText, replaceText, change, filePath) ni accept chestundi.

const workbook = new ExcelJS.Workbook();

JavaScript Statement:
Explanation: e line lo, ExcelJS.Workbook() ane constructor ni vadi oka new workbook object ni create 
chesthundi. const keyword valla, workbook ane variable ki idi assign avuthundi.

await workbook.xlsx.readFile('C://Practice//ExcelTest.xlsx');

JavaScript Statement:
Explanation: e line lo, await keyword vadi, workbook.xlsx.readFile() ane asynchronous function ni 
execute cheyadaniki cheppadam jarugutundi. Idi C://Practice//ExcelTest.xlsx ane file ni chadivutundi.

const worksheet = workbook.getWorksheet('NK Sheet One');

JavaScript Statement:
Explanation: e line lo, workbook.getWorksheet('NK Sheet One'); ane JavaScript method ni vadutundi, 
idi NK Sheet One ane worksheet ni access chesthundi. const keyword vadutundi idi worksheet ane 
variable ki assign cheyadaniki.

worksheet.eachRow((row, rowNumber) => {

JavaScript Statement:
Explanation: I line lo, eachRow ane method ni vadutundi, idi prathi row ni iterate chesthundi. 
row ane variable prathi row ni represent chestundi mariyu rowNumber ane variable row yokka number ni 
represent chestundi.

row.eachCell((cell, colNumber) => {

JavaScript Statement:
Explanation: I line lo, eachCell ane method ni vadutundi, idi prathi cell ni iterate chesthundi. 
cell ane variable prathi cell yokka value ni represent chestundi mariyu colNumber ane variable column 
yokka number ni represent chestundi.

console.log(cell.value);

JavaScript Statement:
Explanation: I line lo, console.log(cell.value); ane JavaScript statement ni vadutundi, 
idi prathi cell lo unna value ni console lo print chesthundi.

});

JavaScript Statement:
Explanation: Idi row.eachCell function ki closing brace.

});

JavaScript Statement:
Explanation: Idi worksheet.eachRow function ki closing brace.

}

JavaScript Statement:
Explanation: Idi ReadExcel function ki closing brace.

ReadExcel();

JavaScript Statement:
Explanation: I line lo, ReadExcel(); ane JavaScript statement ni vadutundi, 
idi ReadExcel ane function ni call chesthundi. Idi actual ga function ni run chesthundi.
*/
// =================
/* 
ExcelJS ni JavaScript lo Vadukune Vidhanam - Summary in Telugu

Dependency Import: Munduga, require('exceljs') ani vadi ExcelJS dependency ni import cheyali. 
Idi mi JavaScript file lo Excel files tho pani cheyadaniki upayogisthundi.

Object Creation: ExcelJS class nundi oka object create cheyandi. Udaharanaki, 
let workbook = new ExcelJS.Workbook(); 
ani vadi oka kotha workbook object create cheyachu.

Workbook Access: Workbook object create chesaka, Excel workbooks ni access cheyadam mariyu 
manipulate cheyadam jaruguthundi.
Workbook lo chala sheets untayi, mariyu meeru a sheet tho pani cheyalo 
workbook.getWorksheet('Sheet1'); ani cheppali.

Row and Cell Iteration:

Row Iteration: Oka loop vadutundi, worksheet lo prathi row ni iterate cheyadaniki. Udaharanaki, 
worksheet.eachRow(...) vadi prathi row ni individually access cheyachu.
Cell Iteration: Prathi row lo, malli oka loop vadi prathi cell ni iterate cheyadam jaruguthundi, 
row.eachCell(...) vadi. 
Idi prathi cell lo unna values ni chadivadaniki mariyu manipulate cheyadaniki upayogapadutundi.
Reading Data: Oka cell lo unna value ni chadivadaniki cell.value vadi chadivachu. 
Idi worksheet lo prathi cell lo unna data ni retrieve cheyadaniki upayogapadutundi.

File Path Specification: Excel file ni chadivadaniki workbook.xlsx.readFile('path/to/your/file.xlsx'); 
ani vadi file yokka correct path ni specify cheyyali.

Asynchronous Operations Handling: JavaScript operations asynchronous nature lo untayi, 
kabatti vi ni handle cheyadam kosam promises (.then(...)) ni vadi leka async/await vadi cheyali.

.then(...) vadi: I method vadutundi, file read operation asynchronous ga handle cheyadam mariyu 
next steps ni file 
chadivina tarvata matrame proceed avvadani ki ensure chesthundi.
async/await vadi: Inko vidhanam lo, mi code ni async function lo wrap cheyandi mariyu asynchronous 
operations mundu 
await keyword vadandi, next step ki velladaniki mundu operation complete avutundani ensure 
cheyyadaniki.
Test Run Cheyadam: Script ni execute cheyadaniki node filename.js ani run cheyandi. 
Idi code ni run chesthundi mariyu
 Excel file nundi chadivina data ni output lo chupisthundi.

Error Handling: Asynchronous operations proper ga handle cheyakapothe, 
JavaScript mundhu step complete avvaka mundu next step ki velladam jarugutundi, 
dinivalla errors vastey. 
I issues ni prevent cheyadaniki await leka .then(...) vadandi.

Excel Files ni Modify Cheyadam: I guide lo Excel data ni chadivadaniki steps cheppina. 
Excel files ni modify cheyadaniki marini steps follow cheyali, 
avi advanced topics lo cover cheyabadutayi.

Upasamharam: 
I vidhanam ExcelJS ni vadutundi, JavaScript lo Excel files nundi data ni chadivadaniki, 
asynchronous operations ni handle cheyadaniki, mariyu mi code ni real-time applications ki efficient 
ga structure cheyadaniki.
*/

/* 
eachRow method, worksheet lo unna prathi row ni iterate cheyyadaniki use chestundi.
Internal ga, method prathi row ni callback function ki pass chestundi, dani valla row data ni 
process cheyyachu.
Callback function lo, row and rowNumber parameters ni use chesi row data ni access cheyyachu.
Detailed Internal Structure:

javascript
Copy code
// Pseudo-code to show how `eachRow` might work internally
function eachRow(callback) {
  for (let i = 0; i < this.rows.length; i++) {
    const row = this.rows[i]; // Get the row object
    const rowNumber = i + 1; // Row number (1-based index)
    callback(row, rowNumber); // Call the callback function
  }
}
Idi eachRow method yokka basic working principle. Each row ni iterate chesi, row data ni process 
cheyyadaniki use chestundi.
*/