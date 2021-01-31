import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity } from './entity-with-service-impl-and-pagination.reducer';

export interface IEntityWithServiceImplAndPaginationDeleteDialogProps
  extends StateProps,
    DispatchProps,
    RouteComponentProps<{ id: string }> {}

export const EntityWithServiceImplAndPaginationDeleteDialog = (props: IEntityWithServiceImplAndPaginationDeleteDialogProps) => {
  useEffect(() => {
    props.getEntity(props.match.params.id);
  }, []);

  const handleClose = () => {
    props.history.push('/entity-with-service-impl-and-pagination' + props.location.search);
  };

  useEffect(() => {
    if (props.updateSuccess) {
      handleClose();
    }
  }, [props.updateSuccess]);

  const confirmDelete = () => {
    props.deleteEntity(props.entityWithServiceImplAndPaginationEntity.id);
  };

  const { entityWithServiceImplAndPaginationEntity } = props;
  return (
    <Modal isOpen toggle={handleClose}>
      <ModalHeader toggle={handleClose} data-cy="entityWithServiceImplAndPaginationDeleteDialogHeading">
        <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
      </ModalHeader>
      <ModalBody id="sampleCouchbaseNoCacheApp.entityWithServiceImplAndPagination.delete.question">
        <Translate
          contentKey="sampleCouchbaseNoCacheApp.entityWithServiceImplAndPagination.delete.question"
          interpolate={{ id: entityWithServiceImplAndPaginationEntity.id }}
        >
          Are you sure you want to delete this EntityWithServiceImplAndPagination?
        </Translate>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleClose}>
          <FontAwesomeIcon icon="ban" />
          &nbsp;
          <Translate contentKey="entity.action.cancel">Cancel</Translate>
        </Button>
        <Button
          id="jhi-confirm-delete-entityWithServiceImplAndPagination"
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

const mapStateToProps = ({ entityWithServiceImplAndPagination }: IRootState) => ({
  entityWithServiceImplAndPaginationEntity: entityWithServiceImplAndPagination.entity,
  updateSuccess: entityWithServiceImplAndPagination.updateSuccess,
});

const mapDispatchToProps = { getEntity, deleteEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(EntityWithServiceImplAndPaginationDeleteDialog);
