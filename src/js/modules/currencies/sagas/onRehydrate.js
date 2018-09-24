import { put } from 'redux-saga/effects';
import { fetchAllCurrencies, updateAutocomplete } from '../reduxBundle';

export default function* onRehydrate() {
  yield put(fetchAllCurrencies());
  yield put(updateAutocomplete());
}
