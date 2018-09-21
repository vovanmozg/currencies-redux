import { spawn, takeEvery } from 'redux-saga/effects';
import { sagas as currencies } from '../../currencies';
import onRehydrate from './onRehydrate';

function* root() {
  yield spawn(currencies.default);
  yield takeEvery('persist/REHYDRATE', onRehydrate);
}

export default root;
