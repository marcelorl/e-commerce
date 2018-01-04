import { ADD_TO_CART, CLEAN_CART } from '../actions/cart';

const INITIAL_STATE = {
  products: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const products = state.products.slice().concat(action.productIdsList);

      return Object.assign({}, state, { products });
    case CLEAN_CART:
      return Object.assign({}, state, { products: [] });
    default:
      return state;
  }
};

export default cartReducer;
