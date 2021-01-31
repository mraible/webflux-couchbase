import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import Division from './division';
import DivisionDetail from './division-detail';
import DivisionUpdate from './division-update';
import DivisionDeleteDialog from './division-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DivisionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DivisionUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DivisionDetail} />
      <ErrorBoundaryRoute path={match.url} component={Division} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DivisionDeleteDialog} />
  </>
);

export default Routes;
