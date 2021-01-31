import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import {
  IFieldTestServiceClassAndJpaFilteringEntity,
  defaultValue,
} from 'app/shared/model/field-test-service-class-and-jpa-filtering-entity.model';

export const ACTION_TYPES = {
  FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY_LIST:
    'fieldTestServiceClassAndJpaFilteringEntity/FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY_LIST',
  FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY:
    'fieldTestServiceClassAndJpaFilteringEntity/FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY',
  CREATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY:
    'fieldTestServiceClassAndJpaFilteringEntity/CREATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY',
  UPDATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY:
    'fieldTestServiceClassAndJpaFilteringEntity/UPDATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY',
  DELETE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY:
    'fieldTestServiceClassAndJpaFilteringEntity/DELETE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY',
  SET_BLOB: 'fieldTestServiceClassAndJpaFilteringEntity/SET_BLOB',
  RESET: 'fieldTestServiceClassAndJpaFilteringEntity/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IFieldTestServiceClassAndJpaFilteringEntity>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type FieldTestServiceClassAndJpaFilteringEntityState = Readonly<typeof initialState>;

// Reducer

export default (
  state: FieldTestServiceClassAndJpaFilteringEntityState = initialState,
  action
): FieldTestServiceClassAndJpaFilteringEntityState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY_LIST):
    case REQUEST(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
    case REQUEST(ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
    case REQUEST(ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY_LIST):
    case FAILURE(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
    case FAILURE(ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
    case FAILURE(ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
    case FAILURE(ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
    case SUCCESS(ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY):
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

const apiUrl = 'api/field-test-service-class-and-jpa-filtering-entities';

// Actions

export const getEntities: ICrudGetAllAction<IFieldTestServiceClassAndJpaFilteringEntity> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY_LIST,
  payload: axios.get<IFieldTestServiceClassAndJpaFilteringEntity>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IFieldTestServiceClassAndJpaFilteringEntity> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY,
    payload: axios.get<IFieldTestServiceClassAndJpaFilteringEntity>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IFieldTestServiceClassAndJpaFilteringEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IFieldTestServiceClassAndJpaFilteringEntity> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IFieldTestServiceClassAndJpaFilteringEntity> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_FIELDTESTSERVICECLASSANDJPAFILTERINGENTITY,
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
