import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithPaginationAndDTO, defaultValue } from 'app/shared/model/entity-with-pagination-and-dto.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHPAGINATIONANDDTO_LIST: 'entityWithPaginationAndDTO/FETCH_ENTITYWITHPAGINATIONANDDTO_LIST',
  FETCH_ENTITYWITHPAGINATIONANDDTO: 'entityWithPaginationAndDTO/FETCH_ENTITYWITHPAGINATIONANDDTO',
  CREATE_ENTITYWITHPAGINATIONANDDTO: 'entityWithPaginationAndDTO/CREATE_ENTITYWITHPAGINATIONANDDTO',
  UPDATE_ENTITYWITHPAGINATIONANDDTO: 'entityWithPaginationAndDTO/UPDATE_ENTITYWITHPAGINATIONANDDTO',
  DELETE_ENTITYWITHPAGINATIONANDDTO: 'entityWithPaginationAndDTO/DELETE_ENTITYWITHPAGINATIONANDDTO',
  RESET: 'entityWithPaginationAndDTO/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithPaginationAndDTO>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type EntityWithPaginationAndDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithPaginationAndDTOState = initialState, action): EntityWithPaginationAndDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHPAGINATIONANDDTO):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHPAGINATIONANDDTO):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHPAGINATIONANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHPAGINATIONANDDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHPAGINATIONANDDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHPAGINATIONANDDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHPAGINATIONANDDTO):
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

const apiUrl = 'api/entity-with-pagination-and-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithPaginationAndDTO> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO_LIST,
    payload: axios.get<IEntityWithPaginationAndDTO>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IEntityWithPaginationAndDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHPAGINATIONANDDTO,
    payload: axios.get<IEntityWithPaginationAndDTO>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEntityWithPaginationAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHPAGINATIONANDDTO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithPaginationAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHPAGINATIONANDDTO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithPaginationAndDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHPAGINATIONANDDTO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
