import { eventChannel } from 'redux-saga';
import { call, put, take } from 'redux-saga/effects';
import { fetchAllCurrencies } from '../reduxBundle';

const timeOut = 60 * 60 * 1000;

function tickerLoop() {
  return eventChannel((emitter) => {
    const iv = setInterval(
      () => emitter({}),
      timeOut,
    );
    return () => {
      clearInterval(iv);
    };
  });
}

export default function* startTimer() {
  const chan = yield call(tickerLoop);
  while (true) {
    yield take(chan);
    yield put(fetchAllCurrencies());
  }
}
