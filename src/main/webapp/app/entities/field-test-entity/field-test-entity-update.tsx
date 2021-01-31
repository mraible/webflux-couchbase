import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { setFileData, openFile, byteSize, Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-entity.reducer';
import { IFieldTestEntity } from 'app/shared/model/field-test-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestEntityUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestEntityUpdate = (props: IFieldTestEntityUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { fieldTestEntityEntity, loading, updating } = props;

  const {
    byteImageTom,
    byteImageTomContentType,
    byteImageRequiredTom,
    byteImageRequiredTomContentType,
    byteImageMinbytesTom,
    byteImageMinbytesTomContentType,
    byteImageMaxbytesTom,
    byteImageMaxbytesTomContentType,
    byteAnyTom,
    byteAnyTomContentType,
    byteAnyRequiredTom,
    byteAnyRequiredTomContentType,
    byteAnyMinbytesTom,
    byteAnyMinbytesTomContentType,
    byteAnyMaxbytesTom,
    byteAnyMaxbytesTomContentType,
    byteTextTom,
    byteTextRequiredTom,
  } = fieldTestEntityEntity;

  const handleClose = () => {
    props.history.push('/field-test-entity');
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
    values.instantTom = convertDateTimeToServer(values.instantTom);
    values.instantRequiredTom = convertDateTimeToServer(values.instantRequiredTom);
    values.zonedDateTimeTom = convertDateTimeToServer(values.zonedDateTimeTom);
    values.zonedDateTimeRequiredTom = convertDateTimeToServer(values.zonedDateTimeRequiredTom);

    if (errors.length === 0) {
      const entity = {
        ...fieldTestEntityEntity,
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
          <h2 id="sampleCouchbaseNoCacheApp.fieldTestEntity.home.createOrEditLabel" data-cy="FieldTestEntityCreateUpdateHeading">
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.home.createOrEditLabel">
              Create or edit a FieldTestEntity
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : fieldTestEntityEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="field-test-entity-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="field-test-entity-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="stringTomLabel" for="field-test-entity-stringTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringTom">String Tom</Translate>
                </Label>
                <AvField id="field-test-entity-stringTom" data-cy="stringTom" type="text" name="stringTom" />
              </AvGroup>
              <AvGroup>
                <Label id="stringRequiredTomLabel" for="field-test-entity-stringRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringRequiredTom">String Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-stringRequiredTom"
                  data-cy="stringRequiredTom"
                  type="text"
                  name="stringRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMinlengthTomLabel" for="field-test-entity-stringMinlengthTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringMinlengthTom">String Minlength Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-stringMinlengthTom"
                  data-cy="stringMinlengthTom"
                  type="text"
                  name="stringMinlengthTom"
                  validate={{
                    minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMaxlengthTomLabel" for="field-test-entity-stringMaxlengthTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringMaxlengthTom">String Maxlength Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-stringMaxlengthTom"
                  data-cy="stringMaxlengthTom"
                  type="text"
                  name="stringMaxlengthTom"
                  validate={{
                    maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringPatternTomLabel" for="field-test-entity-stringPatternTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringPatternTom">String Pattern Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-stringPatternTom"
                  data-cy="stringPatternTom"
                  type="text"
                  name="stringPatternTom"
                  validate={{
                    pattern: {
                      value: '^[a-zA-Z0-9]*$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="numberPatternTomLabel" for="field-test-entity-numberPatternTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.numberPatternTom">Number Pattern Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-numberPatternTom"
                  data-cy="numberPatternTom"
                  type="text"
                  name="numberPatternTom"
                  validate={{
                    pattern: { value: '^[0-9]+$', errorMessage: translate('entity.validation.pattern', { pattern: '^[0-9]+$' }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="numberPatternRequiredTomLabel" for="field-test-entity-numberPatternRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.numberPatternRequiredTom">
                    Number Pattern Required Tom
                  </Translate>
                </Label>
                <AvField
                  id="field-test-entity-numberPatternRequiredTom"
                  data-cy="numberPatternRequiredTom"
                  type="text"
                  name="numberPatternRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    pattern: { value: '^[0-9]+$', errorMessage: translate('entity.validation.pattern', { pattern: '^[0-9]+$' }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerTomLabel" for="field-test-entity-integerTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerTom">Integer Tom</Translate>
                </Label>
                <AvField id="field-test-entity-integerTom" data-cy="integerTom" type="string" className="form-control" name="integerTom" />
              </AvGroup>
              <AvGroup>
                <Label id="integerRequiredTomLabel" for="field-test-entity-integerRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerRequiredTom">Integer Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-integerRequiredTom"
                  data-cy="integerRequiredTom"
                  type="string"
                  className="form-control"
                  name="integerRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMinTomLabel" for="field-test-entity-integerMinTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerMinTom">Integer Min Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-integerMinTom"
                  data-cy="integerMinTom"
                  type="string"
                  className="form-control"
                  name="integerMinTom"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMaxTomLabel" for="field-test-entity-integerMaxTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerMaxTom">Integer Max Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-integerMaxTom"
                  data-cy="integerMaxTom"
                  type="string"
                  className="form-control"
                  name="integerMaxTom"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longTomLabel" for="field-test-entity-longTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longTom">Long Tom</Translate>
                </Label>
                <AvField id="field-test-entity-longTom" data-cy="longTom" type="string" className="form-control" name="longTom" />
              </AvGroup>
              <AvGroup>
                <Label id="longRequiredTomLabel" for="field-test-entity-longRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longRequiredTom">Long Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-longRequiredTom"
                  data-cy="longRequiredTom"
                  type="string"
                  className="form-control"
                  name="longRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMinTomLabel" for="field-test-entity-longMinTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longMinTom">Long Min Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-longMinTom"
                  data-cy="longMinTom"
                  type="string"
                  className="form-control"
                  name="longMinTom"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMaxTomLabel" for="field-test-entity-longMaxTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longMaxTom">Long Max Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-longMaxTom"
                  data-cy="longMaxTom"
                  type="string"
                  className="form-control"
                  name="longMaxTom"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatTomLabel" for="field-test-entity-floatTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatTom">Float Tom</Translate>
                </Label>
                <AvField id="field-test-entity-floatTom" data-cy="floatTom" type="string" className="form-control" name="floatTom" />
              </AvGroup>
              <AvGroup>
                <Label id="floatRequiredTomLabel" for="field-test-entity-floatRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatRequiredTom">Float Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-floatRequiredTom"
                  data-cy="floatRequiredTom"
                  type="string"
                  className="form-control"
                  name="floatRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMinTomLabel" for="field-test-entity-floatMinTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatMinTom">Float Min Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-floatMinTom"
                  data-cy="floatMinTom"
                  type="string"
                  className="form-control"
                  name="floatMinTom"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMaxTomLabel" for="field-test-entity-floatMaxTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatMaxTom">Float Max Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-floatMaxTom"
                  data-cy="floatMaxTom"
                  type="string"
                  className="form-control"
                  name="floatMaxTom"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleRequiredTomLabel" for="field-test-entity-doubleRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleRequiredTom">Double Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-doubleRequiredTom"
                  data-cy="doubleRequiredTom"
                  type="string"
                  className="form-control"
                  name="doubleRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMinTomLabel" for="field-test-entity-doubleMinTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleMinTom">Double Min Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-doubleMinTom"
                  data-cy="doubleMinTom"
                  type="string"
                  className="form-control"
                  name="doubleMinTom"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMaxTomLabel" for="field-test-entity-doubleMaxTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleMaxTom">Double Max Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-doubleMaxTom"
                  data-cy="doubleMaxTom"
                  type="string"
                  className="form-control"
                  name="doubleMaxTom"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalRequiredTomLabel" for="field-test-entity-bigDecimalRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalRequiredTom">
                    Big Decimal Required Tom
                  </Translate>
                </Label>
                <AvField
                  id="field-test-entity-bigDecimalRequiredTom"
                  data-cy="bigDecimalRequiredTom"
                  type="text"
                  name="bigDecimalRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMinTomLabel" for="field-test-entity-bigDecimalMinTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalMinTom">Big Decimal Min Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-bigDecimalMinTom"
                  data-cy="bigDecimalMinTom"
                  type="text"
                  name="bigDecimalMinTom"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMaxTomLabel" for="field-test-entity-bigDecimalMaxTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalMaxTom">Big Decimal Max Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-bigDecimalMaxTom"
                  data-cy="bigDecimalMaxTom"
                  type="text"
                  name="bigDecimalMaxTom"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateTomLabel" for="field-test-entity-localDateTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.localDateTom">Local Date Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-localDateTom"
                  data-cy="localDateTom"
                  type="date"
                  className="form-control"
                  name="localDateTom"
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateRequiredTomLabel" for="field-test-entity-localDateRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.localDateRequiredTom">Local Date Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-localDateRequiredTom"
                  data-cy="localDateRequiredTom"
                  type="date"
                  className="form-control"
                  name="localDateRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instantTomLabel" for="field-test-entity-instantTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.instantTom">Instant Tom</Translate>
                </Label>
                <AvInput
                  id="field-test-entity-instantTom"
                  data-cy="instantTom"
                  type="datetime-local"
                  className="form-control"
                  name="instantTom"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestEntityEntity.instantTom)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instantRequiredTomLabel" for="field-test-entity-instantRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.instantRequiredTom">Instant Required Tom</Translate>
                </Label>
                <AvInput
                  id="field-test-entity-instantRequiredTom"
                  data-cy="instantRequiredTom"
                  type="datetime-local"
                  className="form-control"
                  name="instantRequiredTom"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestEntityEntity.instantRequiredTom)}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeTomLabel" for="field-test-entity-zonedDateTimeTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.zonedDateTimeTom">Zoned Date Time Tom</Translate>
                </Label>
                <AvInput
                  id="field-test-entity-zonedDateTimeTom"
                  data-cy="zonedDateTimeTom"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeTom"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestEntityEntity.zonedDateTimeTom)}
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeRequiredTomLabel" for="field-test-entity-zonedDateTimeRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.zonedDateTimeRequiredTom">
                    Zoned Date Time Required Tom
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-entity-zonedDateTimeRequiredTom"
                  data-cy="zonedDateTimeRequiredTom"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeRequiredTom"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={isNew ? displayDefaultDateTime() : convertDateTimeFromServer(props.fieldTestEntityEntity.zonedDateTimeRequiredTom)}
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="durationTomLabel" for="field-test-entity-durationTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.durationTom">Duration Tom</Translate>
                </Label>
                <AvField id="field-test-entity-durationTom" data-cy="durationTom" type="text" name="durationTom" />
              </AvGroup>
              <AvGroup>
                <Label id="durationRequiredTomLabel" for="field-test-entity-durationRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.durationRequiredTom">Duration Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-durationRequiredTom"
                  data-cy="durationRequiredTom"
                  type="text"
                  name="durationRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup check>
                <Label id="booleanTomLabel">
                  <AvInput
                    id="field-test-entity-booleanTom"
                    data-cy="booleanTom"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanTom"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.booleanTom">Boolean Tom</Translate>
                </Label>
              </AvGroup>
              <AvGroup check>
                <Label id="booleanRequiredTomLabel">
                  <AvInput
                    id="field-test-entity-booleanRequiredTom"
                    data-cy="booleanRequiredTom"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanRequiredTom"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.booleanRequiredTom">Boolean Required Tom</Translate>
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="enumTomLabel" for="field-test-entity-enumTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.enumTom">Enum Tom</Translate>
                </Label>
                <AvInput
                  id="field-test-entity-enumTom"
                  data-cy="enumTom"
                  type="select"
                  className="form-control"
                  name="enumTom"
                  value={(!isNew && fieldTestEntityEntity.enumTom) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="enumRequiredTomLabel" for="field-test-entity-enumRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.enumRequiredTom">Enum Required Tom</Translate>
                </Label>
                <AvInput
                  id="field-test-entity-enumRequiredTom"
                  data-cy="enumRequiredTom"
                  type="select"
                  className="form-control"
                  name="enumRequiredTom"
                  value={(!isNew && fieldTestEntityEntity.enumRequiredTom) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="uuidTomLabel" for="field-test-entity-uuidTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.uuidTom">Uuid Tom</Translate>
                </Label>
                <AvField id="field-test-entity-uuidTom" data-cy="uuidTom" type="text" name="uuidTom" />
              </AvGroup>
              <AvGroup>
                <Label id="uuidRequiredTomLabel" for="field-test-entity-uuidRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.uuidRequiredTom">Uuid Required Tom</Translate>
                </Label>
                <AvField
                  id="field-test-entity-uuidRequiredTom"
                  data-cy="uuidRequiredTom"
                  type="text"
                  name="uuidRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageTomLabel" for="byteImageTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageTom">Byte Image Tom</Translate>
                  </Label>
                  <br />
                  {byteImageTom ? (
                    <div>
                      {byteImageTomContentType ? (
                        <a onClick={openFile(byteImageTomContentType, byteImageTom)}>
                          <img src={`data:${byteImageTomContentType};base64,${byteImageTom}`} style={{ maxHeight: '100px' }} />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageTomContentType}, {byteSize(byteImageTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageTom"
                    data-cy="byteImageTom"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageTom')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageTom" value={byteImageTom} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageRequiredTomLabel" for="byteImageRequiredTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageRequiredTom">
                      Byte Image Required Tom
                    </Translate>
                  </Label>
                  <br />
                  {byteImageRequiredTom ? (
                    <div>
                      {byteImageRequiredTomContentType ? (
                        <a onClick={openFile(byteImageRequiredTomContentType, byteImageRequiredTom)}>
                          <img
                            src={`data:${byteImageRequiredTomContentType};base64,${byteImageRequiredTom}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageRequiredTomContentType}, {byteSize(byteImageRequiredTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageRequiredTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageRequiredTom"
                    data-cy="byteImageRequiredTom"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageRequiredTom')}
                    accept="image/*"
                  />
                  <AvInput
                    type="hidden"
                    name="byteImageRequiredTom"
                    value={byteImageRequiredTom}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMinbytesTomLabel" for="byteImageMinbytesTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageMinbytesTom">
                      Byte Image Minbytes Tom
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMinbytesTom ? (
                    <div>
                      {byteImageMinbytesTomContentType ? (
                        <a onClick={openFile(byteImageMinbytesTomContentType, byteImageMinbytesTom)}>
                          <img
                            src={`data:${byteImageMinbytesTomContentType};base64,${byteImageMinbytesTom}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMinbytesTomContentType}, {byteSize(byteImageMinbytesTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMinbytesTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMinbytesTom"
                    data-cy="byteImageMinbytesTom"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMinbytesTom')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMinbytesTom" value={byteImageMinbytesTom} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMaxbytesTomLabel" for="byteImageMaxbytesTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageMaxbytesTom">
                      Byte Image Maxbytes Tom
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMaxbytesTom ? (
                    <div>
                      {byteImageMaxbytesTomContentType ? (
                        <a onClick={openFile(byteImageMaxbytesTomContentType, byteImageMaxbytesTom)}>
                          <img
                            src={`data:${byteImageMaxbytesTomContentType};base64,${byteImageMaxbytesTom}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMaxbytesTomContentType}, {byteSize(byteImageMaxbytesTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMaxbytesTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMaxbytesTom"
                    data-cy="byteImageMaxbytesTom"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMaxbytesTom')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMaxbytesTom" value={byteImageMaxbytesTom} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyTomLabel" for="byteAnyTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyTom">Byte Any Tom</Translate>
                  </Label>
                  <br />
                  {byteAnyTom ? (
                    <div>
                      {byteAnyTomContentType ? (
                        <a onClick={openFile(byteAnyTomContentType, byteAnyTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyTomContentType}, {byteSize(byteAnyTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input id="file_byteAnyTom" data-cy="byteAnyTom" type="file" onChange={onBlobChange(false, 'byteAnyTom')} />
                  <AvInput type="hidden" name="byteAnyTom" value={byteAnyTom} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyRequiredTomLabel" for="byteAnyRequiredTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyRequiredTom">Byte Any Required Tom</Translate>
                  </Label>
                  <br />
                  {byteAnyRequiredTom ? (
                    <div>
                      {byteAnyRequiredTomContentType ? (
                        <a onClick={openFile(byteAnyRequiredTomContentType, byteAnyRequiredTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyRequiredTomContentType}, {byteSize(byteAnyRequiredTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyRequiredTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyRequiredTom"
                    data-cy="byteAnyRequiredTom"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyRequiredTom')}
                  />
                  <AvInput
                    type="hidden"
                    name="byteAnyRequiredTom"
                    value={byteAnyRequiredTom}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMinbytesTomLabel" for="byteAnyMinbytesTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyMinbytesTom">Byte Any Minbytes Tom</Translate>
                  </Label>
                  <br />
                  {byteAnyMinbytesTom ? (
                    <div>
                      {byteAnyMinbytesTomContentType ? (
                        <a onClick={openFile(byteAnyMinbytesTomContentType, byteAnyMinbytesTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMinbytesTomContentType}, {byteSize(byteAnyMinbytesTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMinbytesTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMinbytesTom"
                    data-cy="byteAnyMinbytesTom"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMinbytesTom')}
                  />
                  <AvInput type="hidden" name="byteAnyMinbytesTom" value={byteAnyMinbytesTom} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMaxbytesTomLabel" for="byteAnyMaxbytesTom">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyMaxbytesTom">Byte Any Maxbytes Tom</Translate>
                  </Label>
                  <br />
                  {byteAnyMaxbytesTom ? (
                    <div>
                      {byteAnyMaxbytesTomContentType ? (
                        <a onClick={openFile(byteAnyMaxbytesTomContentType, byteAnyMaxbytesTom)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMaxbytesTomContentType}, {byteSize(byteAnyMaxbytesTom)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMaxbytesTom')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMaxbytesTom"
                    data-cy="byteAnyMaxbytesTom"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMaxbytesTom')}
                  />
                  <AvInput type="hidden" name="byteAnyMaxbytesTom" value={byteAnyMaxbytesTom} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <Label id="byteTextTomLabel" for="field-test-entity-byteTextTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteTextTom">Byte Text Tom</Translate>
                </Label>
                <AvInput id="field-test-entity-byteTextTom" data-cy="byteTextTom" type="textarea" name="byteTextTom" />
              </AvGroup>
              <AvGroup>
                <Label id="byteTextRequiredTomLabel" for="field-test-entity-byteTextRequiredTom">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteTextRequiredTom">Byte Text Required Tom</Translate>
                </Label>
                <AvInput
                  id="field-test-entity-byteTextRequiredTom"
                  data-cy="byteTextRequiredTom"
                  type="textarea"
                  name="byteTextRequiredTom"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/field-test-entity" replace color="info">
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
  fieldTestEntityEntity: storeState.fieldTestEntity.entity,
  loading: storeState.fieldTestEntity.loading,
  updating: storeState.fieldTestEntity.updating,
  updateSuccess: storeState.fieldTestEntity.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestEntityUpdate);
