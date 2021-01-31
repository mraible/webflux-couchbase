import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './field-test-mapstruct-and-service-class-entity.reducer';

export interface IFieldTestMapstructAndServiceClassEntityDeleteDialogProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const FieldTestMapstructAndServiceClassEntityDeleteDialog = (props: IFieldTestMapstructAndServiceClassEntityDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/field-test-mapstruct-and-service-class-entity');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.fieldTestMapstructAndServiceClassEntityEntity.id);
  };

  const { fieldTestMapstructAndServiceClassEntityEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="fieldTestMapstructAndServiceClassEntityDeleteDialogHeading">
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.delete.question">
        <Translate
          contentKey="sampleCouchbaseNoCacheApp.fieldTestMapstructAndServiceClassEntity.delete.question"
          interpolate={{ id: fieldTestMapstructAndServiceClassEntityEntity.id }}
        >
          Are you sure you want to delete this FieldTestMapstructAndServiceClassEntity?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button
          id="jhi-confirm-delete-fieldTestMapstructAndServiceClassEntity"
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

const mapStateToProps = ({ fieldTestMapstructAndServiceClassEntity }: IRootState) => ({
  fieldTestMapstructAndServiceClassEntityEntity: fieldTestMapstructAndServiceClassEntity.entity,
  updateSuccess: fieldTestMapstructAndServiceClassEntity.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestMapstructAndServiceClassEntityDeleteDialog);
