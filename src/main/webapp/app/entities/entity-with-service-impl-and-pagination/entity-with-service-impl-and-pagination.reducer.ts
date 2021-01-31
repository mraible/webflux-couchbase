import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceImplAndPagination, defaultValue } from 'app/shared/model/entity-with-service-impl-and-pagination.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION_LIST: 'entityWithServiceImplAndPagination/FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION_LIST',
  FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION: 'entityWithServiceImplAndPagination/FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION',
  CREATE_ENTITYWITHSERVICEIMPLANDPAGINATION: 'entityWithServiceImplAndPagination/CREATE_ENTITYWITHSERVICEIMPLANDPAGINATION',
  UPDATE_ENTITYWITHSERVICEIMPLANDPAGINATION: 'entityWithServiceImplAndPagination/UPDATE_ENTITYWITHSERVICEIMPLANDPAGINATION',
  DELETE_ENTITYWITHSERVICEIMPLANDPAGINATION: 'entityWithServiceImplAndPagination/DELETE_ENTITYWITHSERVICEIMPLANDPAGINATION',
  RESET: 'entityWithServiceImplAndPagination/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceImplAndPagination>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type EntityWithServiceImplAndPaginationState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceImplAndPaginationState = initialState, action): EntityWithServiceImplAndPaginationState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDPAGINATION):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDPAGINATION):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDPAGINATION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDPAGINATION):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDPAGINATION):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDPAGINATION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDPAGINATION):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDPAGINATION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDPAGINATION):
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

const apiUrl = 'api/entity-with-service-impl-and-paginations';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceImplAndPagination> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION_LIST,
    payload: axios.get<IEntityWithServiceImplAndPagination>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IEntityWithServiceImplAndPagination> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDPAGINATION,
    payload: axios.get<IEntityWithServiceImplAndPagination>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceImplAndPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDPAGINATION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceImplAndPagination> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDPAGINATION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceImplAndPagination> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDPAGINATION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
