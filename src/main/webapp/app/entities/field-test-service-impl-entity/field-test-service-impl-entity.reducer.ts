import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IFieldTestServiceImplEntity, defaultValue } from 'app/shared/model/field-test-service-impl-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTSERVICEIMPLENTITY_LIST: 'fieldTestServiceImplEntity/FETCH_FIELDTESTSERVICEIMPLENTITY_LIST',
  FETCH_FIELDTESTSERVICEIMPLENTITY: 'fieldTestServiceImplEntity/FETCH_FIELDTESTSERVICEIMPLENTITY',
  CREATE_FIELDTESTSERVICEIMPLENTITY: 'fieldTestServiceImplEntity/CREATE_FIELDTESTSERVICEIMPLENTITY',
  UPDATE_FIELDTESTSERVICEIMPLENTITY: 'fieldTestServiceImplEntity/UPDATE_FIELDTESTSERVICEIMPLENTITY',
  DELETE_FIELDTESTSERVICEIMPLENTITY: 'fieldTestServiceImplEntity/DELETE_FIELDTESTSERVICEIMPLENTITY',
  SET_BLOB: 'fieldTestServiceImplEntity/SET_BLOB',
  RESET: 'fieldTestServiceImplEntity/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestServiceImplEntity>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type FieldTestServiceImplEntityState = Readonly<typeof initialState>;

// Reducer

export default (state: FieldTestServiceImplEntityState = initialState, action): FieldTestServiceImplEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTSERVICEIMPLENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTSERVICEIMPLENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTSERVICEIMPLENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTSERVICEIMPLENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTSERVICEIMPLENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTSERVICEIMPLENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTSERVICEIMPLENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTSERVICEIMPLENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTSERVICEIMPLENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: {},
      };
    case ACTION_TYPES.SET_BLOB: {
      const { name, data, contentType } = action.payload;
      return {
        ...state,
        entity: {
          ...state.entity,
          [name]: data,
          [name + 'ContentType']: contentType,
        },
      };
    }
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

const apiUrl = 'api/field-test-service-impl-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestServiceImplEntity> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY_LIST,
  payload: axios.get<IFieldTestServiceImplEntity>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IFieldTestServiceImplEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTSERVICEIMPLENTITY,
    payload: axios.get<IFieldTestServiceImplEntity>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IFieldTestServiceImplEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTSERVICEIMPLENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestServiceImplEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTSERVICEIMPLENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestServiceImplEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTSERVICEIMPLENTITY,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const setBlob = (name, data, contentType?) => ({
  type: ACTION_TYPES.SET_BLOB,
  payload: {
    name,
    data,
    contentType,
  },
});

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
