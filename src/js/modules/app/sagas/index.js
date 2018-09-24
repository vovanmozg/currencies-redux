import { spawn } from 'redux-saga/effects';
import { sagas as currencies } from '../../currencies';

function* root() {
  yield spawn(currencies.default);
}

export default root;
