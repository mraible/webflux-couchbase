import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { setFileData, openFile, byteSize, Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-pagination-entity.reducer';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestPaginationEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestPaginationEntityUpdate = (props: IFieldTestPaginationEntityUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { fieldTestPaginationEntityEntity, loading, updating } = props;

  const {
    byteImageAlice,
    byteImageAliceContentType,
    byteImageRequiredAlice,
    byteImageRequiredAliceContentType,
    byteImageMinbytesAlice,
    byteImageMinbytesAliceContentType,
    byteImageMaxbytesAlice,
    byteImageMaxbytesAliceContentType,
    byteAnyAlice,
    byteAnyAliceContentType,
    byteAnyRequiredAlice,
    byteAnyRequiredAliceContentType,
    byteAnyMinbytesAlice,
    byteAnyMinbytesAliceContentType,
    byteAnyMaxbytesAlice,
    byteAnyMaxbytesAliceContentType,
    byteTextAlice,
    byteTextRequiredAlice,
  } = fieldTestPaginationEntityEntity;

  const handleClose = () => {
    props.history.push('/field-test-pagination-entity' + props.location.search);
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
    values.instantAlice = convertDateTimeToServer(values.instantAlice);
    values.instanteRequiredAlice = convertDateTimeToServer(values.instanteRequiredAlice);
    values.zonedDateTimeAlice = convertDateTimeToServer(values.zonedDateTimeAlice);
    values.zonedDateTimeRequiredAlice = convertDateTimeToServer(values.zonedDateTimeRequiredAlice);

    if (errors.length === 0) {
      const entity = {
        ...fieldTestPaginationEntityEntity,
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
          <h2
            id="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.home.createOrEditLabel"
            data-cy="FieldTestPaginationEntityCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.home.createOrEditLabel">
              Create or edit a FieldTestPaginationEntity
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : fieldTestPaginationEntityEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="field-test-pagination-entity-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="field-test-pagination-entity-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="stringAliceLabel" for="field-test-pagination-entity-stringAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringAlice">String Alice</Translate>
                </Label>
                <AvField id="field-test-pagination-entity-stringAlice" data-cy="stringAlice" type="text" name="stringAlice" />
              </AvGroup>
              <AvGroup>
                <Label id="stringRequiredAliceLabel" for="field-test-pagination-entity-stringRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringRequiredAlice">
                    String Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-stringRequiredAlice"
                  data-cy="stringRequiredAlice"
                  type="text"
                  name="stringRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMinlengthAliceLabel" for="field-test-pagination-entity-stringMinlengthAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringMinlengthAlice">
                    String Minlength Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-stringMinlengthAlice"
                  data-cy="stringMinlengthAlice"
                  type="text"
                  name="stringMinlengthAlice"
                  validate={{
                    minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMaxlengthAliceLabel" for="field-test-pagination-entity-stringMaxlengthAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringMaxlengthAlice">
                    String Maxlength Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-stringMaxlengthAlice"
                  data-cy="stringMaxlengthAlice"
                  type="text"
                  name="stringMaxlengthAlice"
                  validate={{
                    maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringPatternAliceLabel" for="field-test-pagination-entity-stringPatternAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringPatternAlice">
                    String Pattern Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-stringPatternAlice"
                  data-cy="stringPatternAlice"
                  type="text"
                  name="stringPatternAlice"
                  validate={{
                    pattern: {
                      value: '^[a-zA-Z0-9]*$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerAliceLabel" for="field-test-pagination-entity-integerAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerAlice">Integer Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-integerAlice"
                  data-cy="integerAlice"
                  type="string"
                  className="form-control"
                  name="integerAlice"
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerRequiredAliceLabel" for="field-test-pagination-entity-integerRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerRequiredAlice">
                    Integer Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-integerRequiredAlice"
                  data-cy="integerRequiredAlice"
                  type="string"
                  className="form-control"
                  name="integerRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMinAliceLabel" for="field-test-pagination-entity-integerMinAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerMinAlice">Integer Min Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-integerMinAlice"
                  data-cy="integerMinAlice"
                  type="string"
                  className="form-control"
                  name="integerMinAlice"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMaxAliceLabel" for="field-test-pagination-entity-integerMaxAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerMaxAlice">Integer Max Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-integerMaxAlice"
                  data-cy="integerMaxAlice"
                  type="string"
                  className="form-control"
                  name="integerMaxAlice"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longAliceLabel" for="field-test-pagination-entity-longAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longAlice">Long Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-longAlice"
                  data-cy="longAlice"
                  type="string"
                  className="form-control"
                  name="longAlice"
                />
              </AvGroup>
              <AvGroup>
                <Label id="longRequiredAliceLabel" for="field-test-pagination-entity-longRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longRequiredAlice">
                    Long Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-longRequiredAlice"
                  data-cy="longRequiredAlice"
                  type="string"
                  className="form-control"
                  name="longRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMinAliceLabel" for="field-test-pagination-entity-longMinAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longMinAlice">Long Min Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-longMinAlice"
                  data-cy="longMinAlice"
                  type="string"
                  className="form-control"
                  name="longMinAlice"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMaxAliceLabel" for="field-test-pagination-entity-longMaxAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longMaxAlice">Long Max Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-longMaxAlice"
                  data-cy="longMaxAlice"
                  type="string"
                  className="form-control"
                  name="longMaxAlice"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatAliceLabel" for="field-test-pagination-entity-floatAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatAlice">Float Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-floatAlice"
                  data-cy="floatAlice"
                  type="string"
                  className="form-control"
                  name="floatAlice"
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatRequiredAliceLabel" for="field-test-pagination-entity-floatRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatRequiredAlice">
                    Float Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-floatRequiredAlice"
                  data-cy="floatRequiredAlice"
                  type="string"
                  className="form-control"
                  name="floatRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMinAliceLabel" for="field-test-pagination-entity-floatMinAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatMinAlice">Float Min Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-floatMinAlice"
                  data-cy="floatMinAlice"
                  type="string"
                  className="form-control"
                  name="floatMinAlice"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMaxAliceLabel" for="field-test-pagination-entity-floatMaxAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatMaxAlice">Float Max Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-floatMaxAlice"
                  data-cy="floatMaxAlice"
                  type="string"
                  className="form-control"
                  name="floatMaxAlice"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleRequiredAliceLabel" for="field-test-pagination-entity-doubleRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleRequiredAlice">
                    Double Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-doubleRequiredAlice"
                  data-cy="doubleRequiredAlice"
                  type="string"
                  className="form-control"
                  name="doubleRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMinAliceLabel" for="field-test-pagination-entity-doubleMinAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleMinAlice">Double Min Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-doubleMinAlice"
                  data-cy="doubleMinAlice"
                  type="string"
                  className="form-control"
                  name="doubleMinAlice"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMaxAliceLabel" for="field-test-pagination-entity-doubleMaxAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleMaxAlice">Double Max Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-doubleMaxAlice"
                  data-cy="doubleMaxAlice"
                  type="string"
                  className="form-control"
                  name="doubleMaxAlice"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalRequiredAliceLabel" for="field-test-pagination-entity-bigDecimalRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalRequiredAlice">
                    Big Decimal Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-bigDecimalRequiredAlice"
                  data-cy="bigDecimalRequiredAlice"
                  type="text"
                  name="bigDecimalRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMinAliceLabel" for="field-test-pagination-entity-bigDecimalMinAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalMinAlice">
                    Big Decimal Min Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-bigDecimalMinAlice"
                  data-cy="bigDecimalMinAlice"
                  type="text"
                  name="bigDecimalMinAlice"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMaxAliceLabel" for="field-test-pagination-entity-bigDecimalMaxAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalMaxAlice">
                    Big Decimal Max Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-bigDecimalMaxAlice"
                  data-cy="bigDecimalMaxAlice"
                  type="text"
                  name="bigDecimalMaxAlice"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateAliceLabel" for="field-test-pagination-entity-localDateAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.localDateAlice">Local Date Alice</Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-localDateAlice"
                  data-cy="localDateAlice"
                  type="date"
                  className="form-control"
                  name="localDateAlice"
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateRequiredAliceLabel" for="field-test-pagination-entity-localDateRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.localDateRequiredAlice">
                    Local Date Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-localDateRequiredAlice"
                  data-cy="localDateRequiredAlice"
                  type="date"
                  className="form-control"
                  name="localDateRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instantAliceLabel" for="field-test-pagination-entity-instantAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.instantAlice">Instant Alice</Translate>
                </Label>
                <AvInput
                  id="field-test-pagination-entity-instantAlice"
                  data-cy="instantAlice"
                  type="datetime-local"
                  className="form-control"
                  name="instantAlice"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestPaginationEntityEntity.instantAlice)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instanteRequiredAliceLabel" for="field-test-pagination-entity-instanteRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.instanteRequiredAlice">
                    Instante Required Alice
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-pagination-entity-instanteRequiredAlice"
                  data-cy="instanteRequiredAlice"
                  type="datetime-local"
                  className="form-control"
                  name="instanteRequiredAlice"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestPaginationEntityEntity.instanteRequiredAlice)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeAliceLabel" for="field-test-pagination-entity-zonedDateTimeAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.zonedDateTimeAlice">
                    Zoned Date Time Alice
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-pagination-entity-zonedDateTimeAlice"
                  data-cy="zonedDateTimeAlice"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeAlice"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestPaginationEntityEntity.zonedDateTimeAlice)
                  }
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeRequiredAliceLabel" for="field-test-pagination-entity-zonedDateTimeRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.zonedDateTimeRequiredAlice">
                    Zoned Date Time Required Alice
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-pagination-entity-zonedDateTimeRequiredAlice"
                  data-cy="zonedDateTimeRequiredAlice"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeRequiredAlice"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestPaginationEntityEntity.zonedDateTimeRequiredAlice)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="durationAliceLabel" for="field-test-pagination-entity-durationAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.durationAlice">Duration Alice</Translate>
                </Label>
                <AvField id="field-test-pagination-entity-durationAlice" data-cy="durationAlice" type="text" name="durationAlice" />
              </AvGroup>
              <AvGroup>
                <Label id="durationRequiredAliceLabel" for="field-test-pagination-entity-durationRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.durationRequiredAlice">
                    Duration Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-durationRequiredAlice"
                  data-cy="durationRequiredAlice"
                  type="text"
                  name="durationRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup check>
                <Label id="booleanAliceLabel">
                  <AvInput
                    id="field-test-pagination-entity-booleanAlice"
                    data-cy="booleanAlice"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanAlice"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.booleanAlice">Boolean Alice</Translate>
                </Label>
              </AvGroup>
              <AvGroup check>
                <Label id="booleanRequiredAliceLabel">
                  <AvInput
                    id="field-test-pagination-entity-booleanRequiredAlice"
                    data-cy="booleanRequiredAlice"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanRequiredAlice"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.booleanRequiredAlice">
                    Boolean Required Alice
                  </Translate>
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="enumAliceLabel" for="field-test-pagination-entity-enumAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.enumAlice">Enum Alice</Translate>
                </Label>
                <AvInput
                  id="field-test-pagination-entity-enumAlice"
                  data-cy="enumAlice"
                  type="select"
                  className="form-control"
                  name="enumAlice"
                  value={(!isNew && fieldTestPaginationEntityEntity.enumAlice) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="enumRequiredAliceLabel" for="field-test-pagination-entity-enumRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.enumRequiredAlice">
                    Enum Required Alice
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-pagination-entity-enumRequiredAlice"
                  data-cy="enumRequiredAlice"
                  type="select"
                  className="form-control"
                  name="enumRequiredAlice"
                  value={(!isNew && fieldTestPaginationEntityEntity.enumRequiredAlice) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="uuidAliceLabel" for="field-test-pagination-entity-uuidAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.uuidAlice">Uuid Alice</Translate>
                </Label>
                <AvField id="field-test-pagination-entity-uuidAlice" data-cy="uuidAlice" type="text" name="uuidAlice" />
              </AvGroup>
              <AvGroup>
                <Label id="uuidRequiredAliceLabel" for="field-test-pagination-entity-uuidRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.uuidRequiredAlice">
                    Uuid Required Alice
                  </Translate>
                </Label>
                <AvField
                  id="field-test-pagination-entity-uuidRequiredAlice"
                  data-cy="uuidRequiredAlice"
                  type="text"
                  name="uuidRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageAliceLabel" for="byteImageAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageAlice">Byte Image Alice</Translate>
                  </Label>
                  <br />
                  {byteImageAlice ? (
                    <div>
                      {byteImageAliceContentType ? (
                        <a onClick={openFile(byteImageAliceContentType, byteImageAlice)}>
                          <img src={`data:${byteImageAliceContentType};base64,${byteImageAlice}`} style={{ maxHeight: '100px' }} />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageAliceContentType}, {byteSize(byteImageAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageAlice"
                    data-cy="byteImageAlice"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageAlice')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageAlice" value={byteImageAlice} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageRequiredAliceLabel" for="byteImageRequiredAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageRequiredAlice">
                      Byte Image Required Alice
                    </Translate>
                  </Label>
                  <br />
                  {byteImageRequiredAlice ? (
                    <div>
                      {byteImageRequiredAliceContentType ? (
                        <a onClick={openFile(byteImageRequiredAliceContentType, byteImageRequiredAlice)}>
                          <img
                            src={`data:${byteImageRequiredAliceContentType};base64,${byteImageRequiredAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageRequiredAliceContentType}, {byteSize(byteImageRequiredAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageRequiredAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageRequiredAlice"
                    data-cy="byteImageRequiredAlice"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageRequiredAlice')}
                    accept="image/*"
                  />
                  <AvInput
                    type="hidden"
                    name="byteImageRequiredAlice"
                    value={byteImageRequiredAlice}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMinbytesAliceLabel" for="byteImageMinbytesAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageMinbytesAlice">
                      Byte Image Minbytes Alice
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMinbytesAlice ? (
                    <div>
                      {byteImageMinbytesAliceContentType ? (
                        <a onClick={openFile(byteImageMinbytesAliceContentType, byteImageMinbytesAlice)}>
                          <img
                            src={`data:${byteImageMinbytesAliceContentType};base64,${byteImageMinbytesAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMinbytesAliceContentType}, {byteSize(byteImageMinbytesAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMinbytesAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMinbytesAlice"
                    data-cy="byteImageMinbytesAlice"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMinbytesAlice')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMinbytesAlice" value={byteImageMinbytesAlice} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMaxbytesAliceLabel" for="byteImageMaxbytesAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageMaxbytesAlice">
                      Byte Image Maxbytes Alice
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMaxbytesAlice ? (
                    <div>
                      {byteImageMaxbytesAliceContentType ? (
                        <a onClick={openFile(byteImageMaxbytesAliceContentType, byteImageMaxbytesAlice)}>
                          <img
                            src={`data:${byteImageMaxbytesAliceContentType};base64,${byteImageMaxbytesAlice}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMaxbytesAliceContentType}, {byteSize(byteImageMaxbytesAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMaxbytesAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMaxbytesAlice"
                    data-cy="byteImageMaxbytesAlice"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMaxbytesAlice')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMaxbytesAlice" value={byteImageMaxbytesAlice} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyAliceLabel" for="byteAnyAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyAlice">Byte Any Alice</Translate>
                  </Label>
                  <br />
                  {byteAnyAlice ? (
                    <div>
                      {byteAnyAliceContentType ? (
                        <a onClick={openFile(byteAnyAliceContentType, byteAnyAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyAliceContentType}, {byteSize(byteAnyAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input id="file_byteAnyAlice" data-cy="byteAnyAlice" type="file" onChange={onBlobChange(false, 'byteAnyAlice')} />
                  <AvInput type="hidden" name="byteAnyAlice" value={byteAnyAlice} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyRequiredAliceLabel" for="byteAnyRequiredAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyRequiredAlice">
                      Byte Any Required Alice
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyRequiredAlice ? (
                    <div>
                      {byteAnyRequiredAliceContentType ? (
                        <a onClick={openFile(byteAnyRequiredAliceContentType, byteAnyRequiredAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyRequiredAliceContentType}, {byteSize(byteAnyRequiredAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyRequiredAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyRequiredAlice"
                    data-cy="byteAnyRequiredAlice"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyRequiredAlice')}
                  />
                  <AvInput
                    type="hidden"
                    name="byteAnyRequiredAlice"
                    value={byteAnyRequiredAlice}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMinbytesAliceLabel" for="byteAnyMinbytesAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyMinbytesAlice">
                      Byte Any Minbytes Alice
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMinbytesAlice ? (
                    <div>
                      {byteAnyMinbytesAliceContentType ? (
                        <a onClick={openFile(byteAnyMinbytesAliceContentType, byteAnyMinbytesAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMinbytesAliceContentType}, {byteSize(byteAnyMinbytesAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMinbytesAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMinbytesAlice"
                    data-cy="byteAnyMinbytesAlice"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMinbytesAlice')}
                  />
                  <AvInput type="hidden" name="byteAnyMinbytesAlice" value={byteAnyMinbytesAlice} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMaxbytesAliceLabel" for="byteAnyMaxbytesAlice">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyMaxbytesAlice">
                      Byte Any Maxbytes Alice
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMaxbytesAlice ? (
                    <div>
                      {byteAnyMaxbytesAliceContentType ? (
                        <a onClick={openFile(byteAnyMaxbytesAliceContentType, byteAnyMaxbytesAlice)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMaxbytesAliceContentType}, {byteSize(byteAnyMaxbytesAlice)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMaxbytesAlice')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMaxbytesAlice"
                    data-cy="byteAnyMaxbytesAlice"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMaxbytesAlice')}
                  />
                  <AvInput type="hidden" name="byteAnyMaxbytesAlice" value={byteAnyMaxbytesAlice} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <Label id="byteTextAliceLabel" for="field-test-pagination-entity-byteTextAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteTextAlice">Byte Text Alice</Translate>
                </Label>
                <AvInput id="field-test-pagination-entity-byteTextAlice" data-cy="byteTextAlice" type="textarea" name="byteTextAlice" />
              </AvGroup>
              <AvGroup>
                <Label id="byteTextRequiredAliceLabel" for="field-test-pagination-entity-byteTextRequiredAlice">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteTextRequiredAlice">
                    Byte Text Required Alice
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-pagination-entity-byteTextRequiredAlice"
                  data-cy="byteTextRequiredAlice"
                  type="textarea"
                  name="byteTextRequiredAlice"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/field-test-pagination-entity" replace color="info">
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
  fieldTestPaginationEntityEntity: storeState.fieldTestPaginationEntity.entity,
  loading: storeState.fieldTestPaginationEntity.loading,
  updating: storeState.fieldTestPaginationEntity.updating,
  updateSuccess: storeState.fieldTestPaginationEntity.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestPaginationEntityUpdate);
