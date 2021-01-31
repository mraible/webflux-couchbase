import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceImplPaginationAndDTO from './entity-with-service-impl-pagination-and-dto';
import EntityWithServiceImplPaginationAndDTODetail from './entity-with-service-impl-pagination-and-dto-detail';
import EntityWithServiceImplPaginationAndDTOUpdate from './entity-with-service-impl-pagination-and-dto-update';
import EntityWithServiceImplPaginationAndDTODeleteDialog from './entity-with-service-impl-pagination-and-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceImplPaginationAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceImplPaginationAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceImplPaginationAndDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceImplPaginationAndDTO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EntityWithServiceImplPaginationAndDTODeleteDialog} />
  </>
);

export default Routes;
