import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col, Label } from 'reactstrap';
import { AvFeedback, AvForm, AvGroup, AvInput, AvField } from 'availity-reactstrap-validation';
import { Translate, translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IRootState } from 'app/shared/reducers';

import { getEntity, updateEntity, createEntity, reset } from './entity-with-service-impl-and-pagination.reducer';
import { IEntityWithServiceImplAndPagination } from 'app/shared/model/entity-with-service-impl-and-pagination.model';
import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';

export interface IEntityWithServiceImplAndPaginationUpdateProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithServiceImplAndPaginationUpdate = (props: IEntityWithServiceImplAndPaginationUpdateProps) => {
  const [isNew] = useState(!props.match.params || !props.match.params.id);

  const { entityWithServiceImplAndPaginationEntity, loading, updating } = props;

  const handleClose = () => {
    props.history.push('/entity-with-service-impl-and-pagination' + props.location.search);
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
        ...entityWithServiceImplAndPaginationEntity,
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
            id="sampleCouchbaseNoCacheApp.entityWithServiceImplAndPagination.home.createOrEditLabel"
            data-cy="EntityWithServiceImplAndPaginationCreateUpdateHeading"
          >
            <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplAndPagination.home.createOrEditLabel">
              Create or edit a EntityWithServiceImplAndPagination
            </Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <AvForm model={isNew ? {} : entityWithServiceImplAndPaginationEntity} onSubmit={saveEntity}>
              {!isNew ? (
                <AvGroup>
                  <Label for="entity-with-service-impl-and-pagination-id">
                    <Translate contentKey="global.field.id">ID</Translate>
                  </Label>
                  <AvInput
                    id="entity-with-service-impl-and-pagination-id"
                    type="text"
                    className="form-control"
                    name="id"
                    required
                    readOnly
                  />
                </AvGroup>
              ) : null}
              <AvGroup>
                <Label id="hugoLabel" for="entity-with-service-impl-and-pagination-hugo">
                  <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplAndPagination.hugo">Hugo</Translate>
                </Label>
                <AvField id="entity-with-service-impl-and-pagination-hugo" data-cy="hugo" type="text" name="hugo" />
              </AvGroup>
              <Button tag={Link} id="cancel-save" to="/entity-with-service-impl-and-pagination" replace color="info">
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
  entityWithServiceImplAndPaginationEntity: storeState.entityWithServiceImplAndPagination.entity,
  loading: storeState.entityWithServiceImplAndPagination.loading,
  updating: storeState.entityWithServiceImplAndPagination.updating,
  updateSuccess: storeState.entityWithServiceImplAndPagination.updateSuccess,
});

const mapDispatchToProps = {
  getEntity,
  updateEntity,
  createEntity,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceImplAndPaginationUpdate);
