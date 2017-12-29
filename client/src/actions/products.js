import axios from '../services/Request';

export const PRODUCTS_FAIL_FETCH = 'PRODUCTS_FAIL_FETCH';
export const PRODUCTS_REQUEST_FETCH = 'PRODUCTS_REQUEST_FETCH';
export const PRODUCTS_SUCCESS_FETCH = 'PRODUCTS_SUCCESS_FETCH';

const dependencies = { axios };

export const requestProductsFail = err =>
  ({
    type: PRODUCTS_FAIL_FETCH,
    err
  });

export const requestProducts = () =>
  ({
    type: PRODUCTS_REQUEST_FETCH
  });

export const requestProductsSuccess = products =>
  ({
    type: PRODUCTS_SUCCESS_FETCH,
    products
  });

export const fetchProducts = injection => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestProducts());
    return axios.get('/product')
      .then(products => dispatch(requestProductsSuccess(products)))
      .catch(err => dispatch(requestProductsFail(err)));
  };
};
