import get from 'lodash.get';

import {
  PRODUCTS_FAIL_FETCH,
  PRODUCTS_REQUEST_FETCH,
  PRODUCTS_SUCCESS_FETCH
} from '../actions/products';

const INITIAL_STATE = {
  loading: false,
  list: [],
  error: ''
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        list: []
      });
    case PRODUCTS_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        list: []
      });
    case PRODUCTS_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: get(action, 'products.data', [])
      });
    default:
      return state;
  }
};

export default productsReducer;
