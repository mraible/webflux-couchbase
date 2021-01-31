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

describe('EntityWithServiceClassAndPagination e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load EntityWithServiceClassAndPaginations', () => {
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('EntityWithServiceClassAndPagination').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details EntityWithServiceClassAndPagination page', () => {
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('entityWithServiceClassAndPagination');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create EntityWithServiceClassAndPagination page', () => {
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithServiceClassAndPagination');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit EntityWithServiceClassAndPagination page', () => {
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('EntityWithServiceClassAndPagination');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of EntityWithServiceClassAndPagination', () => {
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('EntityWithServiceClassAndPagination');

    cy.get(`[data-cy="enzo"]`).type('redefine Architect', { force: true }).invoke('val').should('match', new RegExp('redefine Architect'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of EntityWithServiceClassAndPagination', () => {
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequest');
    cy.intercept('GET', '/api/entity-with-service-class-and-paginations/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/entity-with-service-class-and-paginations/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('entityWithServiceClassAndPagination').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/entity-with-service-class-and-paginations*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('entity-with-service-class-and-pagination');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
