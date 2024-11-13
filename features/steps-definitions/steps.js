const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../../src/pages/LoginPages');

const pages = {login: LoginPage}

Given('I am on the login page', async () => {
    // await pages[page].open();
});

When('I login with e-mail {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('the user submits the login form', async () => {
    await LoginPage.clickLoginButton();
});

Then('the user should see {string} message in home screen', async (message) => {
    expect(await LoginPage.getTitlePageText()).toBe(message);
});
