const Page = require('./main.page');

class homePage extends Page {

    // contains all selectors for the page 
   
    get buttonForms () { return $('(//div[@class="card mt-4 top-card"])[2]') }
    get buttonPracticeForms () { return $('(//span[@class="text"])[10]') }

    // Contains all methods for the page
    
    open () {
        return super.open();
    }
}

module.exports = new homePage();
