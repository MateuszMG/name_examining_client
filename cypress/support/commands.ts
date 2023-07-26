/// <reference types="cypress" />
import '../support/commands';
import { domainUrl, loginData, testId } from './helpers';

Cypress.Commands.add('login', () => {
  cy.visit(`${domainUrl}/login`);
  cy.get(testId('input__username')).clear().type(loginData.username);
  cy.get(testId('input__password')).clear().type(loginData.password);
  cy.get(testId('button__submit')).click();
  cy.location('href').should('contain', '/profile');
});
