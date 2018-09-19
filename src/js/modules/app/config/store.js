import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from '../reduxBundle';

const persistConfig = {
  key: 'app',
  storage,
  whitelist: ['currencies'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

/* eslint-disable no-underscore-dangle */
const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

const persistor = persistStore(store);

export {
  store,
  persistor,
};
