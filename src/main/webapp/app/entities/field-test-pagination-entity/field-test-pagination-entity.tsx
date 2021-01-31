import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, TextFormat, getSortState, IPaginationBaseState, JhiPagination, JhiItemCount } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DurationFormat } from 'app/shared/DurationFormat';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './field-test-pagination-entity.reducer';
import { IFieldTestPaginationEntity } from 'app/shared/model/field-test-pagination-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

export interface IFieldTestPaginationEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const FieldTestPaginationEntity = (props: IFieldTestPaginationEntityProps) => {
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE), props.location.search)
  );

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const sortEntities = () => {
    getAllEntities();
    const endURL = `?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`;
    if (props.location.search !== endURL) {
      props.history.push(`${props.location.pathname}${endURL}`);
    }
  };

  useEffect(() => {
    sortEntities();
  }, [paginationState.activePage, paginationState.order, paginationState.sort]);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const page = params.get('page');
    const sort = params.get('sort');
    if (page && sort) {
      const sortSplit = sort.split(',');
      setPaginationState({
        ...paginationState,
        activePage: +page,
        sort: sortSplit[0],
        order: sortSplit[1],
      });
    }
  }, [props.location.search]);

  const sort = p => () => {
    setPaginationState({
      ...paginationState,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p,
    });
  };

  const handlePagination = currentPage =>
    setPaginationState({
      ...paginationState,
      activePage: currentPage,
    });

  const handleSyncList = () => {
    sortEntities();
  };

  const { fieldTestPaginationEntityList, match, loading, totalItems } = props;
  return (
    <div>
      <h2 id="field-test-pagination-entity-heading" data-cy="FieldTestPaginationEntityHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.home.title">Field Test Pagination Entities</Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.home.createLabel">
              Create new Field Test Pagination Entity
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {fieldTestPaginationEntityList && fieldTestPaginationEntityList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th className="hand" onClick={sort('id')}>
                  <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('stringAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringAlice">String Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('stringRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringRequiredAlice">
                    String Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('stringMinlengthAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringMinlengthAlice">
                    String Minlength Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('stringMaxlengthAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringMaxlengthAlice">
                    String Maxlength Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('stringPatternAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringPatternAlice">
                    String Pattern Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('integerAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerAlice">Integer Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('integerRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerRequiredAlice">
                    Integer Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('integerMinAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerMinAlice">Integer Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('integerMaxAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerMaxAlice">Integer Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('longAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longAlice">Long Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('longRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longRequiredAlice">
                    Long Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('longMinAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longMinAlice">Long Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('longMaxAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longMaxAlice">Long Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('floatAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatAlice">Float Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('floatRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatRequiredAlice">
                    Float Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('floatMinAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatMinAlice">Float Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('floatMaxAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatMaxAlice">Float Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('doubleRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleRequiredAlice">
                    Double Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('doubleMinAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleMinAlice">Double Min Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('doubleMaxAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleMaxAlice">Double Max Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bigDecimalRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalRequiredAlice">
                    Big Decimal Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bigDecimalMinAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalMinAlice">
                    Big Decimal Min Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('bigDecimalMaxAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalMaxAlice">
                    Big Decimal Max Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('localDateAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.localDateAlice">Local Date Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('localDateRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.localDateRequiredAlice">
                    Local Date Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('instantAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.instantAlice">Instant Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('instanteRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.instanteRequiredAlice">
                    Instante Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('zonedDateTimeAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.zonedDateTimeAlice">
                    Zoned Date Time Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('zonedDateTimeRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.zonedDateTimeRequiredAlice">
                    Zoned Date Time Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('durationAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.durationAlice">Duration Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('durationRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.durationRequiredAlice">
                    Duration Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('booleanAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.booleanAlice">Boolean Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('booleanRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.booleanRequiredAlice">
                    Boolean Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('enumAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.enumAlice">Enum Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('enumRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.enumRequiredAlice">
                    Enum Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('uuidAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.uuidAlice">Uuid Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('uuidRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.uuidRequiredAlice">
                    Uuid Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteImageAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageAlice">Byte Image Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteImageRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageRequiredAlice">
                    Byte Image Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteImageMinbytesAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageMinbytesAlice">
                    Byte Image Minbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteImageMaxbytesAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageMaxbytesAlice">
                    Byte Image Maxbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteAnyAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyAlice">Byte Any Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteAnyRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyRequiredAlice">
                    Byte Any Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteAnyMinbytesAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyMinbytesAlice">
                    Byte Any Minbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteAnyMaxbytesAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyMaxbytesAlice">
                    Byte Any Maxbytes Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteTextAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteTextAlice">Byte Text Alice</Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th className="hand" onClick={sort('byteTextRequiredAlice')}>
                  <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteTextRequiredAlice">
                    Byte Text Required Alice
                  </Translate>{' '}
                  <FontAwesomeIcon icon="sort" />
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {fieldTestPaginationEntityList.map((fieldTestPaginationEntity, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`${match.url}/${fieldTestPaginationEntity.id}`} color="link" size="sm">
                      {fieldTestPaginationEntity.id}
                    </Button>
                  </td>
                  <td>{fieldTestPaginationEntity.stringAlice}</td>
                  <td>{fieldTestPaginationEntity.stringRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.stringMinlengthAlice}</td>
                  <td>{fieldTestPaginationEntity.stringMaxlengthAlice}</td>
                  <td>{fieldTestPaginationEntity.stringPatternAlice}</td>
                  <td>{fieldTestPaginationEntity.integerAlice}</td>
                  <td>{fieldTestPaginationEntity.integerRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.integerMinAlice}</td>
                  <td>{fieldTestPaginationEntity.integerMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.longAlice}</td>
                  <td>{fieldTestPaginationEntity.longRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.longMinAlice}</td>
                  <td>{fieldTestPaginationEntity.longMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.floatAlice}</td>
                  <td>{fieldTestPaginationEntity.floatRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.floatMinAlice}</td>
                  <td>{fieldTestPaginationEntity.floatMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.doubleRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.doubleMinAlice}</td>
                  <td>{fieldTestPaginationEntity.doubleMaxAlice}</td>
                  <td>{fieldTestPaginationEntity.bigDecimalRequiredAlice}</td>
                  <td>{fieldTestPaginationEntity.bigDecimalMinAlice}</td>
                  <td>{fieldTestPaginationEntity.bigDecimalMaxAlice}</td>
                  <td>
                    {fieldTestPaginationEntity.localDateAlice ? (
                      <TextFormat type="date" value={fieldTestPaginationEntity.localDateAlice} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.localDateRequiredAlice ? (
                      <TextFormat type="date" value={fieldTestPaginationEntity.localDateRequiredAlice} format={APP_LOCAL_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.instantAlice ? (
                      <TextFormat type="date" value={fieldTestPaginationEntity.instantAlice} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.instanteRequiredAlice ? (
                      <TextFormat type="date" value={fieldTestPaginationEntity.instanteRequiredAlice} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.zonedDateTimeAlice ? (
                      <TextFormat type="date" value={fieldTestPaginationEntity.zonedDateTimeAlice} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.zonedDateTimeRequiredAlice ? (
                      <TextFormat type="date" value={fieldTestPaginationEntity.zonedDateTimeRequiredAlice} format={APP_DATE_FORMAT} />
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.durationAlice ? <DurationFormat value={fieldTestPaginationEntity.durationAlice} /> : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.durationRequiredAlice ? (
                      <DurationFormat value={fieldTestPaginationEntity.durationRequiredAlice} />
                    ) : null}
                  </td>
                  <td>{fieldTestPaginationEntity.booleanAlice ? 'true' : 'false'}</td>
                  <td>{fieldTestPaginationEntity.booleanRequiredAlice ? 'true' : 'false'}</td>
                  <td>
                    <Translate contentKey={`sampleCouchbaseNoCacheApp.EnumFieldClass.${fieldTestPaginationEntity.enumAlice}`} />
                  </td>
                  <td>
                    <Translate
                      contentKey={`sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.${fieldTestPaginationEntity.enumRequiredAlice}`}
                    />
                  </td>
                  <td>{fieldTestPaginationEntity.uuidAlice}</td>
                  <td>{fieldTestPaginationEntity.uuidRequiredAlice}</td>
                  <td>
                    {fieldTestPaginationEntity.byteImageAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteImageAliceContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestPaginationEntity.byteImageAliceContentType,
                              fieldTestPaginationEntity.byteImageAlice
                            )}
                          >
                            <img
                              src={`data:${fieldTestPaginationEntity.byteImageAliceContentType};base64,${fieldTestPaginationEntity.byteImageAlice}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteImageAliceContentType}, {byteSize(fieldTestPaginationEntity.byteImageAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteImageRequiredAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteImageRequiredAliceContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestPaginationEntity.byteImageRequiredAliceContentType,
                              fieldTestPaginationEntity.byteImageRequiredAlice
                            )}
                          >
                            <img
                              src={`data:${fieldTestPaginationEntity.byteImageRequiredAliceContentType};base64,${fieldTestPaginationEntity.byteImageRequiredAlice}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteImageRequiredAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteImageRequiredAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteImageMinbytesAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteImageMinbytesAliceContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestPaginationEntity.byteImageMinbytesAliceContentType,
                              fieldTestPaginationEntity.byteImageMinbytesAlice
                            )}
                          >
                            <img
                              src={`data:${fieldTestPaginationEntity.byteImageMinbytesAliceContentType};base64,${fieldTestPaginationEntity.byteImageMinbytesAlice}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteImageMinbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteImageMinbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteImageMaxbytesAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteImageMaxbytesAliceContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestPaginationEntity.byteImageMaxbytesAliceContentType,
                              fieldTestPaginationEntity.byteImageMaxbytesAlice
                            )}
                          >
                            <img
                              src={`data:${fieldTestPaginationEntity.byteImageMaxbytesAliceContentType};base64,${fieldTestPaginationEntity.byteImageMaxbytesAlice}`}
                              style={{ maxHeight: '30px' }}
                            />
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteImageMaxbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteImageMaxbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteAnyAliceContentType ? (
                          <a onClick={openFile(fieldTestPaginationEntity.byteAnyAliceContentType, fieldTestPaginationEntity.byteAnyAlice)}>
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteAnyAliceContentType}, {byteSize(fieldTestPaginationEntity.byteAnyAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyRequiredAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteAnyRequiredAliceContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestPaginationEntity.byteAnyRequiredAliceContentType,
                              fieldTestPaginationEntity.byteAnyRequiredAlice
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteAnyRequiredAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteAnyRequiredAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyMinbytesAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteAnyMinbytesAliceContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestPaginationEntity.byteAnyMinbytesAliceContentType,
                              fieldTestPaginationEntity.byteAnyMinbytesAlice
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteAnyMinbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteAnyMinbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    {fieldTestPaginationEntity.byteAnyMaxbytesAlice ? (
                      <div>
                        {fieldTestPaginationEntity.byteAnyMaxbytesAliceContentType ? (
                          <a
                            onClick={openFile(
                              fieldTestPaginationEntity.byteAnyMaxbytesAliceContentType,
                              fieldTestPaginationEntity.byteAnyMaxbytesAlice
                            )}
                          >
                            <Translate contentKey="entity.action.open">Open</Translate>
                            &nbsp;
                          </a>
                        ) : null}
                        <span>
                          {fieldTestPaginationEntity.byteAnyMaxbytesAliceContentType},{' '}
                          {byteSize(fieldTestPaginationEntity.byteAnyMaxbytesAlice)}
                        </span>
                      </div>
                    ) : null}
                  </td>
                  <td>{fieldTestPaginationEntity.byteTextAlice}</td>
                  <td>{fieldTestPaginationEntity.byteTextRequiredAlice}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      <Button
                        tag={Link}
                        to={`${match.url}/${fieldTestPaginationEntity.id}`}
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
                        to={`${match.url}/${fieldTestPaginationEntity.id}/edit?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
                        to={`${match.url}/${fieldTestPaginationEntity.id}/delete?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`}
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
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.home.notFound">
                No Field Test Pagination Entities found
              </Translate>
            </div>
          )
        )}
      </div>
      {props.totalItems ? (
        <div className={fieldTestPaginationEntityList && fieldTestPaginationEntityList.length > 0 ? '' : 'd-none'}>
          <Row className="justify-content-center">
            <JhiItemCount page={paginationState.activePage} total={totalItems} itemsPerPage={paginationState.itemsPerPage} i18nEnabled />
          </Row>
          <Row className="justify-content-center">
            <JhiPagination
              activePage={paginationState.activePage}
              onSelect={handlePagination}
              maxButtons={5}
              itemsPerPage={paginationState.itemsPerPage}
              totalItems={props.totalItems}
            />
          </Row>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = ({ fieldTestPaginationEntity }: IRootState) => ({
  fieldTestPaginationEntityList: fieldTestPaginationEntity.entities,
  loading: fieldTestPaginationEntity.loading,
  totalItems: fieldTestPaginationEntity.totalItems,
});

const mapDispatchToProps = {
  getEntities,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestPaginationEntity);
