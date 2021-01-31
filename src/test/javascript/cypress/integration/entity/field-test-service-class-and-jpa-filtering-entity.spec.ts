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

describe('FieldTestServiceClassAndJpaFilteringEntity e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load FieldTestServiceClassAndJpaFilteringEntities', () => {
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('FieldTestServiceClassAndJpaFilteringEntity').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details FieldTestServiceClassAndJpaFilteringEntity page', () => {
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('fieldTestServiceClassAndJpaFilteringEntity');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create FieldTestServiceClassAndJpaFilteringEntity page', () => {
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestServiceClassAndJpaFilteringEntity');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit FieldTestServiceClassAndJpaFilteringEntity page', () => {
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('FieldTestServiceClassAndJpaFilteringEntity');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of FieldTestServiceClassAndJpaFilteringEntity', () => {
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestServiceClassAndJpaFilteringEntity');

    cy.get(`[data-cy="stringBob"]`)
      .type('navigating Secured', { force: true })
      .invoke('val')
      .should('match', new RegExp('navigating Secured'));

    cy.get(`[data-cy="stringRequiredBob"]`)
      .type('Fantastic Ball', { force: true })
      .invoke('val')
      .should('match', new RegExp('Fantastic Ball'));

    cy.get(`[data-cy="stringMinlengthBob"]`).type('HDD', { force: true }).invoke('val').should('match', new RegExp('HDD'));

    cy.get(`[data-cy="stringMaxlengthBob"]`).type('XSS', { force: true }).invoke('val').should('match', new RegExp('XSS'));

    cy.get(`[data-cy="stringPatternBob"]`).type('ZimD', { force: true }).invoke('val').should('match', new RegExp('ZimD'));

    cy.get(`[data-cy="integerBob"]`).type('70008').should('have.value', '70008');

    cy.get(`[data-cy="integerRequiredBob"]`).type('25098').should('have.value', '25098');

    cy.get(`[data-cy="integerMinBob"]`).type('93959').should('have.value', '93959');

    cy.get(`[data-cy="integerMaxBob"]`).type('32').should('have.value', '32');

    cy.get(`[data-cy="longBob"]`).type('87506').should('have.value', '87506');

    cy.get(`[data-cy="longRequiredBob"]`).type('70003').should('have.value', '70003');

    cy.get(`[data-cy="longMinBob"]`).type('9033').should('have.value', '9033');

    cy.get(`[data-cy="longMaxBob"]`).type('48').should('have.value', '48');

    cy.get(`[data-cy="floatBob"]`).type('7137').should('have.value', '7137');

    cy.get(`[data-cy="floatRequiredBob"]`).type('22151').should('have.value', '22151');

    cy.get(`[data-cy="floatMinBob"]`).type('69564').should('have.value', '69564');

    cy.get(`[data-cy="floatMaxBob"]`).type('74').should('have.value', '74');

    cy.get(`[data-cy="doubleRequiredBob"]`).type('66244').should('have.value', '66244');

    cy.get(`[data-cy="doubleMinBob"]`).type('89792').should('have.value', '89792');

    cy.get(`[data-cy="doubleMaxBob"]`).type('10').should('have.value', '10');

    cy.get(`[data-cy="bigDecimalRequiredBob"]`).type('84700').should('have.value', '84700');

    cy.get(`[data-cy="bigDecimalMinBob"]`).type('89142').should('have.value', '89142');

    cy.get(`[data-cy="bigDecimalMaxBob"]`).type('93').should('have.value', '93');

    cy.get(`[data-cy="localDateBob"]`).type('2016-02-07').should('have.value', '2016-02-07');

    cy.get(`[data-cy="localDateRequiredBob"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="instantBob"]`).type('2016-02-08T12:44').invoke('val').should('equal', '2016-02-08T12:44');

    cy.get(`[data-cy="instanteRequiredBob"]`).type('2016-02-08T02:56').invoke('val').should('equal', '2016-02-08T02:56');

    cy.get(`[data-cy="zonedDateTimeBob"]`).type('2016-02-08T02:18').invoke('val').should('equal', '2016-02-08T02:18');

    cy.get(`[data-cy="zonedDateTimeRequiredBob"]`).type('2016-02-08T16:07').invoke('val').should('equal', '2016-02-08T16:07');

    cy.get(`[data-cy="durationBob"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="durationRequiredBob"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="booleanBob"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanBob"]`).click().should('be.checked');

    cy.get(`[data-cy="booleanRequiredBob"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanRequiredBob"]`).click().should('be.checked');

    cy.get(`[data-cy="enumBob"]`).select('ENUM_VALUE_2');

    cy.get(`[data-cy="enumRequiredBob"]`).select('ENUM_VALUE_1');

    cy.get(`[data-cy="uuidBob"]`)
      .type('8cf142c7-246a-41da-b5d9-28b58571c23b')
      .invoke('val')
      .should('match', new RegExp('8cf142c7-246a-41da-b5d9-28b58571c23b'));

    cy.get(`[data-cy="uuidRequiredBob"]`)
      .type('8b8e7944-04a7-4e44-ac62-a4ea524d54e9')
      .invoke('val')
      .should('match', new RegExp('8b8e7944-04a7-4e44-ac62-a4ea524d54e9'));

    cy.setFieldImageAsBytesOfEntity('byteImageBob', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageRequiredBob', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMinbytesBob', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMaxbytesBob', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyBob', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyRequiredBob', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMinbytesBob', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMaxbytesBob', 'integration-test.png', 'image/png');

    cy.get(`[data-cy="byteTextBob"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(`[data-cy="byteTextRequiredBob"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of FieldTestServiceClassAndJpaFilteringEntity', () => {
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequest');
    cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/field-test-service-class-and-jpa-filtering-entities/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('fieldTestServiceClassAndJpaFilteringEntity').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/field-test-service-class-and-jpa-filtering-entities*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('field-test-service-class-and-jpa-filtering-entity');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
