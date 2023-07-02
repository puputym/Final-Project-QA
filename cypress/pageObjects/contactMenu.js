import { ElementLocators } from '../elementLocators/elementLocators';

const elementLocators = new ElementLocators();

export default class ContactMenu {
    fillContactForm(email, name, message) {
      cy.get(elementLocators.contactEmailInput).type(email);
      cy.get(elementLocators.contactNameInput).type(name);
      cy.get(elementLocators.contactMessageInput).type(message);
    }
  
    submitContactForm() {
      cy.get(elementLocators.contactSubmitButton).click();
    }
  
    verifySubmissionSuccess() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Thanks for the message!!`)
        })
    }
  }