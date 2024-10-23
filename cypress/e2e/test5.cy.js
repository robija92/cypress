/// <reference types="cypress" />

describe('Test Suite', function () {

    it('Checkbox Test Case', function () {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('table[name="courses"] tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if(text.includes('Master Selenium Automation in simple Python Language'))
            {
                cy.get('table[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price)
            {
                const priceText = price.text()
                expect(priceText).to.equal('25')
            })
            }

        })


    })

})