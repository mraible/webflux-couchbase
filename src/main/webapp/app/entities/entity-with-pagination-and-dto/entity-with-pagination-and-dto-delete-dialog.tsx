import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './entity-with-pagination-and-dto.reducer';

export interface IEntityWithPaginationAndDTODeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export const EntityWithPaginationAndDTODeleteDialog = (props: IEntityWithPaginationAndDTODeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/entity-with-pagination-and-dto' + props.location.search);
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.entityWithPaginationAndDTOEntity.id);
  };

  const { entityWithPaginationAndDTOEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="entityWithPaginationAndDTODeleteDialogHeading">
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="sampleCouchbaseNoCacheApp.entityWithPaginationAndDTO.delete.question">
        <Translate
          contentKey="sampleCouchbaseNoCacheApp.entityWithPaginationAndDTO.delete.question"
          interpolate={{ id: entityWithPaginationAndDTOEntity.id }}
        >
          Are you sure you want to delete this EntityWithPaginationAndDTO?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button
          id="jhi-confirm-delete-entityWithPaginationAndDTO"
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

const mapStateToProps = ({ entityWithPaginationAndDTO }: IRootState) => ({
  entityWithPaginationAndDTOEntity: entityWithPaginationAndDTO.entity,
  updateSuccess: entityWithPaginationAndDTO.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithPaginationAndDTODeleteDialog);
