import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './entity-with-service-impl-pagination-and-dto.reducer';

export interface IEntityWithServiceImplPaginationAndDTODeleteDialogProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const EntityWithServiceImplPaginationAndDTODeleteDialog = (props: IEntityWithServiceImplPaginationAndDTODeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/entity-with-service-impl-pagination-and-dto' + props.location.search);
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.entityWithServiceImplPaginationAndDTOEntity.id);
  };

  const { entityWithServiceImplPaginationAndDTOEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="entityWithServiceImplPaginationAndDTODeleteDialogHeading">
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="sampleCouchbaseNoCacheApp.entityWithServiceImplPaginationAndDTO.delete.question">
        <Translate
          contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplPaginationAndDTO.delete.question"
          interpolate={{ id: entityWithServiceImplPaginationAndDTOEntity.id }}
        >
          Are you sure you want to delete this EntityWithServiceImplPaginationAndDTO?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button
          id="jhi-confirm-delete-entityWithServiceImplPaginationAndDTO"
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

const mapStateToProps = ({ entityWithServiceImplPaginationAndDTO }: IRootState) => ({
  entityWithServiceImplPaginationAndDTOEntity: entityWithServiceImplPaginationAndDTO.entity,
  updateSuccess: entityWithServiceImplPaginationAndDTO.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceImplPaginationAndDTODeleteDialog);
