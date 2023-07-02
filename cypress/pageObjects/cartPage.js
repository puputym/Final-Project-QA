import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();
export default class CartPage {
    placeOrder() {
      cy.get(elementLocators.placeOrderButton).click();
    }
    verifyAddCartSuccess() {
      cy.on('window:alert', (str) => {
        expect(str).to.equal(`Product added`)
      })
    }

}