import get from 'lodash.get';

import {
  CHECKOUT_LIST_FAIL_FETCH,
  CHECKOUT_LIST_REQUEST_FETCH,
  CHECKOUT_LIST_SUCCESS_FETCH,
  PAYMENT_SUCCESS_FETCH
} from '../actions/checkout';

const INITIAL_STATE = {
  error: '',
  list: [],
  loading: false,
  total: 0
};

const checkoutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHECKOUT_LIST_FAIL_FETCH:
      return Object.assign({}, state, {
        error: `Error - ${action.err}`,
        loading: false,
        list: [],
        total: 0
      });
    case CHECKOUT_LIST_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        list: [],
        total: 0
      });
    case CHECKOUT_LIST_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: get(action, 'data.data.list', []),
        total: get(action, 'data.data.total', 0)
      });
    case PAYMENT_SUCCESS_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: false,
        list: [],
        total: 0,
        status: action.data
      });
    default:
      return state;
  }
};

export default checkoutReducer;
