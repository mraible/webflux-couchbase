import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { setFileData, openFile, byteSize, Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, setBlob, reset } from './field-test-mapstruct-and-service-class-entity.reducer';
import { IFieldTestMapstructAndServiceClassEntity } from 'app/shared/model/field-test-mapstruct-and-service-class-entity.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IFieldTestMapstructAndServiceClassEntityUpdateProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const FieldTestMapstructAndServiceClassEntityUpdate = (props: IFieldTestMapstructAndServiceClassEntityUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { fieldTestMapstructAndServiceClassEntityEntity, loading, updating } = props;

  const {
    byteImageEva,
    byteImageEvaContentType,
    byteImageRequiredEva,
    byteImageRequiredEvaContentType,
    byteImageMinbytesEva,
    byteImageMinbytesEvaContentType,
    byteImageMaxbytesEva,
    byteImageMaxbytesEvaContentType,
    byteAnyEva,
    byteAnyEvaContentType,
    byteAnyRequiredEva,
    byteAnyRequiredEvaContentType,
    byteAnyMinbytesEva,
    byteAnyMinbytesEvaContentType,
    byteAnyMaxbytesEva,
    byteAnyMaxbytesEvaContentType,
    byteTextEva,
    byteTextRequiredEva,
  } = fieldTestMapstructAndServiceClassEntityEntity;

  const handleClose = () => {
    props.history.push('/field-test-mapstruct-and-service-class-entity');
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
    values.instantEva = convertDateTimeToServer(values.instantEva);
    values.instanteRequiredEva = convertDateTimeToServer(values.instanteRequiredEva);
    values.zonedDateTimeEva = convertDateTimeToServer(values.zonedDateTimeEva);
    values.zonedDateTimeRequiredEva = convertDateTimeToServer(values.zonedDateTimeRequiredEva);

    if (errors.length === 0) {
      const entity = {
        ...fieldTestMapstructAndServiceClassEntityEntity,
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
            id="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.home.createOrEditLabel"
            data-cy="FieldTestMapstructAndServiceClassEntityCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.home.createOrEditLabel">
              Create or edit a FieldTestMapstructAndServiceClassEntity
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : fieldTestMapstructAndServiceClassEntityEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="field-test-mapstruct-and-service-class-entity-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput
                    id="field-test-mapstruct-and-service-class-entity-id"
                    type="text"
                    className="form-control"
                    name="id"
                    required
                    readOnly
                  />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="stringEvaLabel" for="field-test-mapstruct-and-service-class-entity-stringEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringEva">String Eva</Translate>
                </Label>
                <AvField id="field-test-mapstruct-and-service-class-entity-stringEva" data-cy="stringEva" type="text" name="stringEva" />
              </AvGroup>
              <AvGroup>
                <Label id="stringRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-stringRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringRequiredEva">
                    String Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-stringRequiredEva"
                  data-cy="stringRequiredEva"
                  type="text"
                  name="stringRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMinlengthEvaLabel" for="field-test-mapstruct-and-service-class-entity-stringMinlengthEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringMinlengthEva">
                    String Minlength Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-stringMinlengthEva"
                  data-cy="stringMinlengthEva"
                  type="text"
                  name="stringMinlengthEva"
                  validate={{
                    minLength: { value: 0, errorMessage: translate('entity.validation.minlength', { min: 0 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringMaxlengthEvaLabel" for="field-test-mapstruct-and-service-class-entity-stringMaxlengthEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringMaxlengthEva">
                    String Maxlength Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-stringMaxlengthEva"
                  data-cy="stringMaxlengthEva"
                  type="text"
                  name="stringMaxlengthEva"
                  validate={{
                    maxLength: { value: 20, errorMessage: translate('entity.validation.maxlength', { max: 20 }) },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="stringPatternEvaLabel" for="field-test-mapstruct-and-service-class-entity-stringPatternEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringPatternEva">
                    String Pattern Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-stringPatternEva"
                  data-cy="stringPatternEva"
                  type="text"
                  name="stringPatternEva"
                  validate={{
                    pattern: {
                      value: '^[a-zA-Z0-9]*$',
                      errorMessage: translate('entity.validation.pattern', { pattern: '^[a-zA-Z0-9]*$' }),
                    },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerEvaLabel" for="field-test-mapstruct-and-service-class-entity-integerEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerEva">
                    Integer Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-integerEva"
                  data-cy="integerEva"
                  type="string"
                  className="form-control"
                  name="integerEva"
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-integerRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerRequiredEva">
                    Integer Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-integerRequiredEva"
                  data-cy="integerRequiredEva"
                  type="string"
                  className="form-control"
                  name="integerRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMinEvaLabel" for="field-test-mapstruct-and-service-class-entity-integerMinEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerMinEva">
                    Integer Min Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-integerMinEva"
                  data-cy="integerMinEva"
                  type="string"
                  className="form-control"
                  name="integerMinEva"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="integerMaxEvaLabel" for="field-test-mapstruct-and-service-class-entity-integerMaxEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerMaxEva">
                    Integer Max Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-integerMaxEva"
                  data-cy="integerMaxEva"
                  type="string"
                  className="form-control"
                  name="integerMaxEva"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longEvaLabel" for="field-test-mapstruct-and-service-class-entity-longEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longEva">Long Eva</Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-longEva"
                  data-cy="longEva"
                  type="string"
                  className="form-control"
                  name="longEva"
                />
              </AvGroup>
              <AvGroup>
                <Label id="longRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-longRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longRequiredEva">
                    Long Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-longRequiredEva"
                  data-cy="longRequiredEva"
                  type="string"
                  className="form-control"
                  name="longRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMinEvaLabel" for="field-test-mapstruct-and-service-class-entity-longMinEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longMinEva">
                    Long Min Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-longMinEva"
                  data-cy="longMinEva"
                  type="string"
                  className="form-control"
                  name="longMinEva"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="longMaxEvaLabel" for="field-test-mapstruct-and-service-class-entity-longMaxEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longMaxEva">
                    Long Max Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-longMaxEva"
                  data-cy="longMaxEva"
                  type="string"
                  className="form-control"
                  name="longMaxEva"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatEvaLabel" for="field-test-mapstruct-and-service-class-entity-floatEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatEva">Float Eva</Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-floatEva"
                  data-cy="floatEva"
                  type="string"
                  className="form-control"
                  name="floatEva"
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-floatRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatRequiredEva">
                    Float Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-floatRequiredEva"
                  data-cy="floatRequiredEva"
                  type="string"
                  className="form-control"
                  name="floatRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMinEvaLabel" for="field-test-mapstruct-and-service-class-entity-floatMinEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatMinEva">
                    Float Min Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-floatMinEva"
                  data-cy="floatMinEva"
                  type="string"
                  className="form-control"
                  name="floatMinEva"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="floatMaxEvaLabel" for="field-test-mapstruct-and-service-class-entity-floatMaxEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatMaxEva">
                    Float Max Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-floatMaxEva"
                  data-cy="floatMaxEva"
                  type="string"
                  className="form-control"
                  name="floatMaxEva"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-doubleRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleRequiredEva">
                    Double Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-doubleRequiredEva"
                  data-cy="doubleRequiredEva"
                  type="string"
                  className="form-control"
                  name="doubleRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMinEvaLabel" for="field-test-mapstruct-and-service-class-entity-doubleMinEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleMinEva">
                    Double Min Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-doubleMinEva"
                  data-cy="doubleMinEva"
                  type="string"
                  className="form-control"
                  name="doubleMinEva"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="doubleMaxEvaLabel" for="field-test-mapstruct-and-service-class-entity-doubleMaxEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleMaxEva">
                    Double Max Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-doubleMaxEva"
                  data-cy="doubleMaxEva"
                  type="string"
                  className="form-control"
                  name="doubleMaxEva"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-bigDecimalRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalRequiredEva">
                    Big Decimal Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-bigDecimalRequiredEva"
                  data-cy="bigDecimalRequiredEva"
                  type="text"
                  name="bigDecimalRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMinEvaLabel" for="field-test-mapstruct-and-service-class-entity-bigDecimalMinEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalMinEva">
                    Big Decimal Min Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-bigDecimalMinEva"
                  data-cy="bigDecimalMinEva"
                  type="text"
                  name="bigDecimalMinEva"
                  validate={{
                    min: { value: 0, errorMessage: translate('entity.validation.min', { min: 0 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="bigDecimalMaxEvaLabel" for="field-test-mapstruct-and-service-class-entity-bigDecimalMaxEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalMaxEva">
                    Big Decimal Max Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-bigDecimalMaxEva"
                  data-cy="bigDecimalMaxEva"
                  type="text"
                  name="bigDecimalMaxEva"
                  validate={{
                    max: { value: 100, errorMessage: translate('entity.validation.max', { max: 100 }) },
                    number: { value: true, errorMessage: translate('entity.validation.number') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateEvaLabel" for="field-test-mapstruct-and-service-class-entity-localDateEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.localDateEva">
                    Local Date Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-localDateEva"
                  data-cy="localDateEva"
                  type="date"
                  className="form-control"
                  name="localDateEva"
                />
              </AvGroup>
              <AvGroup>
                <Label id="localDateRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-localDateRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.localDateRequiredEva">
                    Local Date Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-localDateRequiredEva"
                  data-cy="localDateRequiredEva"
                  type="date"
                  className="form-control"
                  name="localDateRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="instantEvaLabel" for="field-test-mapstruct-and-service-class-entity-instantEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.instantEva">
                    Instant Eva
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-instantEva"
                  data-cy="instantEva"
                  type="datetime-local"
                  className="form-control"
                  name="instantEva"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestMapstructAndServiceClassEntityEntity.instantEva)
                  }
                />
              </AvGroup>
              <AvGroup>
                <Label id="instanteRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-instanteRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.instanteRequiredEva">
                    Instante Required Eva
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-instanteRequiredEva"
                  data-cy="instanteRequiredEva"
                  type="datetime-local"
                  className="form-control"
                  name="instanteRequiredEva"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestMapstructAndServiceClassEntityEntity.instanteRequiredEva)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeEvaLabel" for="field-test-mapstruct-and-service-class-entity-zonedDateTimeEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.zonedDateTimeEva">
                    Zoned Date Time Eva
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-zonedDateTimeEva"
                  data-cy="zonedDateTimeEva"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeEva"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestMapstructAndServiceClassEntityEntity.zonedDateTimeEva)
                  }
                />
              </AvGroup>
              <AvGroup>
                <Label id="zonedDateTimeRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-zonedDateTimeRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.zonedDateTimeRequiredEva">
                    Zoned Date Time Required Eva
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-zonedDateTimeRequiredEva"
                  data-cy="zonedDateTimeRequiredEva"
                  type="datetime-local"
                  className="form-control"
                  name="zonedDateTimeRequiredEva"
                  placeholder={'YYYY-MM-DD HH:mm'}
                  value={
                    isNew
                      ? displayDefaultDateTime()
                      : convertDateTimeFromServer(props.fieldTestMapstructAndServiceClassEntityEntity.zonedDateTimeRequiredEva)
                  }
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="durationEvaLabel" for="field-test-mapstruct-and-service-class-entity-durationEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.durationEva">
                    Duration Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-durationEva"
                  data-cy="durationEva"
                  type="text"
                  name="durationEva"
                />
              </AvGroup>
              <AvGroup>
                <Label id="durationRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-durationRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.durationRequiredEva">
                    Duration Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-durationRequiredEva"
                  data-cy="durationRequiredEva"
                  type="text"
                  name="durationRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup check>
                <Label id="booleanEvaLabel">
                  <AvInput
                    id="field-test-mapstruct-and-service-class-entity-booleanEva"
                    data-cy="booleanEva"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanEva"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.booleanEva">
                    Boolean Eva
                  </Translate>
                </Label>
              </AvGroup>
              <AvGroup check>
                <Label id="booleanRequiredEvaLabel">
                  <AvInput
                    id="field-test-mapstruct-and-service-class-entity-booleanRequiredEva"
                    data-cy="booleanRequiredEva"
                    type="checkbox"
                    className="form-check-input"
                    name="booleanRequiredEva"
                  />
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.booleanRequiredEva">
                    Boolean Required Eva
                  </Translate>
                </Label>
              </AvGroup>
              <AvGroup>
                <Label id="enumEvaLabel" for="field-test-mapstruct-and-service-class-entity-enumEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.enumEva">Enum Eva</Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-enumEva"
                  data-cy="enumEva"
                  type="select"
                  className="form-control"
                  name="enumEva"
                  value={(!isNew && fieldTestMapstructAndServiceClassEntityEntity.enumEva) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="enumRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-enumRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.enumRequiredEva">
                    Enum Required Eva
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-enumRequiredEva"
                  data-cy="enumRequiredEva"
                  type="select"
                  className="form-control"
                  name="enumRequiredEva"
                  value={(!isNew && fieldTestMapstructAndServiceClassEntityEntity.enumRequiredEva) || 'ENUM_VALUE_1'}
                >
                  <option value="ENUM_VALUE_1">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_1')}</option>
                  <option value="ENUM_VALUE_2">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_2')}</option>
                  <option value="ENUM_VALUE_3">{translate('sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.ENUM_VALUE_3')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="uuidEvaLabel" for="field-test-mapstruct-and-service-class-entity-uuidEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.uuidEva">Uuid Eva</Translate>
                </Label>
                <AvField id="field-test-mapstruct-and-service-class-entity-uuidEva" data-cy="uuidEva" type="text" name="uuidEva" />
              </AvGroup>
              <AvGroup>
                <Label id="uuidRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-uuidRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.uuidRequiredEva">
                    Uuid Required Eva
                  </Translate>
                </Label>
                <AvField
                  id="field-test-mapstruct-and-service-class-entity-uuidRequiredEva"
                  data-cy="uuidRequiredEva"
                  type="text"
                  name="uuidRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageEvaLabel" for="byteImageEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageEva">
                      Byte Image Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteImageEva ? (
                    <div>
                      {byteImageEvaContentType ? (
                        <a onClick={openFile(byteImageEvaContentType, byteImageEva)}>
                          <img src={`data:${byteImageEvaContentType};base64,${byteImageEva}`} style={{ maxHeight: '100px' }} />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageEvaContentType}, {byteSize(byteImageEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageEva"
                    data-cy="byteImageEva"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageEva')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageEva" value={byteImageEva} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageRequiredEvaLabel" for="byteImageRequiredEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageRequiredEva">
                      Byte Image Required Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteImageRequiredEva ? (
                    <div>
                      {byteImageRequiredEvaContentType ? (
                        <a onClick={openFile(byteImageRequiredEvaContentType, byteImageRequiredEva)}>
                          <img
                            src={`data:${byteImageRequiredEvaContentType};base64,${byteImageRequiredEva}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageRequiredEvaContentType}, {byteSize(byteImageRequiredEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageRequiredEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageRequiredEva"
                    data-cy="byteImageRequiredEva"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageRequiredEva')}
                    accept="image/*"
                  />
                  <AvInput
                    type="hidden"
                    name="byteImageRequiredEva"
                    value={byteImageRequiredEva}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMinbytesEvaLabel" for="byteImageMinbytesEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEva">
                      Byte Image Minbytes Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMinbytesEva ? (
                    <div>
                      {byteImageMinbytesEvaContentType ? (
                        <a onClick={openFile(byteImageMinbytesEvaContentType, byteImageMinbytesEva)}>
                          <img
                            src={`data:${byteImageMinbytesEvaContentType};base64,${byteImageMinbytesEva}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMinbytesEvaContentType}, {byteSize(byteImageMinbytesEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMinbytesEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMinbytesEva"
                    data-cy="byteImageMinbytesEva"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMinbytesEva')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMinbytesEva" value={byteImageMinbytesEva} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteImageMaxbytesEvaLabel" for="byteImageMaxbytesEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEva">
                      Byte Image Maxbytes Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteImageMaxbytesEva ? (
                    <div>
                      {byteImageMaxbytesEvaContentType ? (
                        <a onClick={openFile(byteImageMaxbytesEvaContentType, byteImageMaxbytesEva)}>
                          <img
                            src={`data:${byteImageMaxbytesEvaContentType};base64,${byteImageMaxbytesEva}`}
                            style={{ maxHeight: '100px' }}
                          />
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteImageMaxbytesEvaContentType}, {byteSize(byteImageMaxbytesEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteImageMaxbytesEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteImageMaxbytesEva"
                    data-cy="byteImageMaxbytesEva"
                    type="file"
                    onChange={onBlobChange(true, 'byteImageMaxbytesEva')}
                    accept="image/*"
                  />
                  <AvInput type="hidden" name="byteImageMaxbytesEva" value={byteImageMaxbytesEva} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyEvaLabel" for="byteAnyEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyEva">
                      Byte Any Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyEva ? (
                    <div>
                      {byteAnyEvaContentType ? (
                        <a onClick={openFile(byteAnyEvaContentType, byteAnyEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyEvaContentType}, {byteSize(byteAnyEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input id="file_byteAnyEva" data-cy="byteAnyEva" type="file" onChange={onBlobChange(false, 'byteAnyEva')} />
                  <AvInput type="hidden" name="byteAnyEva" value={byteAnyEva} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyRequiredEvaLabel" for="byteAnyRequiredEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEva">
                      Byte Any Required Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyRequiredEva ? (
                    <div>
                      {byteAnyRequiredEvaContentType ? (
                        <a onClick={openFile(byteAnyRequiredEvaContentType, byteAnyRequiredEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyRequiredEvaContentType}, {byteSize(byteAnyRequiredEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyRequiredEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyRequiredEva"
                    data-cy="byteAnyRequiredEva"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyRequiredEva')}
                  />
                  <AvInput
                    type="hidden"
                    name="byteAnyRequiredEva"
                    value={byteAnyRequiredEva}
                    validate={{
                      required: { value: true, errorMessage: translate('entity.validation.required') },
                    }}
                  />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMinbytesEvaLabel" for="byteAnyMinbytesEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEva">
                      Byte Any Minbytes Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMinbytesEva ? (
                    <div>
                      {byteAnyMinbytesEvaContentType ? (
                        <a onClick={openFile(byteAnyMinbytesEvaContentType, byteAnyMinbytesEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMinbytesEvaContentType}, {byteSize(byteAnyMinbytesEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMinbytesEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMinbytesEva"
                    data-cy="byteAnyMinbytesEva"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMinbytesEva')}
                  />
                  <AvInput type="hidden" name="byteAnyMinbytesEva" value={byteAnyMinbytesEva} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <AvGroup>
                  <Label id="byteAnyMaxbytesEvaLabel" for="byteAnyMaxbytesEva">
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEva">
                      Byte Any Maxbytes Eva
                    </Translate>
                  </Label>
                  <br />
                  {byteAnyMaxbytesEva ? (
                    <div>
                      {byteAnyMaxbytesEvaContentType ? (
                        <a onClick={openFile(byteAnyMaxbytesEvaContentType, byteAnyMaxbytesEva)}>
                          <Translate contentKey="entity.action.open">Open</Translate>
                        </a>
                      ) : null}
                      <br />
                      <Row>
                        <Col md="11">
                          <span>
                            {byteAnyMaxbytesEvaContentType}, {byteSize(byteAnyMaxbytesEva)}
                          </span>
                        </Col>
                        <Col md="1">
                          <Button color="danger" onClick={clearBlob('byteAnyMaxbytesEva')}>
                            <FontAwesomeIcon icon="times-circle" />
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ) : null}
                  <input
                    id="file_byteAnyMaxbytesEva"
                    data-cy="byteAnyMaxbytesEva"
                    type="file"
                    onChange={onBlobChange(false, 'byteAnyMaxbytesEva')}
                  />
                  <AvInput type="hidden" name="byteAnyMaxbytesEva" value={byteAnyMaxbytesEva} validate={{}} />
                </AvGroup>
              </AvGroup>
              <AvGroup>
                <Label id="byteTextEvaLabel" for="field-test-mapstruct-and-service-class-entity-byteTextEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteTextEva">
                    Byte Text Eva
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-byteTextEva"
                  data-cy="byteTextEva"
                  type="textarea"
                  name="byteTextEva"
                />
              </AvGroup>
              <AvGroup>
                <Label id="byteTextRequiredEvaLabel" for="field-test-mapstruct-and-service-class-entity-byteTextRequiredEva">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteTextRequiredEva">
                    Byte Text Required Eva
                  </Translate>
                </Label>
                <AvInput
                  id="field-test-mapstruct-and-service-class-entity-byteTextRequiredEva"
                  data-cy="byteTextRequiredEva"
                  type="textarea"
                  name="byteTextRequiredEva"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/field-test-mapstruct-and-service-class-entity" replace color="info">
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
  fieldTestMapstructAndServiceClassEntityEntity: storeState.fieldTestMapstructAndServiceClassEntity.entity,
  loading: storeState.fieldTestMapstructAndServiceClassEntity.loading,
  updating: storeState.fieldTestMapstructAndServiceClassEntity.updating,
  updateSuccess: storeState.fieldTestMapstructAndServiceClassEntity.updateSuccess,
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

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestMapstructAndServiceClassEntityUpdate);
