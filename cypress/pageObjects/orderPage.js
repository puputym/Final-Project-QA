
import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();

export default class OrderPage {
    fillOrderDetails(name, country, city, creditCard, month, year) {
      cy.get(elementLocators.orderNameInput).type(name);
      cy.get(elementLocators.orderCountryInput).type(country);
      cy.get(elementLocators.orderCityInput).type(city);
      cy.get(elementLocators.orderCreditCardInput).type(creditCard);
      cy.get(elementLocators.orderMonthInput).type(month);
      cy.get(elementLocators.orderYearInput).type(year);
    }
  
    purchaseOrder() {
      cy.get(elementLocators.purchaseButton).click();
    }
  
    verifyPurchaseSuccess() {
      cy.get(elementLocators.alertBoxPurchase).should('contain.text', 'Thank you for your purchase!');
    }
  }