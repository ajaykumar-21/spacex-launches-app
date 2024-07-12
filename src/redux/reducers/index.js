import { combineReducers } from 'redux';
import launchReducer from './launchReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  launches: launchReducer,
  auth: authReducer,
});

export default rootReducer;
