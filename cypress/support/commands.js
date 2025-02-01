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

Cypress.Commands.add('ordersAndReturnsByEmail', (orderId, billingLastName, email) =>{
    cy.get('#oar-order-id').type(orderId);
    cy.get('#oar-billing-lastname').type(billingLastName);
    cy.get('#oar_email').type(email);
    cy.get('button[class*=\'submit\']').click();
});

Cypress.Commands.add('ordersAndReturnsByZipCode', (orderId, billingLastName, zipCode) => {
    cy.get('#oar-order-id').type(orderId);
    cy.get('#oar-billing-lastname').type(billingLastName);
    cy.get('#quick-search-type-id').select('zip');
    cy.get('#oar_zip').type(zipCode);
    cy.get('button[class*=\'submit\']').click();
})
