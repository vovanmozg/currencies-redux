import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reduxBundle as currencies } from '../currencies';

const reducers = combineReducers({
  currencies: currencies.default,
  form: formReducer,
});

export default reducers;
