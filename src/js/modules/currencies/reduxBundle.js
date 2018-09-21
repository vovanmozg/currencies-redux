import omit from 'lodash/omit';
import { ratesApi } from './infrastructure';

export const Actions = {
  ADD: 'currencies/ADD',
  REMOVE: 'currencies/REMOVE',
  // for fetching all currencies
  FETCH_ALL_CURRENCIES: 'currencies/FETCH_ALL_CURRENCIES',
  FETCH_CURRENCY: 'currencies/FETCH_CURRENCY',
  FETCH_CURRENCY_SUCCESS: 'currencies/FETCH_CURRENCY_SUCCESS',
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

const currencies = (state = {}, action) => {
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

export default currencies;
