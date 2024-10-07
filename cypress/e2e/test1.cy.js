// IntelliSense, omogućuje autokompletiranje i proveru tipova u kodu.
/// <reference types="cypress" />

// Test Scenario
describe('My First Test Suite', function () {
    // Test Case
    it('My First Test Case', function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");

        cy.get('.search-keyword').type('ca');
        cy.wait(2000);

        cy.get('.product').should('have.length', 5);
        cy.get('.product:visible').should('have.length', 4);

        cy.get('.products').as('productLocator')

        cy.get('@productLocator').find('.product').should('have.length', 4);

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();

        cy.get('@productLocator').find('.product').each(($el, index, $list) => {

            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                $el.find('button').click();
            }
        })
        // Assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')
        // This is to print in logs
        cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text())
        })
        

        // cy.log(logo.text());

    })

})