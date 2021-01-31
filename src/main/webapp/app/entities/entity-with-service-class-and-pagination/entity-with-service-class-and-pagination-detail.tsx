import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-service-class-and-pagination.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceClassAndPaginationDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithServiceClassAndPaginationDetail = (props: IEntityWithServiceClassAndPaginationDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { entityWithServiceClassAndPaginationEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="entityWithServiceClassAndPaginationDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceClassAndPagination.detail.title">
            EntityWithServiceClassAndPagination
          </Translate>{' '}
          [<strong>{entityWithServiceClassAndPaginationEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="enzo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceClassAndPagination.enzo">Enzo</Translate>
            </span>
          </dt>
          <dd>{entityWithServiceClassAndPaginationEntity.enzo}</dd>
        </dl>
        <Button tag={Link} to="/entity-with-service-class-and-pagination" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button
          tag={Link}
          to={`/entity-with-service-class-and-pagination/${entityWithServiceClassAndPaginationEntity.id}/edit`}
          replace
          color="primary"
        >
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ entityWithServiceClassAndPagination }: IRootState) => ({
  entityWithServiceClassAndPaginationEntity: entityWithServiceClassAndPagination.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceClassAndPaginationDetail);
