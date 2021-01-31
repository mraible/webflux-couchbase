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

describe('FieldTestPaginationEntity e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load FieldTestPaginationEntities', () => {
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('FieldTestPaginationEntity').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details FieldTestPaginationEntity page', () => {
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('fieldTestPaginationEntity');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create FieldTestPaginationEntity page', () => {
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestPaginationEntity');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit FieldTestPaginationEntity page', () => {
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('FieldTestPaginationEntity');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of FieldTestPaginationEntity', () => {
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestPaginationEntity');

    cy.get(`[data-cy="stringAlice"]`).type('Games', { force: true }).invoke('val').should('match', new RegExp('Games'));

    cy.get(`[data-cy="stringRequiredAlice"]`)
      .type('Incredible wireless', { force: true })
      .invoke('val')
      .should('match', new RegExp('Incredible wireless'));

    cy.get(`[data-cy="stringMinlengthAlice"]`).type('utilize', { force: true }).invoke('val').should('match', new RegExp('utilize'));

    cy.get(`[data-cy="stringMaxlengthAlice"]`)
      .type('applications allianc', { force: true })
      .invoke('val')
      .should('match', new RegExp('applications allianc'));

    cy.get(`[data-cy="stringPatternAlice"]`).type('o', { force: true }).invoke('val').should('match', new RegExp('o'));

    cy.get(`[data-cy="integerAlice"]`).type('68697').should('have.value', '68697');

    cy.get(`[data-cy="integerRequiredAlice"]`).type('87006').should('have.value', '87006');

    cy.get(`[data-cy="integerMinAlice"]`).type('62013').should('have.value', '62013');

    cy.get(`[data-cy="integerMaxAlice"]`).type('78').should('have.value', '78');

    cy.get(`[data-cy="longAlice"]`).type('26712').should('have.value', '26712');

    cy.get(`[data-cy="longRequiredAlice"]`).type('1455').should('have.value', '1455');

    cy.get(`[data-cy="longMinAlice"]`).type('80092').should('have.value', '80092');

    cy.get(`[data-cy="longMaxAlice"]`).type('2').should('have.value', '2');

    cy.get(`[data-cy="floatAlice"]`).type('11948').should('have.value', '11948');

    cy.get(`[data-cy="floatRequiredAlice"]`).type('3393').should('have.value', '3393');

    cy.get(`[data-cy="floatMinAlice"]`).type('97925').should('have.value', '97925');

    cy.get(`[data-cy="floatMaxAlice"]`).type('85').should('have.value', '85');

    cy.get(`[data-cy="doubleRequiredAlice"]`).type('43723').should('have.value', '43723');

    cy.get(`[data-cy="doubleMinAlice"]`).type('92649').should('have.value', '92649');

    cy.get(`[data-cy="doubleMaxAlice"]`).type('76').should('have.value', '76');

    cy.get(`[data-cy="bigDecimalRequiredAlice"]`).type('89067').should('have.value', '89067');

    cy.get(`[data-cy="bigDecimalMinAlice"]`).type('42695').should('have.value', '42695');

    cy.get(`[data-cy="bigDecimalMaxAlice"]`).type('79').should('have.value', '79');

    cy.get(`[data-cy="localDateAlice"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="localDateRequiredAlice"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="instantAlice"]`).type('2016-02-08T01:45').invoke('val').should('equal', '2016-02-08T01:45');

    cy.get(`[data-cy="instanteRequiredAlice"]`).type('2016-02-08T12:32').invoke('val').should('equal', '2016-02-08T12:32');

    cy.get(`[data-cy="zonedDateTimeAlice"]`).type('2016-02-08T11:50').invoke('val').should('equal', '2016-02-08T11:50');

    cy.get(`[data-cy="zonedDateTimeRequiredAlice"]`).type('2016-02-08T18:37').invoke('val').should('equal', '2016-02-08T18:37');

    cy.get(`[data-cy="durationAlice"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="durationRequiredAlice"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="booleanAlice"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanAlice"]`).click().should('be.checked');

    cy.get(`[data-cy="booleanRequiredAlice"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanRequiredAlice"]`).click().should('be.checked');

    cy.get(`[data-cy="enumAlice"]`).select('ENUM_VALUE_1');

    cy.get(`[data-cy="enumRequiredAlice"]`).select('ENUM_VALUE_2');

    cy.get(`[data-cy="uuidAlice"]`)
      .type('bcc8b0a3-0c12-42bc-8169-5bf590ed391d')
      .invoke('val')
      .should('match', new RegExp('bcc8b0a3-0c12-42bc-8169-5bf590ed391d'));

    cy.get(`[data-cy="uuidRequiredAlice"]`)
      .type('4a131a60-8876-4366-86e1-0ad9a0e3edf6')
      .invoke('val')
      .should('match', new RegExp('4a131a60-8876-4366-86e1-0ad9a0e3edf6'));

    cy.setFieldImageAsBytesOfEntity('byteImageAlice', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageRequiredAlice', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMinbytesAlice', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMaxbytesAlice', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyAlice', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyRequiredAlice', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMinbytesAlice', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMaxbytesAlice', 'integration-test.png', 'image/png');

    cy.get(`[data-cy="byteTextAlice"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(`[data-cy="byteTextRequiredAlice"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of FieldTestPaginationEntity', () => {
    cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequest');
    cy.intercept('GET', '/api/field-test-pagination-entities/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/field-test-pagination-entities/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-pagination-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('fieldTestPaginationEntity').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/field-test-pagination-entities*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('field-test-pagination-entity');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
