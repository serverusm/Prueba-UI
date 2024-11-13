const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../src/pages/LoginPages');
const RegisterPage = require('../../src/pages/RegisterPage');

const pages = {login: LoginPage}

Given('I am on the login page', async () => {
    // await pages[page].open();
});

When('I login with e-mail {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('I submits the login form', async () => {
    await LoginPage.clickLoginButton();
});

Then('I should see {string} message in home screen', async (message) => {
    expect(await LoginPage.getTitlePageText()).toBe(message);
});

Given('the user is on the registration screen', async () => {
    // await RegisterPage.open();
});

When('I input {string} as the name', async (name) => {
    await RegisterPage.enterName(name);
});

When('I input {string} as the address', async (address) => {
    await RegisterPage.enterAddress(address);
});

When('I input {string} as the email', async (email) => {
    await RegisterPage.enterEmail(email);
});

When('I input {string} as the mobile number', async (mobileNumber) => {
    await RegisterPage.enterMobileNumber(mobileNumber);
});

When('I input {string} as the password', async (password) => {
    await RegisterPage.enterPassword(password);
});

When('I input re-enters {string} as the password confirmation', async (password) => {
    await RegisterPage.reEnterPassword(password);
});

When('I clicks on create account', async () => {
    await RegisterPage.clickCreateAccount();
});

When('I clicks on create one account', async () => {
    await RegisterPage.clickCreateOneAccount();
});
