import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-entity.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { DurationFormat } from 'app/shared/DurationFormat';

export interface IFieldTestEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestEntityDetail = (props: IFieldTestEntityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fieldTestEntityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fieldTestEntityDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.detail.title">FieldTestEntity</Translate> [
          <strong>{fieldTestEntityEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="stringTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringTom">String Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.stringTom}</dd>
          <dt>
            <span id="stringRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringRequiredTom">String Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.stringRequiredTom}</dd>
          <dt>
            <span id="stringMinlengthTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringMinlengthTom">String Minlength Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.stringMinlengthTom}</dd>
          <dt>
            <span id="stringMaxlengthTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringMaxlengthTom">String Maxlength Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.stringMaxlengthTom}</dd>
          <dt>
            <span id="stringPatternTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.stringPatternTom">String Pattern Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.stringPatternTom}</dd>
          <dt>
            <span id="numberPatternTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.numberPatternTom">Number Pattern Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.numberPatternTom}</dd>
          <dt>
            <span id="numberPatternRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.numberPatternRequiredTom">
                Number Pattern Required Tom
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.numberPatternRequiredTom}</dd>
          <dt>
            <span id="integerTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerTom">Integer Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.integerTom}</dd>
          <dt>
            <span id="integerRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerRequiredTom">Integer Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.integerRequiredTom}</dd>
          <dt>
            <span id="integerMinTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerMinTom">Integer Min Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.integerMinTom}</dd>
          <dt>
            <span id="integerMaxTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.integerMaxTom">Integer Max Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.integerMaxTom}</dd>
          <dt>
            <span id="longTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longTom">Long Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.longTom}</dd>
          <dt>
            <span id="longRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longRequiredTom">Long Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.longRequiredTom}</dd>
          <dt>
            <span id="longMinTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longMinTom">Long Min Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.longMinTom}</dd>
          <dt>
            <span id="longMaxTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.longMaxTom">Long Max Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.longMaxTom}</dd>
          <dt>
            <span id="floatTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatTom">Float Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.floatTom}</dd>
          <dt>
            <span id="floatRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatRequiredTom">Float Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.floatRequiredTom}</dd>
          <dt>
            <span id="floatMinTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatMinTom">Float Min Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.floatMinTom}</dd>
          <dt>
            <span id="floatMaxTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.floatMaxTom">Float Max Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.floatMaxTom}</dd>
          <dt>
            <span id="doubleRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleRequiredTom">Double Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.doubleRequiredTom}</dd>
          <dt>
            <span id="doubleMinTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleMinTom">Double Min Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.doubleMinTom}</dd>
          <dt>
            <span id="doubleMaxTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.doubleMaxTom">Double Max Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.doubleMaxTom}</dd>
          <dt>
            <span id="bigDecimalRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalRequiredTom">Big Decimal Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.bigDecimalRequiredTom}</dd>
          <dt>
            <span id="bigDecimalMinTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalMinTom">Big Decimal Min Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.bigDecimalMinTom}</dd>
          <dt>
            <span id="bigDecimalMaxTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.bigDecimalMaxTom">Big Decimal Max Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.bigDecimalMaxTom}</dd>
          <dt>
            <span id="localDateTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.localDateTom">Local Date Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.localDateTom ? (
              <TextFormat value={fieldTestEntityEntity.localDateTom} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="localDateRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.localDateRequiredTom">Local Date Required Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.localDateRequiredTom ? (
              <TextFormat value={fieldTestEntityEntity.localDateRequiredTom} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instantTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.instantTom">Instant Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.instantTom ? (
              <TextFormat value={fieldTestEntityEntity.instantTom} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instantRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.instantRequiredTom">Instant Required Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.instantRequiredTom ? (
              <TextFormat value={fieldTestEntityEntity.instantRequiredTom} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.zonedDateTimeTom">Zoned Date Time Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.zonedDateTimeTom ? (
              <TextFormat value={fieldTestEntityEntity.zonedDateTimeTom} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.zonedDateTimeRequiredTom">
                Zoned Date Time Required Tom
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.zonedDateTimeRequiredTom ? (
              <TextFormat value={fieldTestEntityEntity.zonedDateTimeRequiredTom} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="durationTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.durationTom">Duration Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.durationTom ? <DurationFormat value={fieldTestEntityEntity.durationTom} /> : null} (
            {fieldTestEntityEntity.durationTom})
          </dd>
          <dt>
            <span id="durationRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.durationRequiredTom">Duration Required Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.durationRequiredTom ? <DurationFormat value={fieldTestEntityEntity.durationRequiredTom} /> : null} (
            {fieldTestEntityEntity.durationRequiredTom})
          </dd>
          <dt>
            <span id="booleanTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.booleanTom">Boolean Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.booleanTom ? 'true' : 'false'}</dd>
          <dt>
            <span id="booleanRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.booleanRequiredTom">Boolean Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.booleanRequiredTom ? 'true' : 'false'}</dd>
          <dt>
            <span id="enumTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.enumTom">Enum Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.enumTom}</dd>
          <dt>
            <span id="enumRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.enumRequiredTom">Enum Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.enumRequiredTom}</dd>
          <dt>
            <span id="uuidTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.uuidTom">Uuid Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.uuidTom}</dd>
          <dt>
            <span id="uuidRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.uuidRequiredTom">Uuid Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.uuidRequiredTom}</dd>
          <dt>
            <span id="byteImageTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageTom">Byte Image Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteImageTom ? (
              <div>
                {fieldTestEntityEntity.byteImageTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteImageTomContentType, fieldTestEntityEntity.byteImageTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageTomContentType};base64,${fieldTestEntityEntity.byteImageTom}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteImageTomContentType}, {byteSize(fieldTestEntityEntity.byteImageTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageRequiredTom">Byte Image Required Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteImageRequiredTom ? (
              <div>
                {fieldTestEntityEntity.byteImageRequiredTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteImageRequiredTomContentType, fieldTestEntityEntity.byteImageRequiredTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageRequiredTomContentType};base64,${fieldTestEntityEntity.byteImageRequiredTom}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteImageRequiredTomContentType}, {byteSize(fieldTestEntityEntity.byteImageRequiredTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMinbytesTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageMinbytesTom">Byte Image Minbytes Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteImageMinbytesTom ? (
              <div>
                {fieldTestEntityEntity.byteImageMinbytesTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteImageMinbytesTomContentType, fieldTestEntityEntity.byteImageMinbytesTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageMinbytesTomContentType};base64,${fieldTestEntityEntity.byteImageMinbytesTom}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteImageMinbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteImageMinbytesTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMaxbytesTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteImageMaxbytesTom">Byte Image Maxbytes Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteImageMaxbytesTom ? (
              <div>
                {fieldTestEntityEntity.byteImageMaxbytesTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteImageMaxbytesTomContentType, fieldTestEntityEntity.byteImageMaxbytesTom)}>
                    <img
                      src={`data:${fieldTestEntityEntity.byteImageMaxbytesTomContentType};base64,${fieldTestEntityEntity.byteImageMaxbytesTom}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteImageMaxbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteImageMaxbytesTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyTom">Byte Any Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteAnyTom ? (
              <div>
                {fieldTestEntityEntity.byteAnyTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyTomContentType, fieldTestEntityEntity.byteAnyTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteAnyTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyRequiredTom">Byte Any Required Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteAnyRequiredTom ? (
              <div>
                {fieldTestEntityEntity.byteAnyRequiredTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyRequiredTomContentType, fieldTestEntityEntity.byteAnyRequiredTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteAnyRequiredTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyRequiredTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMinbytesTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyMinbytesTom">Byte Any Minbytes Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteAnyMinbytesTom ? (
              <div>
                {fieldTestEntityEntity.byteAnyMinbytesTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyMinbytesTomContentType, fieldTestEntityEntity.byteAnyMinbytesTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteAnyMinbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyMinbytesTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMaxbytesTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteAnyMaxbytesTom">Byte Any Maxbytes Tom</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestEntityEntity.byteAnyMaxbytesTom ? (
              <div>
                {fieldTestEntityEntity.byteAnyMaxbytesTomContentType ? (
                  <a onClick={openFile(fieldTestEntityEntity.byteAnyMaxbytesTomContentType, fieldTestEntityEntity.byteAnyMaxbytesTom)}>
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestEntityEntity.byteAnyMaxbytesTomContentType}, {byteSize(fieldTestEntityEntity.byteAnyMaxbytesTom)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteTextTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteTextTom">Byte Text Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.byteTextTom}</dd>
          <dt>
            <span id="byteTextRequiredTom">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestEntity.byteTextRequiredTom">Byte Text Required Tom</Translate>
            </span>
          </dt>
          <dd>{fieldTestEntityEntity.byteTextRequiredTom}</dd>
        </dl>
        <Button tag={Link} to="/field-test-entity" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/field-test-entity/${fieldTestEntityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ fieldTestEntity }: IRootState) => ({
  fieldTestEntityEntity: fieldTestEntity.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestEntityDetail);
