import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();

export default class SignUpPage {
    signUp(username, password) {
      cy.get(elementLocators.signUpUsernameInput).type(username);
      cy.get(elementLocators.signUpPasswordInput).type(password);
      cy.get(elementLocators.signUpButton).click();
    }
  
    verifySignUpSuccess() {
      cy.get(elementLocators.alertBox).should('contain.text', 'Sign up successful.');
    }
  }