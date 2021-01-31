import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import EntityWithServiceImplAndDTO from './entity-with-service-impl-and-dto';
import EntityWithServiceImplAndDTODetail from './entity-with-service-impl-and-dto-detail';
import EntityWithServiceImplAndDTOUpdate from './entity-with-service-impl-and-dto-update';
import EntityWithServiceImplAndDTODeleteDialog from './entity-with-service-impl-and-dto-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={EntityWithServiceImplAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={EntityWithServiceImplAndDTOUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={EntityWithServiceImplAndDTODetail} />
      <ErrorBoundaryRoute path={match.url} component={EntityWithServiceImplAndDTO} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={EntityWithServiceImplAndDTODeleteDialog} />
  </>
);

export default Routes;
