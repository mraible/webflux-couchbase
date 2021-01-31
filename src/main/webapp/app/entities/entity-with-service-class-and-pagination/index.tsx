import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceClassAndPagination from './entity-with-service-class-and-pagination';
import EntityWithServiceClassAndPaginationDetail from './entity-with-service-class-and-pagination-detail';
import EntityWithServiceClassAndPaginationUpdate from './entity-with-service-class-and-pagination-update';
import EntityWithServiceClassAndPaginationDeleteDialog from './entity-with-service-class-and-pagination-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceClassAndPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceClassAndPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceClassAndPaginationDetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceClassAndPagination} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EntityWithServiceClassAndPaginationDeleteDialog} />
  </>
);

export default Routes;
