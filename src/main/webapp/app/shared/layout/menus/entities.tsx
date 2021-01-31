import React from 'react';
import MenuItem from 'app/shared/layout/menus/menu-item';
import { Translate, translate } from 'react-jhipster';
import { NavDropdown } from './menu-components';

export const EntitiesMenu = props => (
  <NavDropdown
    icon="th-list"
    name={translate('global.menu.entities.main')}
    id="entity-menu"
    data-cy="entity"
    style={{ maxHeight: '80vh', overflow: 'auto' }}
  >
    <MenuItem icon="asterisk" to="/document-bank-account">
      <Translate contentKey="global.menu.entities.documentBankAccount" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-entity">
      <Translate contentKey="global.menu.entities.fieldTestEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-infinite-scroll-entity">
      <Translate contentKey="global.menu.entities.fieldTestInfiniteScrollEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-mapstruct-and-service-class-entity">
      <Translate contentKey="global.menu.entities.fieldTestMapstructAndServiceClassEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-pagination-entity">
      <Translate contentKey="global.menu.entities.fieldTestPaginationEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-service-class-and-jpa-filtering-entity">
      <Translate contentKey="global.menu.entities.fieldTestServiceClassAndJpaFilteringEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/field-test-service-impl-entity">
      <Translate contentKey="global.menu.entities.fieldTestServiceImplEntity" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-dto">
      <Translate contentKey="global.menu.entities.entityWithDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-class-and-pagination">
      <Translate contentKey="global.menu.entities.entityWithServiceClassAndPagination" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-impl-and-pagination">
      <Translate contentKey="global.menu.entities.entityWithServiceImplAndPagination" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-impl-and-dto">
      <Translate contentKey="global.menu.entities.entityWithServiceImplAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-pagination-and-dto">
      <Translate contentKey="global.menu.entities.entityWithPaginationAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-class-pagination-and-dto">
      <Translate contentKey="global.menu.entities.entityWithServiceClassPaginationAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/entity-with-service-impl-pagination-and-dto">
      <Translate contentKey="global.menu.entities.entityWithServiceImplPaginationAndDto" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/division">
      <Translate contentKey="global.menu.entities.testRootDivision" />
    </MenuItem>
    <MenuItem icon="asterisk" to="/place">
      <Translate contentKey="global.menu.entities.testRootPlace" />
    </MenuItem>
    {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
  </NavDropdown>
);
