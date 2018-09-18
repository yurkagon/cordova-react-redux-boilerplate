import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const isDevelopment = process.env.NODE_ENV !== 'production';

const middlewares = [
  thunk,
  isDevelopment && logger,
].filter(Boolean);

const store = createStore(
  store => store,
  applyMiddleware(...middlewares),
);

export default store;
