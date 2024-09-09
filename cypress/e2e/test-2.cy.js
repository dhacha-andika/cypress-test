

describe('Scrape and Compare Prices', () => {
    it('Scrapes data from two websites and displays results in ascending order', () => {
      
      const products = []
  
     
      cy.visit('https://www.amazon.com/');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('#twotabsearchtextbox').should('be.exist').click().type('Iphone 15{enter}');
    cy.get('[class="a-size-medium a-color-base a-text-normal"]')
    cy.contains('15 ProMax Smartphone, 6+256GB Unlocked Phone, Android 13.0, 48+108MP Zoom Camera, Mobile Phone with Build-in Pen,Long Battery Life 6800mAh, Dual SIM, 6.7“ HD Screen,5G/4G Phone (Blue Titanium)').should('be.visible').click();
    cy.get('.centerColAlign').each(($el) => {
        const name = $el.find('[productTitle]').text()
        const price = parseFloat($el.find('.a-price-whole').text().replace(/[^0-9.]/g, '')) 
        products.push({ name, price })
      })
  
      
        cy.visit('https://www.hellostore.id/');
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
      cy.get('.header__icon header__icon--search header__icon--summary link focus-inset modal__toggle').eq(0).click();
      cy.get('.search__input field__input').should('be.exist').click().type('iphone 15 {enter}');
      cy.get('h3').contains('iPhone 15 Pro').should('be.exist').click()
      cy.get('.item').each(($el) => {
        const name = $el.find('.item-name').text()
        const price = parseFloat($el.find('.item-price').text().replace(/[^0-9.]/g, '')) 
        products.push({ name, price })
      })
  
      
      cy.wrap(products).then((allProducts) => {
        const sortedProducts = allProducts.sort((a, b) => a.price - b.price)
       
        cy.log('Sorted Products by Price:')
        sortedProducts.forEach(product => {
          cy.log(`${product.name}: $${product.price}`)
        })
      })
    })
})
  