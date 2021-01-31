import React from 'react';
import { Switch } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import DocumentBankAccount from './document-bank-account';
import FieldTestEntity from './field-test-entity';
import FieldTestInfiniteScrollEntity from './field-test-infinite-scroll-entity';
import FieldTestMapstructAndServiceClassEntity from './field-test-mapstruct-and-service-class-entity';
import FieldTestPaginationEntity from './field-test-pagination-entity';
import FieldTestServiceClassAndJpaFilteringEntity from './field-test-service-class-and-jpa-filtering-entity';
import FieldTestServiceImplEntity from './field-test-service-impl-entity';
import EntityWithDTO from './entity-with-dto';
import EntityWithServiceClassAndPagination from './entity-with-service-class-and-pagination';
import EntityWithServiceImplAndPagination from './entity-with-service-impl-and-pagination';
import EntityWithServiceImplAndDTO from './entity-with-service-impl-and-dto';
import EntityWithPaginationAndDTO from './entity-with-pagination-and-dto';
import EntityWithServiceClassPaginationAndDTO from './entity-with-service-class-pagination-and-dto';
import EntityWithServiceImplPaginationAndDTO from './entity-with-service-impl-pagination-and-dto';
import Division from './test-root/division';
import Place from './test-root/place';
/* jhipster-needle-add-route-import - JHipster will add routes here */

const Routes = ({ match }) => (
  <div>
    <Switch>
      {/* prettier-ignore */}
      <ErrorBoundaryRoute path={`${match.url}document-bank-account`} component={DocumentBankAccount} />
      <ErrorBoundaryRoute path={`${match.url}field-test-entity`} component={FieldTestEntity} />
      <ErrorBoundaryRoute path={`${match.url}field-test-infinite-scroll-entity`} component={FieldTestInfiniteScrollEntity} />
      <ErrorBoundaryRoute
        path={`${match.url}field-test-mapstruct-and-service-class-entity`}
        component={FieldTestMapstructAndServiceClassEntity}
      />
      <ErrorBoundaryRoute path={`${match.url}field-test-pagination-entity`} component={FieldTestPaginationEntity} />
      <ErrorBoundaryRoute
        path={`${match.url}field-test-service-class-and-jpa-filtering-entity`}
        component={FieldTestServiceClassAndJpaFilteringEntity}
      />
      <ErrorBoundaryRoute path={`${match.url}field-test-service-impl-entity`} component={FieldTestServiceImplEntity} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-dto`} component={EntityWithDTO} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-class-and-pagination`} component={EntityWithServiceClassAndPagination} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-impl-and-pagination`} component={EntityWithServiceImplAndPagination} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-service-impl-and-dto`} component={EntityWithServiceImplAndDTO} />
      <ErrorBoundaryRoute path={`${match.url}entity-with-pagination-and-dto`} component={EntityWithPaginationAndDTO} />
      <ErrorBoundaryRoute
        path={`${match.url}entity-with-service-class-pagination-and-dto`}
        component={EntityWithServiceClassPaginationAndDTO}
      />
      <ErrorBoundaryRoute
        path={`${match.url}entity-with-service-impl-pagination-and-dto`}
        component={EntityWithServiceImplPaginationAndDTO}
      />
      <ErrorBoundaryRoute path={`${match.url}division`} component={Division} />
      <ErrorBoundaryRoute path={`${match.url}place`} component={Place} />
      {/* jhipster-needle-add-route-path - JHipster will add routes here */}
    </Switch>
  </div>
);

export default Routes;
