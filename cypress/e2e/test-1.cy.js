
describe('compare the price of iphone 15', () => {
  
  it('Search in DIGIMAP', () => {
    const products = []

    cy.visit('https://www.amazon.com/');
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
    cy.get('#twotabsearchtextbox').should('be.exist').click().type('Iphone 15{enter}');
    cy.get('[class="a-size-medium a-color-base a-text-normal"]')
    cy.contains('15 ProMax Smartphone, 6+256GB Unlocked Phone, Android 13.0, 48+108MP Zoom Camera, Mobile Phone with Build-in Pen,Long Battery Life 6800mAh, Dual SIM, 6.7“ HD Screen,5G/4G Phone (Blue Titanium)').should('be.visible').click();


    cy.get('.centerColAlign').each(($el) => {
    cy.log($el.text())
 
    const name = $el.find('[productTitle]').text();
    const symbol = $el.find('.a-price-symbol').text();
    const price = $el.find('.a-price-whole').text().replace(/[^0-9.]/g, '')


      cy.log(`Name: ${name}`)
      cy.log(`symbol:${symbol}`)
      cy.log(`Price: ${price}`)

      products.push({ name, price: parseFloat(price) })
    })

    // Sort and log products
    cy.wrap(products).then((allProducts) => {
      const sortedProducts = allProducts.sort((a, b) => a.price - b.price)
      sortedProducts.forEach(product => {
        cy.log(`${product.name}: $${product.price}`)
      })
    })
  })
})
