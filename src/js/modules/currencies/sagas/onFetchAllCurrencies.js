import map from 'lodash/map';
import { all, put, select } from 'redux-saga/effects';
import { fetchCurrency } from '../reduxBundle';
import { currenciesSelector } from '../selectors';

export default function* onFetchAllCurrencies() {
  const currencies = yield select(currenciesSelector);
  yield all(map(currencies, currency => put(fetchCurrency(currency.name))));
}
