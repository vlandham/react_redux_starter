import { createStore as _createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import clientMiddleware from './clientMiddleware';
import rootReducer from './rootReducer';

// create the Redux store
export default function createStore(history, api, data) {
  // Sync dispatched route actions to the history
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [clientMiddleware(api), reduxRouterMiddleware];

  const finalCreateStore = applyMiddleware(...middleware)(_createStore);

  let store;
  // store = finalCreateStore(rootReducer, data);
  store = finalCreateStore(rootReducer, data, window.devToolsExtension && window.devToolsExtension());

  // make available in window for development
  // if (__DEVELOPMENT__ && __CLIENT__) {
    console.log('[dev] reduxStore = ', store);
    window.reduxStore = store;
  // }

  return store;
}
