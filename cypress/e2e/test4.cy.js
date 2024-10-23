/// <reference types="cypress" />

describe('Test Suite', function () {

    it('Checkbox Test Case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        // Window:alert
        cy.on('window:alert', (str)=>
        {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>
            {
                //Mocha
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            })

            cy.get('#opentab').invoke('removeAttr', 'target').click()

            cy.url().should('include', 'qaclickacademy')

            // cy.go('back')   

    })

})