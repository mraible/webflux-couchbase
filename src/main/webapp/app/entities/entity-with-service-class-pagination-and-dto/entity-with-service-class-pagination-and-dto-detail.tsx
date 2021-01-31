import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-service-class-pagination-and-dto.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithServiceClassPaginationAndDTODetailProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const EntityWithServiceClassPaginationAndDTODetail = (props: IEntityWithServiceClassPaginationAndDTODetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { entityWithServiceClassPaginationAndDTOEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="entityWithServiceClassPaginationAndDTODetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceClassPaginationAndDTO.detail.title">
            EntityWithServiceClassPaginationAndDTO
          </Translate>{' '}
          [<strong>{entityWithServiceClassPaginationAndDTOEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="lena">
              <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithServiceClassPaginationAndDTO.lena">Lena</Translate>
            </span>
          </dt>
          <dd>{entityWithServiceClassPaginationAndDTOEntity.lena}</dd>
        </dl>
        <Button tag={Link} to="/entity-with-service-class-pagination-and-dto" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button
          tag={Link}
          to={`/entity-with-service-class-pagination-and-dto/${entityWithServiceClassPaginationAndDTOEntity.id}/edit`}
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

const mapStateToProps = ({ entityWithServiceClassPaginationAndDTO }: IRootState) => ({
  entityWithServiceClassPaginationAndDTOEntity: entityWithServiceClassPaginationAndDTO.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceClassPaginationAndDTODetail);
