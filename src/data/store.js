import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import history from './history';
import createRootReducer from './reducers';

const loggerMiddleware = createLogger();
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history), // for dispatching history actions
    thunkMiddleware,
    loggerMiddleware,
  )),
);

export default store;
