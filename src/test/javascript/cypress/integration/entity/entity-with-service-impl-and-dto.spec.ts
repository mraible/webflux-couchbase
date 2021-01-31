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

describe('EntityWithServiceImplAndDTO e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load EntityWithServiceImplAndDTOS', () => {
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('EntityWithServiceImplAndDTO').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details EntityWithServiceImplAndDTO page', () => {
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('entityWithServiceImplAndDTO');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create EntityWithServiceImplAndDTO page', () => {
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithServiceImplAndDTO');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit EntityWithServiceImplAndDTO page', () => {
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('EntityWithServiceImplAndDTO');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of EntityWithServiceImplAndDTO', () => {
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithServiceImplAndDTO');

    cy.get(`[data-cy="louis"]`)
      .type('backing programming', { force: true })
      .invoke('val')
      .should('match', new RegExp('backing programming'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of EntityWithServiceImplAndDTO', () => {
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequest');
    cy.intercept('GET', '/api/entity-with-service-impl-and-dtos/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/entity-with-service-impl-and-dtos/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('entityWithServiceImplAndDTO').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/entity-with-service-impl-and-dtos*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('entity-with-service-impl-and-dto');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
