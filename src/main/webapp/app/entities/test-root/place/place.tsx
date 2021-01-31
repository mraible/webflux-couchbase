import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { byteSize, Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './place.reducer';
import { IPlace } from 'app/shared/model/test-root/place.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IPlaceProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Place = (props: IPlaceProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { placeList, match, loading } = props;
  return (
    <div>
      <h2 id="place-heading" data-cy="PlaceHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.home.title">Places</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.home.createLabel">Create new Place</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {placeList && placeList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.numberOfSeats">Number Of Seats</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.shortName">Short Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.colorBackground">Color Background</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.colorText">Color Text</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.description">Description</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.preferredDivision">Preferred Division</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.owner">Owner</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {placeList.map((place, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${place.id}`} color="link" size="sm">
                      {place.id}
                    </Button>
                  </td>
                  <td>{place.name}</td>
                  <td>{place.numberOfSeats}</td>
                  <td>{place.shortName}</td>
                  <td>{place.colorBackground}</td>
                  <td>{place.colorText}</td>
                  <td>{place.description}</td>
                  <td>
                    {place.preferredDivisions
                      ? place.preferredDivisions.map((val, j) => (
                          <span key={j}>
                            <Link to={`division/${val.id}`}>{val.name}</Link>
                            {j === place.preferredDivisions.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td>{place.owner ? <Link to={`division/${place.owner.id}`}>{place.owner.name}</Link> : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${place.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${place.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${place.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootPlace.home.notFound">No Places found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ place }: IRootState) => ({
  placeList: place.entities,
  loading: place.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Place);
