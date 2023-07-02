import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();

export default class HomePage {
  visitHomePage() {
    cy.visit('https://www.demoblaze.com/');
    cy.viewport(1280, 720); 
  }

  clickSignUpLink() {
    cy.get(elementLocators.signUpLink).click();
  }

  clickLoginLink() {
    cy.get(elementLocators.loginLink).click();
  }

  addToCart() {
    cy.get(elementLocators.addToCartButtons).first().click();
  }

  clickCartLink() {
    cy.get(elementLocators.cartLink).click();
  }

  clickCartButton() {
    cy.get(elementLocators.clickCartButton).click();
  }
  
  clickContactMenu() {
    cy.get(elementLocators.contactMenu).click();
  }
}