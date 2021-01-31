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

describe('FieldTestMapstructAndServiceClassEntity e2e test', () => {
  let startingEntitiesCount = 0;

  before(() => {
    cy.window().then(win => {
      win.sessionStorage.clear();
    });

    cy.clearCookies();
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequest');
    cy.visit('');
    cy.login('admin', 'admin');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => (startingEntitiesCount = response.body.length));
    cy.visit('/');
  });

  it('should load FieldTestMapstructAndServiceClassEntities', () => {
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequest');
    cy.getEntityHeading('FieldTestMapstructAndServiceClassEntity').should('exist');
    if (startingEntitiesCount === 0) {
      cy.get(entityTableSelector).should('not.exist');
    } else {
      cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
    }
    cy.visit('/');
  });

  it('should load details FieldTestMapstructAndServiceClassEntity page', () => {
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityDetailsButtonSelector).first().click({ force: true });
      cy.getEntityDetailsHeading('fieldTestMapstructAndServiceClassEntity');
      cy.get(entityDetailsBackButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should load create FieldTestMapstructAndServiceClassEntity page', () => {
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestMapstructAndServiceClassEntity');
    cy.get(entityCreateSaveButtonSelector).should('exist');
    cy.visit('/');
  });

  it('should load edit FieldTestMapstructAndServiceClassEntity page', () => {
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequest');
    if (startingEntitiesCount > 0) {
      cy.get(entityEditButtonSelector).first().click({ force: true });
      cy.getEntityCreateUpdateHeading('FieldTestMapstructAndServiceClassEntity');
      cy.get(entityCreateSaveButtonSelector).should('exist');
    }
    cy.visit('/');
  });

  it('should create an instance of FieldTestMapstructAndServiceClassEntity', () => {
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequest');
    cy.get(entityCreateButtonSelector).click({ force: true });
    cy.getEntityCreateUpdateHeading('FieldTestMapstructAndServiceClassEntity');

    cy.get(`[data-cy="stringEva"]`)
      .type('Strategist Movies Rubber', { force: true })
      .invoke('val')
      .should('match', new RegExp('Strategist Movies Rubber'));

    cy.get(`[data-cy="stringRequiredEva"]`)
      .type('Devolved microchip quantifying', { force: true })
      .invoke('val')
      .should('match', new RegExp('Devolved microchip quantifying'));

    cy.get(`[data-cy="stringMinlengthEva"]`).type('Handmade', { force: true }).invoke('val').should('match', new RegExp('Handmade'));

    cy.get(`[data-cy="stringMaxlengthEva"]`)
      .type('SCSI Bedfordshire', { force: true })
      .invoke('val')
      .should('match', new RegExp('SCSI Bedfordshire'));

    cy.get(`[data-cy="stringPatternEva"]`).type('G', { force: true }).invoke('val').should('match', new RegExp('G'));

    cy.get(`[data-cy="integerEva"]`).type('54739').should('have.value', '54739');

    cy.get(`[data-cy="integerRequiredEva"]`).type('18700').should('have.value', '18700');

    cy.get(`[data-cy="integerMinEva"]`).type('70909').should('have.value', '70909');

    cy.get(`[data-cy="integerMaxEva"]`).type('27').should('have.value', '27');

    cy.get(`[data-cy="longEva"]`).type('45010').should('have.value', '45010');

    cy.get(`[data-cy="longRequiredEva"]`).type('26220').should('have.value', '26220');

    cy.get(`[data-cy="longMinEva"]`).type('6737').should('have.value', '6737');

    cy.get(`[data-cy="longMaxEva"]`).type('100').should('have.value', '100');

    cy.get(`[data-cy="floatEva"]`).type('19891').should('have.value', '19891');

    cy.get(`[data-cy="floatRequiredEva"]`).type('52397').should('have.value', '52397');

    cy.get(`[data-cy="floatMinEva"]`).type('80378').should('have.value', '80378');

    cy.get(`[data-cy="floatMaxEva"]`).type('68').should('have.value', '68');

    cy.get(`[data-cy="doubleRequiredEva"]`).type('71582').should('have.value', '71582');

    cy.get(`[data-cy="doubleMinEva"]`).type('63699').should('have.value', '63699');

    cy.get(`[data-cy="doubleMaxEva"]`).type('94').should('have.value', '94');

    cy.get(`[data-cy="bigDecimalRequiredEva"]`).type('22024').should('have.value', '22024');

    cy.get(`[data-cy="bigDecimalMinEva"]`).type('75860').should('have.value', '75860');

    cy.get(`[data-cy="bigDecimalMaxEva"]`).type('18').should('have.value', '18');

    cy.get(`[data-cy="localDateEva"]`).type('2016-02-07').should('have.value', '2016-02-07');

    cy.get(`[data-cy="localDateRequiredEva"]`).type('2016-02-08').should('have.value', '2016-02-08');

    cy.get(`[data-cy="instantEva"]`).type('2016-02-08T10:31').invoke('val').should('equal', '2016-02-08T10:31');

    cy.get(`[data-cy="instanteRequiredEva"]`).type('2016-02-07T21:27').invoke('val').should('equal', '2016-02-07T21:27');

    cy.get(`[data-cy="zonedDateTimeEva"]`).type('2016-02-07T22:10').invoke('val').should('equal', '2016-02-07T22:10');

    cy.get(`[data-cy="zonedDateTimeRequiredEva"]`).type('2016-02-08T02:59').invoke('val').should('equal', '2016-02-08T02:59');

    cy.get(`[data-cy="durationEva"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="durationRequiredEva"]`).type('PT12S').should('have.value', 'PT12S');

    cy.get(`[data-cy="booleanEva"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanEva"]`).click().should('be.checked');

    cy.get(`[data-cy="booleanRequiredEva"]`).should('not.be.checked');
    cy.get(`[data-cy="booleanRequiredEva"]`).click().should('be.checked');

    cy.get(`[data-cy="enumEva"]`).select('ENUM_VALUE_3');

    cy.get(`[data-cy="enumRequiredEva"]`).select('ENUM_VALUE_3');

    cy.get(`[data-cy="uuidEva"]`)
      .type('d6c13c01-3d7d-4dd9-a880-190b0c30abda')
      .invoke('val')
      .should('match', new RegExp('d6c13c01-3d7d-4dd9-a880-190b0c30abda'));

    cy.get(`[data-cy="uuidRequiredEva"]`)
      .type('8d071047-15a9-45ed-a668-e94fc5eca759')
      .invoke('val')
      .should('match', new RegExp('8d071047-15a9-45ed-a668-e94fc5eca759'));

    cy.setFieldImageAsBytesOfEntity('byteImageEva', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageRequiredEva', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMinbytesEva', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteImageMaxbytesEva', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyEva', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyRequiredEva', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMinbytesEva', 'integration-test.png', 'image/png');

    cy.setFieldImageAsBytesOfEntity('byteAnyMaxbytesEva', 'integration-test.png', 'image/png');

    cy.get(`[data-cy="byteTextEva"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(`[data-cy="byteTextRequiredEva"]`)
      .type('../fake-data/blob/hipster.txt', { force: true })
      .invoke('val')
      .should('match', new RegExp('../fake-data/blob/hipster.txt'));

    cy.get(entityCreateSaveButtonSelector).click({ force: true });
    cy.scrollTo('top', { ensureScrollable: false });
    cy.get(entityCreateSaveButtonSelector).should('not.exist');
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequestAfterCreate');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequestAfterCreate');
    cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount + 1);
    cy.visit('/');
  });

  it('should delete last instance of FieldTestMapstructAndServiceClassEntity', () => {
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequest');
    cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities/*').as('dialogDeleteRequest');
    cy.intercept('DELETE', '/api/field-test-mapstruct-and-service-class-entities/*').as('deleteEntityRequest');
    cy.visit('/');
    cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
    cy.wait('@entitiesRequest').then(({ request, response }) => {
      startingEntitiesCount = response.body.length;
      if (startingEntitiesCount > 0) {
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount);
        cy.get(entityDeleteButtonSelector).last().click({ force: true });
        cy.wait('@dialogDeleteRequest');
        cy.getEntityDeleteDialogHeading('fieldTestMapstructAndServiceClassEntity').should('exist');
        cy.get(entityConfirmDeleteButtonSelector).click({ force: true });
        cy.wait('@deleteEntityRequest');
        cy.intercept('GET', '/api/field-test-mapstruct-and-service-class-entities*').as('entitiesRequestAfterDelete');
        cy.visit('/');
        cy.clickOnEntityMenuItem('field-test-mapstruct-and-service-class-entity');
        cy.wait('@entitiesRequestAfterDelete');
        cy.get(entityTableSelector).should('have.lengthOf', startingEntitiesCount - 1);
      }
      cy.visit('/');
    });
  });
});
