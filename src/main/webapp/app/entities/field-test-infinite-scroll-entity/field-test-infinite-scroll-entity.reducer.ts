import axios from 'axios';
import {
  parseHeaderForLinks,
  loadMoreDataWhenScrolled,
  ICrudGetAction,
  ICrudGetAllAction,
  ICrudPutAction,
  ICrudDeleteAction,
} from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IFieldTestInfiniteScrollEntity, defaultValue } from 'app/shared/model/field-test-infinite-scroll-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTINFINITESCROLLENTITY_LIST: 'fieldTestInfiniteScrollEntity/FETCH_FIELDTESTINFINITESCROLLENTITY_LIST',
  FETCH_FIELDTESTINFINITESCROLLENTITY: 'fieldTestInfiniteScrollEntity/FETCH_FIELDTESTINFINITESCROLLENTITY',
  CREATE_FIELDTESTINFINITESCROLLENTITY: 'fieldTestInfiniteScrollEntity/CREATE_FIELDTESTINFINITESCROLLENTITY',
  UPDATE_FIELDTESTINFINITESCROLLENTITY: 'fieldTestInfiniteScrollEntity/UPDATE_FIELDTESTINFINITESCROLLENTITY',
  DELETE_FIELDTESTINFINITESCROLLENTITY: 'fieldTestInfiniteScrollEntity/DELETE_FIELDTESTINFINITESCROLLENTITY',
  SET_BLOB: 'fieldTestInfiniteScrollEntity/SET_BLOB',
  RESET: 'fieldTestInfiniteScrollEntity/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestInfiniteScrollEntity>,
  entity: defaultValue,
  links: { next: 0 },
  updating: false,
  totalItems: 0,
  updateSuccess: false,
};

export type FieldTestInfiniteScrollEntityState = Readonly<typeof initialState>;

// Reducer

export default (state: FieldTestInfiniteScrollEntityState = initialState, action): FieldTestInfiniteScrollEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTINFINITESCROLLENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTINFINITESCROLLENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTINFINITESCROLLENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTINFINITESCROLLENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTINFINITESCROLLENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTINFINITESCROLLENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY_LIST): {
      const links = parseHeaderForLinks(action.payload.headers.link);

      return {
        ...state,
        loading: false,
        links,
        entities: loadMoreDataWhenScrolled(state.entities, action.payload.data, links),
        totalItems: parseInt(action.payload.headers['x-total-count'], 10),
      };
    }
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTINFINITESCROLLENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTINFINITESCROLLENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTINFINITESCROLLENTITY):
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

const apiUrl = 'api/field-test-infinite-scroll-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestInfiniteScrollEntity> = (page, size, sort) => {
  const requestUrl = `${apiUrl}${sort ? `?page=${page}&size=${size}&sort=${sort}` : ''}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY_LIST,
    payload: axios.get<IFieldTestInfiniteScrollEntity>(`${requestUrl}${sort ? '&' : '?'}cacheBuster=${new Date().getTime()}`),
  };
};

export const getEntity: ICrudGetAction<IFieldTestInfiniteScrollEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTINFINITESCROLLENTITY,
    payload: axios.get<IFieldTestInfiniteScrollEntity>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IFieldTestInfiniteScrollEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTINFINITESCROLLENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestInfiniteScrollEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTINFINITESCROLLENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestInfiniteScrollEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTINFINITESCROLLENTITY,
    payload: axios.delete(requestUrl),
  });
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
