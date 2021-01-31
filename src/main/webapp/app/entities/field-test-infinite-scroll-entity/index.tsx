import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestInfiniteScrollEntity from './field-test-infinite-scroll-entity';
import FieldTestInfiniteScrollEntityDetail from './field-test-infinite-scroll-entity-detail';
import FieldTestInfiniteScrollEntityUpdate from './field-test-infinite-scroll-entity-update';
import FieldTestInfiniteScrollEntityDeleteDialog from './field-test-infinite-scroll-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestInfiniteScrollEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestInfiniteScrollEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestInfiniteScrollEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestInfiniteScrollEntity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FieldTestInfiniteScrollEntityDeleteDialog} />
  </>
);

export default Routes;
