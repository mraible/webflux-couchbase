import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { setFileData, openFile, byteSize, Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-service-impl-entity.reducer';
import { IFieldTestServiceImplEntity } from 'app/shared/model/field-test-service-impl-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestServiceImplEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestServiceImplEntityUpdate = (props: IFieldTestServiceImplEntityUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { fieldTestServiceImplEntityEntity, loading, updating } = props;

  const {
    byteImageMika,
    byteImageMikaContentType,
    byteImageRequiredMika,
    byteImageRequiredMikaContentType,
    byteImageMinbytesMika,
    byteImageMinbytesMikaContentType,
    byteImageMaxbytesMika,
    byteImageMaxbytesMikaContentType,
    byteAnyMika,
    byteAnyMikaContentType,
    byteAnyRequiredMika,
    byteAnyRequiredMikaContentType,
    byteAnyMinbytesMika,
    byteAnyMinbytesMikaContentType,
    byteAnyMaxbytesMika,
    byteAnyMaxbytesMikaContentType,
    byteTextMika,
    byteTextRequiredMika,
  } = fieldTestServiceImplEntityEntity;

  const handleClose = () => {
    props.history.push('/field-test-service-impl-entity');
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
    values.instantMika = convertDateTimeToServer(values.instantMika);
    values.instanteRequiredMika = convertDateTimeToServer(values.instanteRequiredMika);
    values.zonedDateTimeMika = convertDateTimeToServer(values.zonedDateTimeMika);
    values.zonedDateTimeRequiredMika = convertDateTimeToServer(values.zonedDateTimeRequiredMika);

    if (errors.length === 0) {
      const entity = {
        ...fieldTestServiceImplEntityEntity,
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
            id="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.home.createOrEditLabel"
            data-cy="FieldTestServiceImplEntityCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.home.createOrEditLabel">
              Create or edit a FieldTestServiceImplEntity
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : fieldTestServiceImplEntityEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="field-test-service-impl-entity-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="field-test-service-impl-entity-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="stringMikaLabel" for="field-test-service-impl-entity-stringMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMika">String Mika</Translate>
                </Label>
                <AvField id="field-test-service-impl-entity-stringMika" data-cy="stringMika" type="text" name="stringMika" />
              </AvGroup>
              <AvGroup>
                <Label id="stringRequiredMikaLabel" for="field-test-service-impl-entity-stringRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringRequiredMika">
                    String Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-stringRequiredMika"
                  data-cy="stringRequiredMika"
                  type="text"
                  name="stringRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMinlengthMikaLabel" for="field-test-service-impl-entity-stringMinlengthMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMinlengthMika">
                    String Minlength Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-stringMinlengthMika"
                  data-cy="stringMinlengthMika"
                  type="text"
                  name="stringMinlengthMika"
                  validate={{
                    minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMaxlengthMikaLabel" for="field-test-service-impl-entity-stringMaxlengthMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMaxlengthMika">
                    String Maxlength Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-stringMaxlengthMika"
                  data-cy="stringMaxlengthMika"
                  type="text"
                  name="stringMaxlengthMika"
                  validate={{
                    maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringPatternMikaLabel" for="field-test-service-impl-entity-stringPatternMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringPatternMika">
                    String Pattern Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-stringPatternMika"
                  data-cy="stringPatternMika"
                  type="text"
                  name="stringPatternMika"
                  validate={{
                    pattern: {
                      value: '^[a-zA-Z0-9]*$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMikaLabel" for="field-test-service-impl-entity-integerMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMika">Integer Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-integerMika"
                  data-cy="integerMika"
                  type="string"
                  className="form-control"
                  name="integerMika"
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerRequiredMikaLabel" for="field-test-service-impl-entity-integerRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerRequiredMika">
                    Integer Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-integerRequiredMika"
                  data-cy="integerRequiredMika"
                  type="string"
                  className="form-control"
                  name="integerRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMinMikaLabel" for="field-test-service-impl-entity-integerMinMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMinMika">Integer Min Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-integerMinMika"
                  data-cy="integerMinMika"
                  type="string"
                  className="form-control"
                  name="integerMinMika"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMaxMikaLabel" for="field-test-service-impl-entity-integerMaxMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMaxMika">Integer Max Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-integerMaxMika"
                  data-cy="integerMaxMika"
                  type="string"
                  className="form-control"
                  name="integerMaxMika"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMikaLabel" for="field-test-service-impl-entity-longMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMika">Long Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-longMika"
                  data-cy="longMika"
                  type="string"
                  className="form-control"
                  name="longMika"
                />
              </AvGroup>
              <AvGroup>
                <Label id="longRequiredMikaLabel" for="field-test-service-impl-entity-longRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longRequiredMika">
                    Long Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-longRequiredMika"
                  data-cy="longRequiredMika"
                  type="string"
                  className="form-control"
                  name="longRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMinMikaLabel" for="field-test-service-impl-entity-longMinMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMinMika">Long Min Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-longMinMika"
                  data-cy="longMinMika"
                  type="string"
                  className="form-control"
                  name="longMinMika"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMaxMikaLabel" for="field-test-service-impl-entity-longMaxMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMaxMika">Long Max Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-longMaxMika"
                  data-cy="longMaxMika"
                  type="string"
                  className="form-control"
                  name="longMaxMika"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMikaLabel" for="field-test-service-impl-entity-floatMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMika">Float Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-floatMika"
                  data-cy="floatMika"
                  type="string"
                  className="form-control"
                  name="floatMika"
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatRequiredMikaLabel" for="field-test-service-impl-entity-floatRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatRequiredMika">
                    Float Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-floatRequiredMika"
                  data-cy="floatRequiredMika"
                  type="string"
                  className="form-control"
                  name="floatRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMinMikaLabel" for="field-test-service-impl-entity-floatMinMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMinMika">Float Min Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-floatMinMika"
                  data-cy="floatMinMika"
                  type="string"
                  className="form-control"
                  name="floatMinMika"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMaxMikaLabel" for="field-test-service-impl-entity-floatMaxMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMaxMika">Float Max Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-floatMaxMika"
                  data-cy="floatMaxMika"
                  type="string"
                  className="form-control"
                  name="floatMaxMika"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleRequiredMikaLabel" for="field-test-service-impl-entity-doubleRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleRequiredMika">
                    Double Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-doubleRequiredMika"
                  data-cy="doubleRequiredMika"
                  type="string"
                  className="form-control"
                  name="doubleRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMinMikaLabel" for="field-test-service-impl-entity-doubleMinMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleMinMika">Double Min Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-doubleMinMika"
                  data-cy="doubleMinMika"
                  type="string"
                  className="form-control"
                  name="doubleMinMika"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMaxMikaLabel" for="field-test-service-impl-entity-doubleMaxMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleMaxMika">Double Max Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-doubleMaxMika"
                  data-cy="doubleMaxMika"
                  type="string"
                  className="form-control"
                  name="doubleMaxMika"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalRequiredMikaLabel" for="field-test-service-impl-entity-bigDecimalRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalRequiredMika">
                    Big Decimal Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-bigDecimalRequiredMika"
                  data-cy="bigDecimalRequiredMika"
                  type="text"
                  name="bigDecimalRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMinMikaLabel" for="field-test-service-impl-entity-bigDecimalMinMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalMinMika">
                    Big Decimal Min Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-bigDecimalMinMika"
                  data-cy="bigDecimalMinMika"
                  type="text"
                  name="bigDecimalMinMika"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMaxMikaLabel" for="field-test-service-impl-entity-bigDecimalMaxMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalMaxMika">
                    Big Decimal Max Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-bigDecimalMaxMika"
                  data-cy="bigDecimalMaxMika"
                  type="text"
                  name="bigDecimalMaxMika"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateMikaLabel" for="field-test-service-impl-entity-localDateMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.localDateMika">Local Date Mika</Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-localDateMika"
                  data-cy="localDateMika"
                  type="date"
                  className="form-control"
                  name="localDateMika"
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateRequiredMikaLabel" for="field-test-service-impl-entity-localDateRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.localDateRequiredMika">
                    Local Date Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-localDateRequiredMika"
                  data-cy="localDateRequiredMika"
                  type="date"
                  className="form-control"
                  name="localDateRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instantMikaLabel" for="field-test-service-impl-entity-instantMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.instantMika">Instant Mika</Translate>
                </Label>
                <AvInput
                  id="field-test-service-impl-entity-instantMika"
                  data-cy="instantMika"
                  type="datetime-local"
                  className="form-control"
                  name="instantMika"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestServiceImplEntityEntity.instantMika)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instanteRequiredMikaLabel" for="field-test-service-impl-entity-instanteRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.instanteRequiredMika">
                    Instante Required Mika
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-impl-entity-instanteRequiredMika"
                  data-cy="instanteRequiredMika"
                  type="datetime-local"
                  className="form-control"
                  name="instanteRequiredMika"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestServiceImplEntityEntity.instanteRequiredMika)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeMikaLabel" for="field-test-service-impl-entity-zonedDateTimeMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.zonedDateTimeMika">
                    Zoned Date Time Mika
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-impl-entity-zonedDateTimeMika"
                  data-cy="zonedDateTimeMika"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeMika"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestServiceImplEntityEntity.zonedDateTimeMika)
                  }
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeRequiredMikaLabel" for="field-test-service-impl-entity-zonedDateTimeRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.zonedDateTimeRequiredMika">
                    Zoned Date Time Required Mika
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-impl-entity-zonedDateTimeRequiredMika"
                  data-cy="zonedDateTimeRequiredMika"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeRequiredMika"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestServiceImplEntityEntity.zonedDateTimeRequiredMika)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="durationMikaLabel" for="field-test-service-impl-entity-durationMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.durationMika">Duration Mika</Translate>
                </Label>
                <AvField id="field-test-service-impl-entity-durationMika" data-cy="durationMika" type="text" name="durationMika" />
              </AvGroup>
              <AvGroup>
                <Label id="durationRequiredMikaLabel" for="field-test-service-impl-entity-durationRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.durationRequiredMika">
                    Duration Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-durationRequiredMika"
                  data-cy="durationRequiredMika"
                  type="text"
                  name="durationRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup check>
                <Label id="booleanMikaLabel">
                  <AvInput
                    id="field-test-service-impl-entity-booleanMika"
                    data-cy="booleanMika"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanMika"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.booleanMika">Boolean Mika</Translate>
                </Label>
              </AvGroup>
              <AvGroup check>
                <Label id="booleanRequiredMikaLabel">
                  <AvInput
                    id="field-test-service-impl-entity-booleanRequiredMika"
                    data-cy="booleanRequiredMika"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanRequiredMika"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.booleanRequiredMika">
                    Boolean Required Mika
                  </Translate>
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="enumMikaLabel" for="field-test-service-impl-entity-enumMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.enumMika">Enum Mika</Translate>
                </Label>
                <AvInput
                  id="field-test-service-impl-entity-enumMika"
                  data-cy="enumMika"
                  type="select"
                  className="form-control"
                  name="enumMika"
                  value={(!isNew && fieldTestServiceImplEntityEntity.enumMika) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="enumRequiredMikaLabel" for="field-test-service-impl-entity-enumRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.enumRequiredMika">
                    Enum Required Mika
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-impl-entity-enumRequiredMika"
                  data-cy="enumRequiredMika"
                  type="select"
                  className="form-control"
                  name="enumRequiredMika"
                  value={(!isNew && fieldTestServiceImplEntityEntity.enumRequiredMika) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="uuidMikaLabel" for="field-test-service-impl-entity-uuidMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.uuidMika">Uuid Mika</Translate>
                </Label>
                <AvField id="field-test-service-impl-entity-uuidMika" data-cy="uuidMika" type="text" name="uuidMika" />
              </AvGroup>
              <AvGroup>
                <Label id="uuidRequiredMikaLabel" for="field-test-service-impl-entity-uuidRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.uuidRequiredMika">
                    Uuid Required Mika
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-impl-entity-uuidRequiredMika"
                  data-cy="uuidRequiredMika"
                  type="text"
                  name="uuidRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMikaLabel" for="byteImageMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMika">Byte Image Mika</Translate>
                  </Label>
                  <br />
                  {byteImageMika ? (
                    <div>
                      {byteImageMikaContentType ? (
                        <a onClick={openFile(byteImageMikaContentType, byteImageMika)}>
                          <img src={`data:${byteImageMikaContentType};base64,${byteImageMika}`} style={{ maxHeight: '100px' }} />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMikaContentType}, {byteSize(byteImageMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMika"
                    data-cy="byteImageMika"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMika')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMika" value={byteImageMika} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageRequiredMikaLabel" for="byteImageRequiredMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageRequiredMika">
                      Byte Image Required Mika
                    </Translate>
                  </Label>
                  <br />
                  {byteImageRequiredMika ? (
                    <div>
                      {byteImageRequiredMikaContentType ? (
                        <a onClick={openFile(byteImageRequiredMikaContentType, byteImageRequiredMika)}>
                          <img
                            src={`data:${byteImageRequiredMikaContentType};base64,${byteImageRequiredMika}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageRequiredMikaContentType}, {byteSize(byteImageRequiredMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageRequiredMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageRequiredMika"
                    data-cy="byteImageRequiredMika"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageRequiredMika')}
                    accept="image/*"
                  />
                  <AvInput
                    type="hidden"
                    name="byteImageRequiredMika"
                    value={byteImageRequiredMika}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMinbytesMikaLabel" for="byteImageMinbytesMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMinbytesMika">
                      Byte Image Minbytes Mika
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMinbytesMika ? (
                    <div>
                      {byteImageMinbytesMikaContentType ? (
                        <a onClick={openFile(byteImageMinbytesMikaContentType, byteImageMinbytesMika)}>
                          <img
                            src={`data:${byteImageMinbytesMikaContentType};base64,${byteImageMinbytesMika}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMinbytesMikaContentType}, {byteSize(byteImageMinbytesMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMinbytesMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMinbytesMika"
                    data-cy="byteImageMinbytesMika"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMinbytesMika')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMinbytesMika" value={byteImageMinbytesMika} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMaxbytesMikaLabel" for="byteImageMaxbytesMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMaxbytesMika">
                      Byte Image Maxbytes Mika
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMaxbytesMika ? (
                    <div>
                      {byteImageMaxbytesMikaContentType ? (
                        <a onClick={openFile(byteImageMaxbytesMikaContentType, byteImageMaxbytesMika)}>
                          <img
                            src={`data:${byteImageMaxbytesMikaContentType};base64,${byteImageMaxbytesMika}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMaxbytesMikaContentType}, {byteSize(byteImageMaxbytesMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMaxbytesMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMaxbytesMika"
                    data-cy="byteImageMaxbytesMika"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMaxbytesMika')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMaxbytesMika" value={byteImageMaxbytesMika} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMikaLabel" for="byteAnyMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMika">Byte Any Mika</Translate>
                  </Label>
                  <br />
                  {byteAnyMika ? (
                    <div>
                      {byteAnyMikaContentType ? (
                        <a onClick={openFile(byteAnyMikaContentType, byteAnyMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMikaContentType}, {byteSize(byteAnyMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input id="file_byteAnyMika" data-cy="byteAnyMika" type="file" onChange={onBlobChange(false, 'byteAnyMika')} />
                  <AvInput type="hidden" name="byteAnyMika" value={byteAnyMika} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyRequiredMikaLabel" for="byteAnyRequiredMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyRequiredMika">
                      Byte Any Required Mika
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyRequiredMika ? (
                    <div>
                      {byteAnyRequiredMikaContentType ? (
                        <a onClick={openFile(byteAnyRequiredMikaContentType, byteAnyRequiredMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyRequiredMikaContentType}, {byteSize(byteAnyRequiredMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyRequiredMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyRequiredMika"
                    data-cy="byteAnyRequiredMika"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyRequiredMika')}
                  />
                  <AvInput
                    type="hidden"
                    name="byteAnyRequiredMika"
                    value={byteAnyRequiredMika}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMinbytesMikaLabel" for="byteAnyMinbytesMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMinbytesMika">
                      Byte Any Minbytes Mika
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMinbytesMika ? (
                    <div>
                      {byteAnyMinbytesMikaContentType ? (
                        <a onClick={openFile(byteAnyMinbytesMikaContentType, byteAnyMinbytesMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMinbytesMikaContentType}, {byteSize(byteAnyMinbytesMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMinbytesMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMinbytesMika"
                    data-cy="byteAnyMinbytesMika"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMinbytesMika')}
                  />
                  <AvInput type="hidden" name="byteAnyMinbytesMika" value={byteAnyMinbytesMika} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMaxbytesMikaLabel" for="byteAnyMaxbytesMika">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMaxbytesMika">
                      Byte Any Maxbytes Mika
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMaxbytesMika ? (
                    <div>
                      {byteAnyMaxbytesMikaContentType ? (
                        <a onClick={openFile(byteAnyMaxbytesMikaContentType, byteAnyMaxbytesMika)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMaxbytesMikaContentType}, {byteSize(byteAnyMaxbytesMika)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMaxbytesMika')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMaxbytesMika"
                    data-cy="byteAnyMaxbytesMika"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMaxbytesMika')}
                  />
                  <AvInput type="hidden" name="byteAnyMaxbytesMika" value={byteAnyMaxbytesMika} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <Label id="byteTextMikaLabel" for="field-test-service-impl-entity-byteTextMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteTextMika">Byte Text Mika</Translate>
                </Label>
                <AvInput id="field-test-service-impl-entity-byteTextMika" data-cy="byteTextMika" type="textarea" name="byteTextMika" />
              </AvGroup>
              <AvGroup>
                <Label id="byteTextRequiredMikaLabel" for="field-test-service-impl-entity-byteTextRequiredMika">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteTextRequiredMika">
                    Byte Text Required Mika
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-impl-entity-byteTextRequiredMika"
                  data-cy="byteTextRequiredMika"
                  type="textarea"
                  name="byteTextRequiredMika"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/field-test-service-impl-entity" replace color="info">
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
  fieldTestServiceImplEntityEntity: storeState.fieldTestServiceImplEntity.entity,
  loading: storeState.fieldTestServiceImplEntity.loading,
  updating: storeState.fieldTestServiceImplEntity.updating,
  updateSuccess: storeState.fieldTestServiceImplEntity.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestServiceImplEntityUpdate);
