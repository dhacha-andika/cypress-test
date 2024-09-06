describe('My First Test', () => {
  it('Searching Iphone', () => {
    
    const products = []
    
    cy.visit('https://www.digimap.co.id');

    cy.get('[class="icon icon-hamburger"]').click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('input[name="q"]').eq(0).click().type('iphone 15{enter}');
    cy.get('body').contains('iphone 15').should('be.visible');
    cy.get('h3').contains('iPhone 15 512GB Pink').should('be.visible').click();
    cy.get('product-info').should('be.exist');
    cy.get('product-info').each(($el) => {
      const name = $el.find('.product-title-style product__title').text()
      const price = parseFloat($el.find('.js-product-price-with-care-warranty actual_price_bold').text().replace(/[^0-9.]/g, '')) // Convert price to number
      products.push({ name, price });
      cy.log(`Name: ${name}`)
      cy.log(`Price: ${price}`)
    });
   
   //
  })
  
})