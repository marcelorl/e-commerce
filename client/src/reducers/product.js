import get from 'lodash.get';

import {
  PRODUCT_FAIL_FETCH,
  PRODUCT_REQUEST_FETCH,
  PRODUCT_SUCCESS_FETCH,
  SAVE_FAIL_FETCH,
  SAVE_REQUEST_FETCH,
  SAVE_SUCCESS_FETCH
} from '../actions/product';

const INITIAL_STATE = {
  loading: false,
  product: {},
  error: ''
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        product: {}
      });
    case PRODUCT_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        product: {}
      });
    case PRODUCT_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        product: get(action, 'product.data', {})
      });
    case SAVE_FAIL_FETCH:
      return Object.assign({}, state, {
        error: 'Error',
        loading: false,
        product: {}
      });
    case SAVE_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        product: {}
      });
    case SAVE_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        product: {}
      });
    default:
      return state;
  }
};

export default productsReducer;
