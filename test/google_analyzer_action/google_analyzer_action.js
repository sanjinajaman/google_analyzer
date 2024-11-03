const googleAnalyzerLocators=require('../google_analyzer_locators/google_analyzer_locators');


class Google_analyzer_action{

    async google_search(google) {
        await googleAnalyzerLocators.google_search.setValue(google);
        await browser.pause(3000);
    };


    async clearSearchBox(){
        await googleAnalyzerLocators.clear_search_box.click();
        await browser.pause(3000);
    }


    async clickOnSearchButton(searchValue) {
        await googleAnalyzerLocators.keyword_search.setValue(searchValue);
        await browser.pause(3000);
    };


    async search_result() {
        const searchlist = await googleAnalyzerLocators.search_result;
        const listItem = [];
        
        for (let i = 0; i < searchlist.length; i++) {
            let name = await searchlist[i].getText();
            listItem.push(name);
        }
        await browser.pause(3000);
        //if 
        
        console.log("List of items:", listItem);

        // Find the element with the maximum length

        const maxLengthElement = listItem.reduce((longest, current) => {
               return current.length > longest.length ? current : longest;
        }, "");

        console.log("Element with the maximum length:", maxLengthElement); // Output: "elephant"

        // const maxLength = Math.max(...listItem.map(item => item.length));
        // console.log("Maximum length of an element:", maxLength);
    }



}

module.exports =new Google_analyzer_action();

