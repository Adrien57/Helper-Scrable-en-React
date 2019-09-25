import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducer';
import ajaxMiddleWare from './ajaxMiddleWare';

// on utilise la fonction compose,
// soit fournie par REDUX_DEVTOOLS_EXTENSION si possible, sinon par redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// les enhancers représentent nos middleWares
const enhancers = composeEnhancers(
  applyMiddleware(ajaxMiddleWare),
);

// on peut passer des "enhancers" à notre store
const store = createStore(
  reducer,
  enhancers,
);

export default store;
