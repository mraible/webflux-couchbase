import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceClassAndPagination, defaultValue } from 'app/shared/model/entity-with-service-class-and-pagination.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICECLASSANDPAGINATION_LIST: 'entityWithServiceClassAndPagination/FETCH_ENTITYWITHSERVICECLASSANDPAGINATION_LIST',
  FETCH_ENTITYWITHSERVICECLASSANDPAGINATION: 'entityWithServiceClassAndPagination/FETCH_ENTITYWITHSERVICECLASSANDPAGINATION',
  CREATE_ENTITYWITHSERVICECLASSANDPAGINATION: 'entityWithServiceClassAndPagination/CREATE_ENTITYWITHSERVICECLASSANDPAGINATION',
  UPDATE_ENTITYWITHSERVICECLASSANDPAGINATION: 'entityWithServiceClassAndPagination/UPDATE_ENTITYWITHSERVICECLASSANDPAGINATION',
  DELETE_ENTITYWITHSERVICECLASSANDPAGINATION: 'entityWithServiceClassAndPagination/DELETE_ENTITYWITHSERVICECLASSANDPAGINATION',
  RESET: 'entityWithServiceClassAndPagination/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceClassAndPagination>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type EntityWithServiceClassAndPaginationState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceClassAndPaginationState = initialState, action): EntityWithServiceClassAndPaginationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDPAGINATION):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDPAGINATION):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDPAGINATION):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDPAGINATION):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDPAGINATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDPAGINATION):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDPAGINATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDPAGINATION):
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

const apiUrl = 'api/entity-with-service-class-and-paginations';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceClassAndPagination> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION_LIST,
    payload: axios.get<IEntityWithServiceClassAndPagination>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IEntityWithServiceClassAndPagination> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICECLASSANDPAGINATION,
    payload: axios.get<IEntityWithServiceClassAndPagination>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceClassAndPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICECLASSANDPAGINATION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceClassAndPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICECLASSANDPAGINATION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceClassAndPagination> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICECLASSANDPAGINATION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
