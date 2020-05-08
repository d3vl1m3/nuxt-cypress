/// <reference types="cypress" />
import { cy, context } from 'cypress';

context('Actions', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Can see the title', () => {
    // https://on.cypress.io/type
    cy.get('h1')
      .contains('nuxt-cypress');
  });
});
