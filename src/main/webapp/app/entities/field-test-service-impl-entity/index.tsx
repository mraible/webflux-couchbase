import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestServiceImplEntity from './field-test-service-impl-entity';
import FieldTestServiceImplEntityDetail from './field-test-service-impl-entity-detail';
import FieldTestServiceImplEntityUpdate from './field-test-service-impl-entity-update';
import FieldTestServiceImplEntityDeleteDialog from './field-test-service-impl-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestServiceImplEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestServiceImplEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestServiceImplEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestServiceImplEntity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FieldTestServiceImplEntityDeleteDialog} />
  </>
);

export default Routes;
