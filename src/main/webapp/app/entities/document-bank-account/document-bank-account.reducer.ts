import axios from 'axios';
import { ICrudGetAction, ICrudGetAllAction, ICrudPutAction, ICrudDeleteAction } from 'react-jhipster';

import { cleanEntity } from 'app/shared/util/entity-utils';
import { REQUEST, SUCCESS, FAILURE } from 'app/shared/reducers/action-type.util';

import { IDocumentBankAccount, defaultValue } from 'app/shared/model/document-bank-account.model';

export const ACTION_TYPES = {
  FETCH_DOCUMENTBANKACCOUNT_LIST: 'documentBankAccount/FETCH_DOCUMENTBANKACCOUNT_LIST',
  FETCH_DOCUMENTBANKACCOUNT: 'documentBankAccount/FETCH_DOCUMENTBANKACCOUNT',
  CREATE_DOCUMENTBANKACCOUNT: 'documentBankAccount/CREATE_DOCUMENTBANKACCOUNT',
  UPDATE_DOCUMENTBANKACCOUNT: 'documentBankAccount/UPDATE_DOCUMENTBANKACCOUNT',
  DELETE_DOCUMENTBANKACCOUNT: 'documentBankAccount/DELETE_DOCUMENTBANKACCOUNT',
  SET_BLOB: 'documentBankAccount/SET_BLOB',
  RESET: 'documentBankAccount/RESET',
};

const initialState = {
  loading: false,
  errorMessage: null,
  entities: [] as ReadonlyArray<IDocumentBankAccount>,
  entity: defaultValue,
  updating: false,
  updateSuccess: false,
};

export type DocumentBankAccountState = Readonly<typeof initialState>;

// Reducer

export default (state: DocumentBankAccountState = initialState, action): DocumentBankAccountState => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT_LIST):
    case REQUEST(ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        loading: true,
      };
    case REQUEST(ACTION_TYPES.CREATE_DOCUMENTBANKACCOUNT):
    case REQUEST(ACTION_TYPES.UPDATE_DOCUMENTBANKACCOUNT):
    case REQUEST(ACTION_TYPES.DELETE_DOCUMENTBANKACCOUNT):
      return {
        ...state,
        errorMessage: null,
        updateSuccess: false,
        updating: true,
      };
    case FAILURE(ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT_LIST):
    case FAILURE(ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT):
    case FAILURE(ACTION_TYPES.CREATE_DOCUMENTBANKACCOUNT):
    case FAILURE(ACTION_TYPES.UPDATE_DOCUMENTBANKACCOUNT):
    case FAILURE(ACTION_TYPES.DELETE_DOCUMENTBANKACCOUNT):
      return {
        ...state,
        loading: false,
        updating: false,
        updateSuccess: false,
        errorMessage: action.payload,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT_LIST):
      return {
        ...state,
        loading: false,
        entities: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT):
      return {
        ...state,
        loading: false,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_DOCUMENTBANKACCOUNT):
    case SUCCESS(ACTION_TYPES.UPDATE_DOCUMENTBANKACCOUNT):
      return {
        ...state,
        updating: false,
        updateSuccess: true,
        entity: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.DELETE_DOCUMENTBANKACCOUNT):
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

const apiUrl = 'api/document-bank-accounts';

// Actions

export const getEntities: ICrudGetAllAction<IDocumentBankAccount> = (page, size, sort) => ({
  type: ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT_LIST,
  payload: axios.get<IDocumentBankAccount>(`${apiUrl}?cacheBuster=${new Date().getTime()}`),
});

export const getEntity: ICrudGetAction<IDocumentBankAccount> = id => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_DOCUMENTBANKACCOUNT,
    payload: axios.get<IDocumentBankAccount>(requestUrl),
  };
};

export const createEntity: ICrudPutAction<IDocumentBankAccount> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.CREATE_DOCUMENTBANKACCOUNT,
    payload: axios.post(apiUrl, cleanEntity(entity)),
  });
  dispatch(getEntities());
  return result;
};

export const updateEntity: ICrudPutAction<IDocumentBankAccount> = entity => async dispatch => {
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_DOCUMENTBANKACCOUNT,
    payload: axios.put(apiUrl, cleanEntity(entity)),
  });
  return result;
};

export const deleteEntity: ICrudDeleteAction<IDocumentBankAccount> = id => async dispatch => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_DOCUMENTBANKACCOUNT,
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
