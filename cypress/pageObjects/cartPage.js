import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();
export default class CartPage {
    placeOrder() {
      cy.get(elementLocators.placeOrderButton).click();
    }
}