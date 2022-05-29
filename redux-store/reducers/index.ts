import { combineReducers } from 'redux';
import alert from './alertReducer';
import worker from './workerReducer';

export default combineReducers({
  alert,
  worker,
});
