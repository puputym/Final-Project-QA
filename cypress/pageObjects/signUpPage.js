import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();

export default class SignUpPage {
    signUp(username, password) {
      cy.get(elementLocators.signUpUsernameInput).type(username);
      cy.get(elementLocators.signUpPasswordInput).type(password);
      cy.get(elementLocators.signUpButton).click();
    }
  
    verifySignUpSuccess() {
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Sign up successful.`)
      })
    }

    verifySignUpFailed() {
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Please fill out Username and Password.`)
      })
    }
  }