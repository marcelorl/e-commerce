import axios from '../services/Request';

export const PRODUCT_FAIL_FETCH = 'PRODUCT_FAIL_FETCH';
export const PRODUCT_REQUEST_FETCH = 'PRODUCT_REQUEST_FETCH';
export const PRODUCT_SUCCESS_FETCH = 'PRODUCT_SUCCESS_FETCH';

export const SAVE_FAIL_FETCH = 'SAVE_FAIL_FETCH';
export const SAVE_REQUEST_FETCH = 'SAVE_REQUEST_FETCH';
export const SAVE_SUCCESS_FETCH = 'SAVE_SUCCESS_FETCH';

const dependencies = { axios };

export const requestProductFail = err =>
  ({
    type: PRODUCT_FAIL_FETCH,
    err
  });

export const requestProduct = () =>
  ({
    type: PRODUCT_REQUEST_FETCH
  });

export const requestProductSuccess = product =>
  ({
    type: PRODUCT_SUCCESS_FETCH,
    product
  });

export const saveRequestProductFail = err =>
  ({
    type: SAVE_FAIL_FETCH,
    err
  });

export const saveRequestProduct = () =>
  ({
    type: SAVE_REQUEST_FETCH
  });

export const saveRequestProductSuccess = () =>
  ({
    type: SAVE_SUCCESS_FETCH
  });

export const fetchProduct = (id, injection) => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(requestProduct());
    return axios.get(`/product/${id}`)
      .then(products => dispatch(requestProductSuccess(products)))
      .catch(err => dispatch(requestProductFail(err)));
  };
};

export const saveProduct = (product, injection) => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(saveRequestProduct());
    return axios.post('/product', product)
      .then(() => dispatch(saveRequestProductSuccess()))
      .catch(err => dispatch(saveRequestProductFail(err)));
  };
};
