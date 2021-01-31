import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IFieldTestPaginationEntity, defaultValue } from 'app/shared/model/field-test-pagination-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTPAGINATIONENTITY_LIST: 'fieldTestPaginationEntity/FETCH_FIELDTESTPAGINATIONENTITY_LIST',
  FETCH_FIELDTESTPAGINATIONENTITY: 'fieldTestPaginationEntity/FETCH_FIELDTESTPAGINATIONENTITY',
  CREATE_FIELDTESTPAGINATIONENTITY: 'fieldTestPaginationEntity/CREATE_FIELDTESTPAGINATIONENTITY',
  UPDATE_FIELDTESTPAGINATIONENTITY: 'fieldTestPaginationEntity/UPDATE_FIELDTESTPAGINATIONENTITY',
  DELETE_FIELDTESTPAGINATIONENTITY: 'fieldTestPaginationEntity/DELETE_FIELDTESTPAGINATIONENTITY',
  SET_BLOB: 'fieldTestPaginationEntity/SET_BLOB',
  RESET: 'fieldTestPaginationEntity/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestPaginationEntity>,
  entity: defaultValue,
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type FieldTestPaginationEntityState = Readonly<typeof initialState>;

// Reducer

export default (state: FieldTestPaginationEntityState = initialState, action): FieldTestPaginationEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY):
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

const apiUrl = 'api/field-test-pagination-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestPaginationEntity> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY_LIST,
    payload: axios.get<IFieldTestPaginationEntity>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IFieldTestPaginationEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTPAGINATIONENTITY,
    payload: axios.get<IFieldTestPaginationEntity>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IFieldTestPaginationEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTPAGINATIONENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestPaginationEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTPAGINATIONENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestPaginationEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTPAGINATIONENTITY,
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
