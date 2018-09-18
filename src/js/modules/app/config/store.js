import { createStore } from 'redux';
import rootReducer from '../reduxBundle';

const store = createStore(rootReducer);

export default store;
