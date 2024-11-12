class LoginPage {
    get usernameField() { return $('selector') }
    get passwordField() { return $('selector') }
    get submitButton() { return $('selector') }

    async login(username, password) {
        await this.usernameField.setValue(username);
        await this.passwordField.setValue(password);
        await this.submitButton.click();
    }
}

module.exports = new LoginPage();
