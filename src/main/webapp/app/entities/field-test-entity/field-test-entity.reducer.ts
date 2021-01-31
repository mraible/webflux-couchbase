import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IFieldTestEntity, defaultValue } from 'app/shared/model/field-test-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTENTITY_LIST: 'fieldTestEntity/FETCH_FIELDTESTENTITY_LIST',
  FETCH_FIELDTESTENTITY: 'fieldTestEntity/FETCH_FIELDTESTENTITY',
  CREATE_FIELDTESTENTITY: 'fieldTestEntity/CREATE_FIELDTESTENTITY',
  UPDATE_FIELDTESTENTITY: 'fieldTestEntity/UPDATE_FIELDTESTENTITY',
  DELETE_FIELDTESTENTITY: 'fieldTestEntity/DELETE_FIELDTESTENTITY',
  SET_BLOB: 'fieldTestEntity/SET_BLOB',
  RESET: 'fieldTestEntity/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestEntity>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type FieldTestEntityState = Readonly<typeof initialState>;

// Reducer

export default (state: FieldTestEntityState = initialState, action): FieldTestEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTENTITY):
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

const apiUrl = 'api/field-test-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestEntity> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FIELDTESTENTITY_LIST,
  payload: axios.get<IFieldTestEntity>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IFieldTestEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTENTITY,
    payload: axios.get<IFieldTestEntity>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IFieldTestEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTENTITY,
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
