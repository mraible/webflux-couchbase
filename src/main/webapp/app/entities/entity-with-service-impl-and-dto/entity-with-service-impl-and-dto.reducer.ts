import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IEntityWithServiceImplAndDTO, defaultValue } from 'app/shared/model/entity-with-service-impl-and-dto.model';

export const ACTION_TYPES = {
  FETCH_ENTITYWITHSERVICEIMPLANDDTO_LIST: 'entityWithServiceImplAndDTO/FETCH_ENTITYWITHSERVICEIMPLANDDTO_LIST',
  FETCH_ENTITYWITHSERVICEIMPLANDDTO: 'entityWithServiceImplAndDTO/FETCH_ENTITYWITHSERVICEIMPLANDDTO',
  CREATE_ENTITYWITHSERVICEIMPLANDDTO: 'entityWithServiceImplAndDTO/CREATE_ENTITYWITHSERVICEIMPLANDDTO',
  UPDATE_ENTITYWITHSERVICEIMPLANDDTO: 'entityWithServiceImplAndDTO/UPDATE_ENTITYWITHSERVICEIMPLANDDTO',
  DELETE_ENTITYWITHSERVICEIMPLANDDTO: 'entityWithServiceImplAndDTO/DELETE_ENTITYWITHSERVICEIMPLANDDTO',
  RESET: 'entityWithServiceImplAndDTO/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IEntityWithServiceImplAndDTO>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type EntityWithServiceImplAndDTOState = Readonly<typeof initialState>;

// Reducer

export default (state: EntityWithServiceImplAndDTOState = initialState, action): EntityWithServiceImplAndDTOState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO_LIST):
    case REQUEST(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDDTO):
    case REQUEST(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDDTO):
    case REQUEST(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDDTO):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO_LIST):
    case FAILURE(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO):
    case FAILURE(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDDTO):
    case FAILURE(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDDTO):
    case FAILURE(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDDTO):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDDTO):
    case SUCCESS(ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDDTO):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDDTO):
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

const apiUrl = 'api/entity-with-service-impl-and-dtos';

// Actions

export const getEntities: ICrudGetAllAction<IEntityWithServiceImplAndDTO> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO_LIST,
  payload: axios.get<IEntityWithServiceImplAndDTO>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IEntityWithServiceImplAndDTO> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_ENTITYWITHSERVICEIMPLANDDTO,
    payload: axios.get<IEntityWithServiceImplAndDTO>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IEntityWithServiceImplAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_ENTITYWITHSERVICEIMPLANDDTO,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IEntityWithServiceImplAndDTO> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_ENTITYWITHSERVICEIMPLANDDTO,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IEntityWithServiceImplAndDTO> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_ENTITYWITHSERVICEIMPLANDDTO,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
