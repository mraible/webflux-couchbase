import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceClassPaginationAndDTO from './entity-with-service-class-pagination-and-dto';
import EntityWithServiceClassPaginationAndDTODetail from './entity-with-service-class-pagination-and-dto-detail';
import EntityWithServiceClassPaginationAndDTOUpdate from './entity-with-service-class-pagination-and-dto-update';
import EntityWithServiceClassPaginationAndDTODeleteDialog from './entity-with-service-class-pagination-and-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceClassPaginationAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceClassPaginationAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceClassPaginationAndDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceClassPaginationAndDTO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EntityWithServiceClassPaginationAndDTODeleteDialog} />
  </>
);

export default Routes;
