const homePage = require('../pageobjects/home.page');
const { Browser } = require('selenium-webdriver');

describe('Fill in practice form ', () => {

    it('User should be able to fill in student registration form', () => {
        
        // All selectors
        const buttonForms = $('(//div[@class="card mt-4 top-card"])[2]');
        const buttonPracticeForms = $('(//span[@class="text"])[10]');
        const inputFirstName = $('//input[@id="firstName"]');
        const inputLastName = $('//input[@id="lastName"]');
        const inputUserEmail = $('//input[@id="userEmail"]');
        const inputUserNumber = $('//input[@id="userNumber"]');

        // Fill in form 

        // Load url https://demoqa.com/
        browser.url("https://demoqa.com/");

        // Navigate to Forms -> practice forms
        buttonForms.click();
        browser.pause(3000);
        buttonPracticeForms.click();
        browser.pause(3000);

        // Check the form isnt filled in
        expect(inputUserNumber.getText()).toBe("");

        // Fill in form
        inputFirstName.setValue("Jane");
        inputLastName.setValue("Smith");
        inputUserEmail.setValue("automation-test@tester.com");
        inputUserNumber.setValue("1234567891");
        browser.pause(3000);

    })
})