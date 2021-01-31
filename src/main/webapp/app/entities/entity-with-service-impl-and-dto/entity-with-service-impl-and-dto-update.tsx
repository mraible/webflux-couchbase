import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-impl-and-dto.reducer';
import { IEntityWithServiceImplAndDTO } from 'app/shared/model/entity-with-service-impl-and-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceImplAndDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithServiceImplAndDTOUpdate = (props: IEntityWithServiceImplAndDTOUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { entityWithServiceImplAndDTOEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/entity-with-service-impl-and-dto');
  };

  useEffect(() => {
    if (isNew) {
      props.reset();
    } else {
      props.getEntity(props.match.params.id);
    }
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const saveEntity = (event, errors, values) => {
    if (errors.length === 0) {
      const entity = {
        ...entityWithServiceImplAndDTOEntity,
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
            id="sampleCouchbaseNoCacheApp.entityWithServiceImplAndDTO.home.createOrEditLabel"
            data-cy="EntityWithServiceImplAndDTOCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplAndDTO.home.createOrEditLabel">
              Create or edit a EntityWithServiceImplAndDTO
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : entityWithServiceImplAndDTOEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="entity-with-service-impl-and-dto-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput id="entity-with-service-impl-and-dto-id" type="text" className="form-control" name="id" required readOnly />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="louisLabel" for="entity-with-service-impl-and-dto-louis">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplAndDTO.louis">Louis</Translate>
                </Label>
                <AvField id="entity-with-service-impl-and-dto-louis" data-cy="louis" type="text" name="louis" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/entity-with-service-impl-and-dto" replace color="info">
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
  entityWithServiceImplAndDTOEntity: storeState.entityWithServiceImplAndDTO.entity,
  loading: storeState.entityWithServiceImplAndDTO.loading,
  updating: storeState.entityWithServiceImplAndDTO.updating,
  updateSuccess: storeState.entityWithServiceImplAndDTO.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceImplAndDTOUpdate);
