class LoginPage {
    get usernameField() { return $('selector_del_campo_username'); }
    get passwordField() { return $('selector_del_campo_password'); }
    get loginButton() { return $('selector_del_boton_login'); }
    get errorMessage() { return $('selector_del_mensaje_error'); }

    async enterUsername(username) {
        await this.usernameField.setValue(username);
    }

    async enterPassword(password) {
        await this.passwordField.setValue(password);
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }

    async login(username, password) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

    async isErrorMessageDisplayed() {
        return await this.errorMessage.isDisplayed();
    }

    async getErrorMessageText() {
        return await this.errorMessage.getText();
    }
}

module.exports = new LoginPage();
