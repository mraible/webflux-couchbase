import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-service-impl-entity.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { DurationFormat } from 'app/shared/DurationFormat';

export interface IFieldTestServiceImplEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestServiceImplEntityDetail = (props: IFieldTestServiceImplEntityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fieldTestServiceImplEntityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fieldTestServiceImplEntityDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.detail.title">FieldTestServiceImplEntity</Translate> [
          <strong>{fieldTestServiceImplEntityEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="stringMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMika">String Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.stringMika}</dd>
          <dt>
            <span id="stringRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringRequiredMika">
                String Required Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.stringRequiredMika}</dd>
          <dt>
            <span id="stringMinlengthMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMinlengthMika">
                String Minlength Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.stringMinlengthMika}</dd>
          <dt>
            <span id="stringMaxlengthMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringMaxlengthMika">
                String Maxlength Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.stringMaxlengthMika}</dd>
          <dt>
            <span id="stringPatternMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.stringPatternMika">String Pattern Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.stringPatternMika}</dd>
          <dt>
            <span id="integerMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMika">Integer Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.integerMika}</dd>
          <dt>
            <span id="integerRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerRequiredMika">
                Integer Required Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.integerRequiredMika}</dd>
          <dt>
            <span id="integerMinMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMinMika">Integer Min Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.integerMinMika}</dd>
          <dt>
            <span id="integerMaxMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.integerMaxMika">Integer Max Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.integerMaxMika}</dd>
          <dt>
            <span id="longMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMika">Long Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.longMika}</dd>
          <dt>
            <span id="longRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longRequiredMika">Long Required Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.longRequiredMika}</dd>
          <dt>
            <span id="longMinMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMinMika">Long Min Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.longMinMika}</dd>
          <dt>
            <span id="longMaxMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.longMaxMika">Long Max Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.longMaxMika}</dd>
          <dt>
            <span id="floatMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMika">Float Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.floatMika}</dd>
          <dt>
            <span id="floatRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatRequiredMika">Float Required Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.floatRequiredMika}</dd>
          <dt>
            <span id="floatMinMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMinMika">Float Min Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.floatMinMika}</dd>
          <dt>
            <span id="floatMaxMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.floatMaxMika">Float Max Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.floatMaxMika}</dd>
          <dt>
            <span id="doubleRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleRequiredMika">
                Double Required Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.doubleRequiredMika}</dd>
          <dt>
            <span id="doubleMinMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleMinMika">Double Min Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.doubleMinMika}</dd>
          <dt>
            <span id="doubleMaxMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.doubleMaxMika">Double Max Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.doubleMaxMika}</dd>
          <dt>
            <span id="bigDecimalRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalRequiredMika">
                Big Decimal Required Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.bigDecimalRequiredMika}</dd>
          <dt>
            <span id="bigDecimalMinMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalMinMika">
                Big Decimal Min Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.bigDecimalMinMika}</dd>
          <dt>
            <span id="bigDecimalMaxMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.bigDecimalMaxMika">
                Big Decimal Max Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.bigDecimalMaxMika}</dd>
          <dt>
            <span id="localDateMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.localDateMika">Local Date Mika</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.localDateMika ? (
              <TextFormat value={fieldTestServiceImplEntityEntity.localDateMika} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="localDateRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.localDateRequiredMika">
                Local Date Required Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.localDateRequiredMika ? (
              <TextFormat value={fieldTestServiceImplEntityEntity.localDateRequiredMika} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instantMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.instantMika">Instant Mika</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.instantMika ? (
              <TextFormat value={fieldTestServiceImplEntityEntity.instantMika} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instanteRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.instanteRequiredMika">
                Instante Required Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.instanteRequiredMika ? (
              <TextFormat value={fieldTestServiceImplEntityEntity.instanteRequiredMika} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.zonedDateTimeMika">
                Zoned Date Time Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.zonedDateTimeMika ? (
              <TextFormat value={fieldTestServiceImplEntityEntity.zonedDateTimeMika} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.zonedDateTimeRequiredMika">
                Zoned Date Time Required Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.zonedDateTimeRequiredMika ? (
              <TextFormat value={fieldTestServiceImplEntityEntity.zonedDateTimeRequiredMika} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="durationMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.durationMika">Duration Mika</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.durationMika ? (
              <DurationFormat value={fieldTestServiceImplEntityEntity.durationMika} />
            ) : null}{' '}
            ({fieldTestServiceImplEntityEntity.durationMika})
          </dd>
          <dt>
            <span id="durationRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.durationRequiredMika">
                Duration Required Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.durationRequiredMika ? (
              <DurationFormat value={fieldTestServiceImplEntityEntity.durationRequiredMika} />
            ) : null}{' '}
            ({fieldTestServiceImplEntityEntity.durationRequiredMika})
          </dd>
          <dt>
            <span id="booleanMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.booleanMika">Boolean Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.booleanMika ? 'true' : 'false'}</dd>
          <dt>
            <span id="booleanRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.booleanRequiredMika">
                Boolean Required Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.booleanRequiredMika ? 'true' : 'false'}</dd>
          <dt>
            <span id="enumMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.enumMika">Enum Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.enumMika}</dd>
          <dt>
            <span id="enumRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.enumRequiredMika">Enum Required Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.enumRequiredMika}</dd>
          <dt>
            <span id="uuidMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.uuidMika">Uuid Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.uuidMika}</dd>
          <dt>
            <span id="uuidRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.uuidRequiredMika">Uuid Required Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.uuidRequiredMika}</dd>
          <dt>
            <span id="byteImageMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMika">Byte Image Mika</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteImageMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteImageMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageMikaContentType};base64,${fieldTestServiceImplEntityEntity.byteImageMika}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteImageMikaContentType}, {byteSize(fieldTestServiceImplEntityEntity.byteImageMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageRequiredMika">
                Byte Image Required Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteImageRequiredMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteImageRequiredMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageRequiredMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageRequiredMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageRequiredMikaContentType};base64,${fieldTestServiceImplEntityEntity.byteImageRequiredMika}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteImageRequiredMikaContentType},{' '}
                  {byteSize(fieldTestServiceImplEntityEntity.byteImageRequiredMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMinbytesMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMinbytesMika">
                Byte Image Minbytes Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteImageMinbytesMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteImageMinbytesMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageMinbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageMinbytesMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageMinbytesMikaContentType};base64,${fieldTestServiceImplEntityEntity.byteImageMinbytesMika}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteImageMinbytesMikaContentType},{' '}
                  {byteSize(fieldTestServiceImplEntityEntity.byteImageMinbytesMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMaxbytesMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteImageMaxbytesMika">
                Byte Image Maxbytes Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteImageMaxbytesMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteImageMaxbytesMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteImageMaxbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteImageMaxbytesMika
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceImplEntityEntity.byteImageMaxbytesMikaContentType};base64,${fieldTestServiceImplEntityEntity.byteImageMaxbytesMika}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteImageMaxbytesMikaContentType},{' '}
                  {byteSize(fieldTestServiceImplEntityEntity.byteImageMaxbytesMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMika">Byte Any Mika</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteAnyMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteAnyMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteAnyMikaContentType}, {byteSize(fieldTestServiceImplEntityEntity.byteAnyMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyRequiredMika">
                Byte Any Required Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteAnyRequiredMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteAnyRequiredMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyRequiredMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyRequiredMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteAnyRequiredMikaContentType},{' '}
                  {byteSize(fieldTestServiceImplEntityEntity.byteAnyRequiredMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMinbytesMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMinbytesMika">
                Byte Any Minbytes Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteAnyMinbytesMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteAnyMinbytesMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyMinbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyMinbytesMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteAnyMinbytesMikaContentType},{' '}
                  {byteSize(fieldTestServiceImplEntityEntity.byteAnyMinbytesMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMaxbytesMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteAnyMaxbytesMika">
                Byte Any Maxbytes Mika
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceImplEntityEntity.byteAnyMaxbytesMika ? (
              <div>
                {fieldTestServiceImplEntityEntity.byteAnyMaxbytesMikaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceImplEntityEntity.byteAnyMaxbytesMikaContentType,
                      fieldTestServiceImplEntityEntity.byteAnyMaxbytesMika
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceImplEntityEntity.byteAnyMaxbytesMikaContentType},{' '}
                  {byteSize(fieldTestServiceImplEntityEntity.byteAnyMaxbytesMika)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteTextMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteTextMika">Byte Text Mika</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.byteTextMika}</dd>
          <dt>
            <span id="byteTextRequiredMika">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceImplEntity.byteTextRequiredMika">
                Byte Text Required Mika
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceImplEntityEntity.byteTextRequiredMika}</dd>
        </dl>
        <Button tag={Link} to="/field-test-service-impl-entity" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/field-test-service-impl-entity/${fieldTestServiceImplEntityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ fieldTestServiceImplEntity }: IRootState) => ({
  fieldTestServiceImplEntityEntity: fieldTestServiceImplEntity.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestServiceImplEntityDetail);
