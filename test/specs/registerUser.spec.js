const HomePage = require('../pages/HomePage');
const SignupPage = require('../pages/SignupPage');
const AccountPage = require('../pages/AccountPage');
const DeletePage = require('../pages/DeletePage');

describe('Test Case 1 - Registrar um usuário', () => {
  it('Deve registrar e excluir uma conta com sucesso', async () => {
    await HomePage.open();
    await HomePage.goToSignupLogin();

    const uniqueEmail = `usuario_${Date.now()}@teste.com`;
    await SignupPage.fillSignupForm('Natalia Teste', uniqueEmail);
    await SignupPage.submitSignup();

    await AccountPage.fillAccountForm({
      password: 'Aa123456',
      day: '10',
      month: '5',
      year: '1995',
      firstName: 'Natalia',
      lastName: 'Rossi',
      company: 'Segala Engenharia',
      address1: 'Rua das Ondas, 100',
      address2: 'Apto 10',
      country: 'Canada',
      state: 'Ontario',
      city: 'Toronto',
      zipcode: '12345',
      mobile: '559999999999'
    });

    await AccountPage.createAccount();
    await AccountPage.continueAfterCreation();

    await DeletePage.deleteAccount();
    await DeletePage.verifyDeleted();
    await DeletePage.continueAfterDeletion();
  });
});
