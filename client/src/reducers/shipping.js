import {
  SHIPPING_FAIL_FETCH,
  SHIPPING_REQUEST_FETCH,
  SHIPPING_SUCCESS_FETCH
} from '../actions/shipping';

const INITIAL_STATE = {
  error: '',
  loading: false,
  address: {},
  price: {}
};

const shippingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHIPPING_FAIL_FETCH:
      return Object.assign({}, state, {
        error: `Error - ${action.err}`,
        loading: false,
        address: {},
        price: {}
      });
    case SHIPPING_REQUEST_FETCH:
      return Object.assign({}, state, {
        error: '',
        loading: true,
        address: {},
        price: {}
      });
    case SHIPPING_SUCCESS_FETCH:
      return Object.assign({}, state, {
        loading: false,
        address: action.data.data.address,
        price: action.data.data.price
      });
    default:
      return state;
  }
};

export default shippingReducer;
