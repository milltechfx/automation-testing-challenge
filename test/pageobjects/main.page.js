/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
 
    open (path) {
        browser.maximizeWindow();
        return browser.url('https://demoqa.com/')
    }

    close (path) {
        browser.closeWindow()
    }
}
