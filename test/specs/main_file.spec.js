const google_analyzer_action=require('../google_analyzer_action/google_analyzer_action');
let google='google.com';
let searchValue='Dhaka';
//const xlsx = require('xlsx');
//const moment = require('moment');


// const workbook = xlsx.readFile('input.xlsx');
// const today = moment().format('dddd'); // Gets the current day, e.g., "Monday"
// const sheet = workbook.Sheets[today];  // Fetches the sheet by day
// console.log(sheet);

    // if (!sheet) {
    //     console.log(`No data available for ${today}`);
    //     await browser.deleteSession();
    //     return;
    // }

describe("Google Analyzer", ()=>{

    it("Seacrh Successfully", async()=>{
        await google_analyzer_action.google_search(google);  
        await browser.keys("Enter");
        
        await google_analyzer_action.clearSearchBox();
        await google_analyzer_action.clickOnSearchButton(searchValue);
        //await browser.keys("Enter");
        await google_analyzer_action.search_result();


    }) ;



});