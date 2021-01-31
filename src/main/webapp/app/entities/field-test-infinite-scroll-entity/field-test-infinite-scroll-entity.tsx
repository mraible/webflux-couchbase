import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
import { openFile, byteSize, Translate, TextFormat, getSortState, IPaginationBaseState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DurationFormat } from 'app/shared/DurationFormat';

import { IRootState } from 'app/shared/reducers';
import { getEntities, reset } from './field-test-infinite-scroll-entity.reducer';
import { IFieldTestInfiniteScrollEntity } from 'app/shared/model/field-test-infinite-scroll-entity.model';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ITEMS_PER_PAGE } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';

export interface IFieldTestInfiniteScrollEntityProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export const FieldTestInfiniteScrollEntity = (props: IFieldTestInfiniteScrollEntityProps) => {
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(props.location, ITEMS_PER_PAGE), props.location.search)
  );
  const [sorting, setSorting] = useState(false);

  const getAllEntities = () => {
    props.getEntities(paginationState.activePage - 1, paginationState.itemsPerPage, `${paginationState.sort},${paginationState.order}`);
  };

  const resetAll = () => {
    props.reset();
    setPaginationState({
      ...paginationState,
      activePage: 1,
    });
    props.getEntities();
  };

  useEffect(() => {
    resetAll();
  }, []);

  useEffect(() => {
    if (props.updateSuccess) {
      resetAll();
    }
  }, [props.updateSuccess]);

  useEffect(() => {
    getAllEntities();
  }, [paginationState.activePage]);

  const handleLoadMore = () => {
    if ((window as any).pageYOffset > 0) {
      setPaginationState({
        ...paginationState,
        activePage: paginationState.activePage + 1,
      });
    }
  };

  useEffect(() => {
    if (sorting) {
      getAllEntities();
      setSorting(false);
    }
  }, [sorting]);

  const sort = p => () => {
    props.reset();
    setPaginationState({
      ...paginationState,
      activePage: 1,
      order: paginationState.order === 'asc' ? 'desc' : 'asc',
      sort: p,
    });
    setSorting(true);
  };

  const handleSyncList = () => {
    resetAll();
  };

  const { fieldTestInfiniteScrollEntityList, match, loading } = props;
  return (
    <div>
      <h2 id="field-test-infinite-scroll-entity-heading" data-cy="FieldTestInfiniteScrollEntityHeading">
        <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.home.title">
          Field Test Infinite Scroll Entities
        </Translate>
        <div className="d-flex justify-content-end">
          <Button className="mr-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to={`${match.url}/new`} className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.home.createLabel">
              Create new Field Test Infinite Scroll Entity
            </Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        <InfiniteScroll
          pageStart={paginationState.activePage}
          loadMore={handleLoadMore}
          hasMore={paginationState.activePage - 1 < props.links.next}
          loader={<div className="loader">Loading ...</div>}
          threshold={0}
          initialLoad={false}
        >
          {fieldTestInfiniteScrollEntityList && fieldTestInfiniteScrollEntityList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('id')}>
                    <Translate contentKey="global.field.id">ID</Translate> <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('stringHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringHugo">String Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('stringRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringRequiredHugo">
                      String Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('stringMinlengthHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringMinlengthHugo">
                      String Minlength Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('stringMaxlengthHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringMaxlengthHugo">
                      String Maxlength Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('stringPatternHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringPatternHugo">
                      String Pattern Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('integerHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerHugo">Integer Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('integerRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerRequiredHugo">
                      Integer Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('integerMinHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerMinHugo">
                      Integer Min Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('integerMaxHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerMaxHugo">
                      Integer Max Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('longHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longHugo">Long Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('longRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longRequiredHugo">
                      Long Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('longMinHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longMinHugo">Long Min Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('longMaxHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longMaxHugo">Long Max Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('floatHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatHugo">Float Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('floatRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatRequiredHugo">
                      Float Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('floatMinHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatMinHugo">Float Min Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('floatMaxHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatMaxHugo">Float Max Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('doubleRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.doubleRequiredHugo">
                      Double Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('doubleMinHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.doubleMinHugo">
                      Double Min Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('doubleMaxHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.doubleMaxHugo">
                      Double Max Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('bigDecimalRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo">
                      Big Decimal Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('bigDecimalMinHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.bigDecimalMinHugo">
                      Big Decimal Min Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('bigDecimalMaxHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo">
                      Big Decimal Max Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('localDateHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.localDateHugo">
                      Local Date Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('localDateRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.localDateRequiredHugo">
                      Local Date Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('instantHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.instantHugo">Instant Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('instanteRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.instanteRequiredHugo">
                      Instante Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('zonedDateTimeHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.zonedDateTimeHugo">
                      Zoned Date Time Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('zonedDateTimeRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo">
                      Zoned Date Time Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('durationHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.durationHugo">Duration Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('durationRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.durationRequiredHugo">
                      Duration Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('booleanHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.booleanHugo">Boolean Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('booleanRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.booleanRequiredHugo">
                      Boolean Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('enumHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.enumHugo">Enum Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('enumRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.enumRequiredHugo">
                      Enum Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('uuidHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.uuidHugo">Uuid Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('uuidRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.uuidRequiredHugo">
                      Uuid Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteImageHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageHugo">
                      Byte Image Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteImageRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageRequiredHugo">
                      Byte Image Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteImageMinbytesHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo">
                      Byte Image Minbytes Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteImageMaxbytesHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo">
                      Byte Image Maxbytes Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteAnyHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyHugo">Byte Any Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteAnyRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo">
                      Byte Any Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteAnyMinbytesHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo">
                      Byte Any Minbytes Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteAnyMaxbytesHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo">
                      Byte Any Maxbytes Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteTextHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteTextHugo">Byte Text Hugo</Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('byteTextRequiredHugo')}>
                    <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteTextRequiredHugo">
                      Byte Text Required Hugo
                    </Translate>{' '}
                    <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {fieldTestInfiniteScrollEntityList.map((fieldTestInfiniteScrollEntity, i) => (
                  <tr key={`entity-${i}`} data-cy="entityTable">
                    <td>
                      <Button tag={Link} to={`${match.url}/${fieldTestInfiniteScrollEntity.id}`} color="link" size="sm">
                        {fieldTestInfiniteScrollEntity.id}
                      </Button>
                    </td>
                    <td>{fieldTestInfiniteScrollEntity.stringHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.stringRequiredHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.stringMinlengthHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.stringMaxlengthHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.stringPatternHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.integerHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.integerRequiredHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.integerMinHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.integerMaxHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.longHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.longRequiredHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.longMinHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.longMaxHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.floatHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.floatRequiredHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.floatMinHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.floatMaxHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.doubleRequiredHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.doubleMinHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.doubleMaxHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.bigDecimalMinHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.bigDecimalMaxHugo}</td>
                    <td>
                      {fieldTestInfiniteScrollEntity.localDateHugo ? (
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.localDateHugo} format={APP_LOCAL_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.localDateRequiredHugo ? (
                        <TextFormat
                          type="date"
                          value={fieldTestInfiniteScrollEntity.localDateRequiredHugo}
                          format={APP_LOCAL_DATE_FORMAT}
                        />
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.instantHugo ? (
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.instantHugo} format={APP_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.instanteRequiredHugo ? (
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.instanteRequiredHugo} format={APP_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.zonedDateTimeHugo ? (
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.zonedDateTimeHugo} format={APP_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo ? (
                        <TextFormat type="date" value={fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo} format={APP_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.durationHugo ? (
                        <DurationFormat value={fieldTestInfiniteScrollEntity.durationHugo} />
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.durationRequiredHugo ? (
                        <DurationFormat value={fieldTestInfiniteScrollEntity.durationRequiredHugo} />
                      ) : null}
                    </td>
                    <td>{fieldTestInfiniteScrollEntity.booleanHugo ? 'true' : 'false'}</td>
                    <td>{fieldTestInfiniteScrollEntity.booleanRequiredHugo ? 'true' : 'false'}</td>
                    <td>
                      <Translate contentKey={`sampleCouchbaseNoCacheApp.EnumFieldClass.${fieldTestInfiniteScrollEntity.enumHugo}`} />
                    </td>
                    <td>
                      <Translate
                        contentKey={`sampleCouchbaseNoCacheApp.EnumRequiredFieldClass.${fieldTestInfiniteScrollEntity.enumRequiredHugo}`}
                      />
                    </td>
                    <td>{fieldTestInfiniteScrollEntity.uuidHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.uuidRequiredHugo}</td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteImageHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteImageHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageHugoContentType};base64,${fieldTestInfiniteScrollEntity.byteImageHugo}`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteImageHugoContentType},{' '}
                            {byteSize(fieldTestInfiniteScrollEntity.byteImageHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteImageRequiredHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageRequiredHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType};base64,${fieldTestInfiniteScrollEntity.byteImageRequiredHugo}`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteImageRequiredHugoContentType},{' '}
                            {byteSize(fieldTestInfiniteScrollEntity.byteImageRequiredHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteImageMinbytesHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageMinbytesHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType};base64,${fieldTestInfiniteScrollEntity.byteImageMinbytesHugo}`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteImageMinbytesHugoContentType},{' '}
                            {byteSize(fieldTestInfiniteScrollEntity.byteImageMinbytesHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo
                              )}
                            >
                              <img
                                src={`data:${fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType};base64,${fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo}`}
                                style={{ maxHeight: '30px' }}
                              />
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteImageMaxbytesHugoContentType},{' '}
                            {byteSize(fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteAnyHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteAnyHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteAnyHugoContentType}, {byteSize(fieldTestInfiniteScrollEntity.byteAnyHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteAnyRequiredHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyRequiredHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteAnyRequiredHugoContentType},{' '}
                            {byteSize(fieldTestInfiniteScrollEntity.byteAnyRequiredHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteAnyMinbytesHugoContentType},{' '}
                            {byteSize(fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>
                      {fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo ? (
                        <div>
                          {fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType ? (
                            <a
                              onClick={openFile(
                                fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType,
                                fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo
                              )}
                            >
                              <Translate contentKey="entity.action.open">Open</Translate>
                              &nbsp;
                            </a>
                          ) : null}
                          <span>
                            {fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugoContentType},{' '}
                            {byteSize(fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo)}
                          </span>
                        </div>
                      ) : null}
                    </td>
                    <td>{fieldTestInfiniteScrollEntity.byteTextHugo}</td>
                    <td>{fieldTestInfiniteScrollEntity.byteTextRequiredHugo}</td>
                    <td className="text-right">
                      <div className="btn-group flex-btn-group-container">
                        <Button
                          tag={Link}
                          to={`${match.url}/${fieldTestInfiniteScrollEntity.id}`}
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
                          to={`${match.url}/${fieldTestInfiniteScrollEntity.id}/edit`}
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
                          to={`${match.url}/${fieldTestInfiniteScrollEntity.id}/delete`}
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
                <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.home.notFound">
                  No Field Test Infinite Scroll Entities found
                </Translate>
              </div>
            )
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

const mapStateToProps = ({ fieldTestInfiniteScrollEntity }: IRootState) => ({
  fieldTestInfiniteScrollEntityList: fieldTestInfiniteScrollEntity.entities,
  loading: fieldTestInfiniteScrollEntity.loading,
  totalItems: fieldTestInfiniteScrollEntity.totalItems,
  links: fieldTestInfiniteScrollEntity.links,
  entity: fieldTestInfiniteScrollEntity.entity,
  updateSuccess: fieldTestInfiniteScrollEntity.updateSuccess,
});

const mapDispatchToProps = {
  getEntities,
  reset,
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestInfiniteScrollEntity);
