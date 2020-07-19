import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import initialState from './reducers';
import sagas from './sagas';

// todo: setup env.config.js
// for simplicity this can remain here
const isDev = process.env.NODE_ENV === 'development';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = (isDev && composeWithDevTools) || compose;

const middlewares = [
  isDev ? loggerMiddleware : undefined,
  thunkMiddleware,
  sagaMiddleware
].filter(x => x);

const store = createStore(
  initialState,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(sagas);

export default store;
