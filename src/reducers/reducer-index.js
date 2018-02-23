import { combineReducers } from 'redux';
import history from './history.js';
import stepNumber from './step-number.js';
import xIsNext from './x-is-next.js';

const rootReducer = combineReducers({
  history: history,
  stepNumber: stepNumber,
  xIsNext: xIsNext
});

export default rootReducer;
