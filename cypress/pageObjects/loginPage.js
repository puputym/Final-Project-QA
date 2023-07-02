
import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();
export default class LoginPage {
    login(username, password) {
      cy.get(elementLocators.loginUsernameInput).type(username);
      cy.get(elementLocators.loginPasswordInput).type(password);
      cy.get(elementLocators.loginButton).click();
    }
    
  
    verifyLoginSuccess() {
      //cy.get(elementLocators.exitbutton).click();
      cy.get(elementLocators.verifyLogin).should('contain.text', 'PRODUCT STORE');
    }
  
    clickLogoutLink() {
      cy.get(elementLocators.logoutLink).click({force: true});
    }
  
    verifyLogoutSuccess() {
      cy.get(elementLocators.verifyLogout).should('contain.text', 'Log in');
    }
  }