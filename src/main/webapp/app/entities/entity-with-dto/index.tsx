import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithDTO from './entity-with-dto';
import EntityWithDTODetail from './entity-with-dto-detail';
import EntityWithDTOUpdate from './entity-with-dto-update';
import EntityWithDTODeleteDialog from './entity-with-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithDTO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EntityWithDTODeleteDialog} />
  </>
);

export default Routes;
