import { createProductIdsList } from './cart.logic';

export const ADD_TO_CART = 'ADD_TO_CART';
export const CLEAN_CART = 'CLEAN_CART';

export const addToCartAction = productIdsList => ({
  type: ADD_TO_CART,
  productIdsList
});

export const cleanCartAction = () => ({
  type: CLEAN_CART
});

export const addToCart = (product, quantity) => {
  const productIdsList = createProductIdsList(product.id, quantity);

  return dispatch => dispatch(addToCartAction(productIdsList));
};

export const cleanCart = () => dispatch => dispatch(cleanCartAction());
