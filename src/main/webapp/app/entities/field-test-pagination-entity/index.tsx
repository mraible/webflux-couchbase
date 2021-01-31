import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestPaginationEntity from './field-test-pagination-entity';
import FieldTestPaginationEntityDetail from './field-test-pagination-entity-detail';
import FieldTestPaginationEntityUpdate from './field-test-pagination-entity-update';
import FieldTestPaginationEntityDeleteDialog from './field-test-pagination-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestPaginationEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestPaginationEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestPaginationEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestPaginationEntity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FieldTestPaginationEntityDeleteDialog} />
  </>
);

export default Routes;
