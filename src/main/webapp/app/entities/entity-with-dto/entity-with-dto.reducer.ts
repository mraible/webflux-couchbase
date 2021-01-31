import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithDTO, defaultValue } from 'app/shared/model/entity-with-dto.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHDTO_LIST: 'entityWithDTO/FETCH_ENTITYWITHDTO_LIST',
  FETCH_ENTITYWITHDTO: 'entityWithDTO/FETCH_ENTITYWITHDTO',
  CREATE_ENTITYWITHDTO: 'entityWithDTO/CREATE_ENTITYWITHDTO',
  UPDATE_ENTITYWITHDTO: 'entityWithDTO/UPDATE_ENTITYWITHDTO',
  DELETE_ENTITYWITHDTO: 'entityWithDTO/DELETE_ENTITYWITHDTO',
  RESET: 'entityWithDTO/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithDTO>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type EntityWithDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithDTOState = initialState, action): EntityWithDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHDTO):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHDTO):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHDTO):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHDTO):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHDTO):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/entity-with-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithDTO> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ENTITYWITHDTO_LIST,
  payload: axios.get<IEntityWithDTO>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IEntityWithDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHDTO,
    payload: axios.get<IEntityWithDTO>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEntityWithDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHDTO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHDTO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHDTO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
