/// <reference types="cypress" />

describe('Test Suite', function () {

    it('Checkbox Test Case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('div.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include', 'top')


    })

})