import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestEntity from './field-test-entity';
import FieldTestEntityDetail from './field-test-entity-detail';
import FieldTestEntityUpdate from './field-test-entity-update';
import FieldTestEntityDeleteDialog from './field-test-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestEntity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FieldTestEntityDeleteDialog} />
  </>
);

export default Routes;
