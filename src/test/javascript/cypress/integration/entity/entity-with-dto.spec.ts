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

describe('EntityWithDTO e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load EntityWithDTOS', () => {
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('EntityWithDTO').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details EntityWithDTO page', () => {
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('entityWithDTO');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create EntityWithDTO page', () => {
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithDTO');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit EntityWithDTO page', () => {
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('EntityWithDTO');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of EntityWithDTO', () => {
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithDTO');

    cy.get(`[data-cy="emma"]`).type('Director South', { force: true }).invoke('val').should('match', new RegExp('Director South'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of EntityWithDTO', () => {
    cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequest');
    cy.intercept('GET', '/api/entity-with-dtos/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/entity-with-dtos/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-dto');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('entityWithDTO').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/entity-with-dtos*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('entity-with-dto');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
