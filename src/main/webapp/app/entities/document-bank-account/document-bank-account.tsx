import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './document-bank-account.reducer';
import { IDocumentBankAccount } from 'app/shared/model/document-bank-account.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDocumentBankAccountProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const DocumentBankAccount = (props: IDocumentBankAccountProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { documentBankAccountList, match, loading } = props;
  return (
    <div>
      <h2 id="document-bank-account-heading" data-cy="DocumentBankAccountHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.home.title">Document Bank Accounts</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.home.createLabel">
              Create new Document Bank Account
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {documentBankAccountList && documentBankAccountList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.bankNumber">Bank Number</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.agencyNumber">Agency Number</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.lastOperationDuration">
                    Last Operation Duration
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.meanOperationDuration">
                    Mean Operation Duration
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.balance">Balance</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.openingDay">Opening Day</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.lastOperationDate">Last Operation Date</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.active">Active</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.accountType">Account Type</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.attachment">Attachment</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.description">Description</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {documentBankAccountList.map((documentBankAccount, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${documentBankAccount.id}`} color="link" size="sm">
                      {documentBankAccount.id}
                    </Button>
                  </td>
                  <td>{documentBankAccount.name}</td>
                  <td>{documentBankAccount.bankNumber}</td>
                  <td>{documentBankAccount.agencyNumber}</td>
                  <td>{documentBankAccount.lastOperationDuration}</td>
                  <td>{documentBankAccount.meanOperationDuration}</td>
                  <td>{documentBankAccount.balance}</td>
                  <td>
                    {documentBankAccount.openingDay ? (
                      <TextFormat type="date" value={documentBankAccount.openingDay} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {documentBankAccount.lastOperationDate ? (
                      <TextFormat type="date" value={documentBankAccount.lastOperationDate} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{documentBankAccount.active ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`sampleCouchbaseNoCacheApp.BankAccountType.${documentBankAccount.accountType}`} />
                  </td>
                  <td>
                    {documentBankAccount.attachment ? (
                      <div>
                        {documentBankAccount.attachmentContentType ? (
                          <a onClick={openFile(documentBankAccount.attachmentContentType, documentBankAccount.attachment)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {documentBankAccount.attachmentContentType}, {byteSize(documentBankAccount.attachment)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{documentBankAccount.description}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${documentBankAccount.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${documentBankAccount.id}/edit`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${documentBankAccount.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.home.notFound">
                No Document Bank Accounts found
              </Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ documentBankAccount }: IRootState) => ({
  documentBankAccountList: documentBankAccount.entities,
  loading: documentBankAccount.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DocumentBankAccount);
