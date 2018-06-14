import { combineReducers } from 'redux';
import wastReducer from './wastReducer';
import garbageReducer from './garbageReducer';
import scoreReducer from './scoreReducer';

const rootReducer = combineReducers({
  wast: wastReducer,
  garbage: garbageReducer,
  score: scoreReducer

});

export default rootReducer;
