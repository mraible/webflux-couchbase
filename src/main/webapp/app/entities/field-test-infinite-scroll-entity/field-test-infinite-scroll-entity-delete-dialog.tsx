import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './field-test-infinite-scroll-entity.reducer';

export interface IFieldTestInfiniteScrollEntityDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const FieldTestInfiniteScrollEntityDeleteDialog = (props: IFieldTestInfiniteScrollEntityDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/field-test-infinite-scroll-entity');
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.fieldTestInfiniteScrollEntityEntity.id);
  };

  const { fieldTestInfiniteScrollEntityEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="fieldTestInfiniteScrollEntityDeleteDialogHeading">
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.delete.question">
        <Translate
          contentKey="sampleCouchbaseNoCacheApp.fieldTestInfiniteScrollEntity.delete.question"
          interpolate={{ id: fieldTestInfiniteScrollEntityEntity.id }}
        >
          Are you sure you want to delete this FieldTestInfiniteScrollEntity?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button
          id="jhi-confirm-delete-fieldTestInfiniteScrollEntity"
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

const mapStateToProps = ({ fieldTestInfiniteScrollEntity }: IRootState) => ({
  fieldTestInfiniteScrollEntityEntity: fieldTestInfiniteScrollEntity.entity,
  updateSuccess: fieldTestInfiniteScrollEntity.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(FieldTestInfiniteScrollEntityDeleteDialog);
