class RegisterPage {
    get createOneAccount() { return $('//android.widget.TextView[@resource-id="com.sourcey.materialloginexample:id/link_signup"]'); }
    get nameInput() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_name"]'); }
    get addressInput() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_address"]'); }
    get emailInput() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_email"]'); }
    get mobileNumberInput() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_mobile"]'); }
    get passwordInput() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_password"]'); }
    get reEnterPasswordInput() { return $('//android.widget.EditText[@resource-id="com.sourcey.materialloginexample:id/input_reEnterPassword"]'); }
    get createAccountButton() { return $('//android.widget.Button[@resource-id="com.sourcey.materialloginexample:id/btn_signup"]'); }
    get titlePageRegister() { return $('//android.widget.TextView[@text="Hello world!"]'); }


    async enterName(name) {
        await this.nameInput.setValue(name);
    }

    async enterAddress(address) {
        await this.addressInput.setValue(address);
    }

    async enterEmail(email) {
        await this.emailInput.setValue(email);
    }

    async enterMobileNumber(mobileNumber) {
        await this.mobileNumberInput.setValue(mobileNumber);
    }

    async enterPassword(password) {
        await this.passwordInput.setValue(password);
    }

    async reEnterPassword(password) {
        await this.reEnterPasswordInput.setValue(password);
    }

    async clickCreateAccount() {
        await this.createAccountButton.click();
    }
    async clickCreateOneAccount() {
        await this.createOneAccount.click();
    }
}

module.exports = new RegisterPage();
