import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-mapstruct-and-service-class-entity.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { DurationFormat } from 'app/shared/DurationFormat';

export interface IFieldTestMapstructAndServiceClassEntityDetailProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const FieldTestMapstructAndServiceClassEntityDetail = (props: IFieldTestMapstructAndServiceClassEntityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fieldTestMapstructAndServiceClassEntityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fieldTestMapstructAndServiceClassEntityDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.detail.title">
            FieldTestMapstructAndServiceClassEntity
          </Translate>{' '}
          [<strong>{fieldTestMapstructAndServiceClassEntityEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="stringEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringEva">String Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.stringEva}</dd>
          <dt>
            <span id="stringRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringRequiredEva">
                String Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.stringRequiredEva}</dd>
          <dt>
            <span id="stringMinlengthEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringMinlengthEva">
                String Minlength Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.stringMinlengthEva}</dd>
          <dt>
            <span id="stringMaxlengthEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringMaxlengthEva">
                String Maxlength Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.stringMaxlengthEva}</dd>
          <dt>
            <span id="stringPatternEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.stringPatternEva">
                String Pattern Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.stringPatternEva}</dd>
          <dt>
            <span id="integerEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerEva">Integer Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.integerEva}</dd>
          <dt>
            <span id="integerRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerRequiredEva">
                Integer Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.integerRequiredEva}</dd>
          <dt>
            <span id="integerMinEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerMinEva">
                Integer Min Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.integerMinEva}</dd>
          <dt>
            <span id="integerMaxEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.integerMaxEva">
                Integer Max Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.integerMaxEva}</dd>
          <dt>
            <span id="longEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longEva">Long Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.longEva}</dd>
          <dt>
            <span id="longRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longRequiredEva">
                Long Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.longRequiredEva}</dd>
          <dt>
            <span id="longMinEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longMinEva">Long Min Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.longMinEva}</dd>
          <dt>
            <span id="longMaxEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.longMaxEva">Long Max Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.longMaxEva}</dd>
          <dt>
            <span id="floatEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatEva">Float Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.floatEva}</dd>
          <dt>
            <span id="floatRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatRequiredEva">
                Float Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.floatRequiredEva}</dd>
          <dt>
            <span id="floatMinEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatMinEva">
                Float Min Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.floatMinEva}</dd>
          <dt>
            <span id="floatMaxEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.floatMaxEva">
                Float Max Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.floatMaxEva}</dd>
          <dt>
            <span id="doubleRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleRequiredEva">
                Double Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.doubleRequiredEva}</dd>
          <dt>
            <span id="doubleMinEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleMinEva">
                Double Min Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.doubleMinEva}</dd>
          <dt>
            <span id="doubleMaxEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.doubleMaxEva">
                Double Max Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.doubleMaxEva}</dd>
          <dt>
            <span id="bigDecimalRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalRequiredEva">
                Big Decimal Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.bigDecimalRequiredEva}</dd>
          <dt>
            <span id="bigDecimalMinEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalMinEva">
                Big Decimal Min Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.bigDecimalMinEva}</dd>
          <dt>
            <span id="bigDecimalMaxEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.bigDecimalMaxEva">
                Big Decimal Max Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.bigDecimalMaxEva}</dd>
          <dt>
            <span id="localDateEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.localDateEva">
                Local Date Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.localDateEva ? (
              <TextFormat value={fieldTestMapstructAndServiceClassEntityEntity.localDateEva} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="localDateRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.localDateRequiredEva">
                Local Date Required Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.localDateRequiredEva ? (
              <TextFormat
                value={fieldTestMapstructAndServiceClassEntityEntity.localDateRequiredEva}
                type="date"
                format={APP_LOCAL_DATE_FORMAT}
              />
            ) : null}
          </dd>
          <dt>
            <span id="instantEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.instantEva">Instant Eva</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.instantEva ? (
              <TextFormat value={fieldTestMapstructAndServiceClassEntityEntity.instantEva} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instanteRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.instanteRequiredEva">
                Instante Required Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.instanteRequiredEva ? (
              <TextFormat value={fieldTestMapstructAndServiceClassEntityEntity.instanteRequiredEva} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.zonedDateTimeEva">
                Zoned Date Time Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.zonedDateTimeEva ? (
              <TextFormat value={fieldTestMapstructAndServiceClassEntityEntity.zonedDateTimeEva} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.zonedDateTimeRequiredEva">
                Zoned Date Time Required Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.zonedDateTimeRequiredEva ? (
              <TextFormat
                value={fieldTestMapstructAndServiceClassEntityEntity.zonedDateTimeRequiredEva}
                type="date"
                format={APP_DATE_FORMAT}
              />
            ) : null}
          </dd>
          <dt>
            <span id="durationEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.durationEva">Duration Eva</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.durationEva ? (
              <DurationFormat value={fieldTestMapstructAndServiceClassEntityEntity.durationEva} />
            ) : null}{' '}
            ({fieldTestMapstructAndServiceClassEntityEntity.durationEva})
          </dd>
          <dt>
            <span id="durationRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.durationRequiredEva">
                Duration Required Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.durationRequiredEva ? (
              <DurationFormat value={fieldTestMapstructAndServiceClassEntityEntity.durationRequiredEva} />
            ) : null}{' '}
            ({fieldTestMapstructAndServiceClassEntityEntity.durationRequiredEva})
          </dd>
          <dt>
            <span id="booleanEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.booleanEva">Boolean Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.booleanEva ? 'true' : 'false'}</dd>
          <dt>
            <span id="booleanRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.booleanRequiredEva">
                Boolean Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.booleanRequiredEva ? 'true' : 'false'}</dd>
          <dt>
            <span id="enumEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.enumEva">Enum Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.enumEva}</dd>
          <dt>
            <span id="enumRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.enumRequiredEva">
                Enum Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.enumRequiredEva}</dd>
          <dt>
            <span id="uuidEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.uuidEva">Uuid Eva</Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.uuidEva}</dd>
          <dt>
            <span id="uuidRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.uuidRequiredEva">
                Uuid Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.uuidRequiredEva}</dd>
          <dt>
            <span id="byteImageEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageEva">
                Byte Image Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteImageEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteImageEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructAndServiceClassEntityEntity.byteImageEvaContentType};base64,${fieldTestMapstructAndServiceClassEntityEntity.byteImageEva}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteImageEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteImageEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageRequiredEva">
                Byte Image Required Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEvaContentType};base64,${fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEva}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteImageRequiredEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMinbytesEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageMinbytesEva">
                Byte Image Minbytes Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEvaContentType};base64,${fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEva}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteImageMinbytesEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMaxbytesEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteImageMaxbytesEva">
                Byte Image Maxbytes Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEva
                    )}
                  >
                    <img
                      src={`data:${fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEvaContentType};base64,${fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEva}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteImageMaxbytesEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyEva">Byte Any Eva</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteAnyEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteAnyEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteAnyEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteAnyEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyRequiredEva">
                Byte Any Required Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteAnyRequiredEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteAnyRequiredEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyRequiredEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyRequiredEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteAnyRequiredEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteAnyRequiredEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMinbytesEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyMinbytesEva">
                Byte Any Minbytes Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteAnyMinbytesEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteAnyMinbytesEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyMinbytesEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyMinbytesEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteAnyMinbytesEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteAnyMinbytesEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMaxbytesEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteAnyMaxbytesEva">
                Byte Any Maxbytes Eva
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestMapstructAndServiceClassEntityEntity.byteAnyMaxbytesEva ? (
              <div>
                {fieldTestMapstructAndServiceClassEntityEntity.byteAnyMaxbytesEvaContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyMaxbytesEvaContentType,
                      fieldTestMapstructAndServiceClassEntityEntity.byteAnyMaxbytesEva
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestMapstructAndServiceClassEntityEntity.byteAnyMaxbytesEvaContentType},{' '}
                  {byteSize(fieldTestMapstructAndServiceClassEntityEntity.byteAnyMaxbytesEva)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteTextEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteTextEva">
                Byte Text Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.byteTextEva}</dd>
          <dt>
            <span id="byteTextRequiredEva">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.byteTextRequiredEva">
                Byte Text Required Eva
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestMapstructAndServiceClassEntityEntity.byteTextRequiredEva}</dd>
        </dl>
        <Button tag={Link} to="/field-test-mapstruct-and-service-class-entity" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button
          tag={Link}
          to={`/field-test-mapstruct-and-service-class-entity/${fieldTestMapstructAndServiceClassEntityEntity.id}/edit`}
          replace
          color="primary"
        >
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ fieldTestMapstructAndServiceClassEntity }: IRootState) => ({
  fieldTestMapstructAndServiceClassEntityEntity: fieldTestMapstructAndServiceClassEntity.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestMapstructAndServiceClassEntityDetail);
