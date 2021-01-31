import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestServiceClassAndJpaFilteringEntity from './field-test-service-class-and-jpa-filtering-entity';
import FieldTestServiceClassAndJpaFilteringEntityDetail from './field-test-service-class-and-jpa-filtering-entity-detail';
import FieldTestServiceClassAndJpaFilteringEntityUpdate from './field-test-service-class-and-jpa-filtering-entity-update';
import FieldTestServiceClassAndJpaFilteringEntityDeleteDialog from './field-test-service-class-and-jpa-filtering-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestServiceClassAndJpaFilteringEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestServiceClassAndJpaFilteringEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestServiceClassAndJpaFilteringEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestServiceClassAndJpaFilteringEntity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FieldTestServiceClassAndJpaFilteringEntityDeleteDialog} />
  </>
);

export default Routes;
