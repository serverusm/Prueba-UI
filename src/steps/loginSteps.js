const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pages/LoginPage');

Given('the user is on the login screen', async () => {
    // Actions
});

When('the user enters valid credentials', async () => {
    await LoginPage.login('testUser', 'password123');
});

Then('the user should see the home screen', async () => {
    // Aserciones para verificar el login
});
