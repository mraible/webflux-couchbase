import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DurationFormat } from 'app/shared/DurationFormat';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-service-class-and-jpa-filtering-entity.reducer';
import { IFieldTestServiceClassAndJpaFilteringEntity } from 'app/shared/model/field-test-service-class-and-jpa-filtering-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IFieldTestServiceClassAndJpaFilteringEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const FieldTestServiceClassAndJpaFilteringEntity = (props: IFieldTestServiceClassAndJpaFilteringEntityProps) => {
  useEffect(() => {
    props.getEntities();
  }, []);

  const handleSyncList = () => {
    props.getEntities();
  };

  const { fieldTestServiceClassAndJpaFilteringEntityList, match, loading } = props;
  return (
    <div>
      <h2 id="field-test-service-class-and-jpa-filtering-entity-heading" data-cy="FieldTestServiceClassAndJpaFilteringEntityHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.home.title">
          Field Test Service Class And Jpa Filtering Entities
        </Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.home.refreshListLabel">
              Refresh List
            </Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.home.createLabel">
              Create new Field Test Service Class And Jpa Filtering Entity
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {fieldTestServiceClassAndJpaFilteringEntityList && fieldTestServiceClassAndJpaFilteringEntityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringBob">
                    String Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringRequiredBob">
                    String Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringMinlengthBob">
                    String Minlength Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringMaxlengthBob">
                    String Maxlength Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringPatternBob">
                    String Pattern Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerBob">
                    Integer Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerRequiredBob">
                    Integer Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerMinBob">
                    Integer Min Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerMaxBob">
                    Integer Max Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longBob">Long Bob</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longRequiredBob">
                    Long Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longMinBob">
                    Long Min Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longMaxBob">
                    Long Max Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatBob">
                    Float Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatRequiredBob">
                    Float Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatMinBob">
                    Float Min Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatMaxBob">
                    Float Max Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleRequiredBob">
                    Double Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleMinBob">
                    Double Min Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleMaxBob">
                    Double Max Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalRequiredBob">
                    Big Decimal Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMinBob">
                    Big Decimal Min Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMaxBob">
                    Big Decimal Max Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.localDateBob">
                    Local Date Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.localDateRequiredBob">
                    Local Date Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.instantBob">
                    Instant Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.instanteRequiredBob">
                    Instante Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeBob">
                    Zoned Date Time Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeRequiredBob">
                    Zoned Date Time Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.durationBob">
                    Duration Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.durationRequiredBob">
                    Duration Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.booleanBob">
                    Boolean Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.booleanRequiredBob">
                    Boolean Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.enumBob">Enum Bob</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.enumRequiredBob">
                    Enum Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.uuidBob">Uuid Bob</Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.uuidRequiredBob">
                    Uuid Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageBob">
                    Byte Image Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBob">
                    Byte Image Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBob">
                    Byte Image Minbytes Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBob">
                    Byte Image Maxbytes Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyBob">
                    Byte Any Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBob">
                    Byte Any Required Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBob">
                    Byte Any Minbytes Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBob">
                    Byte Any Maxbytes Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteTextBob">
                    Byte Text Bob
                  </Translate>
                </th>
                <th>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteTextRequiredBob">
                    Byte Text Required Bob
                  </Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestServiceClassAndJpaFilteringEntityList.map((fieldTestServiceClassAndJpaFilteringEntity, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestServiceClassAndJpaFilteringEntity.id}`} color="link" size="sm">
                      {fieldTestServiceClassAndJpaFilteringEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.stringBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.stringRequiredBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.stringMinlengthBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.stringMaxlengthBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.stringPatternBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.integerBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.integerRequiredBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.integerMinBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.integerMaxBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.longBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.longRequiredBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.longMinBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.longMaxBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.floatBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.floatRequiredBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.floatMinBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.floatMaxBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.doubleRequiredBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.doubleMinBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.doubleMaxBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.bigDecimalRequiredBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMinBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMaxBob}</td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.localDateBob ? (
                      <TextFormat
                        type="date"
                        value={fieldTestServiceClassAndJpaFilteringEntity.localDateBob}
                        format={APP_LOCAL_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.localDateRequiredBob ? (
                      <TextFormat
                        type="date"
                        value={fieldTestServiceClassAndJpaFilteringEntity.localDateRequiredBob}
                        format={APP_LOCAL_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.instantBob ? (
                      <TextFormat type="date" value={fieldTestServiceClassAndJpaFilteringEntity.instantBob} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.instanteRequiredBob ? (
                      <TextFormat
                        type="date"
                        value={fieldTestServiceClassAndJpaFilteringEntity.instanteRequiredBob}
                        format={APP_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeBob ? (
                      <TextFormat
                        type="date"
                        value={fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeBob}
                        format={APP_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeRequiredBob ? (
                      <TextFormat
                        type="date"
                        value={fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeRequiredBob}
                        format={APP_DATE_FORMAT}
                      />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.durationBob ? (
                      <DurationFormat value={fieldTestServiceClassAndJpaFilteringEntity.durationBob} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.durationRequiredBob ? (
                      <DurationFormat value={fieldTestServiceClassAndJpaFilteringEntity.durationRequiredBob} />
                    ) : null}
                  </td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.booleanBob ? 'true' : 'false'}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.booleanRequiredBob ? 'true' : 'false'}</td>
                  <td>
                    <Translate
                      contentKey={`sampleCouchbaseNoCacheApp.EnumFieldClass.${fieldTestServiceClassAndJpaFilteringEntity.enumBob}`}
                    />
                  </td>
                  <td>
                    <Translate
                      contentKey={`sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.${fieldTestServiceClassAndJpaFilteringEntity.enumRequiredBob}`}
                    />
                  </td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.uuidBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.uuidRequiredBob}</td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteImageBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteImageBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassAndJpaFilteringEntity.byteImageBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntity.byteImageBob}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteImageBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteImageBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBob}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBob}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBob
                            )}
                          >
                            <img
                              src={`data:${fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBob}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteAnyBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteAnyBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyBob
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteAnyBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteAnyBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBob
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBob
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBob ? (
                      <div>
                        {fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBobContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBobContentType,
                              fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBob
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBobContentType},{' '}
                          {byteSize(fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBob)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.byteTextBob}</td>
                  <td>{fieldTestServiceClassAndJpaFilteringEntity.byteTextRequiredBob}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`${match.url}/${fieldTestServiceClassAndJpaFilteringEntity.id}`}
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
                        to={`${match.url}/${fieldTestServiceClassAndJpaFilteringEntity.id}/edit`}
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
                        to={`${match.url}/${fieldTestServiceClassAndJpaFilteringEntity.id}/delete`}
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
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.home.notFound">
                No Field Test Service Class And Jpa Filtering Entities found
              </Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ fieldTestServiceClassAndJpaFilteringEntity }: IRootState) => ({
  fieldTestServiceClassAndJpaFilteringEntityList: fieldTestServiceClassAndJpaFilteringEntity.entities,
  loading: fieldTestServiceClassAndJpaFilteringEntity.loading,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestServiceClassAndJpaFilteringEntity);
