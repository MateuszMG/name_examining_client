/* eslint-disable testing-library/await-async-query */

/* eslint-disable testing-library/prefer-screen-queries */

/* eslint-disable no-undef */
/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';

import { createId, domainUrl, testId } from '../../../../support/helpers';

const usernameMessages = {
  trim: 'Username cannot contain leading and trailing spaces',
  min: `Username must be at least 3 characters long`,
  max: 'Username cannot exceed 40 characters',
  required: 'Username is required',
};

const passwordMessages = {
  trim: 'Password cannot contain leading and trailing spaces',
  min: `Password must be at least 6 characters long`,
  max: 'Password cannot exceed 72 characters',
  required: 'Password is required',
  match:
    'Password must contain, one uppercase, one number and one special case character: # $ ! . % & * ?',
};

const confirmPasswordMessages = {
  required: 'Repeat password is required',
  match: 'Passwords must match',
};

const texts = {
  title: 'Register',
  resetButton: 'Reset',
  submitButton: 'Register',
  usernamePlaceholder: 'Your name',
  passwordPlaceholder: 'StrongPassword1!',
  confirmPasswordPlaceholder: 'StrongPassword1!',
  usernameLabel: 'Username',
  passwordLabel: 'Password',
  confirmPasswordLabel: 'Repeat password',
};

const testUserData = {
  username: 'username' + createId(),
  password: 'StrongPassword1!',
  confirmPassword: 'StrongPassword1!',
};

describe('<Register />', () => {
  beforeEach(() => {
    cy.visit(`${domainUrl}/register`);
    cy.get(testId('input__username')).clear();
    cy.get(testId('input__password')).clear();
    cy.get(testId('input__confirm-password')).clear();
  });

  describe('texts', () => {
    it(`title should have text: ${texts.title}`, () => {
      cy.get(testId('text_title')).should('have.text', texts.title);
    });

    it(`reset button should have text: ${texts.resetButton}`, () => {
      cy.get(testId('button__reset')).should('have.text', texts.resetButton);
    });

    it(`submit button should have text: ${texts.submitButton}`, () => {
      cy.get(testId('button__submit')).should('have.text', texts.submitButton);
    });

    it(`username input should have placeholder: ${texts.usernamePlaceholder}`, () => {
      cy.get(testId('input__username')).should(
        'have.attr',
        'placeholder',
        texts.usernamePlaceholder,
      );
    });

    it(`password input should have placeholder: ${texts.passwordPlaceholder}`, () => {
      cy.get(testId('input__password')).should(
        'have.attr',
        'placeholder',
        texts.passwordPlaceholder,
      );
    });

    it(`password input should have placeholder: ${texts.confirmPasswordPlaceholder}`, () => {
      cy.get(testId('input__password')).should(
        'have.attr',
        'placeholder',
        texts.confirmPasswordPlaceholder,
      );
    });

    it(`username label should have text: ${texts.usernameLabel}`, () => {
      cy.contains('label', texts.usernameLabel);
    });

    it(`password label should have text: ${texts.passwordLabel}`, () => {
      cy.contains('label', texts.passwordLabel);
    });

    it(`password label should have text: ${texts.confirmPasswordLabel}`, () => {
      cy.contains('label', texts.confirmPasswordLabel);
    });
  });

  describe('actions', () => {
    describe('username input', () => {
      it('username input should type the text correctly', () => {
        cy.get(testId('input__username'))
          .type('My username')
          .should('have.value', 'My username');
      });

      it('should show error: ' + usernameMessages.required, () => {
        cy.get(testId('input__username')).type(' ').clear();
        cy.contains('span', usernameMessages.required);
      });

      it('should show error: ' + usernameMessages.min, () => {
        cy.get(testId('input__username')).type('22');
        cy.contains('span', usernameMessages.min);
      });

      it('should show error: ' + usernameMessages.max, () => {
        cy.get(testId('input__username')).type(Array(41).fill(1).join(''));
        cy.contains('span', usernameMessages.max);
      });

      it('should disappear error', () => {
        cy.get(testId('input__username')).type(' ');
        cy.contains('span', usernameMessages.trim);
        cy.get(testId('input__username')).clear().type('username');
        cy.findByText(usernameMessages.trim).should('not.exist');
      });
    });

    describe('password input', () => {
      it('password input should type the text correctly', () => {
        cy.get(testId('input__password'))
          .type('password')
          .should('have.value', 'password');
      });

      it(`should show error: ${passwordMessages.required}`, () => {
        cy.get(testId('input__password')).type(' ').clear();
        cy.contains('span', passwordMessages.required);
      });

      it(`should show error: ${passwordMessages.trim}`, () => {
        cy.get(testId('input__password')).type(' ');
        cy.contains('span', passwordMessages.trim);
      });

      it(`should show error: ${passwordMessages.min}`, () => {
        cy.get(testId('input__password')).type(Array(5).fill(1).join(''));
        cy.contains('span', passwordMessages.min);
      });

      it(`should show error: ${passwordMessages.max}`, () => {
        cy.get(testId('input__password')).type(Array(71).fill(1).join(''));
        cy.findByText(passwordMessages.max).should('not.exist');
        cy.get(testId('input__password')).type(Array(74).fill(1).join(''));
        cy.contains('span', passwordMessages.max);
      });

      it(`should show error: ${passwordMessages.match}`, () => {
        cy.get(testId('input__password')).type('pass');
        cy.findByText(passwordMessages.match).should('not.exist');
        cy.get(testId('input__password')).type('password');
        cy.contains('span', passwordMessages.match);
      });
    });

    describe('confirmPassword input', () => {
      it('confirmPassword input should type the text correctly', () => {
        cy.get(testId('input__confirm-password'))
          .type('password')
          .should('have.value', 'password');
      });

      it(`should show error: ${confirmPasswordMessages.required}`, () => {
        cy.get(testId('input__confirm-password')).type(' ').clear();
        cy.contains('span', confirmPasswordMessages.required);
      });

      it(`should show error: ${confirmPasswordMessages.match}`, () => {
        cy.get(testId('input__confirm-password')).clear().type(' ');
        cy.contains('span', confirmPasswordMessages.match);

        cy.get(testId('input__confirm-password')).clear().type('1');
        cy.contains('span', confirmPasswordMessages.match);
      });

      it(`should disappear error`, () => {
        cy.get(testId('input__confirm-password')).clear().type(' ');
        cy.contains('span', confirmPasswordMessages.match);

        cy.get(testId('input__password')).type('1');
        cy.contains('span', confirmPasswordMessages.match);

        cy.get(testId('input__confirm-password')).clear().type('1');
        cy.contains('span', confirmPasswordMessages.match).should('not.exist');
      });
    });
  });

  describe('api actions', () => {
    it('should register', () => {
      cy.get(testId('button__profile')).should('not.exist');
      cy.get(testId('button__logout')).should('not.exist');
      cy.get(testId('navigation-link__login')).should('exist');
      cy.get(testId('navigation-link__register')).should('exist');

      cy.get(testId('input__username')).type(testUserData.username);
      cy.get(testId('input__password')).type(testUserData.password);
      cy.get(testId('input__confirm-password')).type(testUserData.password);

      cy.get(testId('button__submit')).click();

      cy.get(testId('page_register ')).should('not.exist');

      cy.get(testId('button__profile')).should('exist');
      cy.get(testId('button__logout')).should('exist');
      cy.get(testId('navigation-link__login')).should('not.exist');
      cy.get(testId('navigation-link__register')).should('not.exist');
    });
  });
});
