import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import initialState from './reducers';

// todo: setup env.config.js
// for simplicity this can remain here
const isDev = process.env.NODE_ENV === 'development';
const composeEnhancer = (isDev && composeWithDevTools) || compose;

const middlewares = [isDev ? logger : undefined, thunk];

export const store = createStore(
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
