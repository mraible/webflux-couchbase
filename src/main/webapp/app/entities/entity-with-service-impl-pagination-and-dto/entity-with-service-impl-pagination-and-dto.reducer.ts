import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceImplPaginationAndDTO, defaultValue } from 'app/shared/model/entity-with-service-impl-pagination-and-dto.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO_LIST:
    'entityWithServiceImplPaginationAndDTO/FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO_LIST',
  FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO: 'entityWithServiceImplPaginationAndDTO/FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO',
  CREATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO: 'entityWithServiceImplPaginationAndDTO/CREATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO',
  UPDATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO: 'entityWithServiceImplPaginationAndDTO/UPDATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO',
  DELETE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO: 'entityWithServiceImplPaginationAndDTO/DELETE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO',
  RESET: 'entityWithServiceImplPaginationAndDTO/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceImplPaginationAndDTO>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type EntityWithServiceImplPaginationAndDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceImplPaginationAndDTOState = initialState, action): EntityWithServiceImplPaginationAndDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO):
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

const apiUrl = 'api/entity-with-service-impl-pagination-and-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceImplPaginationAndDTO> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO_LIST,
    payload: axios.get<IEntityWithServiceImplPaginationAndDTO>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IEntityWithServiceImplPaginationAndDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO,
    payload: axios.get<IEntityWithServiceImplPaginationAndDTO>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceImplPaginationAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceImplPaginationAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceImplPaginationAndDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLPAGINATIONANDDTO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
