const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/LoginPages');

const pages = {login: LoginPage}

Given('I am on the login page', async () => {
    // await pages[page].open();
});

When(/^I login with e-mail (\w+) and password (.+)$/, async (username, password) => {
    await LoginPage.login(username, password);
});

And('the user submits the login form', async () => {
    await LoginPage.clickLoginButton();
});

Then('the user should be redirected to the home screen', async () => {
    expect(await LoginPage.getTitlePageText()).toBe(true);
});
