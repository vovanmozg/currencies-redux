import { put } from 'redux-saga/effects';
import { fetchAllCurrencies } from '../../currencies/reduxBundle';

export default function* onRehydrate() {
  yield put(fetchAllCurrencies());
}
