import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IDivision, defaultValue } from 'app/shared/model/test-root/division.model';

export const ACTION_TYPES = {
  FETCH_DIVISION_LIST: 'division/FETCH_DIVISION_LIST',
  FETCH_DIVISION: 'division/FETCH_DIVISION',
  CREATE_DIVISION: 'division/CREATE_DIVISION',
  UPDATE_DIVISION: 'division/UPDATE_DIVISION',
  DELETE_DIVISION: 'division/DELETE_DIVISION',
  RESET: 'division/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IDivision>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type DivisionState = Readonly<typeof initialState>;

// Reducer

export default (state: DivisionState = initialState, action): DivisionState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_DIVISION_LIST):
    case REQUEST(ACTION_TYPES.FETCH_DIVISION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_DIVISION):
    case REQUEST(ACTION_TYPES.UPDATE_DIVISION):
    case REQUEST(ACTION_TYPES.DELETE_DIVISION):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_DIVISION_LIST):
    case FAILURE(ACTION_TYPES.FETCH_DIVISION):
    case FAILURE(ACTION_TYPES.CREATE_DIVISION):
    case FAILURE(ACTION_TYPES.UPDATE_DIVISION):
    case FAILURE(ACTION_TYPES.DELETE_DIVISION):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DIVISION_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DIVISION):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_DIVISION):
    case SUCCESS(ACTION_TYPES.UPDATE_DIVISION):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_DIVISION):
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

const apiUrl = 'api/divisions';

// Actions

export const getEntities: ICrudGetAllAction<IDivision> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_DIVISION_LIST,
  payload: axios.get<IDivision>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IDivision> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_DIVISION,
    payload: axios.get<IDivision>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IDivision> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_DIVISION,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IDivision> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_DIVISION,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IDivision> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_DIVISION,
    payload: axios.delete(requestUrl),
  });
  dispatch(getEntities());
  return result;
};

export const reset = () => ({
  type: ACTION_TYPES.RESET,
});
