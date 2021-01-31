import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './field-test-pagination-entity.reducer';
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { DurationFormat } from 'app/shared/DurationFormat';

export interface IFieldTestPaginationEntityDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestPaginationEntityDetail = (props: IFieldTestPaginationEntityDetailProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const { fieldTestPaginationEntityEntity } = props;
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fieldTestPaginationEntityDetailsHeading">
          <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.detail.title">FieldTestPaginationEntity</Translate> [
          <strong>{fieldTestPaginationEntityEntity.id}</strong>]
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="stringAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringAlice">String Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.stringAlice}</dd>
          <dt>
            <span id="stringRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringRequiredAlice">
                String Required Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.stringRequiredAlice}</dd>
          <dt>
            <span id="stringMinlengthAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringMinlengthAlice">
                String Minlength Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.stringMinlengthAlice}</dd>
          <dt>
            <span id="stringMaxlengthAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringMaxlengthAlice">
                String Maxlength Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.stringMaxlengthAlice}</dd>
          <dt>
            <span id="stringPatternAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.stringPatternAlice">
                String Pattern Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.stringPatternAlice}</dd>
          <dt>
            <span id="integerAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerAlice">Integer Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.integerAlice}</dd>
          <dt>
            <span id="integerRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerRequiredAlice">
                Integer Required Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.integerRequiredAlice}</dd>
          <dt>
            <span id="integerMinAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerMinAlice">Integer Min Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.integerMinAlice}</dd>
          <dt>
            <span id="integerMaxAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.integerMaxAlice">Integer Max Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.integerMaxAlice}</dd>
          <dt>
            <span id="longAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longAlice">Long Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.longAlice}</dd>
          <dt>
            <span id="longRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longRequiredAlice">Long Required Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.longRequiredAlice}</dd>
          <dt>
            <span id="longMinAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longMinAlice">Long Min Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.longMinAlice}</dd>
          <dt>
            <span id="longMaxAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.longMaxAlice">Long Max Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.longMaxAlice}</dd>
          <dt>
            <span id="floatAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatAlice">Float Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.floatAlice}</dd>
          <dt>
            <span id="floatRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatRequiredAlice">
                Float Required Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.floatRequiredAlice}</dd>
          <dt>
            <span id="floatMinAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatMinAlice">Float Min Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.floatMinAlice}</dd>
          <dt>
            <span id="floatMaxAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.floatMaxAlice">Float Max Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.floatMaxAlice}</dd>
          <dt>
            <span id="doubleRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleRequiredAlice">
                Double Required Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.doubleRequiredAlice}</dd>
          <dt>
            <span id="doubleMinAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleMinAlice">Double Min Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.doubleMinAlice}</dd>
          <dt>
            <span id="doubleMaxAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.doubleMaxAlice">Double Max Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.doubleMaxAlice}</dd>
          <dt>
            <span id="bigDecimalRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalRequiredAlice">
                Big Decimal Required Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.bigDecimalRequiredAlice}</dd>
          <dt>
            <span id="bigDecimalMinAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalMinAlice">
                Big Decimal Min Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.bigDecimalMinAlice}</dd>
          <dt>
            <span id="bigDecimalMaxAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.bigDecimalMaxAlice">
                Big Decimal Max Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.bigDecimalMaxAlice}</dd>
          <dt>
            <span id="localDateAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.localDateAlice">Local Date Alice</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.localDateAlice ? (
              <TextFormat value={fieldTestPaginationEntityEntity.localDateAlice} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="localDateRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.localDateRequiredAlice">
                Local Date Required Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.localDateRequiredAlice ? (
              <TextFormat value={fieldTestPaginationEntityEntity.localDateRequiredAlice} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instantAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.instantAlice">Instant Alice</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.instantAlice ? (
              <TextFormat value={fieldTestPaginationEntityEntity.instantAlice} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="instanteRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.instanteRequiredAlice">
                Instante Required Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.instanteRequiredAlice ? (
              <TextFormat value={fieldTestPaginationEntityEntity.instanteRequiredAlice} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.zonedDateTimeAlice">
                Zoned Date Time Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.zonedDateTimeAlice ? (
              <TextFormat value={fieldTestPaginationEntityEntity.zonedDateTimeAlice} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="zonedDateTimeRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.zonedDateTimeRequiredAlice">
                Zoned Date Time Required Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.zonedDateTimeRequiredAlice ? (
              <TextFormat value={fieldTestPaginationEntityEntity.zonedDateTimeRequiredAlice} type="date" format={APP_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="durationAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.durationAlice">Duration Alice</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.durationAlice ? (
              <DurationFormat value={fieldTestPaginationEntityEntity.durationAlice} />
            ) : null}{' '}
            ({fieldTestPaginationEntityEntity.durationAlice})
          </dd>
          <dt>
            <span id="durationRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.durationRequiredAlice">
                Duration Required Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.durationRequiredAlice ? (
              <DurationFormat value={fieldTestPaginationEntityEntity.durationRequiredAlice} />
            ) : null}{' '}
            ({fieldTestPaginationEntityEntity.durationRequiredAlice})
          </dd>
          <dt>
            <span id="booleanAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.booleanAlice">Boolean Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.booleanAlice ? 'true' : 'false'}</dd>
          <dt>
            <span id="booleanRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.booleanRequiredAlice">
                Boolean Required Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.booleanRequiredAlice ? 'true' : 'false'}</dd>
          <dt>
            <span id="enumAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.enumAlice">Enum Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.enumAlice}</dd>
          <dt>
            <span id="enumRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.enumRequiredAlice">Enum Required Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.enumRequiredAlice}</dd>
          <dt>
            <span id="uuidAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.uuidAlice">Uuid Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.uuidAlice}</dd>
          <dt>
            <span id="uuidRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.uuidRequiredAlice">Uuid Required Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.uuidRequiredAlice}</dd>
          <dt>
            <span id="byteImageAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageAlice">Byte Image Alice</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteImageAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteImageAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageAliceContentType};base64,${fieldTestPaginationEntityEntity.byteImageAlice}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteImageAliceContentType}, {byteSize(fieldTestPaginationEntityEntity.byteImageAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageRequiredAlice">
                Byte Image Required Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteImageRequiredAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteImageRequiredAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageRequiredAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageRequiredAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageRequiredAliceContentType};base64,${fieldTestPaginationEntityEntity.byteImageRequiredAlice}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteImageRequiredAliceContentType},{' '}
                  {byteSize(fieldTestPaginationEntityEntity.byteImageRequiredAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMinbytesAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageMinbytesAlice">
                Byte Image Minbytes Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteImageMinbytesAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteImageMinbytesAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageMinbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageMinbytesAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageMinbytesAliceContentType};base64,${fieldTestPaginationEntityEntity.byteImageMinbytesAlice}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteImageMinbytesAliceContentType},{' '}
                  {byteSize(fieldTestPaginationEntityEntity.byteImageMinbytesAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteImageMaxbytesAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteImageMaxbytesAlice">
                Byte Image Maxbytes Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteImageMaxbytesAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteImageMaxbytesAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteImageMaxbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteImageMaxbytesAlice
                    )}
                  >
                    <img
                      src={`data:${fieldTestPaginationEntityEntity.byteImageMaxbytesAliceContentType};base64,${fieldTestPaginationEntityEntity.byteImageMaxbytesAlice}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteImageMaxbytesAliceContentType},{' '}
                  {byteSize(fieldTestPaginationEntityEntity.byteImageMaxbytesAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyAlice">Byte Any Alice</Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteAnyAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteAnyAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteAnyAliceContentType}, {byteSize(fieldTestPaginationEntityEntity.byteAnyAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyRequiredAlice">
                Byte Any Required Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteAnyRequiredAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteAnyRequiredAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyRequiredAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyRequiredAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteAnyRequiredAliceContentType},{' '}
                  {byteSize(fieldTestPaginationEntityEntity.byteAnyRequiredAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMinbytesAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyMinbytesAlice">
                Byte Any Minbytes Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteAnyMinbytesAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteAnyMinbytesAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyMinbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyMinbytesAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteAnyMinbytesAliceContentType},{' '}
                  {byteSize(fieldTestPaginationEntityEntity.byteAnyMinbytesAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteAnyMaxbytesAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteAnyMaxbytesAlice">
                Byte Any Maxbytes Alice
              </Translate>
            </span>
          </dt>
          <dd>
            {fieldTestPaginationEntityEntity.byteAnyMaxbytesAlice ? (
              <div>
                {fieldTestPaginationEntityEntity.byteAnyMaxbytesAliceContentType ? (
                  <a
                    onClick={openFile(
                      fieldTestPaginationEntityEntity.byteAnyMaxbytesAliceContentType,
                      fieldTestPaginationEntityEntity.byteAnyMaxbytesAlice
                    )}
                  >
                    <Translate contentKey="entity.action.open">Open</Translate>&nbsp;
                  </a>
                ) : null}
                <span>
                  {fieldTestPaginationEntityEntity.byteAnyMaxbytesAliceContentType},{' '}
                  {byteSize(fieldTestPaginationEntityEntity.byteAnyMaxbytesAlice)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="byteTextAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteTextAlice">Byte Text Alice</Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.byteTextAlice}</dd>
          <dt>
            <span id="byteTextRequiredAlice">
              <Translate contentKey="sampleCouchbaseNoCacheApp.fieldTestPaginationEntity.byteTextRequiredAlice">
                Byte Text Required Alice
              </Translate>
            </span>
          </dt>
          <dd>{fieldTestPaginationEntityEntity.byteTextRequiredAlice}</dd>
        </dl>
        <Button tag={Link} to="/field-test-pagination-entity" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/field-test-pagination-entity/${fieldTestPaginationEntityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

const mapStateToProps = ({ fieldTestPaginationEntity }: IRootState) => ({
  fieldTestPaginationEntityEntity: fieldTestPaginationEntity.entity,
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestPaginationEntityDetail);
