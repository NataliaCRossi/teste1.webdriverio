class AccountPage {
    get passwordInput() { return $('#password'); }
    get daySelect() { return $('#days'); }
    get monthSelect() { return $('#months'); }
    get yearSelect() { return $('#years'); }
    get firstNameInput() { return $('#first_name'); }
    get lastNameInput() { return $('#last_name'); }
    get companyInput() { return $('#company'); }
    get address1Input() { return $('#address1'); }
    get address2Input() { return $('#address2'); }
    get countrySelect() { return $('#country'); }
    get stateInput() { return $('#state'); }
    get cityInput() { return $('#city'); }
    get zipcodeInput() { return $('#zipcode'); }
    get mobileInput() { return $('#mobile_number'); }
    get createAccountButton() { return $('button[data-qa="create-account"]'); }
    get continueButton() { return $('a[data-qa="continue-button"]'); }

    async fillAccountForm(data) {
        await this.passwordInput.setValue(data.password);
        await this.daySelect.selectByAttribute('value', data.day);
        await this.monthSelect.selectByAttribute('value', data.month);
        await this.yearSelect.selectByAttribute('value', data.year);
        await this.firstNameInput.setValue(data.firstName);
        await this.lastNameInput.setValue(data.lastName);
        await this.companyInput.setValue(data.company);
        await this.address1Input.setValue(data.address1);
        await this.address2Input.setValue(data.address2);
        await this.countrySelect.selectByVisibleText(data.country);
        await this.stateInput.setValue(data.state);
        await this.cityInput.setValue(data.city);
        await this.zipcodeInput.setValue(data.zipcode);
        await this.mobileInput.setValue(data.mobile);
    }

    async createAccount() {
        await this.createAccountButton.waitForClickable();
        await this.createAccountButton.click();
    }

    async continueAfterCreation() {
        await this.continueButton.waitForClickable();
        await this.continueButton.click();
    }
}

module.exports = new AccountPage();

