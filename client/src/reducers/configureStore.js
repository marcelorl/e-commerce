import { combineReducers, createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import history from '../services/History';
import cartReducer from './cart';
import checkoutReducer from './checkout';
import productsReducer from './products';
import productReducer from './product';
import shippingReducer from './shipping';
import userReducer from './user';

const loggerMiddleware = createLogger();
const routerHistoryMiddleware = routerMiddleware(history);

const reducers = combineReducers({
  routing: routerReducer,
  cart: cartReducer,
  checkout: checkoutReducer,
  products: productsReducer,
  product: productReducer,
  shipping: shippingReducer,
  user: userReducer
});

const middlewares = applyMiddleware(
  thunkMiddleware,
  loggerMiddleware,
  routerHistoryMiddleware
);

const configureStore =
  createStore(
    reducers,
    composeWithDevTools(
      middlewares,
      persistState(['cart'])
    )
  );

export default configureStore;
