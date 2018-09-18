import React from 'react';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../config/store';

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
