import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './place.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPlaceDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const PlaceDetail = (props: IPlaceDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { placeEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="placeDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.detail.title">Place</Translate> [<strong>{placeEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="name">
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.name">Name</Translate>
            </span>
          </dt>
          <dd>{placeEntity.name}</dd>
          <dt>
            <span id="numberOfSeats">
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.numberOfSeats">Number Of Seats</Translate>
            </span>
          </dt>
          <dd>{placeEntity.numberOfSeats}</dd>
          <dt>
            <span id="shortName">
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.shortName">Short Name</Translate>
            </span>
          </dt>
          <dd>{placeEntity.shortName}</dd>
          <dt>
            <span id="colorBackground">
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.colorBackground">Color Background</Translate>
            </span>
          </dt>
          <dd>{placeEntity.colorBackground}</dd>
          <dt>
            <span id="colorText">
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.colorText">Color Text</Translate>
            </span>
          </dt>
          <dd>{placeEntity.colorText}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.description">Description</Translate>
            </span>
          </dt>
          <dd>{placeEntity.description}</dd>
          <dt>
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.preferredDivision">Preferred Division</Translate>
          </dt>
          <dd>
            {placeEntity.preferredDivisions
              ? placeEntity.preferredDivisions.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.name}</a>
                    {placeEntity.preferredDivisions && i === placeEntity.preferredDivisions.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.owner">Owner</Translate>
          </dt>
          <dd>{placeEntity.owner ? placeEntity.owner.name : ''}</dd>
        </dl>
        <Button tag={Link} to="/place" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/place/${placeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ place }: IRootState) => ({
  placeEntity: place.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDetail);
