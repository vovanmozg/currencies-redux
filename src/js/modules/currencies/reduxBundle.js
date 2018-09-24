import omit from 'lodash/omit';
import { combineReducers } from 'redux';
import { ratesApi } from './infrastructure';

export const Actions = {
  ADD: 'currencies/ADD',
  REMOVE: 'currencies/REMOVE',
  // for fetching all currencies
  FETCH_ALL_CURRENCIES: 'currencies/FETCH_ALL_CURRENCIES',
  FETCH_CURRENCY: 'currencies/FETCH_CURRENCY',
  FETCH_CURRENCY_SUCCESS: 'currencies/FETCH_CURRENCY_SUCCESS',
  UPDATE_AUTOCOMPLETE: 'currencies/UPDATE_AUTOCOMPLETE',
  UPDATE_AUTOCOMPLETE_SUCCESS: 'currencies/UPDATE_AUTOCOMPLETE_SUCCESS',
};

export const add = payload => ({
  type: Actions.ADD,
  payload,
});

export const remove = payload => ({
  type: Actions.REMOVE,
  payload,
});

export const fetchAllCurrencies = () => ({
  type: Actions.FETCH_ALL_CURRENCIES,
});

// C7AAAB7A-4F90-43EB-B4FD-692AA9E0561B
export const fetchCurrency = (payload) => {
  if (!(typeof payload === 'string' || payload instanceof String)) {
    throw Error('Invalid currency name');
  }
  return {
    type: Actions.FETCH_CURRENCY,
    payload: {
      request: {
        url: ratesApi.buildUrl(payload),
      },
    },
  };
};

export const updateAutocomplete = () => ({
  type: Actions.UPDATE_AUTOCOMPLETE,
  payload: {
    request: {
      url: ratesApi.buildNamesUrl(),
    },
  },
});

export const ratesReducer = (state = {}, action) => {
  switch (action.type) {
    case Actions.ADD: {
      return { ...state, ...{ [action.payload.name]: action.payload } };
    }
    // return state.concat(action.payload);
    case Actions.REMOVE: {
      return omit(state, action.payload.name);
    }
    // return state.filter(el => el.name !== action.payload.name);
    case Actions.FETCH_CURRENCY_SUCCESS: {
      const rates = ratesApi.decodeRates(action.payload.data);
      return Object.entries(state).reduce(
        (memo, [name, currencyData]) => {
          const rate = rates[name];
          const item = {
            [name]: { ...currencyData, ...rate },
          };
          return { ...memo, ...item };
        },
        {},
      );
    }
    default:
      return state;
  }
};

export const namesReducer = (state = [], action) => {
  switch (action.type) {
    case Actions.UPDATE_AUTOCOMPLETE_SUCCESS: {
      return ratesApi.decodeNames(action.payload.data);
    }
    default:
      return state;
  }
};

const currencies = combineReducers({
  rates: ratesReducer,
  names: namesReducer,
});

export default currencies;
