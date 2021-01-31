import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import FieldTestMapstructAndServiceClassEntity from './field-test-mapstruct-and-service-class-entity';
import FieldTestMapstructAndServiceClassEntityDetail from './field-test-mapstruct-and-service-class-entity-detail';
import FieldTestMapstructAndServiceClassEntityUpdate from './field-test-mapstruct-and-service-class-entity-update';
import FieldTestMapstructAndServiceClassEntityDeleteDialog from './field-test-mapstruct-and-service-class-entity-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={FieldTestMapstructAndServiceClassEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={FieldTestMapstructAndServiceClassEntityUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={FieldTestMapstructAndServiceClassEntityDetail} />
      <ErrorBoundaryRoute path={match.url} component={FieldTestMapstructAndServiceClassEntity} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={FieldTestMapstructAndServiceClassEntityDeleteDialog} />
  </>
);

export default Routes;
