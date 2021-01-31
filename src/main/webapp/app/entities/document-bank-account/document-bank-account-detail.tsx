import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './document-bank-account.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDocumentBankAccountDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DocumentBankAccountDetail = (props: IDocumentBankAccountDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { documentBankAccountEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="documentBankAccountDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.detail.title">DocumentBankAccount</Translate> [
          <strong>{documentBankAccountEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.name">Name</Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.name}</dd>
          <dt>
            <span id="bankNumber">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.bankNumber">Bank Number</Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.bankNumber}</dd>
          <dt>
            <span id="agencyNumber">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.agencyNumber">Agency Number</Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.agencyNumber}</dd>
          <dt>
            <span id="lastOperationDuration">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.lastOperationDuration">
                Last Operation Duration
              </Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.lastOperationDuration}</dd>
          <dt>
            <span id="meanOperationDuration">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.meanOperationDuration">
                Mean Operation Duration
              </Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.meanOperationDuration}</dd>
          <dt>
            <span id="balance">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.balance">Balance</Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.balance}</dd>
          <dt>
            <span id="openingDay">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.openingDay">Opening Day</Translate>
            </span>
          </dt>
          <dd>
            {documentBankAccountEntity.openingDay ? (
              <TextFormat value={documentBankAccountEntity.openingDay} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="lastOperationDate">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.lastOperationDate">Last Operation Date</Translate>
            </span>
          </dt>
          <dd>
            {documentBankAccountEntity.lastOperationDate ? (
              <TextFormat value={documentBankAccountEntity.lastOperationDate} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="active">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.active">Active</Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.active ? 'true' : 'false'}</dd>
          <dt>
            <span id="accountType">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.accountType">Account Type</Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.accountType}</dd>
          <dt>
            <span id="attachment">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.attachment">Attachment</Translate>
            </span>
          </dt>
          <dd>
            {documentBankAccountEntity.attachment ? (
              <div>
                {documentBankAccountEntity.attachmentContentType ? (
                  <a onClick={openFile(documentBankAccountEntity.attachmentContentType, documentBankAccountEntity.attachment)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {documentBankAccountEntity.attachmentContentType}, {byteSize(documentBankAccountEntity.attachment)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="description">
              <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.description">Description</Translate>
            </span>
          </dt>
          <dd>{documentBankAccountEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/document-bank-account" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/document-bank-account/${documentBankAccountEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ documentBankAccount }: IRootState) => ({
  documentBankAccountEntity: documentBankAccount.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DocumentBankAccountDetail);
