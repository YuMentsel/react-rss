import { getValidDate } from '../../src/utils/utils';
import { ErrorsMessages } from '../../src/types/enums';

describe('Home page', () => {
  it('should visit', () => {
    cy.visit('/');
    cy.get('h1').contains('RSS-React');
    cy.get('h2').contains('home');
  });

  it('should have an input value', () => {
    cy.visit('/');
    cy.get('[data-testid="search"]').should('have.value', '');
    cy.get('[data-testid="search"]').type('Rick');
    cy.get('[data-testid="search"]').should('have.value', 'Rick');
  });

  it('should have a cart - Doofus Rick', () => {
    cy.visit('/');
    cy.get('[data-testid="search"]').should('have.value', '');
    cy.get('[data-testid="search"]').type('Rick');
    cy.get('[data-testid="search"]').should('have.value', 'Rick');
    cy.get('[data-testid="search-form"]').submit();
    cy.get('[data-testid="card-title"]').contains('Doofus Rick');
  });

  it('should open/close a cart - Gazorpazorpfield', () => {
    cy.visit('/');
    cy.get('[data-testid="search"]').type('Gazorpazorpfield');
    cy.get('[data-testid="search"]').should('have.value', 'Gazorpazorpfield');
    cy.get('[data-testid="search-form"]').submit();
    cy.get('[data-testid="card-title"]').contains('Gazorpazorpfield');

    cy.get('[data-testid="card"]').click();
    cy.get('[data-testid="modal-card"]').should('exist');

    cy.get('[data-testid="modal-status"]').contains('Alive');
    cy.get('[data-testid="modal-gender"]').contains('Male');
    cy.get('[data-testid="modal-origin"]').contains('Gazorpazorp');
    cy.get('[data-testid="modal-location"]').contains('Interdimensional Cable');

    cy.get('[data-testid="close"]').click();
    cy.get('[data-testid="modal-card"]').should('not.exist');
  });
});

describe('About page', () => {
  it('should visit', () => {
    cy.visit('/');
    cy.get('[data-testid="about-link"]').click();
    cy.get('h1').contains('RSS-React');
    cy.get('h2').contains('about us');
    cy.get('div').contains('This is the About Us page');
  });
});

describe('404 page', () => {
  it('should visit', () => {
    cy.visit('/404');
    cy.get('h1').contains('RSS-React');
    cy.get('h2').contains('404');
    cy.get('div').contains('Page nоt found.');
  });
});

describe('Form page', () => {
  it('should visit', () => {
    cy.visit('/form');
    cy.get('h1').contains('RSS-React');
    cy.get('h2').contains('form');
  });

  it('check validation', () => {
    cy.visit('/form');

    cy.get('[data-testid="submit-form"]').click();

    cy.contains(ErrorsMessages.title).should('exist');
    cy.contains(ErrorsMessages.titleNotValid).should('not.exist');
    cy.contains(ErrorsMessages.type).should('exist');
    cy.contains(ErrorsMessages.image).should('exist');
    cy.contains(ErrorsMessages.date).should('exist');
    cy.contains(ErrorsMessages.dateNotValid).should('not.exist');
    cy.contains(ErrorsMessages.discount).should('exist');
    cy.contains(ErrorsMessages.stock).should('exist');
  });

  it('check validation with an invalid value', () => {
    cy.visit('/form');
    cy.get('[data-testid="title"]').type('Ec');
    cy.get('[data-testid="date"]').type('2020-08-01');
    cy.get('[data-testid="submit-form"]').click();

    cy.contains(ErrorsMessages.title).should('not.exist');
    cy.contains(ErrorsMessages.titleNotValid).should('exist');
    cy.contains(ErrorsMessages.type).should('exist');
    cy.contains(ErrorsMessages.image).should('exist');

    cy.contains(ErrorsMessages.date).should('not.exist');
    cy.contains(ErrorsMessages.dateNotValid).should('exist');
    cy.contains(ErrorsMessages.discount).should('exist');
    cy.contains(ErrorsMessages.stock).should('exist');
  });

  it('should add a form card', () => {
    cy.visit('/form');

    cy.get('h2').contains('form');

    cy.get('[data-testid="title"]').type('Echeveria');
    cy.get('[data-testid="select"]').select('Succulent');
    cy.get('[data-testid="image"]').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'image.png',
    });
    cy.get('[data-testid="date"]').type(getValidDate());
    cy.get('[data-testid="20"]').first().click();
    cy.get('[data-testid="checkbox"]').click();

    cy.get('[data-testid="form-card"]').should('not.exist');

    cy.get('[data-testid="submit-form"]').click();
    cy.get('[data-testid="form-card"]').should('exist');
    cy.get('[data-testid="form-title"]').contains('Echeveria');
  });
});
