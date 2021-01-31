import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DurationFormat } from 'app/shared/DurationFormat';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-service-impl-entity.reducer';
import { IFieldTestServiceImplEntity } from 'app/shared/model/field-test-service-impl-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestServiceImplEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const FieldTestServiceImplEntity = (props: IFieldTestServiceImplEntityProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { fieldTestServiceImplEntityList, match, loading } = props;
  return (
    <div>
      <h2 id="field-test-service-impl-entity-heading" data-cy="FieldTestServiceImplEntityHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.home.title">Field Test Service Impl Entities</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.home.createLabel">
              Create new Field Test Service Impl Entity
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {fieldTestServiceImplEntityList && fieldTestServiceImplEntityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMika">String Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringRequiredMika">
                    String Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMinlengthMika">
                    String Minlength Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMaxlengthMika">
                    String Maxlength Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringPatternMika">
                    String Pattern Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMika">Integer Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerRequiredMika">
                    Integer Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMinMika">Integer Min Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMaxMika">Integer Max Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMika">Long Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longRequiredMika">
                    Long Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMinMika">Long Min Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMaxMika">Long Max Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMika">Float Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatRequiredMika">
                    Float Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMinMika">Float Min Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMaxMika">Float Max Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleRequiredMika">
                    Double Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleMinMika">Double Min Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleMaxMika">Double Max Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalRequiredMika">
                    Big Decimal Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalMinMika">
                    Big Decimal Min Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalMaxMika">
                    Big Decimal Max Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.localDateMika">Local Date Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.localDateRequiredMika">
                    Local Date Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.instantMika">Instant Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.instanteRequiredMika">
                    Instante Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.zonedDateTimeMika">
                    Zoned Date Time Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.zonedDateTimeRequiredMika">
                    Zoned Date Time Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.durationMika">Duration Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.durationRequiredMika">
                    Duration Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.booleanMika">Boolean Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.booleanRequiredMika">
                    Boolean Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.enumMika">Enum Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.enumRequiredMika">
                    Enum Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.uuidMika">Uuid Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.uuidRequiredMika">
                    Uuid Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMika">Byte Image Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageRequiredMika">
                    Byte Image Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMinbytesMika">
                    Byte Image Minbytes Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMaxbytesMika">
                    Byte Image Maxbytes Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMika">Byte Any Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyRequiredMika">
                    Byte Any Required Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMinbytesMika">
                    Byte Any Minbytes Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMaxbytesMika">
                    Byte Any Maxbytes Mika
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteTextMika">Byte Text Mika</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteTextRequiredMika">
                    Byte Text Required Mika
                  </Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestServiceImplEntityList.map((fieldTestServiceImplEntity, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestServiceImplEntity.id}`} color="link" size="sm">
                      {fieldTestServiceImplEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestServiceImplEntity.stringMika}</td>
                  <td>{fieldTestServiceImplEntity.stringRequiredMika}</td>
                  <td>{fieldTestServiceImplEntity.stringMinlengthMika}</td>
                  <td>{fieldTestServiceImplEntity.stringMaxlengthMika}</td>
                  <td>{fieldTestServiceImplEntity.stringPatternMika}</td>
                  <td>{fieldTestServiceImplEntity.integerMika}</td>
                  <td>{fieldTestServiceImplEntity.integerRequiredMika}</td>
                  <td>{fieldTestServiceImplEntity.integerMinMika}</td>
                  <td>{fieldTestServiceImplEntity.integerMaxMika}</td>
                  <td>{fieldTestServiceImplEntity.longMika}</td>
                  <td>{fieldTestServiceImplEntity.longRequiredMika}</td>
                  <td>{fieldTestServiceImplEntity.longMinMika}</td>
                  <td>{fieldTestServiceImplEntity.longMaxMika}</td>
                  <td>{fieldTestServiceImplEntity.floatMika}</td>
                  <td>{fieldTestServiceImplEntity.floatRequiredMika}</td>
                  <td>{fieldTestServiceImplEntity.floatMinMika}</td>
                  <td>{fieldTestServiceImplEntity.floatMaxMika}</td>
                  <td>{fieldTestServiceImplEntity.doubleRequiredMika}</td>
                  <td>{fieldTestServiceImplEntity.doubleMinMika}</td>
                  <td>{fieldTestServiceImplEntity.doubleMaxMika}</td>
                  <td>{fieldTestServiceImplEntity.bigDecimalRequiredMika}</td>
                  <td>{fieldTestServiceImplEntity.bigDecimalMinMika}</td>
                  <td>{fieldTestServiceImplEntity.bigDecimalMaxMika}</td>
                  <td>
                    {fieldTestServiceImplEntity.localDateMika ? (
                      <TextFormat type="date" value={fieldTestServiceImplEntity.localDateMika} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.localDateRequiredMika ? (
                      <TextFormat type="date" value={fieldTestServiceImplEntity.localDateRequiredMika} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.instantMika ? (
                      <TextFormat type="date" value={fieldTestServiceImplEntity.instantMika} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.instanteRequiredMika ? (
                      <TextFormat type="date" value={fieldTestServiceImplEntity.instanteRequiredMika} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.zonedDateTimeMika ? (
                      <TextFormat type="date" value={fieldTestServiceImplEntity.zonedDateTimeMika} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.zonedDateTimeRequiredMika ? (
                      <TextFormat type="date" value={fieldTestServiceImplEntity.zonedDateTimeRequiredMika} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.durationMika ? <DurationFormat value={fieldTestServiceImplEntity.durationMika} /> : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.durationRequiredMika ? (
                      <DurationFormat value={fieldTestServiceImplEntity.durationRequiredMika} />
                    ) : null}
                  </td>
                  <td>{fieldTestServiceImplEntity.booleanMika ? 'true' : 'false'}</td>
                  <td>{fieldTestServiceImplEntity.booleanRequiredMika ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`sampleCouchbaseNoCacheApp.EnumFieldClass.${fieldTestServiceImplEntity.enumMika}`} />
                  </td>
                  <td>
                    <Translate
                      contentKey={`sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.${fieldTestServiceImplEntity.enumRequiredMika}`}
                    />
                  </td>
                  <td>{fieldTestServiceImplEntity.uuidMika}</td>
                  <td>{fieldTestServiceImplEntity.uuidRequiredMika}</td>
                  <td>
                    {fieldTestServiceImplEntity.byteImageMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteImageMikaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageMikaContentType,
                              fieldTestServiceImplEntity.byteImageMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageMikaContentType};base64,${fieldTestServiceImplEntity.byteImageMika}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteImageMikaContentType}, {byteSize(fieldTestServiceImplEntity.byteImageMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.byteImageRequiredMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteImageRequiredMikaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageRequiredMikaContentType,
                              fieldTestServiceImplEntity.byteImageRequiredMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageRequiredMikaContentType};base64,${fieldTestServiceImplEntity.byteImageRequiredMika}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteImageRequiredMikaContentType},{' '}
                          {byteSize(fieldTestServiceImplEntity.byteImageRequiredMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.byteImageMinbytesMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteImageMinbytesMikaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageMinbytesMikaContentType,
                              fieldTestServiceImplEntity.byteImageMinbytesMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageMinbytesMikaContentType};base64,${fieldTestServiceImplEntity.byteImageMinbytesMika}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteImageMinbytesMikaContentType},{' '}
                          {byteSize(fieldTestServiceImplEntity.byteImageMinbytesMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.byteImageMaxbytesMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType,
                              fieldTestServiceImplEntity.byteImageMaxbytesMika
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType};base64,${fieldTestServiceImplEntity.byteImageMaxbytesMika}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteImageMaxbytesMikaContentType},{' '}
                          {byteSize(fieldTestServiceImplEntity.byteImageMaxbytesMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.byteAnyMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteAnyMikaContentType ? (
                          <a onClick={openFile(fieldTestServiceImplEntity.byteAnyMikaContentType, fieldTestServiceImplEntity.byteAnyMika)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteAnyMikaContentType}, {byteSize(fieldTestServiceImplEntity.byteAnyMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.byteAnyRequiredMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteAnyRequiredMikaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteAnyRequiredMikaContentType,
                              fieldTestServiceImplEntity.byteAnyRequiredMika
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteAnyRequiredMikaContentType},{' '}
                          {byteSize(fieldTestServiceImplEntity.byteAnyRequiredMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.byteAnyMinbytesMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteAnyMinbytesMikaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteAnyMinbytesMikaContentType,
                              fieldTestServiceImplEntity.byteAnyMinbytesMika
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteAnyMinbytesMikaContentType},{' '}
                          {byteSize(fieldTestServiceImplEntity.byteAnyMinbytesMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceImplEntity.byteAnyMaxbytesMika ? (
                      <div>
                        {fieldTestServiceImplEntity.byteAnyMaxbytesMikaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceImplEntity.byteAnyMaxbytesMikaContentType,
                              fieldTestServiceImplEntity.byteAnyMaxbytesMika
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceImplEntity.byteAnyMaxbytesMikaContentType},{' '}
                          {byteSize(fieldTestServiceImplEntity.byteAnyMaxbytesMika)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestServiceImplEntity.byteTextMika}</td>
                  <td>{fieldTestServiceImplEntity.byteTextRequiredMika}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`${match.url}/${fieldTestServiceImplEntity.id}`}
                        color="info"
                        size="sm"
                        data-cy="entityDetailsButton"
                      >
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button
                        tag={Link}
                        to={`${match.url}/${fieldTestServiceImplEntity.id}/edit`}
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
                        to={`${match.url}/${fieldTestServiceImplEntity.id}/delete`}
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
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.home.notFound">
                No Field Test Service Impl Entities found
              </Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ fieldTestServiceImplEntity }: IRootState) => ({
  fieldTestServiceImplEntityList: fieldTestServiceImplEntity.entities,
  loading: fieldTestServiceImplEntity.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestServiceImplEntity);
