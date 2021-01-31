import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './field-test-service-class-and-jpa-filtering-entity.reducer';

export interface IFieldTestServiceClassAndJpaFilteringEntityDeleteDialogProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const FieldTestServiceClassAndJpaFilteringEntityDeleteDialog = (
  props: IFieldTestServiceClassAndJpaFilteringEntityDeleteDialogProps
) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/field-test-service-class-and-jpa-filtering-entity');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.fieldTestServiceClassAndJpaFilteringEntityEntity.id);
  };

  const { fieldTestServiceClassAndJpaFilteringEntityEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="fieldTestServiceClassAndJpaFilteringEntityDeleteDialogHeading">
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.delete.question">
        <Translate
          contentKey="sampleCouchbaseNoCacheApp.fieldTestServiceClassAndJpaFilteringEntity.delete.question"
          interpolate={{ id: fieldTestServiceClassAndJpaFilteringEntityEntity.id }}
        >
          Are you sure you want to delete this FieldTestServiceClassAndJpaFilteringEntity?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button
          id="jhi-confirm-delete-fieldTestServiceClassAndJpaFilteringEntity"
          data-cy="entityConfirmDeleteButton"
          color="danger"
          onClick={confirmDelete}
        >
          <FontAwesomeIcon icon="trash" />
          &nbsp;
          <Translate contentKey="entity.action.delete">Delete</Translate>
        </Button>
      </ModalFooter>
    </Modal>
  );
};

const mapStateToProps = ({ fieldTestServiceClassAndJpaFilteringEntity }: IRootState) => ({
  fieldTestServiceClassAndJpaFilteringEntityEntity: fieldTestServiceClassAndJpaFilteringEntity.entity,
  updateSuccess: fieldTestServiceClassAndJpaFilteringEntity.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestServiceClassAndJpaFilteringEntityDeleteDialog);
