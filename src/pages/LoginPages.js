class LoginPage {
    get usernameField() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_email"]'); }
    get passwordField() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_password"]'); }
    get loginButton() { return $('//android.widget.Button[@resource-id="com.sourcey.materialloginexample:id/btn_login"]'); }
    get titlePage() { return $('//android.widget.TextView[@text="Hello world!"]'); }

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
    }

    async istitlePageDisplayed() {
        return await this.titlePage.isDisplayed();
    }

    async getTitlePageText() {
        return await this.titlePage.getText();
    }
}

module.exports = new LoginPage();
