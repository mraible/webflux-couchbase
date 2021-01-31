import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceClassPaginationAndDTO, defaultValue } from 'app/shared/model/entity-with-service-class-pagination-and-dto.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO_LIST:
    'entityWithServiceClassPaginationAndDTO/FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO_LIST',
  FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO: 'entityWithServiceClassPaginationAndDTO/FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO',
  CREATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO: 'entityWithServiceClassPaginationAndDTO/CREATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO',
  UPDATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO: 'entityWithServiceClassPaginationAndDTO/UPDATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO',
  DELETE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO: 'entityWithServiceClassPaginationAndDTO/DELETE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO',
  RESET: 'entityWithServiceClassPaginationAndDTO/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceClassPaginationAndDTO>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type EntityWithServiceClassPaginationAndDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceClassPaginationAndDTOState = initialState, action): EntityWithServiceClassPaginationAndDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO):
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

const apiUrl = 'api/entity-with-service-class-pagination-and-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceClassPaginationAndDTO> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO_LIST,
    payload: axios.get<IEntityWithServiceClassPaginationAndDTO>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IEntityWithServiceClassPaginationAndDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSPAGINATIONANDDTO,
    payload: axios.get<IEntityWithServiceClassPaginationAndDTO>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceClassPaginationAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceClassPaginationAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceClassPaginationAndDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSPAGINATIONANDDTO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
