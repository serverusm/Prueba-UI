const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/LoginPages');

When('the user logs in with username {string} and password {string}', async (username, password) => {
    await LoginPage.login(username, password);
});

And('the user submits the login form', async () => {
    await LoginPage.clickLoginButton();
});

Then('the user should be redirected to the home screen', async () => {
    expect(await LoginPage.getTitlePageText()).toBe(true);
});
