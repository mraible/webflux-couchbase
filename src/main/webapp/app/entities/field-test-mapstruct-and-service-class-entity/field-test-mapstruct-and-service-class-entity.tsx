import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DurationFormat } from 'app/shared/DurationFormat';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-mapstruct-and-service-class-entity.reducer';
import { IFieldTestMapstructAndServiceClassEntity } from 'app/shared/model/field-test-mapstruct-and-service-class-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestMapstructAndServiceClassEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const FieldTestMapstructAndServiceClassEntity = (props: IFieldTestMapstructAndServiceClassEntityProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { fieldTestMapstructAndServiceClassEntityList, match, loading } = props;
  return (
    <div>
      <h2 id="field-test-mapstruct-and-service-class-entity-heading" data-cy="FieldTestMapstructAndServiceClassEntityHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.home.title">
          Field Test Mapstruct And Service Class Entities
        </Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.home.refreshListLabel">
              Refresh List
            </Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.home.createLabel">
              Create new Field Test Mapstruct And Service Class Entity
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {fieldTestMapstructAndServiceClassEntityList && fieldTestMapstructAndServiceClassEntityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringEva">String Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringRequiredEva">
                    String Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringMinlengthEva">
                    String Minlength Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringMaxlengthEva">
                    String Maxlength Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringPatternEva">
                    String Pattern Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerEva">
                    Integer Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerRequiredEva">
                    Integer Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerMinEva">
                    Integer Min Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerMaxEva">
                    Integer Max Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longEva">Long Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longRequiredEva">
                    Long Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longMinEva">
                    Long Min Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longMaxEva">
                    Long Max Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatEva">Float Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatRequiredEva">
                    Float Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatMinEva">
                    Float Min Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatMaxEva">
                    Float Max Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleRequiredEva">
                    Double Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleMinEva">
                    Double Min Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleMaxEva">
                    Double Max Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalRequiredEva">
                    Big Decimal Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalMinEva">
                    Big Decimal Min Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalMaxEva">
                    Big Decimal Max Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.localDateEva">
                    Local Date Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.localDateRequiredEva">
                    Local Date Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.instantEva">
                    Instant Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.instanteRequiredEva">
                    Instante Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.zonedDateTimeEva">
                    Zoned Date Time Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.zonedDateTimeRequiredEva">
                    Zoned Date Time Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.durationEva">
                    Duration Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.durationRequiredEva">
                    Duration Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.booleanEva">
                    Boolean Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.booleanRequiredEva">
                    Boolean Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.enumEva">Enum Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.enumRequiredEva">
                    Enum Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.uuidEva">Uuid Eva</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.uuidRequiredEva">
                    Uuid Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageEva">
                    Byte Image Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageRequiredEva">
                    Byte Image Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEva">
                    Byte Image Minbytes Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEva">
                    Byte Image Maxbytes Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyEva">
                    Byte Any Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEva">
                    Byte Any Required Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEva">
                    Byte Any Minbytes Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEva">
                    Byte Any Maxbytes Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteTextEva">
                    Byte Text Eva
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteTextRequiredEva">
                    Byte Text Required Eva
                  </Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestMapstructAndServiceClassEntityList.map((fieldTestMapstructAndServiceClassEntity, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestMapstructAndServiceClassEntity.id}`} color="link" size="sm">
                      {fieldTestMapstructAndServiceClassEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestMapstructAndServiceClassEntity.stringEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.stringRequiredEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.stringMinlengthEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.stringMaxlengthEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.stringPatternEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.integerEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.integerRequiredEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.integerMinEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.integerMaxEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.longEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.longRequiredEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.longMinEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.longMaxEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.floatEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.floatRequiredEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.floatMinEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.floatMaxEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.doubleRequiredEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.doubleMinEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.doubleMaxEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.bigDecimalRequiredEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.bigDecimalMinEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.bigDecimalMaxEva}</td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.localDateEva ? (
                      <TextFormat type="date" value={fieldTestMapstructAndServiceClassEntity.localDateEva} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.localDateRequiredEva ? (
                      <TextFormat
                        type="date"
                        value={fieldTestMapstructAndServiceClassEntity.localDateRequiredEva}
                        format={APP_LOCAL_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.instantEva ? (
                      <TextFormat type="date" value={fieldTestMapstructAndServiceClassEntity.instantEva} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.instanteRequiredEva ? (
                      <TextFormat
                        type="date"
                        value={fieldTestMapstructAndServiceClassEntity.instanteRequiredEva}
                        format={APP_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.zonedDateTimeEva ? (
                      <TextFormat type="date" value={fieldTestMapstructAndServiceClassEntity.zonedDateTimeEva} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.zonedDateTimeRequiredEva ? (
                      <TextFormat
                        type="date"
                        value={fieldTestMapstructAndServiceClassEntity.zonedDateTimeRequiredEva}
                        format={APP_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.durationEva ? (
                      <DurationFormat value={fieldTestMapstructAndServiceClassEntity.durationEva} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.durationRequiredEva ? (
                      <DurationFormat value={fieldTestMapstructAndServiceClassEntity.durationRequiredEva} />
                    ) : null}
                  </td>
                  <td>{fieldTestMapstructAndServiceClassEntity.booleanEva ? 'true' : 'false'}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.booleanRequiredEva ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`sampleCouchbaseNoCacheApp.EnumFieldClass.${fieldTestMapstructAndServiceClassEntity.enumEva}`} />
                  </td>
                  <td>
                    <Translate
                      contentKey={`sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.${fieldTestMapstructAndServiceClassEntity.enumRequiredEva}`}
                    />
                  </td>
                  <td>{fieldTestMapstructAndServiceClassEntity.uuidEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.uuidRequiredEva}</td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteImageEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteImageEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteImageEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteImageEva
                            )}
                          >
                            <img
                              src={`data:${fieldTestMapstructAndServiceClassEntity.byteImageEvaContentType};base64,${fieldTestMapstructAndServiceClassEntity.byteImageEva}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteImageEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteImageEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteImageRequiredEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteImageRequiredEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteImageRequiredEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteImageRequiredEva
                            )}
                          >
                            <img
                              src={`data:${fieldTestMapstructAndServiceClassEntity.byteImageRequiredEvaContentType};base64,${fieldTestMapstructAndServiceClassEntity.byteImageRequiredEva}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteImageRequiredEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteImageRequiredEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEva
                            )}
                          >
                            <img
                              src={`data:${fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEvaContentType};base64,${fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEva}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEva
                            )}
                          >
                            <img
                              src={`data:${fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEvaContentType};base64,${fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEva}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteAnyEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteAnyEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteAnyEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteAnyEva
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteAnyEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteAnyEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEva
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEva
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEva ? (
                      <div>
                        {fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEvaContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEvaContentType,
                              fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEva
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEvaContentType},{' '}
                          {byteSize(fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEva)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestMapstructAndServiceClassEntity.byteTextEva}</td>
                  <td>{fieldTestMapstructAndServiceClassEntity.byteTextRequiredEva}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`${match.url}/${fieldTestMapstructAndServiceClassEntity.id}`}
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
                        to={`${match.url}/${fieldTestMapstructAndServiceClassEntity.id}/edit`}
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
                        to={`${match.url}/${fieldTestMapstructAndServiceClassEntity.id}/delete`}
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
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.home.notFound">
                No Field Test Mapstruct And Service Class Entities found
              </Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ fieldTestMapstructAndServiceClassEntity }: IRootState) => ({
  fieldTestMapstructAndServiceClassEntityList: fieldTestMapstructAndServiceClassEntity.entities,
  loading: fieldTestMapstructAndServiceClassEntity.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestMapstructAndServiceClassEntity);
