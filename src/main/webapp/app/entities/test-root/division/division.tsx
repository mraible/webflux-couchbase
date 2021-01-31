import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './division.reducer';
import { IDivision } from 'app/shared/model/test-root/division.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IDivisionProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const Division = (props: IDivisionProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { divisionList, match, loading } = props;
  return (
    <div>
      <h2 id="division-heading" data-cy="DivisionHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.home.title">Divisions</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.home.createLabel">Create new Division</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {divisionList && divisionList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.shortName">Short Name</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.numberOfPeople">Number Of People</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.divisionType">Division Type</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.colorBackground">Color Background</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.colorText">Color Text</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {divisionList.map((division, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${division.id}`} color="link" size="sm">
                      {division.id}
                    </Button>
                  </td>
                  <td>{division.name}</td>
                  <td>{division.shortName}</td>
                  <td>{division.numberOfPeople}</td>
                  <td>
                    <Translate contentKey={`sampleCouchbaseNoCacheApp.DivisionType.${division.divisionType}`} />
                  </td>
                  <td>{division.colorBackground}</td>
                  <td>{division.colorText}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${division.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${division.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`${match.url}/${division.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
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
              <Translate contentKey="sampleCouchbaseNoCacheApp.testRootDivision.home.notFound">No Divisions found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ division }: IRootState) => ({
  divisionList: division.entities,
  loading: division.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Division);
