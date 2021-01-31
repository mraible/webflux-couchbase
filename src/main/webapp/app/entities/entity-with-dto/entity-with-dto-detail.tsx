import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './entity-with-dto.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IEntityWithDTODetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithDTODetail = (props: IEntityWithDTODetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { entityWithDTOEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="entityWithDTODetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithDTO.detail.title">EntityWithDTO</Translate> [
          <strong>{entityWithDTOEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="emma">
              <Translate contentKey="sampleCouchbaseNoCacheApp.entityWithDTO.emma">Emma</Translate>
            </span>
          </dt>
          <dd>{entityWithDTOEntity.emma}</dd>
        </dl>
        <Button tag={Link} to="/entity-with-dto" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/entity-with-dto/${entityWithDTOEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ entityWithDTO }: IRootState) => ({
  entityWithDTOEntity: entityWithDTO.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithDTODetail);
