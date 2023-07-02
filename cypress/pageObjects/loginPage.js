
import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();
export default class LoginPage {
    login(username, password) {
      cy.get(elementLocators.loginUsernameInput).type(username);
      cy.get(elementLocators.loginPasswordInput).type(password);
      cy.get(elementLocators.exitbutton).click();
      cy.wait(10000)
      cy.get(elementLocators.loginButton).click();
    }
    
  
    verifyLoginSuccess(username) {
      cy.get(elementLocators.verifyLogin).should('contain.text', 'Welcome ' + username);
    }
  
    clickLogoutLink() {
      cy.get(elementLocators.logoutLink).click();
    }
  
    verifyLogoutSuccess() {
      cy.get(elementLocators.verifyLogout).should('contain.text', 'Login');
    }
  }