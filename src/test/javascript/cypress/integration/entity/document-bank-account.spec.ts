import {
  entityTableSelector,
  entityDetailsButtonSelector,
  entityDetailsBackButtonSelector,
  entityCreateButtonSelector,
  entityCreateSaveButtonSelector,
  entityEditButtonSelector,
  entityDeleteButtonSelector,
  entityConfirmDeleteButtonSelector,
} from '../../support/entity';

describe('DocumentBankAccount e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load DocumentBankAccounts', () => {
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('DocumentBankAccount').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details DocumentBankAccount page', () => {
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('documentBankAccount');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create DocumentBankAccount page', () => {
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('DocumentBankAccount');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit DocumentBankAccount page', () => {
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('DocumentBankAccount');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of DocumentBankAccount', () => {
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('DocumentBankAccount');

    cy.get(`[data-cy="name"]`).type('multi-tasking', { force: true }).invoke('val').should('match', new RegExp('multi-tasking'));

    cy.get(`[data-cy="bankNumber"]`).type('29105').should('have.value', '29105');

    cy.get(`[data-cy="agencyNumber"]`).type('67424').should('have.value', '67424');

    cy.get(`[data-cy="lastOperationDuration"]`).type('8746').should('have.value', '8746');

    cy.get(`[data-cy="meanOperationDuration"]`).type('66479').should('have.value', '66479');

    cy.get(`[data-cy="balance"]`).type('98540').should('have.value', '98540');

    cy.get(`[data-cy="openingDay"]`).type('2015-08-05').should('have.value', '2015-08-05');

    cy.get(`[data-cy="lastOperationDate"]`).type('2015-08-05T12:19').invoke('val').should('equal', '2015-08-05T12:19');

    cy.get(`[data-cy="active"]`).should('not.be.checked');
    cy.get(`[data-cy="active"]`).click().should('be.checked');

    cy.get(`[data-cy="accountType"]`).select('SAVINGS');

    cy.setFieldImageAsBytesOfEntity('attachment', 'integration-test.png', 'image/png');

    cy.get(`[data-cy="description"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of DocumentBankAccount', () => {
    cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequest');
    cy.intercept('GET', '/api/document-bank-accounts/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/document-bank-accounts/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('document-bank-account');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('documentBankAccount').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/document-bank-accounts*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('document-bank-account');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
