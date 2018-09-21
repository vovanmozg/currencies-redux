import axios from 'axios';
import { applyMiddleware, compose, createStore } from 'redux';
import axiosMiddleware from 'redux-axios-middleware';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reduxBundle';
import sagas from '../sagas';
import { ratesApi } from '../../currencies';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['currencies'],
};

const client = axios.create({
  baseURL: ratesApi.baseUrl,
  responseType: 'json',
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(
    sagaMiddleware,
    axiosMiddleware(client),
  ),
  /* eslint-disable no-underscore-dangle */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  /* eslint-enable */
);

const store = createStore(
  persistedReducer,
  enhancer,
);

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export {
  store,
  persistor,
};
