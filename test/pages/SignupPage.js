class SignupPage {
    get nameInput() { return $('input[data-qa="signup-name"]'); }
    get emailInput() { return $('input[data-qa="signup-email"]'); }
    get signupButton() { return $('button[data-qa="signup-button"]'); }

    async fillSignupForm(name, email) {
        await this.nameInput.waitForDisplayed();
        await this.nameInput.setValue(name);
        await this.emailInput.setValue(email);
    }

    async submitSignup() {
        await this.signupButton.waitForClickable();
        await this.signupButton.click();
    }
}

module.exports = new SignupPage();

