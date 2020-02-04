import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/user.js';
import promiseMiddleware from '../middleware/promiseMiddleware.js';

export default function(initialState) {
  const enhancer = compose(applyMiddleware(promiseMiddleware));
  return createStore(reducer, initialState, enhancer);
}