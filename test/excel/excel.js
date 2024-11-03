const excel=require('exceljs');
const path = require('path');
const moment = require('moment');


class ExcelData{

    async readExcelData() {
        let date = moment();
        let today=date.format('dddd');
        console.log(today);
        const workbook = new excel.Workbook();
        const filePath = path.join(__dirname, 'input.xlsx'); // Corrected path usage

        await workbook.xlsx.readFile(filePath);

        // Select the first worksheet
        const worksheet = workbook.getWorksheet(today);
        //console.log(worksheet); 


        // if (!worksheet) {
        //     console.error("Worksheet not found.");
        //     return;
        // }


        // for(let row=3; row<worksheet.length; row++){
        //     for(let col=3; col<worksheet.length; col++){
        //         console.log(worksheet[row][col]);
        //     }
        // }

        //Log each row's data
        worksheet.eachRow((row, rowNumber) => {
            console.log(`Row ${rowNumber}:`, row.values); // Log values for each row
        });

        
        
     
    
        
       
    }


    



}

module.exports=new ExcelData();



