import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-impl-pagination-and-dto.reducer';
import { IEntityWithServiceImplPaginationAndDTO } from 'app/shared/model/entity-with-service-impl-pagination-and-dto.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceImplPaginationAndDTOUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithServiceImplPaginationAndDTOUpdate = (props: IEntityWithServiceImplPaginationAndDTOUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { entityWithServiceImplPaginationAndDTOEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/entity-with-service-impl-pagination-and-dto' + props.location.search);
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
        ...entityWithServiceImplPaginationAndDTOEntity,
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
            id="sampleCouchbaseNoCacheApp.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel"
            data-cy="EntityWithServiceImplPaginationAndDTOCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplPaginationAndDTO.home.createOrEditLabel">
              Create or edit a EntityWithServiceImplPaginationAndDTO
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : entityWithServiceImplPaginationAndDTOEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="entity-with-service-impl-pagination-and-dto-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput
                    id="entity-with-service-impl-pagination-and-dto-id"
                    type="text"
                    className="form-control"
                    name="id"
                    required
                    readOnly
                  />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="theoLabel" for="entity-with-service-impl-pagination-and-dto-theo">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplPaginationAndDTO.theo">Theo</Translate>
                </Label>
                <AvField id="entity-with-service-impl-pagination-and-dto-theo" data-cy="theo" type="text" name="theo" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/entity-with-service-impl-pagination-and-dto" replace color="info">
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
  entityWithServiceImplPaginationAndDTOEntity: storeState.entityWithServiceImplPaginationAndDTO.entity,
  loading: storeState.entityWithServiceImplPaginationAndDTO.loading,
  updating: storeState.entityWithServiceImplPaginationAndDTO.updating,
  updateSuccess: storeState.entityWithServiceImplPaginationAndDTO.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceImplPaginationAndDTOUpdate);
