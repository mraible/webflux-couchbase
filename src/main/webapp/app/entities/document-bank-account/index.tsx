import React from 'react';
import { Switch } from 'react-router-dom';

import ErrorBoundaryRoute from 'app/shared/error/error-boundary-route';

import DocumentBankAccount from './document-bank-account';
import DocumentBankAccountDetail from './document-bank-account-detail';
import DocumentBankAccountUpdate from './document-bank-account-update';
import DocumentBankAccountDeleteDialog from './document-bank-account-delete-dialog';

const Routes = ({ match }) => (
  <>
    <Switch>
      <ErrorBoundaryRoute exact path={`${match.url}/new`} component={DocumentBankAccountUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id/edit`} component={DocumentBankAccountUpdate} />
      <ErrorBoundaryRoute exact path={`${match.url}/:id`} component={DocumentBankAccountDetail} />
      <ErrorBoundaryRoute path={match.url} component={DocumentBankAccount} />
    </Switch>
    <ErrorBoundaryRoute exact path={`${match.url}/:id/delete`} component={DocumentBankAccountDeleteDialog} />
  </>
);

export default Routes;
