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

describe('EntityWithServiceClassPaginationAndDTO e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load EntityWithServiceClassPaginationAndDTOS', () => {
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('EntityWithServiceClassPaginationAndDTO').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details EntityWithServiceClassPaginationAndDTO page', () => {
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('entityWithServiceClassPaginationAndDTO');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create EntityWithServiceClassPaginationAndDTO page', () => {
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithServiceClassPaginationAndDTO');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit EntityWithServiceClassPaginationAndDTO page', () => {
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('EntityWithServiceClassPaginationAndDTO');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of EntityWithServiceClassPaginationAndDTO', () => {
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithServiceClassPaginationAndDTO');

    cy.get(`[data-cy="lena"]`)
      .type('Generic B2B dedicated', { force: true })
      .invoke('val')
      .should('match', new RegExp('Generic B2B dedicated'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of EntityWithServiceClassPaginationAndDTO', () => {
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequest');
    cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/entity-with-service-class-pagination-and-dtos/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('entityWithServiceClassPaginationAndDTO').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/entity-with-service-class-pagination-and-dtos*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('entity-with-service-class-pagination-and-dto');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
