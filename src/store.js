import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './reducers';

// todo: setup env.config.js
// for simplicity this can remain here
const isDev = process.env.NODE_ENV === 'development';

export const store = createStore(
  initialState,
  isDev ? composeWithDevTools() : undefined
);

export default store;
