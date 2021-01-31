import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DurationFormat } from 'app/shared/DurationFormat';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-entity.reducer';
import { IFieldTestEntity } from 'app/shared/model/field-test-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const FieldTestEntity = (props: IFieldTestEntityProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { fieldTestEntityList, match, loading } = props;
  return (
    <div>
      <h2 id="field-test-entity-heading" data-cy="FieldTestEntityHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.home.title">Field Test Entities</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.home.createLabel">Create new Field Test Entity</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {fieldTestEntityList && fieldTestEntityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringTom">String Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringRequiredTom">String Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringMinlengthTom">String Minlength Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringMaxlengthTom">String Maxlength Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringPatternTom">String Pattern Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.numberPatternTom">Number Pattern Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.numberPatternRequiredTom">
                    Number Pattern Required Tom
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerTom">Integer Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerRequiredTom">Integer Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerMinTom">Integer Min Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerMaxTom">Integer Max Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longTom">Long Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longRequiredTom">Long Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longMinTom">Long Min Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longMaxTom">Long Max Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatTom">Float Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatRequiredTom">Float Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatMinTom">Float Min Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatMaxTom">Float Max Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleRequiredTom">Double Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleMinTom">Double Min Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleMaxTom">Double Max Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalRequiredTom">
                    Big Decimal Required Tom
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalMinTom">Big Decimal Min Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalMaxTom">Big Decimal Max Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.localDateTom">Local Date Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.localDateRequiredTom">Local Date Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.instantTom">Instant Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.instantRequiredTom">Instant Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.zonedDateTimeTom">Zoned Date Time Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.zonedDateTimeRequiredTom">
                    Zoned Date Time Required Tom
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.durationTom">Duration Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.durationRequiredTom">Duration Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.booleanTom">Boolean Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.booleanRequiredTom">Boolean Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.enumTom">Enum Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.enumRequiredTom">Enum Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.uuidTom">Uuid Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.uuidRequiredTom">Uuid Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageTom">Byte Image Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageRequiredTom">Byte Image Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageMinbytesTom">Byte Image Minbytes Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageMaxbytesTom">Byte Image Maxbytes Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyTom">Byte Any Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyRequiredTom">Byte Any Required Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyMinbytesTom">Byte Any Minbytes Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyMaxbytesTom">Byte Any Maxbytes Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteTextTom">Byte Text Tom</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteTextRequiredTom">Byte Text Required Tom</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestEntityList.map((fieldTestEntity, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestEntity.id}`} color="link" size="sm">
                      {fieldTestEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestEntity.stringTom}</td>
                  <td>{fieldTestEntity.stringRequiredTom}</td>
                  <td>{fieldTestEntity.stringMinlengthTom}</td>
                  <td>{fieldTestEntity.stringMaxlengthTom}</td>
                  <td>{fieldTestEntity.stringPatternTom}</td>
                  <td>{fieldTestEntity.numberPatternTom}</td>
                  <td>{fieldTestEntity.numberPatternRequiredTom}</td>
                  <td>{fieldTestEntity.integerTom}</td>
                  <td>{fieldTestEntity.integerRequiredTom}</td>
                  <td>{fieldTestEntity.integerMinTom}</td>
                  <td>{fieldTestEntity.integerMaxTom}</td>
                  <td>{fieldTestEntity.longTom}</td>
                  <td>{fieldTestEntity.longRequiredTom}</td>
                  <td>{fieldTestEntity.longMinTom}</td>
                  <td>{fieldTestEntity.longMaxTom}</td>
                  <td>{fieldTestEntity.floatTom}</td>
                  <td>{fieldTestEntity.floatRequiredTom}</td>
                  <td>{fieldTestEntity.floatMinTom}</td>
                  <td>{fieldTestEntity.floatMaxTom}</td>
                  <td>{fieldTestEntity.doubleRequiredTom}</td>
                  <td>{fieldTestEntity.doubleMinTom}</td>
                  <td>{fieldTestEntity.doubleMaxTom}</td>
                  <td>{fieldTestEntity.bigDecimalRequiredTom}</td>
                  <td>{fieldTestEntity.bigDecimalMinTom}</td>
                  <td>{fieldTestEntity.bigDecimalMaxTom}</td>
                  <td>
                    {fieldTestEntity.localDateTom ? (
                      <TextFormat type="date" value={fieldTestEntity.localDateTom} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.localDateRequiredTom ? (
                      <TextFormat type="date" value={fieldTestEntity.localDateRequiredTom} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.instantTom ? (
                      <TextFormat type="date" value={fieldTestEntity.instantTom} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.instantRequiredTom ? (
                      <TextFormat type="date" value={fieldTestEntity.instantRequiredTom} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.zonedDateTimeTom ? (
                      <TextFormat type="date" value={fieldTestEntity.zonedDateTimeTom} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.zonedDateTimeRequiredTom ? (
                      <TextFormat type="date" value={fieldTestEntity.zonedDateTimeRequiredTom} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>{fieldTestEntity.durationTom ? <DurationFormat value={fieldTestEntity.durationTom} /> : null}</td>
                  <td>{fieldTestEntity.durationRequiredTom ? <DurationFormat value={fieldTestEntity.durationRequiredTom} /> : null}</td>
                  <td>{fieldTestEntity.booleanTom ? 'true' : 'false'}</td>
                  <td>{fieldTestEntity.booleanRequiredTom ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`sampleCouchbaseNoCacheApp.EnumFieldClass.${fieldTestEntity.enumTom}`} />
                  </td>
                  <td>
                    <Translate contentKey={`sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.${fieldTestEntity.enumRequiredTom}`} />
                  </td>
                  <td>{fieldTestEntity.uuidTom}</td>
                  <td>{fieldTestEntity.uuidRequiredTom}</td>
                  <td>
                    {fieldTestEntity.byteImageTom ? (
                      <div>
                        {fieldTestEntity.byteImageTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteImageTomContentType, fieldTestEntity.byteImageTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageTomContentType};base64,${fieldTestEntity.byteImageTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteImageTomContentType}, {byteSize(fieldTestEntity.byteImageTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.byteImageRequiredTom ? (
                      <div>
                        {fieldTestEntity.byteImageRequiredTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteImageRequiredTomContentType, fieldTestEntity.byteImageRequiredTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageRequiredTomContentType};base64,${fieldTestEntity.byteImageRequiredTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteImageRequiredTomContentType}, {byteSize(fieldTestEntity.byteImageRequiredTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.byteImageMinbytesTom ? (
                      <div>
                        {fieldTestEntity.byteImageMinbytesTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteImageMinbytesTomContentType, fieldTestEntity.byteImageMinbytesTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageMinbytesTomContentType};base64,${fieldTestEntity.byteImageMinbytesTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteImageMinbytesTomContentType}, {byteSize(fieldTestEntity.byteImageMinbytesTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.byteImageMaxbytesTom ? (
                      <div>
                        {fieldTestEntity.byteImageMaxbytesTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteImageMaxbytesTomContentType, fieldTestEntity.byteImageMaxbytesTom)}>
                            <img
                              src={`data:${fieldTestEntity.byteImageMaxbytesTomContentType};base64,${fieldTestEntity.byteImageMaxbytesTom}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteImageMaxbytesTomContentType}, {byteSize(fieldTestEntity.byteImageMaxbytesTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.byteAnyTom ? (
                      <div>
                        {fieldTestEntity.byteAnyTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteAnyTomContentType, fieldTestEntity.byteAnyTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteAnyTomContentType}, {byteSize(fieldTestEntity.byteAnyTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.byteAnyRequiredTom ? (
                      <div>
                        {fieldTestEntity.byteAnyRequiredTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteAnyRequiredTomContentType, fieldTestEntity.byteAnyRequiredTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteAnyRequiredTomContentType}, {byteSize(fieldTestEntity.byteAnyRequiredTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.byteAnyMinbytesTom ? (
                      <div>
                        {fieldTestEntity.byteAnyMinbytesTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteAnyMinbytesTomContentType, fieldTestEntity.byteAnyMinbytesTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteAnyMinbytesTomContentType}, {byteSize(fieldTestEntity.byteAnyMinbytesTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestEntity.byteAnyMaxbytesTom ? (
                      <div>
                        {fieldTestEntity.byteAnyMaxbytesTomContentType ? (
                          <a onClick={openFile(fieldTestEntity.byteAnyMaxbytesTomContentType, fieldTestEntity.byteAnyMaxbytesTom)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestEntity.byteAnyMaxbytesTomContentType}, {byteSize(fieldTestEntity.byteAnyMaxbytesTom)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestEntity.byteTextTom}</td>
                  <td>{fieldTestEntity.byteTextRequiredTom}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`${match.url}/${fieldTestEntity.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${fieldTestEntity.id}/edit`}
                        color="primary"
                        size="sm"
                        data-cy="entityEditButton"
                      >
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${fieldTestEntity.id}/delete`}
                        color="danger"
                        size="sm"
                        data-cy="entityDeleteButton"
                      >
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
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.home.notFound">No Field Test Entities found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ fieldTestEntity }: IRootState) => ({
  fieldTestEntityList: fieldTestEntity.entities,
  loading: fieldTestEntity.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestEntity);
