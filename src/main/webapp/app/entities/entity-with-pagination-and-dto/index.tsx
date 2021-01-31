import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithPaginationAndDTO from './entity-with-pagination-and-dto';
import EntityWithPaginationAndDTODetail from './entity-with-pagination-and-dto-detail';
import EntityWithPaginationAndDTOUpdate from './entity-with-pagination-and-dto-update';
import EntityWithPaginationAndDTODeleteDialog from './entity-with-pagination-and-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithPaginationAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithPaginationAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithPaginationAndDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithPaginationAndDTO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EntityWithPaginationAndDTODeleteDialog} />
  </>
);

export default Routes;
