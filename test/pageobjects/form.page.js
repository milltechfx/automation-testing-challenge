const Page = require('./main.page');

class formPage extends Page {

    // contains all selectors for the page 
   
    get inputFirstName () { return $('//input[@id="firstName"]') }
    get inputLastName () { return $('//input[@id="lastName"]') }

    // Contains all methods for naviagting on the page
    
    fillName(firstName, lastName){
        this.inputFirstName.setValue(firstName);
        this.inputLastName.setValue(lastName);
    }
    
    open () {
        return super.open();
    }
}

module.exports = new formPage();
