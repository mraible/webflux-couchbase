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

describe('FieldTestEntity e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load FieldTestEntities', () => {
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('FieldTestEntity').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details FieldTestEntity page', () => {
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('fieldTestEntity');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create FieldTestEntity page', () => {
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestEntity');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit FieldTestEntity page', () => {
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('FieldTestEntity');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of FieldTestEntity', () => {
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestEntity');

    cy.get(`[data-cy="stringTom"]`).type('groupware', { force: true }).invoke('val').should('match', new RegExp('groupware'));

    cy.get(`[data-cy="stringRequiredTom"]`)
      .type('alarm Peso strategize', { force: true })
      .invoke('val')
      .should('match', new RegExp('alarm Peso strategize'));

    cy.get(`[data-cy="stringMinlengthTom"]`).type('parsing', { force: true }).invoke('val').should('match', new RegExp('parsing'));

    cy.get(`[data-cy="stringMaxlengthTom"]`).type('Dynamic', { force: true }).invoke('val').should('match', new RegExp('Dynamic'));

    cy.get(`[data-cy="stringPatternTom"]`).type('pBZP', { force: true }).invoke('val').should('match', new RegExp('pBZP'));

    cy.get(`[data-cy="numberPatternTom"]`).type('5549', { force: true }).invoke('val').should('match', new RegExp('5549'));

    cy.get(`[data-cy="numberPatternRequiredTom"]`).type('1', { force: true }).invoke('val').should('match', new RegExp('1'));

    cy.get(`[data-cy="integerTom"]`).type('88398').should('have.value', '88398');

    cy.get(`[data-cy="integerRequiredTom"]`).type('15916').should('have.value', '15916');

    cy.get(`[data-cy="integerMinTom"]`).type('88619').should('have.value', '88619');

    cy.get(`[data-cy="integerMaxTom"]`).type('52').should('have.value', '52');

    cy.get(`[data-cy="longTom"]`).type('93024').should('have.value', '93024');

    cy.get(`[data-cy="longRequiredTom"]`).type('50496').should('have.value', '50496');

    cy.get(`[data-cy="longMinTom"]`).type('81112').should('have.value', '81112');

    cy.get(`[data-cy="longMaxTom"]`).type('30').should('have.value', '30');

    cy.get(`[data-cy="floatTom"]`).type('29234').should('have.value', '29234');

    cy.get(`[data-cy="floatRequiredTom"]`).type('37676').should('have.value', '37676');

    cy.get(`[data-cy="floatMinTom"]`).type('26966').should('have.value', '26966');

    cy.get(`[data-cy="floatMaxTom"]`).type('66').should('have.value', '66');

    cy.get(`[data-cy="doubleRequiredTom"]`).type('1165').should('have.value', '1165');

    cy.get(`[data-cy="doubleMinTom"]`).type('51199').should('have.value', '51199');

    cy.get(`[data-cy="doubleMaxTom"]`).type('45').should('have.value', '45');

    cy.get(`[data-cy="bigDecimalRequiredTom"]`).type('32543').should('have.value', '32543');

    cy.get(`[data-cy="bigDecimalMinTom"]`).type('49279').should('have.value', '49279');

    cy.get(`[data-cy="bigDecimalMaxTom"]`).type('22').should('have.value', '22');

    cy.get(`[data-cy="localDateTom"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="localDateRequiredTom"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="instantTom"]`).type('2016-02-08T04:38').invoke('val').should('equal', '2016-02-08T04:38');

    cy.get(`[data-cy="instantRequiredTom"]`).type('2016-02-08T15:40').invoke('val').should('equal', '2016-02-08T15:40');

    cy.get(`[data-cy="zonedDateTimeTom"]`).type('2016-02-08T08:25').invoke('val').should('equal', '2016-02-08T08:25');

    cy.get(`[data-cy="zonedDateTimeRequiredTom"]`).type('2016-02-08T03:09').invoke('val').should('equal', '2016-02-08T03:09');

    cy.get(`[data-cy="durationTom"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="durationRequiredTom"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="booleanTom"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanTom"]`).click().should('be.checked');

    cy.get(`[data-cy="booleanRequiredTom"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanRequiredTom"]`).click().should('be.checked');

    cy.get(`[data-cy="enumTom"]`).select('ENUM_VALUE_2');

    cy.get(`[data-cy="enumRequiredTom"]`).select('ENUM_VALUE_2');

    cy.get(`[data-cy="uuidTom"]`)
      .type('47db6563-a2fb-47ad-87a6-63d775d93164')
      .invoke('val')
      .should('match', new RegExp('47db6563-a2fb-47ad-87a6-63d775d93164'));

    cy.get(`[data-cy="uuidRequiredTom"]`)
      .type('70968a0b-5c1a-45d3-99ce-eea826c50b54')
      .invoke('val')
      .should('match', new RegExp('70968a0b-5c1a-45d3-99ce-eea826c50b54'));

    cy.setFieldImageAsBytesOfEntity('byteImageTom', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageRequiredTom', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMinbytesTom', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMaxbytesTom', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyTom', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyRequiredTom', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMinbytesTom', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMaxbytesTom', 'integration-test.png', 'image/png');

    cy.get(`[data-cy="byteTextTom"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(`[data-cy="byteTextRequiredTom"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of FieldTestEntity', () => {
    cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequest');
    cy.intercept('GET', '/api/field-test-entities/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/field-test-entities/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('fieldTestEntity').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/field-test-entities*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('field-test-entity');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
