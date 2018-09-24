import { call, takeEvery } from 'redux-saga/effects';
import onAdd from './onAdd';
import startTimer from './startTimer';
import { Actions } from '../reduxBundle';
import onFetchAllCurrencies from './onFetchAllCurrencies';
import onRehydrate from './onRehydrate';

export default function* sagas() {
  yield takeEvery(Actions.ADD, onAdd);
  yield takeEvery(Actions.FETCH_ALL_CURRENCIES, onFetchAllCurrencies);
  yield takeEvery('persist/REHYDRATE', onRehydrate);
  yield call(startTimer);
}
