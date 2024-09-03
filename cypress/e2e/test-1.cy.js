import { faker } from '@faker-js/faker';
describe('change language', () => {
  it('iphone on amazon', () => {
    cy.visit('https://www.lazada.co.id/#?');
    cy.get('#q').click().type("Phone 15 Pro");
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    
    




  });
 
})