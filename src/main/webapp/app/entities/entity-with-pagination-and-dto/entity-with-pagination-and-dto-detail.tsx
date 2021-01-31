import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-pagination-and-dto.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithPaginationAndDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithPaginationAndDTODetail = (props: IEntityWithPaginationAndDTODetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { entityWithPaginationAndDTOEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="entityWithPaginationAndDTODetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithPaginationAndDTO.detail.title">EntityWithPaginationAndDTO</Translate> [
          <strong>{entityWithPaginationAndDTOEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="lea">
              <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithPaginationAndDTO.lea">Lea</Translate>
            </span>
          </dt>
          <dd>{entityWithPaginationAndDTOEntity.lea}</dd>
        </dl>
        <Button tag={Link} to="/entity-with-pagination-and-dto" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/entity-with-pagination-and-dto/${entityWithPaginationAndDTOEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ entityWithPaginationAndDTO }: IRootState) => ({
  entityWithPaginationAndDTOEntity: entityWithPaginationAndDTO.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithPaginationAndDTODetail);
