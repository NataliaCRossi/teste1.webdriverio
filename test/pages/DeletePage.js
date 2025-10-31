class DeletePage {
    get deleteAccountButton() { return $('a[href="/delete_account"]'); }
    get continueButton() { return $('a[data-qa="continue-button"]'); }
    get deletedMessage() { return $('h2[data-qa="account-deleted"]'); }

    async deleteAccount() {
        await this.deleteAccountButton.waitForClickable();
        await this.deleteAccountButton.click();
    }

    async verifyDeleted() {
        await this.deletedMessage.waitForDisplayed();
    }

    async continueAfterDeletion() {
        await this.continueButton.waitForClickable();
        await this.continueButton.click();
    }
}

module.exports = new DeletePage();
