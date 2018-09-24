import isEmpty from 'lodash/isEmpty';
import { put } from 'redux-saga/effects';
import { fetchCurrency } from '../reduxBundle';

export default function* onAdd(action) {
  const { payload: { name } } = action;
  if (!isEmpty(name)) {
    yield put(fetchCurrency(name));
  }
}
