import { put } from 'redux-saga/effects';
import { fetchCurrency } from '../reduxBundle';

export default function* onAdd(action) {
  const { payload: { name } } = action;
  yield put(fetchCurrency(name));
}
