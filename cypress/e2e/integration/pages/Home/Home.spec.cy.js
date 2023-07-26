/* eslint-disable jest/valid-expect */

/* eslint-disable testing-library/await-async-query */

/* eslint-disable testing-library/prefer-screen-queries */

/* eslint-disable no-undef */
/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

import { domainUrl, testId } from '../../../../support/helpers';

const nameMessages = {
  match: 'Name can only contain Latin letters',
  required: 'Name is required',
  trim: 'Name cannot contain leading and trailing spaces',
};

const texts = {
  title: 'Check your name',
  resetButton: 'Reset',
  submitButton: 'Check name',
  namePlaceholder: 'Charles',
  notFound: (name) => `Such a name "${name}" does not exist`,
};

describe('<Home />', () => {
  beforeEach(() => {
    cy.visit(`${domainUrl}`);
    cy.get(testId('input__name')).clear();
  });

  describe('texts', () => {
    it(`should show title: ${texts.title}`, () => {
      cy.get(testId('page__title')).contains(texts.title);
    });

    it(`reset button should have text: ${texts.resetButton}`, () => {
      cy.get(testId('button__reset')).should('have.text', texts.resetButton);
    });

    it(`submit button should have text: ${texts.submitButton}`, () => {
      cy.get(testId('button__submit')).should('have.text', texts.submitButton);
    });

    it(`name placeholder should have text: ${texts.namePlaceholder}`, () => {
      cy.get(testId('input__name')).should(
        'have.attr',
        'placeholder',
        texts.namePlaceholder,
      );
    });
  });

  describe('actions', () => {
    describe('name input', () => {
      it('should type the text correctly', () => {
        cy.get(testId('input__name'))
          .type('Charles')
          .should('have.value', 'Charles');
      });

      it('should show error: ' + nameMessages.required, () => {
        cy.get(testId('input__name')).type(' ').clear();
        cy.contains('span', nameMessages.required);
      });

      it('should show error: ' + nameMessages.trim, () => {
        cy.get(testId('input__name')).type(' ');
        cy.contains('span', nameMessages.trim);
      });

      it(`should show error: ${nameMessages.match}`, () => {
        cy.get(testId('input__name')).type('pass');
        cy.findByText(nameMessages.match).should('not.exist');
        cy.get(testId('input__name')).type('Ç, Ş, Ğ, I, İ, Ö, Ü');
        cy.contains('span', nameMessages.match);
      });

      it('should disappear error', () => {
        cy.get(testId('input__name')).type(' ');
        cy.contains('span', nameMessages.trim);
        cy.get(testId('input__name')).clear().type('aa');
        cy.findByText(nameMessages.trim).should('not.exist');
      });
    });
  });

  describe('api actions', () => {
    describe('get information about entered name', () => {
      it('should get data about entered name', () => {
        cy.get(testId('input__name')).type('Charles');
        cy.get(testId('button__submit')).click();

        cy.get(testId('text__name')).contains('Charles');
        cy.get(testId('text__gender')).contains('male');
        cy.get(testId('text__country')).contains('KE');
      });

      it('should show info: name does not found', () => {
        cy.get(testId('input__name')).type('eryki');
        cy.get(testId('button__submit')).click();

        cy.get(testId('text__not-found')).contains(texts.notFound('eryki'));
      });

      it('should save name and show it in profile page', () => {
        // prevent from 304 error
        cy.intercept('GET', '/api/savedRequests*', (req) => {
          delete req.headers['if-none-match'];
        }).as('savedRequests');

        cy.login();
        cy.visit(`${domainUrl}`);

        cy.get(testId('input__name')).type('eryk');
        cy.get(testId('button__submit')).click();

        cy.visit(`${domainUrl}/profile`);
        cy.get(testId(`text__name--eryk`)).contains('eryk');
      });
    });
  });
});
