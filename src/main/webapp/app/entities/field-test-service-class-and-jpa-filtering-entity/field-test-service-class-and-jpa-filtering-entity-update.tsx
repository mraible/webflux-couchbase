import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { setFileData, openFile, byteSize, Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-service-class-and-jpa-filtering-entity.reducer';
import { IFieldTestServiceClassAndJpaFilteringEntity } from 'app/shared/model/field-test-service-class-and-jpa-filtering-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestServiceClassAndJpaFilteringEntityUpdateProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const FieldTestServiceClassAndJpaFilteringEntityUpdate = (props: IFieldTestServiceClassAndJpaFilteringEntityUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { fieldTestServiceClassAndJpaFilteringEntityEntity, loading, updating } = props;

  const {
    byteImageBob,
    byteImageBobContentType,
    byteImageRequiredBob,
    byteImageRequiredBobContentType,
    byteImageMinbytesBob,
    byteImageMinbytesBobContentType,
    byteImageMaxbytesBob,
    byteImageMaxbytesBobContentType,
    byteAnyBob,
    byteAnyBobContentType,
    byteAnyRequiredBob,
    byteAnyRequiredBobContentType,
    byteAnyMinbytesBob,
    byteAnyMinbytesBobContentType,
    byteAnyMaxbytesBob,
    byteAnyMaxbytesBobContentType,
    byteTextBob,
    byteTextRequiredBob,
  } = fieldTestServiceClassAndJpaFilteringEntityEntity;

  const handleClose = () => {
    props.history.push('/field-test-service-class-and-jpa-filtering-entity');
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
    values.instantBob = convertDateTimeToServer(values.instantBob);
    values.instanteRequiredBob = convertDateTimeToServer(values.instanteRequiredBob);
    values.zonedDateTimeBob = convertDateTimeToServer(values.zonedDateTimeBob);
    values.zonedDateTimeRequiredBob = convertDateTimeToServer(values.zonedDateTimeRequiredBob);

    if (errors.length === 0) {
      const entity = {
        ...fieldTestServiceClassAndJpaFilteringEntityEntity,
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
            id="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.home.createOrEditLabel"
            data-cy="FieldTestServiceClassAndJpaFilteringEntityCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.home.createOrEditLabel">
              Create or edit a FieldTestServiceClassAndJpaFilteringEntity
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : fieldTestServiceClassAndJpaFilteringEntityEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="field-test-service-class-and-jpa-filtering-entity-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput
                    id="field-test-service-class-and-jpa-filtering-entity-id"
                    type="text"
                    className="form-control"
                    name="id"
                    required
                    readOnly
                  />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="stringBobLabel" for="field-test-service-class-and-jpa-filtering-entity-stringBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringBob">
                    String Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-stringBob"
                  data-cy="stringBob"
                  type="text"
                  name="stringBob"
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-stringRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringRequiredBob">
                    String Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-stringRequiredBob"
                  data-cy="stringRequiredBob"
                  type="text"
                  name="stringRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMinlengthBobLabel" for="field-test-service-class-and-jpa-filtering-entity-stringMinlengthBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringMinlengthBob">
                    String Minlength Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-stringMinlengthBob"
                  data-cy="stringMinlengthBob"
                  type="text"
                  name="stringMinlengthBob"
                  validate={{
                    minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMaxlengthBobLabel" for="field-test-service-class-and-jpa-filtering-entity-stringMaxlengthBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringMaxlengthBob">
                    String Maxlength Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-stringMaxlengthBob"
                  data-cy="stringMaxlengthBob"
                  type="text"
                  name="stringMaxlengthBob"
                  validate={{
                    maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringPatternBobLabel" for="field-test-service-class-and-jpa-filtering-entity-stringPatternBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringPatternBob">
                    String Pattern Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-stringPatternBob"
                  data-cy="stringPatternBob"
                  type="text"
                  name="stringPatternBob"
                  validate={{
                    pattern: {
                      value: '^[a-zA-Z0-9]*$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerBobLabel" for="field-test-service-class-and-jpa-filtering-entity-integerBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerBob">
                    Integer Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-integerBob"
                  data-cy="integerBob"
                  type="string"
                  className="form-control"
                  name="integerBob"
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-integerRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerRequiredBob">
                    Integer Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-integerRequiredBob"
                  data-cy="integerRequiredBob"
                  type="string"
                  className="form-control"
                  name="integerRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMinBobLabel" for="field-test-service-class-and-jpa-filtering-entity-integerMinBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerMinBob">
                    Integer Min Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-integerMinBob"
                  data-cy="integerMinBob"
                  type="string"
                  className="form-control"
                  name="integerMinBob"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMaxBobLabel" for="field-test-service-class-and-jpa-filtering-entity-integerMaxBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerMaxBob">
                    Integer Max Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-integerMaxBob"
                  data-cy="integerMaxBob"
                  type="string"
                  className="form-control"
                  name="integerMaxBob"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longBobLabel" for="field-test-service-class-and-jpa-filtering-entity-longBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longBob">Long Bob</Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-longBob"
                  data-cy="longBob"
                  type="string"
                  className="form-control"
                  name="longBob"
                />
              </AvGroup>
              <AvGroup>
                <Label id="longRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-longRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longRequiredBob">
                    Long Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-longRequiredBob"
                  data-cy="longRequiredBob"
                  type="string"
                  className="form-control"
                  name="longRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMinBobLabel" for="field-test-service-class-and-jpa-filtering-entity-longMinBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longMinBob">
                    Long Min Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-longMinBob"
                  data-cy="longMinBob"
                  type="string"
                  className="form-control"
                  name="longMinBob"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMaxBobLabel" for="field-test-service-class-and-jpa-filtering-entity-longMaxBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longMaxBob">
                    Long Max Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-longMaxBob"
                  data-cy="longMaxBob"
                  type="string"
                  className="form-control"
                  name="longMaxBob"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatBobLabel" for="field-test-service-class-and-jpa-filtering-entity-floatBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatBob">
                    Float Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-floatBob"
                  data-cy="floatBob"
                  type="string"
                  className="form-control"
                  name="floatBob"
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-floatRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatRequiredBob">
                    Float Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-floatRequiredBob"
                  data-cy="floatRequiredBob"
                  type="string"
                  className="form-control"
                  name="floatRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMinBobLabel" for="field-test-service-class-and-jpa-filtering-entity-floatMinBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatMinBob">
                    Float Min Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-floatMinBob"
                  data-cy="floatMinBob"
                  type="string"
                  className="form-control"
                  name="floatMinBob"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMaxBobLabel" for="field-test-service-class-and-jpa-filtering-entity-floatMaxBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatMaxBob">
                    Float Max Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-floatMaxBob"
                  data-cy="floatMaxBob"
                  type="string"
                  className="form-control"
                  name="floatMaxBob"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-doubleRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleRequiredBob">
                    Double Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-doubleRequiredBob"
                  data-cy="doubleRequiredBob"
                  type="string"
                  className="form-control"
                  name="doubleRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMinBobLabel" for="field-test-service-class-and-jpa-filtering-entity-doubleMinBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleMinBob">
                    Double Min Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-doubleMinBob"
                  data-cy="doubleMinBob"
                  type="string"
                  className="form-control"
                  name="doubleMinBob"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMaxBobLabel" for="field-test-service-class-and-jpa-filtering-entity-doubleMaxBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleMaxBob">
                    Double Max Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-doubleMaxBob"
                  data-cy="doubleMaxBob"
                  type="string"
                  className="form-control"
                  name="doubleMaxBob"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-bigDecimalRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalRequiredBob">
                    Big Decimal Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-bigDecimalRequiredBob"
                  data-cy="bigDecimalRequiredBob"
                  type="text"
                  name="bigDecimalRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMinBobLabel" for="field-test-service-class-and-jpa-filtering-entity-bigDecimalMinBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMinBob">
                    Big Decimal Min Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-bigDecimalMinBob"
                  data-cy="bigDecimalMinBob"
                  type="text"
                  name="bigDecimalMinBob"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMaxBobLabel" for="field-test-service-class-and-jpa-filtering-entity-bigDecimalMaxBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMaxBob">
                    Big Decimal Max Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-bigDecimalMaxBob"
                  data-cy="bigDecimalMaxBob"
                  type="text"
                  name="bigDecimalMaxBob"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateBobLabel" for="field-test-service-class-and-jpa-filtering-entity-localDateBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.localDateBob">
                    Local Date Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-localDateBob"
                  data-cy="localDateBob"
                  type="date"
                  className="form-control"
                  name="localDateBob"
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-localDateRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.localDateRequiredBob">
                    Local Date Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-localDateRequiredBob"
                  data-cy="localDateRequiredBob"
                  type="date"
                  className="form-control"
                  name="localDateRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instantBobLabel" for="field-test-service-class-and-jpa-filtering-entity-instantBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.instantBob">
                    Instant Bob
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-instantBob"
                  data-cy="instantBob"
                  type="datetime-local"
                  className="form-control"
                  name="instantBob"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestServiceClassAndJpaFilteringEntityEntity.instantBob)
                  }
                />
              </AvGroup>
              <AvGroup>
                <Label id="instanteRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-instanteRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.instanteRequiredBob">
                    Instante Required Bob
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-instanteRequiredBob"
                  data-cy="instanteRequiredBob"
                  type="datetime-local"
                  className="form-control"
                  name="instanteRequiredBob"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestServiceClassAndJpaFilteringEntityEntity.instanteRequiredBob)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeBobLabel" for="field-test-service-class-and-jpa-filtering-entity-zonedDateTimeBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeBob">
                    Zoned Date Time Bob
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-zonedDateTimeBob"
                  data-cy="zonedDateTimeBob"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeBob"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestServiceClassAndJpaFilteringEntityEntity.zonedDateTimeBob)
                  }
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-zonedDateTimeRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeRequiredBob">
                    Zoned Date Time Required Bob
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-zonedDateTimeRequiredBob"
                  data-cy="zonedDateTimeRequiredBob"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeRequiredBob"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestServiceClassAndJpaFilteringEntityEntity.zonedDateTimeRequiredBob)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="durationBobLabel" for="field-test-service-class-and-jpa-filtering-entity-durationBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.durationBob">
                    Duration Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-durationBob"
                  data-cy="durationBob"
                  type="text"
                  name="durationBob"
                />
              </AvGroup>
              <AvGroup>
                <Label id="durationRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-durationRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.durationRequiredBob">
                    Duration Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-durationRequiredBob"
                  data-cy="durationRequiredBob"
                  type="text"
                  name="durationRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup check>
                <Label id="booleanBobLabel">
                  <AvInput
                    id="field-test-service-class-and-jpa-filtering-entity-booleanBob"
                    data-cy="booleanBob"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanBob"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.booleanBob">
                    Boolean Bob
                  </Translate>
                </Label>
              </AvGroup>
              <AvGroup check>
                <Label id="booleanRequiredBobLabel">
                  <AvInput
                    id="field-test-service-class-and-jpa-filtering-entity-booleanRequiredBob"
                    data-cy="booleanRequiredBob"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanRequiredBob"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.booleanRequiredBob">
                    Boolean Required Bob
                  </Translate>
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="enumBobLabel" for="field-test-service-class-and-jpa-filtering-entity-enumBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.enumBob">Enum Bob</Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-enumBob"
                  data-cy="enumBob"
                  type="select"
                  className="form-control"
                  name="enumBob"
                  value={(!isNew && fieldTestServiceClassAndJpaFilteringEntityEntity.enumBob) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="enumRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-enumRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.enumRequiredBob">
                    Enum Required Bob
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-enumRequiredBob"
                  data-cy="enumRequiredBob"
                  type="select"
                  className="form-control"
                  name="enumRequiredBob"
                  value={(!isNew && fieldTestServiceClassAndJpaFilteringEntityEntity.enumRequiredBob) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="uuidBobLabel" for="field-test-service-class-and-jpa-filtering-entity-uuidBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.uuidBob">Uuid Bob</Translate>
                </Label>
                <AvField id="field-test-service-class-and-jpa-filtering-entity-uuidBob" data-cy="uuidBob" type="text" name="uuidBob" />
              </AvGroup>
              <AvGroup>
                <Label id="uuidRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-uuidRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.uuidRequiredBob">
                    Uuid Required Bob
                  </Translate>
                </Label>
                <AvField
                  id="field-test-service-class-and-jpa-filtering-entity-uuidRequiredBob"
                  data-cy="uuidRequiredBob"
                  type="text"
                  name="uuidRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageBobLabel" for="byteImageBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageBob">
                      Byte Image Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteImageBob ? (
                    <div>
                      {byteImageBobContentType ? (
                        <a onClick={openFile(byteImageBobContentType, byteImageBob)}>
                          <img src={`data:${byteImageBobContentType};base64,${byteImageBob}`} style={{ maxHeight: '100px' }} />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageBobContentType}, {byteSize(byteImageBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageBob"
                    data-cy="byteImageBob"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageBob')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageBob" value={byteImageBob} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageRequiredBobLabel" for="byteImageRequiredBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBob">
                      Byte Image Required Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteImageRequiredBob ? (
                    <div>
                      {byteImageRequiredBobContentType ? (
                        <a onClick={openFile(byteImageRequiredBobContentType, byteImageRequiredBob)}>
                          <img
                            src={`data:${byteImageRequiredBobContentType};base64,${byteImageRequiredBob}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageRequiredBobContentType}, {byteSize(byteImageRequiredBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageRequiredBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageRequiredBob"
                    data-cy="byteImageRequiredBob"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageRequiredBob')}
                    accept="image/*"
                  />
                  <AvInput
                    type="hidden"
                    name="byteImageRequiredBob"
                    value={byteImageRequiredBob}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMinbytesBobLabel" for="byteImageMinbytesBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBob">
                      Byte Image Minbytes Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMinbytesBob ? (
                    <div>
                      {byteImageMinbytesBobContentType ? (
                        <a onClick={openFile(byteImageMinbytesBobContentType, byteImageMinbytesBob)}>
                          <img
                            src={`data:${byteImageMinbytesBobContentType};base64,${byteImageMinbytesBob}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMinbytesBobContentType}, {byteSize(byteImageMinbytesBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMinbytesBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMinbytesBob"
                    data-cy="byteImageMinbytesBob"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMinbytesBob')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMinbytesBob" value={byteImageMinbytesBob} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMaxbytesBobLabel" for="byteImageMaxbytesBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBob">
                      Byte Image Maxbytes Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMaxbytesBob ? (
                    <div>
                      {byteImageMaxbytesBobContentType ? (
                        <a onClick={openFile(byteImageMaxbytesBobContentType, byteImageMaxbytesBob)}>
                          <img
                            src={`data:${byteImageMaxbytesBobContentType};base64,${byteImageMaxbytesBob}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMaxbytesBobContentType}, {byteSize(byteImageMaxbytesBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMaxbytesBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMaxbytesBob"
                    data-cy="byteImageMaxbytesBob"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMaxbytesBob')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMaxbytesBob" value={byteImageMaxbytesBob} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyBobLabel" for="byteAnyBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyBob">
                      Byte Any Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyBob ? (
                    <div>
                      {byteAnyBobContentType ? (
                        <a onClick={openFile(byteAnyBobContentType, byteAnyBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyBobContentType}, {byteSize(byteAnyBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input id="file_byteAnyBob" data-cy="byteAnyBob" type="file" onChange={onBlobChange(false, 'byteAnyBob')} />
                  <AvInput type="hidden" name="byteAnyBob" value={byteAnyBob} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyRequiredBobLabel" for="byteAnyRequiredBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBob">
                      Byte Any Required Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyRequiredBob ? (
                    <div>
                      {byteAnyRequiredBobContentType ? (
                        <a onClick={openFile(byteAnyRequiredBobContentType, byteAnyRequiredBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyRequiredBobContentType}, {byteSize(byteAnyRequiredBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyRequiredBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyRequiredBob"
                    data-cy="byteAnyRequiredBob"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyRequiredBob')}
                  />
                  <AvInput
                    type="hidden"
                    name="byteAnyRequiredBob"
                    value={byteAnyRequiredBob}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMinbytesBobLabel" for="byteAnyMinbytesBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBob">
                      Byte Any Minbytes Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMinbytesBob ? (
                    <div>
                      {byteAnyMinbytesBobContentType ? (
                        <a onClick={openFile(byteAnyMinbytesBobContentType, byteAnyMinbytesBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMinbytesBobContentType}, {byteSize(byteAnyMinbytesBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMinbytesBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMinbytesBob"
                    data-cy="byteAnyMinbytesBob"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMinbytesBob')}
                  />
                  <AvInput type="hidden" name="byteAnyMinbytesBob" value={byteAnyMinbytesBob} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMaxbytesBobLabel" for="byteAnyMaxbytesBob">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBob">
                      Byte Any Maxbytes Bob
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMaxbytesBob ? (
                    <div>
                      {byteAnyMaxbytesBobContentType ? (
                        <a onClick={openFile(byteAnyMaxbytesBobContentType, byteAnyMaxbytesBob)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMaxbytesBobContentType}, {byteSize(byteAnyMaxbytesBob)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMaxbytesBob')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMaxbytesBob"
                    data-cy="byteAnyMaxbytesBob"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMaxbytesBob')}
                  />
                  <AvInput type="hidden" name="byteAnyMaxbytesBob" value={byteAnyMaxbytesBob} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <Label id="byteTextBobLabel" for="field-test-service-class-and-jpa-filtering-entity-byteTextBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteTextBob">
                    Byte Text Bob
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-byteTextBob"
                  data-cy="byteTextBob"
                  type="textarea"
                  name="byteTextBob"
                />
              </AvGroup>
              <AvGroup>
                <Label id="byteTextRequiredBobLabel" for="field-test-service-class-and-jpa-filtering-entity-byteTextRequiredBob">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteTextRequiredBob">
                    Byte Text Required Bob
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-service-class-and-jpa-filtering-entity-byteTextRequiredBob"
                  data-cy="byteTextRequiredBob"
                  type="textarea"
                  name="byteTextRequiredBob"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/field-test-service-class-and-jpa-filtering-entity" replace color="info">
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
  fieldTestServiceClassAndJpaFilteringEntityEntity: storeState.fieldTestServiceClassAndJpaFilteringEntity.entity,
  loading: storeState.fieldTestServiceClassAndJpaFilteringEntity.loading,
  updating: storeState.fieldTestServiceClassAndJpaFilteringEntity.updating,
  updateSuccess: storeState.fieldTestServiceClassAndJpaFilteringEntity.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestServiceClassAndJpaFilteringEntityUpdate);
