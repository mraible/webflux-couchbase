import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { setFileData, byteSize, Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { IDivision } from 'app/shared/model/test-root/division.model';
import { getEntities as getDivisions } from 'app/entities/test-root/division/division.reducer';
import { getEntity, updateEntity, createEntity, setBlob, reset } from './place.reducer';
import { IPlace } from 'app/shared/model/test-root/place.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IPlaceUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PlaceUpdate = (props: IPlaceUpdateProps) => {
  const [idspreferredDivision, setIdspreferredDivision] = useState([]);
  const [ownerId, setOwnerId] = useState('0');
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { placeEntity, divisions, loading, updating } = props;

  const { description } = placeEntity;

  const handleClose = () => {
    props.history.push('/place');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }

    props.getDivisions();
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
    if (errors.length === 0) {
      const entity = {
        ...placeEntity,
        ...values,
        preferredDivisions: mapIdList(values.preferredDivisions),
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
          <h2 id="sampleCouchbaseNoCacheApp.testRootPlace.home.createOrEditLabel" data-cy="PlaceCreateUpdateHeading">
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.home.createOrEditLabel">Create or edit a Place</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : placeEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="place-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="place-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="nameLabel" for="place-name">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.name">Name</Translate>
                </Label>
                <AvField
                  id="place-name"
                  data-cy="name"
                  type="text"
                  name="name"
                  validate={{
                    required: { value: true, errorMessage: translate('entity.validation.required') },
                  }}
                />
              </AvGroup>
              <AvGroup>
                <Label id="numberOfSeatsLabel" for="place-numberOfSeats">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.numberOfSeats">Number Of Seats</Translate>
                </Label>
                <AvField id="place-numberOfSeats" data-cy="numberOfSeats" type="string" className="form-control" name="numberOfSeats" />
              </AvGroup>
              <AvGroup>
                <Label id="shortNameLabel" for="place-shortName">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.shortName">Short Name</Translate>
                </Label>
                <AvField id="place-shortName" data-cy="shortName" type="text" name="shortName" />
              </AvGroup>
              <AvGroup>
                <Label id="colorBackgroundLabel" for="place-colorBackground">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.colorBackground">Color Background</Translate>
                </Label>
                <AvField id="place-colorBackground" data-cy="colorBackground" type="text" name="colorBackground" />
              </AvGroup>
              <AvGroup>
                <Label id="colorTextLabel" for="place-colorText">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.colorText">Color Text</Translate>
                </Label>
                <AvField id="place-colorText" data-cy="colorText" type="text" name="colorText" />
              </AvGroup>
              <AvGroup>
                <Label id="descriptionLabel" for="place-description">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.description">Description</Translate>
                </Label>
                <AvInput id="place-description" data-cy="description" type="textarea" name="description" />
              </AvGroup>
              <AvGroup>
                <Label for="place-preferredDivision">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.preferredDivision">Preferred Division</Translate>
                </Label>
                <AvInput
                  id="place-preferredDivision"
                  data-cy="preferredDivision"
                  type="select"
                  multiple
                  className="form-control"
                  name="preferredDivisions"
                  value={!isNew && placeEntity.preferredDivisions && placeEntity.preferredDivisions.map(e => e.id)}
                >
                  <option value="" key="0" />
                  {divisions
                    ? divisions.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <AvGroup>
                <Label for="place-owner">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.owner">Owner</Translate>
                </Label>
                <AvInput id="place-owner" data-cy="owner" type="select" className="form-control" name="owner.id">
                  <option value="" key="0" />
                  {divisions
                    ? divisions.map(otherEntity => (
                        <option value={otherEntity.id} key={otherEntity.id}>
                          {otherEntity.name}
                        </option>
                      ))
                    : null}
                </AvInput>
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/place" replace color="info">
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
  divisions: storeState.division.entities,
  placeEntity: storeState.place.entity,
  loading: storeState.place.loading,
  updating: storeState.place.updating,
  updateSuccess: storeState.place.updateSuccess,
});

const mapDispatchToProps = {
  getDivisions,
  getEntity,
  updateEntity,
  setBlob,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PlaceUpdate);
