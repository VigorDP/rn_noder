import promiseMiddleware from 'redux-promise';
import Immutable from 'immutable';
import {createStore, compose, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers';

if (__DEV__) {
  global.XMLHttpRequest =
    global.originalXMLHttpRequest || global.XMLHttpRequest;
  global.FormData = global.originalFormData || global.FormData;
  // fix: RN0.60以上RNDebugger的 network 不工作
  if (window.FETCH_SUPPORT) {
    window.FETCH_SUPPORT.blob = false;
  } else {
    global.FileReader = global.originalFileReader || global.FileReader;
    GLOBAL.Blob = null;
  }
}

let store;

export default function configureStore() {
  if (store) {
    return store;
  }

  const middlewares = [promiseMiddleware];

  store = createStore(
    rootReducer,
    Immutable.Map({}),
    compose(
      __DEV__
        ? composeWithDevTools({})(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares),
    ),
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
