import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { setFileData, openFile, byteSize, Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './document-bank-account.reducer';
import { IDocumentBankAccount } from 'app/shared/model/document-bank-account.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDocumentBankAccountUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DocumentBankAccountUpdate = (props: IDocumentBankAccountUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { documentBankAccountEntity, loading, updating } = props;

  const { attachment, attachmentContentType, description } = documentBankAccountEntity;

  const handleClose = () => {
    props.history.push('/document-bank-account');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  const onBlobChange = (isAnImage, name) => event => {
    setFileData(event, (contentType, data) => props.setBlob(name, data, contentType), isAnImage);
  };

  const clearBlob = name => () => {
    props.setBlob(name, undefined, undefined);
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    values.lastOperationDate = convertDateTimeToServer(values.lastOperationDate);

    if (errors.length === 0) {
      const entity = {
        ...documentBankAccountEntity,
        ...values,
      };

      if (isNew) {
        props.createEntity(entity);
      } else {
        props.updateEntity(entity);
      }
    }
  };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="sampleCouchbaseNoCacheApp.documentBankAccount.home.createOrEditLabel" data-cy="DocumentBankAccountCreateUpdateHeading">
            <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.home.createOrEditLabel">
              Create or edit a DocumentBankAccount
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : documentBankAccountEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="document-bank-account-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="document-bank-account-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="document-bank-account-name">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.name">Name</Translate>
                </Label>
                <AvField
                  id="document-bank-account-name"
                  data-cy="name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bankNumberLabel" for="document-bank-account-bankNumber">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.bankNumber">Bank Number</Translate>
                </Label>
                <AvField
                  id="document-bank-account-bankNumber"
                  data-cy="bankNumber"
                  type="string"
                  className="form-control"
                  name="bankNumber"
                />
              </AvGroup>
              <AvGroup>
                <Label id="agencyNumberLabel" for="document-bank-account-agencyNumber">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.agencyNumber">Agency Number</Translate>
                </Label>
                <AvField
                  id="document-bank-account-agencyNumber"
                  data-cy="agencyNumber"
                  type="string"
                  className="form-control"
                  name="agencyNumber"
                />
              </AvGroup>
              <AvGroup>
                <Label id="lastOperationDurationLabel" for="document-bank-account-lastOperationDuration">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.lastOperationDuration">
                    Last Operation Duration
                  </Translate>
                </Label>
                <AvField
                  id="document-bank-account-lastOperationDuration"
                  data-cy="lastOperationDuration"
                  type="string"
                  className="form-control"
                  name="lastOperationDuration"
                />
              </AvGroup>
              <AvGroup>
                <Label id="meanOperationDurationLabel" for="document-bank-account-meanOperationDuration">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.meanOperationDuration">
                    Mean Operation Duration
                  </Translate>
                </Label>
                <AvField
                  id="document-bank-account-meanOperationDuration"
                  data-cy="meanOperationDuration"
                  type="string"
                  className="form-control"
                  name="meanOperationDuration"
                />
              </AvGroup>
              <AvGroup>
                <Label id="balanceLabel" for="document-bank-account-balance">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.balance">Balance</Translate>
                </Label>
                <AvField
                  id="document-bank-account-balance"
                  data-cy="balance"
                  type="text"
                  name="balance"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="openingDayLabel" for="document-bank-account-openingDay">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.openingDay">Opening Day</Translate>
                </Label>
                <AvField
                  id="document-bank-account-openingDay"
                  data-cy="openingDay"
                  type="date"
                  className="form-control"
                  name="openingDay"
                />
              </AvGroup>
              <AvGroup>
                <Label id="lastOperationDateLabel" for="document-bank-account-lastOperationDate">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.lastOperationDate">Last Operation Date</Translate>
                </Label>
                <AvInput
                  id="document-bank-account-lastOperationDate"
                  data-cy="lastOperationDate"
                  type="datetime-local"
                  className="form-control"
                  name="lastOperationDate"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.documentBankAccountEntity.lastOperationDate)}
                />
              </AvGroup>
              <AvGroup check>
                <Label id="activeLabel">
                  <AvInput id="document-bank-account-active" data-cy="active" type="checkbox" className="form-check-input" name="active" />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.active">Active</Translate>
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="accountTypeLabel" for="document-bank-account-accountType">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.accountType">Account Type</Translate>
                </Label>
                <AvInput
                  id="document-bank-account-accountType"
                  data-cy="accountType"
                  type="select"
                  className="form-control"
                  name="accountType"
                  value={(!isNew && documentBankAccountEntity.accountType) || 'CHECKING'}
                >
                  <option value="CHECKING">{translate('sampleCouchbaseNoCacheApp.BankAccountType.CHECKING')}</option>
                  <option value="SAVINGS">{translate('sampleCouchbaseNoCacheApp.BankAccountType.SAVINGS')}</option>
                  <option value="LOAN">{translate('sampleCouchbaseNoCacheApp.BankAccountType.LOAN')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="attachmentLabel" for="attachment">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.attachment">Attachment</Translate>
                  </Label>
                  <br />
                  {attachment ? (
                    <div>
                      {attachmentContentType ? (
                        <a onClick={openFile(attachmentContentType, attachment)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {attachmentContentType}, {byteSize(attachment)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('attachment')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input id="file_attachment" data-cy="attachment" type="file" onChange={onBlobChange(false, 'attachment')} />
                  <AvInput type="hidden" name="attachment" value={attachment} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <Label id="descriptionLabel" for="document-bank-account-description">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.documentBankAccount.description">Description</Translate>
                </Label>
                <AvInput id="document-bank-account-description" data-cy="description" type="textarea" name="description" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/document-bank-account" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </AvForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (storeState: IRootState) => ({
  documentBankAccountEntity: storeState.documentBankAccount.entity,
  loading: storeState.documentBankAccount.loading,
  updating: storeState.documentBankAccount.updating,
  updateSuccess: storeState.documentBankAccount.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  setBlob,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DocumentBankAccountUpdate);
