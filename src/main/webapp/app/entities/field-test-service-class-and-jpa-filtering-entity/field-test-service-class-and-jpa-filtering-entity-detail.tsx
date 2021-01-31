import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-service-class-and-jpa-filtering-entity.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { DurationFormat } from 'app/shared/DurationFormat';

export interface IFieldTestServiceClassAndJpaFilteringEntityDetailProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const FieldTestServiceClassAndJpaFilteringEntityDetail = (props: IFieldTestServiceClassAndJpaFilteringEntityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fieldTestServiceClassAndJpaFilteringEntityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fieldTestServiceClassAndJpaFilteringEntityDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.detail.title">
            FieldTestServiceClassAndJpaFilteringEntity
          </Translate>{' '}
          [<strong>{fieldTestServiceClassAndJpaFilteringEntityEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="stringBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringBob">String Bob</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.stringBob}</dd>
          <dt>
            <span id="stringRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringRequiredBob">
                String Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.stringRequiredBob}</dd>
          <dt>
            <span id="stringMinlengthBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringMinlengthBob">
                String Minlength Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.stringMinlengthBob}</dd>
          <dt>
            <span id="stringMaxlengthBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringMaxlengthBob">
                String Maxlength Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.stringMaxlengthBob}</dd>
          <dt>
            <span id="stringPatternBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.stringPatternBob">
                String Pattern Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.stringPatternBob}</dd>
          <dt>
            <span id="integerBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerBob">
                Integer Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.integerBob}</dd>
          <dt>
            <span id="integerRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerRequiredBob">
                Integer Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.integerRequiredBob}</dd>
          <dt>
            <span id="integerMinBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerMinBob">
                Integer Min Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.integerMinBob}</dd>
          <dt>
            <span id="integerMaxBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.integerMaxBob">
                Integer Max Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.integerMaxBob}</dd>
          <dt>
            <span id="longBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longBob">Long Bob</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.longBob}</dd>
          <dt>
            <span id="longRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longRequiredBob">
                Long Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.longRequiredBob}</dd>
          <dt>
            <span id="longMinBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longMinBob">
                Long Min Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.longMinBob}</dd>
          <dt>
            <span id="longMaxBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.longMaxBob">
                Long Max Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.longMaxBob}</dd>
          <dt>
            <span id="floatBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatBob">Float Bob</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.floatBob}</dd>
          <dt>
            <span id="floatRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatRequiredBob">
                Float Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.floatRequiredBob}</dd>
          <dt>
            <span id="floatMinBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatMinBob">
                Float Min Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.floatMinBob}</dd>
          <dt>
            <span id="floatMaxBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.floatMaxBob">
                Float Max Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.floatMaxBob}</dd>
          <dt>
            <span id="doubleRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleRequiredBob">
                Double Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.doubleRequiredBob}</dd>
          <dt>
            <span id="doubleMinBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleMinBob">
                Double Min Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.doubleMinBob}</dd>
          <dt>
            <span id="doubleMaxBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.doubleMaxBob">
                Double Max Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.doubleMaxBob}</dd>
          <dt>
            <span id="bigDecimalRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalRequiredBob">
                Big Decimal Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.bigDecimalRequiredBob}</dd>
          <dt>
            <span id="bigDecimalMinBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMinBob">
                Big Decimal Min Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.bigDecimalMinBob}</dd>
          <dt>
            <span id="bigDecimalMaxBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.bigDecimalMaxBob">
                Big Decimal Max Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.bigDecimalMaxBob}</dd>
          <dt>
            <span id="localDateBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.localDateBob">
                Local Date Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.localDateBob ? (
              <TextFormat
                value={fieldTestServiceClassAndJpaFilteringEntityEntity.localDateBob}
                type="date"
                format={APP_LOCAL_DATE_FORMAT}
              />
            ) : null}
          </dd>
          <dt>
            <span id="localDateRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.localDateRequiredBob">
                Local Date Required Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.localDateRequiredBob ? (
              <TextFormat
                value={fieldTestServiceClassAndJpaFilteringEntityEntity.localDateRequiredBob}
                type="date"
                format={APP_LOCAL_DATE_FORMAT}
              />
            ) : null}
          </dd>
          <dt>
            <span id="instantBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.instantBob">
                Instant Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.instantBob ? (
              <TextFormat value={fieldTestServiceClassAndJpaFilteringEntityEntity.instantBob} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instanteRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.instanteRequiredBob">
                Instante Required Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.instanteRequiredBob ? (
              <TextFormat
                value={fieldTestServiceClassAndJpaFilteringEntityEntity.instanteRequiredBob}
                type="date"
                format={APP_DATE_FORMAT}
              />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeBob">
                Zoned Date Time Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.zonedDateTimeBob ? (
              <TextFormat value={fieldTestServiceClassAndJpaFilteringEntityEntity.zonedDateTimeBob} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.zonedDateTimeRequiredBob">
                Zoned Date Time Required Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.zonedDateTimeRequiredBob ? (
              <TextFormat
                value={fieldTestServiceClassAndJpaFilteringEntityEntity.zonedDateTimeRequiredBob}
                type="date"
                format={APP_DATE_FORMAT}
              />
            ) : null}
          </dd>
          <dt>
            <span id="durationBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.durationBob">
                Duration Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.durationBob ? (
              <DurationFormat value={fieldTestServiceClassAndJpaFilteringEntityEntity.durationBob} />
            ) : null}{' '}
            ({fieldTestServiceClassAndJpaFilteringEntityEntity.durationBob})
          </dd>
          <dt>
            <span id="durationRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.durationRequiredBob">
                Duration Required Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.durationRequiredBob ? (
              <DurationFormat value={fieldTestServiceClassAndJpaFilteringEntityEntity.durationRequiredBob} />
            ) : null}{' '}
            ({fieldTestServiceClassAndJpaFilteringEntityEntity.durationRequiredBob})
          </dd>
          <dt>
            <span id="booleanBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.booleanBob">
                Boolean Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.booleanBob ? 'true' : 'false'}</dd>
          <dt>
            <span id="booleanRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.booleanRequiredBob">
                Boolean Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.booleanRequiredBob ? 'true' : 'false'}</dd>
          <dt>
            <span id="enumBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.enumBob">Enum Bob</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.enumBob}</dd>
          <dt>
            <span id="enumRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.enumRequiredBob">
                Enum Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.enumRequiredBob}</dd>
          <dt>
            <span id="uuidBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.uuidBob">Uuid Bob</Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.uuidBob}</dd>
          <dt>
            <span id="uuidRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.uuidRequiredBob">
                Uuid Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.uuidRequiredBob}</dd>
          <dt>
            <span id="byteImageBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageBob">
                Byte Image Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBob}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageRequiredBob">
                Byte Image Required Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBob}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageRequiredBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMinbytesBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageMinbytesBob">
                Byte Image Minbytes Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBob}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMinbytesBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMaxbytesBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteImageMaxbytesBob">
                Byte Image Maxbytes Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBob
                    )}
                  >
                    <img
                      src={`data:${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBobContentType};base64,${fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBob}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteImageMaxbytesBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyBob">
                Byte Any Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyRequiredBob">
                Byte Any Required Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyRequiredBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyRequiredBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyRequiredBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyRequiredBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyRequiredBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyRequiredBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMinbytesBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyMinbytesBob">
                Byte Any Minbytes Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMinbytesBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMinbytesBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMinbytesBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMinbytesBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMinbytesBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMinbytesBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMaxbytesBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteAnyMaxbytesBob">
                Byte Any Maxbytes Bob
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMaxbytesBob ? (
              <div>
                {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMaxbytesBobContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMaxbytesBobContentType,
                      fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMaxbytesBob
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMaxbytesBobContentType},{' '}
                  {byteSize(fieldTestServiceClassAndJpaFilteringEntityEntity.byteAnyMaxbytesBob)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteTextBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteTextBob">
                Byte Text Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.byteTextBob}</dd>
          <dt>
            <span id="byteTextRequiredBob">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.byteTextRequiredBob">
                Byte Text Required Bob
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestServiceClassAndJpaFilteringEntityEntity.byteTextRequiredBob}</dd>
        </dl>
        <Button tag={Link} to="/field-test-service-class-and-jpa-filtering-entity" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button
          tag={Link}
          to={`/field-test-service-class-and-jpa-filtering-entity/${fieldTestServiceClassAndJpaFilteringEntityEntity.id}/edit`}
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

const mapStateToProps = ({ fieldTestServiceClassAndJpaFilteringEntity }: IRootState) => ({
  fieldTestServiceClassAndJpaFilteringEntityEntity: fieldTestServiceClassAndJpaFilteringEntity.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestServiceClassAndJpaFilteringEntityDetail);
