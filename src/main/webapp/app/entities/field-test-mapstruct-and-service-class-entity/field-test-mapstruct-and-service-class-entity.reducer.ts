import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import {
  IFieldTestMapstructAndServiceClassEntity,
  defaultValue,
} from 'app/shared/model/field-test-mapstruct-and-service-class-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY_LIST:
    'fieldTestMapstructAndServiceClassEntity/FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY_LIST',
  FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY: 'fieldTestMapstructAndServiceClassEntity/FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY',
  CREATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY: 'fieldTestMapstructAndServiceClassEntity/CREATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY',
  UPDATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY: 'fieldTestMapstructAndServiceClassEntity/UPDATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY',
  DELETE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY: 'fieldTestMapstructAndServiceClassEntity/DELETE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY',
  SET_BLOB: 'fieldTestMapstructAndServiceClassEntity/SET_BLOB',
  RESET: 'fieldTestMapstructAndServiceClassEntity/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestMapstructAndServiceClassEntity>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type FieldTestMapstructAndServiceClassEntityState = Readonly<typeof initialState>;

// Reducer

export default (
  state: FieldTestMapstructAndServiceClassEntityState = initialState,
  action
): FieldTestMapstructAndServiceClassEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY):
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

const apiUrl = 'api/field-test-mapstruct-and-service-class-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestMapstructAndServiceClassEntity> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY_LIST,
  payload: axios.get<IFieldTestMapstructAndServiceClassEntity>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IFieldTestMapstructAndServiceClassEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY,
    payload: axios.get<IFieldTestMapstructAndServiceClassEntity>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IFieldTestMapstructAndServiceClassEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestMapstructAndServiceClassEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestMapstructAndServiceClassEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTMAPSTRUCTANDSERVICECLASSENTITY,
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
