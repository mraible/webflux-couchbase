import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IPlace } from 'app/shared/model/test-root/place.model';
import { getEntities as getPlaces } from 'app/entities/test-root/place/place.reducer';
import { getEntity, updateEntity, createEntity, reset } from './division.reducer';
import { IDivision } from 'app/shared/model/test-root/division.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IDivisionUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const DivisionUpdate = (props: IDivisionUpdateProps) => {
  const [divisionsPlaceId, setDivisionsPlaceId] = useState('0');
  const [preferredPlaceId, setPreferredPlaceId] = useState('0');
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { divisionEntity, places, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/division');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getPlaces();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...divisionEntity,
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
          <h2 id="sampleCouchbaseNoCacheApp.testRootDivision.home.createOrEditLabel" data-cy="DivisionCreateUpdateHeading">
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.home.createOrEditLabel">Create or edit a Division</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : divisionEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="division-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="division-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="division-name">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.name">Name</Translate>
                </Label>
                <AvField
                  id="division-name"
                  data-cy="name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="shortNameLabel" for="division-shortName">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.shortName">Short Name</Translate>
                </Label>
                <AvField id="division-shortName" data-cy="shortName" type="text" name="shortName" validate={{}} />
              </AvGroup>
              <AvGroup>
                <Label id="numberOfPeopleLabel" for="division-numberOfPeople">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.numberOfPeople">Number Of People</Translate>
                </Label>
                <AvField
                  id="division-numberOfPeople"
                  data-cy="numberOfPeople"
                  type="string"
                  className="form-control"
                  name="numberOfPeople"
                />
              </AvGroup>
              <AvGroup>
                <Label id="divisionTypeLabel" for="division-divisionType">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.divisionType">Division Type</Translate>
                </Label>
                <AvInput
                  id="division-divisionType"
                  data-cy="divisionType"
                  type="select"
                  className="form-control"
                  name="divisionType"
                  value={(!isNew && divisionEntity.divisionType) || 'SCHOOL'}
                >
                  <option value="SCHOOL">{translate('sampleCouchbaseNoCacheApp.DivisionType.SCHOOL')}</option>
                  <option value="CLASS">{translate('sampleCouchbaseNoCacheApp.DivisionType.CLASS')}</option>
                  <option value="SUBGROUP">{translate('sampleCouchbaseNoCacheApp.DivisionType.SUBGROUP')}</option>
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label id="colorBackgroundLabel" for="division-colorBackground">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.colorBackground">Color Background</Translate>
                </Label>
                <AvField id="division-colorBackground" data-cy="colorBackground" type="text" name="colorBackground" />
              </AvGroup>
              <AvGroup>
                <Label id="colorTextLabel" for="division-colorText">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.colorText">Color Text</Translate>
                </Label>
                <AvField id="division-colorText" data-cy="colorText" type="text" name="colorText" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/division" replace color="info">
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
  places: storeState.place.entities,
  divisionEntity: storeState.division.entity,
  loading: storeState.division.loading,
  updating: storeState.division.updating,
  updateSuccess: storeState.division.updateSuccess,
});

const mapDispatchToProps = {
  getPlaces,
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(DivisionUpdate);
