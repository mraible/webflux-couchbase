import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceImplAndPagination from './entity-with-service-impl-and-pagination';
import EntityWithServiceImplAndPaginationDetail from './entity-with-service-impl-and-pagination-detail';
import EntityWithServiceImplAndPaginationUpdate from './entity-with-service-impl-and-pagination-update';
import EntityWithServiceImplAndPaginationDeleteDialog from './entity-with-service-impl-and-pagination-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceImplAndPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceImplAndPaginationUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceImplAndPaginationDetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceImplAndPagination} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EntityWithServiceImplAndPaginationDeleteDialog} />
  </>
);

export default Routes;
