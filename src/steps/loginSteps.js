const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/LoginPages');

Given('the user is on the login screen', async () => {
    // Actions
});

When('the user logs in with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

Then('an error message should be displayed', async () => {
    expect(await LoginPage.isErrorMessageDisplayed()).toBe(true);
});
