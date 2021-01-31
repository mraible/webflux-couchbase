import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-class-and-pagination.reducer';
import { IEntityWithServiceClassAndPagination } from 'app/shared/model/entity-with-service-class-and-pagination.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceClassAndPaginationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithServiceClassAndPaginationUpdate = (props: IEntityWithServiceClassAndPaginationUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { entityWithServiceClassAndPaginationEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/entity-with-service-class-and-pagination' + props.location.search);
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
        ...entityWithServiceClassAndPaginationEntity,
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
            id="sampleCouchbaseNoCacheApp.entityWithServiceClassAndPagination.home.createOrEditLabel"
            data-cy="EntityWithServiceClassAndPaginationCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceClassAndPagination.home.createOrEditLabel">
              Create or edit a EntityWithServiceClassAndPagination
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : entityWithServiceClassAndPaginationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="entity-with-service-class-and-pagination-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput
                    id="entity-with-service-class-and-pagination-id"
                    type="text"
                    className="form-control"
                    name="id"
                    required
                    readOnly
                  />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="enzoLabel" for="entity-with-service-class-and-pagination-enzo">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceClassAndPagination.enzo">Enzo</Translate>
                </Label>
                <AvField id="entity-with-service-class-and-pagination-enzo" data-cy="enzo" type="text" name="enzo" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/entity-with-service-class-and-pagination" replace color="info">
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
  entityWithServiceClassAndPaginationEntity: storeState.entityWithServiceClassAndPagination.entity,
  loading: storeState.entityWithServiceClassAndPagination.loading,
  updating: storeState.entityWithServiceClassAndPagination.updating,
  updateSuccess: storeState.entityWithServiceClassAndPagination.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceClassAndPaginationUpdate);
