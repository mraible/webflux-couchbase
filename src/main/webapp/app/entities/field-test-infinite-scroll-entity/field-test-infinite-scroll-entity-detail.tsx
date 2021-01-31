import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-infinite-scroll-entity.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { DurationFormat } from 'app/shared/DurationFormat';

export interface IFieldTestInfiniteScrollEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestInfiniteScrollEntityDetail = (props: IFieldTestInfiniteScrollEntityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fieldTestInfiniteScrollEntityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fieldTestInfiniteScrollEntityDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.detail.title">
            FieldTestInfiniteScrollEntity
          </Translate>{' '}
          [<strong>{fieldTestInfiniteScrollEntityEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="stringHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringHugo">String Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.stringHugo}</dd>
          <dt>
            <span id="stringRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringRequiredHugo">
                String Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.stringRequiredHugo}</dd>
          <dt>
            <span id="stringMinlengthHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringMinlengthHugo">
                String Minlength Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.stringMinlengthHugo}</dd>
          <dt>
            <span id="stringMaxlengthHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringMaxlengthHugo">
                String Maxlength Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.stringMaxlengthHugo}</dd>
          <dt>
            <span id="stringPatternHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.stringPatternHugo">
                String Pattern Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.stringPatternHugo}</dd>
          <dt>
            <span id="integerHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerHugo">Integer Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.integerHugo}</dd>
          <dt>
            <span id="integerRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerRequiredHugo">
                Integer Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.integerRequiredHugo}</dd>
          <dt>
            <span id="integerMinHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerMinHugo">Integer Min Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.integerMinHugo}</dd>
          <dt>
            <span id="integerMaxHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.integerMaxHugo">Integer Max Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.integerMaxHugo}</dd>
          <dt>
            <span id="longHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longHugo">Long Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.longHugo}</dd>
          <dt>
            <span id="longRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longRequiredHugo">
                Long Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.longRequiredHugo}</dd>
          <dt>
            <span id="longMinHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longMinHugo">Long Min Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.longMinHugo}</dd>
          <dt>
            <span id="longMaxHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.longMaxHugo">Long Max Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.longMaxHugo}</dd>
          <dt>
            <span id="floatHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatHugo">Float Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.floatHugo}</dd>
          <dt>
            <span id="floatRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatRequiredHugo">
                Float Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.floatRequiredHugo}</dd>
          <dt>
            <span id="floatMinHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatMinHugo">Float Min Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.floatMinHugo}</dd>
          <dt>
            <span id="floatMaxHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.floatMaxHugo">Float Max Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.floatMaxHugo}</dd>
          <dt>
            <span id="doubleRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.doubleRequiredHugo">
                Double Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.doubleRequiredHugo}</dd>
          <dt>
            <span id="doubleMinHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.doubleMinHugo">Double Min Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.doubleMinHugo}</dd>
          <dt>
            <span id="doubleMaxHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.doubleMaxHugo">Double Max Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.doubleMaxHugo}</dd>
          <dt>
            <span id="bigDecimalRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.bigDecimalRequiredHugo">
                Big Decimal Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.bigDecimalRequiredHugo}</dd>
          <dt>
            <span id="bigDecimalMinHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.bigDecimalMinHugo">
                Big Decimal Min Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.bigDecimalMinHugo}</dd>
          <dt>
            <span id="bigDecimalMaxHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.bigDecimalMaxHugo">
                Big Decimal Max Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.bigDecimalMaxHugo}</dd>
          <dt>
            <span id="localDateHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.localDateHugo">Local Date Hugo</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.localDateHugo ? (
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.localDateHugo} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="localDateRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.localDateRequiredHugo">
                Local Date Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.localDateRequiredHugo ? (
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.localDateRequiredHugo} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instantHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.instantHugo">Instant Hugo</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.instantHugo ? (
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.instantHugo} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instanteRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.instanteRequiredHugo">
                Instante Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.instanteRequiredHugo ? (
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.instanteRequiredHugo} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.zonedDateTimeHugo">
                Zoned Date Time Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.zonedDateTimeHugo ? (
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.zonedDateTimeHugo} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.zonedDateTimeRequiredHugo">
                Zoned Date Time Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.zonedDateTimeRequiredHugo ? (
              <TextFormat value={fieldTestInfiniteScrollEntityEntity.zonedDateTimeRequiredHugo} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="durationHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.durationHugo">Duration Hugo</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.durationHugo ? (
              <DurationFormat value={fieldTestInfiniteScrollEntityEntity.durationHugo} />
            ) : null}{' '}
            ({fieldTestInfiniteScrollEntityEntity.durationHugo})
          </dd>
          <dt>
            <span id="durationRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.durationRequiredHugo">
                Duration Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.durationRequiredHugo ? (
              <DurationFormat value={fieldTestInfiniteScrollEntityEntity.durationRequiredHugo} />
            ) : null}{' '}
            ({fieldTestInfiniteScrollEntityEntity.durationRequiredHugo})
          </dd>
          <dt>
            <span id="booleanHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.booleanHugo">Boolean Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.booleanHugo ? 'true' : 'false'}</dd>
          <dt>
            <span id="booleanRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.booleanRequiredHugo">
                Boolean Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.booleanRequiredHugo ? 'true' : 'false'}</dd>
          <dt>
            <span id="enumHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.enumHugo">Enum Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.enumHugo}</dd>
          <dt>
            <span id="enumRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.enumRequiredHugo">
                Enum Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.enumRequiredHugo}</dd>
          <dt>
            <span id="uuidHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.uuidHugo">Uuid Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.uuidHugo}</dd>
          <dt>
            <span id="uuidRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.uuidRequiredHugo">
                Uuid Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.uuidRequiredHugo}</dd>
          <dt>
            <span id="byteImageHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageHugo">Byte Image Hugo</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteImageHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteImageHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageHugoContentType};base64,${fieldTestInfiniteScrollEntityEntity.byteImageHugo}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteImageHugoContentType},{' '}
                  {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageRequiredHugo">
                Byte Image Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugoContentType};base64,${fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugoContentType},{' '}
                  {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageRequiredHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMinbytesHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageMinbytesHugo">
                Byte Image Minbytes Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugoContentType};base64,${fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugoContentType},{' '}
                  {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageMinbytesHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMaxbytesHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteImageMaxbytesHugo">
                Byte Image Maxbytes Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo
                    )}
                  >
                    <img
                      src={`data:${fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugoContentType};base64,${fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugoContentType},{' '}
                  {byteSize(fieldTestInfiniteScrollEntityEntity.byteImageMaxbytesHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyHugo">Byte Any Hugo</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteAnyHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteAnyHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteAnyHugoContentType}, {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyRequiredHugo">
                Byte Any Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugoContentType},{' '}
                  {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyRequiredHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMinbytesHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyMinbytesHugo">
                Byte Any Minbytes Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugoContentType},{' '}
                  {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyMinbytesHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMaxbytesHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteAnyMaxbytesHugo">
                Byte Any Maxbytes Hugo
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugo ? (
              <div>
                {fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugoContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugoContentType,
                      fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugo
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugoContentType},{' '}
                  {byteSize(fieldTestInfiniteScrollEntityEntity.byteAnyMaxbytesHugo)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteTextHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteTextHugo">Byte Text Hugo</Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.byteTextHugo}</dd>
          <dt>
            <span id="byteTextRequiredHugo">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.byteTextRequiredHugo">
                Byte Text Required Hugo
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestInfiniteScrollEntityEntity.byteTextRequiredHugo}</dd>
        </dl>
        <Button tag={Link} to="/field-test-infinite-scroll-entity" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/field-test-infinite-scroll-entity/${fieldTestInfiniteScrollEntityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ fieldTestInfiniteScrollEntity }: IRootState) => ({
  fieldTestInfiniteScrollEntityEntity: fieldTestInfiniteScrollEntity.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestInfiniteScrollEntityDetail);
