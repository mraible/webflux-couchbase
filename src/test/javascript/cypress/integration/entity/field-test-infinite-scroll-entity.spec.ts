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

describe('FieldTestInfiniteScrollEntity e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load FieldTestInfiniteScrollEntities', () => {
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('FieldTestInfiniteScrollEntity').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details FieldTestInfiniteScrollEntity page', () => {
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('fieldTestInfiniteScrollEntity');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create FieldTestInfiniteScrollEntity page', () => {
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestInfiniteScrollEntity');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit FieldTestInfiniteScrollEntity page', () => {
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('FieldTestInfiniteScrollEntity');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of FieldTestInfiniteScrollEntity', () => {
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestInfiniteScrollEntity');

    cy.get(`[data-cy="stringHugo"]`)
      .type('Practical holistic empower', { force: true })
      .invoke('val')
      .should('match', new RegExp('Practical holistic empower'));

    cy.get(`[data-cy="stringRequiredHugo"]`)
      .type('mission-critical Granite', { force: true })
      .invoke('val')
      .should('match', new RegExp('mission-critical Granite'));

    cy.get(`[data-cy="stringMinlengthHugo"]`)
      .type('Configurable Refined European', { force: true })
      .invoke('val')
      .should('match', new RegExp('Configurable Refined European'));

    cy.get(`[data-cy="stringMaxlengthHugo"]`)
      .type('function generation', { force: true })
      .invoke('val')
      .should('match', new RegExp('function generation'));

    cy.get(`[data-cy="stringPatternHugo"]`).type('zFux', { force: true }).invoke('val').should('match', new RegExp('zFux'));

    cy.get(`[data-cy="integerHugo"]`).type('32491').should('have.value', '32491');

    cy.get(`[data-cy="integerRequiredHugo"]`).type('74802').should('have.value', '74802');

    cy.get(`[data-cy="integerMinHugo"]`).type('53665').should('have.value', '53665');

    cy.get(`[data-cy="integerMaxHugo"]`).type('30').should('have.value', '30');

    cy.get(`[data-cy="longHugo"]`).type('84267').should('have.value', '84267');

    cy.get(`[data-cy="longRequiredHugo"]`).type('81902').should('have.value', '81902');

    cy.get(`[data-cy="longMinHugo"]`).type('23413').should('have.value', '23413');

    cy.get(`[data-cy="longMaxHugo"]`).type('78').should('have.value', '78');

    cy.get(`[data-cy="floatHugo"]`).type('27633').should('have.value', '27633');

    cy.get(`[data-cy="floatRequiredHugo"]`).type('72840').should('have.value', '72840');

    cy.get(`[data-cy="floatMinHugo"]`).type('67194').should('have.value', '67194');

    cy.get(`[data-cy="floatMaxHugo"]`).type('99').should('have.value', '99');

    cy.get(`[data-cy="doubleRequiredHugo"]`).type('62429').should('have.value', '62429');

    cy.get(`[data-cy="doubleMinHugo"]`).type('53723').should('have.value', '53723');

    cy.get(`[data-cy="doubleMaxHugo"]`).type('33').should('have.value', '33');

    cy.get(`[data-cy="bigDecimalRequiredHugo"]`).type('64005').should('have.value', '64005');

    cy.get(`[data-cy="bigDecimalMinHugo"]`).type('35370').should('have.value', '35370');

    cy.get(`[data-cy="bigDecimalMaxHugo"]`).type('42').should('have.value', '42');

    cy.get(`[data-cy="localDateHugo"]`).type('2016-02-07').should('have.value', '2016-02-07');

    cy.get(`[data-cy="localDateRequiredHugo"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="instantHugo"]`).type('2016-02-08T08:53').invoke('val').should('equal', '2016-02-08T08:53');

    cy.get(`[data-cy="instanteRequiredHugo"]`).type('2016-02-07T20:24').invoke('val').should('equal', '2016-02-07T20:24');

    cy.get(`[data-cy="zonedDateTimeHugo"]`).type('2016-02-08T10:05').invoke('val').should('equal', '2016-02-08T10:05');

    cy.get(`[data-cy="zonedDateTimeRequiredHugo"]`).type('2016-02-08T00:27').invoke('val').should('equal', '2016-02-08T00:27');

    cy.get(`[data-cy="durationHugo"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="durationRequiredHugo"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="booleanHugo"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanHugo"]`).click().should('be.checked');

    cy.get(`[data-cy="booleanRequiredHugo"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanRequiredHugo"]`).click().should('be.checked');

    cy.get(`[data-cy="enumHugo"]`).select('ENUM_VALUE_3');

    cy.get(`[data-cy="enumRequiredHugo"]`).select('ENUM_VALUE_3');

    cy.get(`[data-cy="uuidHugo"]`)
      .type('558aaf8e-7b68-4aec-9141-9f01b09aafca')
      .invoke('val')
      .should('match', new RegExp('558aaf8e-7b68-4aec-9141-9f01b09aafca'));

    cy.get(`[data-cy="uuidRequiredHugo"]`)
      .type('5f83bdf9-99c8-4b05-8ee6-4e32b83dc1ab')
      .invoke('val')
      .should('match', new RegExp('5f83bdf9-99c8-4b05-8ee6-4e32b83dc1ab'));

    cy.setFieldImageAsBytesOfEntity('byteImageHugo', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageRequiredHugo', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMinbytesHugo', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMaxbytesHugo', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyHugo', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyRequiredHugo', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMinbytesHugo', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMaxbytesHugo', 'integration-test.png', 'image/png');

    cy.get(`[data-cy="byteTextHugo"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(`[data-cy="byteTextRequiredHugo"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of FieldTestInfiniteScrollEntity', () => {
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequest');
    cy.intercept('GET', '/api/field-test-infinite-scroll-entities/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/field-test-infinite-scroll-entities/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('fieldTestInfiniteScrollEntity').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/field-test-infinite-scroll-entities*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('field-test-infinite-scroll-entity');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
