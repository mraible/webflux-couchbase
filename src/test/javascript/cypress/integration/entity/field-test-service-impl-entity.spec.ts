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

describe('FieldTestServiceImplEntity e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load FieldTestServiceImplEntities', () => {
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('FieldTestServiceImplEntity').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details FieldTestServiceImplEntity page', () => {
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('fieldTestServiceImplEntity');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create FieldTestServiceImplEntity page', () => {
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestServiceImplEntity');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit FieldTestServiceImplEntity page', () => {
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('FieldTestServiceImplEntity');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of FieldTestServiceImplEntity', () => {
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestServiceImplEntity');

    cy.get(`[data-cy="stringMika"]`)
      .type('Mandatory maximize Plastic', { force: true })
      .invoke('val')
      .should('match', new RegExp('Mandatory maximize Plastic'));

    cy.get(`[data-cy="stringRequiredMika"]`)
      .type('Frozen Berkshire', { force: true })
      .invoke('val')
      .should('match', new RegExp('Frozen Berkshire'));

    cy.get(`[data-cy="stringMinlengthMika"]`)
      .type('integrate Eritrea', { force: true })
      .invoke('val')
      .should('match', new RegExp('integrate Eritrea'));

    cy.get(`[data-cy="stringMaxlengthMika"]`)
      .type('solution-oriented vi', { force: true })
      .invoke('val')
      .should('match', new RegExp('solution-oriented vi'));

    cy.get(`[data-cy="stringPatternMika"]`).type('t', { force: true }).invoke('val').should('match', new RegExp('t'));

    cy.get(`[data-cy="integerMika"]`).type('95168').should('have.value', '95168');

    cy.get(`[data-cy="integerRequiredMika"]`).type('54451').should('have.value', '54451');

    cy.get(`[data-cy="integerMinMika"]`).type('46707').should('have.value', '46707');

    cy.get(`[data-cy="integerMaxMika"]`).type('53').should('have.value', '53');

    cy.get(`[data-cy="longMika"]`).type('40445').should('have.value', '40445');

    cy.get(`[data-cy="longRequiredMika"]`).type('51492').should('have.value', '51492');

    cy.get(`[data-cy="longMinMika"]`).type('76233').should('have.value', '76233');

    cy.get(`[data-cy="longMaxMika"]`).type('2').should('have.value', '2');

    cy.get(`[data-cy="floatMika"]`).type('31280').should('have.value', '31280');

    cy.get(`[data-cy="floatRequiredMika"]`).type('79841').should('have.value', '79841');

    cy.get(`[data-cy="floatMinMika"]`).type('7660').should('have.value', '7660');

    cy.get(`[data-cy="floatMaxMika"]`).type('83').should('have.value', '83');

    cy.get(`[data-cy="doubleRequiredMika"]`).type('4783').should('have.value', '4783');

    cy.get(`[data-cy="doubleMinMika"]`).type('3554').should('have.value', '3554');

    cy.get(`[data-cy="doubleMaxMika"]`).type('71').should('have.value', '71');

    cy.get(`[data-cy="bigDecimalRequiredMika"]`).type('85031').should('have.value', '85031');

    cy.get(`[data-cy="bigDecimalMinMika"]`).type('65873').should('have.value', '65873');

    cy.get(`[data-cy="bigDecimalMaxMika"]`).type('36').should('have.value', '36');

    cy.get(`[data-cy="localDateMika"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="localDateRequiredMika"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="instantMika"]`).type('2016-02-08T01:22').invoke('val').should('equal', '2016-02-08T01:22');

    cy.get(`[data-cy="instanteRequiredMika"]`).type('2016-02-08T09:52').invoke('val').should('equal', '2016-02-08T09:52');

    cy.get(`[data-cy="zonedDateTimeMika"]`).type('2016-02-07T23:11').invoke('val').should('equal', '2016-02-07T23:11');

    cy.get(`[data-cy="zonedDateTimeRequiredMika"]`).type('2016-02-08T02:59').invoke('val').should('equal', '2016-02-08T02:59');

    cy.get(`[data-cy="durationMika"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="durationRequiredMika"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="booleanMika"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanMika"]`).click().should('be.checked');

    cy.get(`[data-cy="booleanRequiredMika"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanRequiredMika"]`).click().should('be.checked');

    cy.get(`[data-cy="enumMika"]`).select('ENUM_VALUE_2');

    cy.get(`[data-cy="enumRequiredMika"]`).select('ENUM_VALUE_3');

    cy.get(`[data-cy="uuidMika"]`)
      .type('bd94d384-4665-4634-babe-e3137a8de5e5')
      .invoke('val')
      .should('match', new RegExp('bd94d384-4665-4634-babe-e3137a8de5e5'));

    cy.get(`[data-cy="uuidRequiredMika"]`)
      .type('a4015992-8b72-483f-bdfd-e68544592735')
      .invoke('val')
      .should('match', new RegExp('a4015992-8b72-483f-bdfd-e68544592735'));

    cy.setFieldImageAsBytesOfEntity('byteImageMika', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageRequiredMika', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMinbytesMika', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMaxbytesMika', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMika', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyRequiredMika', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMinbytesMika', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMaxbytesMika', 'integration-test.png', 'image/png');

    cy.get(`[data-cy="byteTextMika"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(`[data-cy="byteTextRequiredMika"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of FieldTestServiceImplEntity', () => {
    cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequest');
    cy.intercept('GET', '/api/field-test-service-impl-entities/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/field-test-service-impl-entities/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-impl-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('fieldTestServiceImplEntity').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/field-test-service-impl-entities*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('field-test-service-impl-entity');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
