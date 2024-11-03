class Google_analyzer_locators{

    // get google_search_button(){
    //     return $("//textarea[@class='gLFyf']");
    // }

    get google_search() {
        return $("//textarea[@class='gLFyf']");
    }
    get clear_search_box(){
        return $("//span[@class='ExCKkf z1asCe rzyADb']");
    }
    get keyword_search() {
        return $("//textarea[@class='gLFyf']");
    }


    get search_result() {
        return $$("//ul[@role='listbox']/li");
    }

   

    

}


module.exports=new Google_analyzer_locators();

