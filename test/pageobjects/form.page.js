const Page = require('./main.page');

class formPage extends Page {

    // contains all selectors for the page 
   
    get inputFirstName () { return $('//input[@id="firstName"]') }
    get inputLastName () { return $('//input[@id="lastName"]') }

    // Contains all methods for naviagting on the page
    
    fillName(firstName, lastName){
        browser.pause(4000)
        this.inputFirstName.setValue(firstName);
        browser.pause(4000)
        this.inputLastName.setValue(lastName);
        browser.pause(4000)
    }
    
    open () {
        return super.open();
    }
}

module.exports = new formPage();
