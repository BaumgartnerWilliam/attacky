import { combineReducers } from 'redux';
import { todos } from './reducers';

const root = combineReducers({
  todos
});

export default root;
