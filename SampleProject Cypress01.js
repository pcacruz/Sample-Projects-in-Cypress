/// <reference types = "Cypress"/>

describe ("My First Sample Project for Cypress", function()
{
    it('Automates simple codes using Cypress', function()
    {
        // Visit the sample website
        cy.visit('https://testpages.eviltester.com/styled/basic-web-page-test.html')
        cy.wait(3000)
        // Check main navigation
        cy.get('.navigation').should('be.visible')

        // Check the Landing page and Check for Webpage title
        cy.get('h1').contains('Basic Web Page Example')
        // Check the text contents available
        cy.get('.explanation').contains('Very simple web pages have a structure illustrated by this page. And elements can have id and class attributes for styling and locating')
        cy.get('#para1').contains('A paragraph of text')
        cy.get('#para2').contains('Another paragraph of text')

        // Click About Button in Main Nav
        cy.get('[href="page?app=basicwebpageexample&t=About"]').click()
        cy.wait(3000)
        cy.url().should('eq', 'https://testpages.eviltester.com/styled/page?app=basicwebpageexample&t=About')
        // Checking of About Page Contents
        cy.get('#about-basic-web-page-example').contains('About Basic Web Page Example')
        cy.get('.explanation').contains('This is one of the simplest test practice automated execution pages on the site.')
        cy.get('#toc > :nth-child(1) > a').as('Page Fixed CTA').contains('Page Fixed Text').click()
        cy.get('.content > :nth-child(5)').as('FixedPageTxt1').contains('There are two main fixed text elements in the form of paragraphs.')
        cy.get('.content > :nth-child(6)').as('FixedPageTxt2').contains('Locate these with classes, id or relative to parent divs.')
        cy.get('#toc > :nth-child(2) > a').as('Synchronization CTA').contains('Synchronization').click()
        cy.get('#synchronization').should('exist')
        cy.get(':nth-child(8)').as('Synchronization Txt').contains('Since no synchronization is required for this page it is a good page to start automating against.')
        cy.get(':nth-child(3) > a').as('Dev Tools CTA').click()
        cy.get('#dev-tools').contains('Dev Tools')
        cy.get(':nth-child(10)').as('Dev Tools Txt').contains('Use the dev tools to inspect and explore the page DOM.')


    })
})