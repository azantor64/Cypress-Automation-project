// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('login', () => {

    cy.visit('https://kpitenant-eui-test06.devoa.devops.iqvia.io/document-management')
    cy.title().should('eq','Document Management')
    cy.get('#username').type('qa.team')
    cy.get('#password').type('IQVIa_2021!!')
    cy.get('#main-form > .actions > .action > .form-button').should('be.visible').click()


  })

  Cypress.Commands.add('validate',() => {

    cy.visit('https://kpitenant-eui-test06.devoa.devops.iqvia.io/document-management')
    cy.title().should('eq','Document Management')
    cy.get('#username').type('qa.team')
    cy.get('#password').type('IQVIa_2021!!')
    cy.get('#main-form > .actions > .action > .form-button').should('be.visible').click()

    cy.url().should('include','kpitenant')
    cy.get('[href="/document-management/manage"]').should('be.visible').click()
    cy.get('.btn-primary').should('be.visible')
  })