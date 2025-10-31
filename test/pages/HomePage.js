class HomePage {
    get signupLoginLink() { return $('a[href="/login"]'); }

    async open() {
        await browser.url('https://automationexercise.com/test_cases');
    }

    async goToSignupLogin() {
        await this.signupLoginLink.waitForClickable();
        await this.signupLoginLink.click();
    }
}

module.exports = new HomePage();

