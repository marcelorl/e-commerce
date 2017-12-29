import axios from '../services/Request';

export const SHIPPING_FAIL_FETCH = 'SHIPPING_FAIL_FETCH';
export const SHIPPING_REQUEST_FETCH = 'SHIPPING_REQUEST_FETCH';
export const SHIPPING_SUCCESS_FETCH = 'SHIPPING_SUCCESS_FETCH';

const dependencies = { axios };

export const shippingFailAction = err =>
  ({
    type: SHIPPING_FAIL_FETCH,
    err
  });

export const shippingAction = () =>
  ({
    type: SHIPPING_REQUEST_FETCH
  });

export const shippingSuccessAction = data =>
  ({
    type: SHIPPING_SUCCESS_FETCH,
    data
  });

export const calcShipping = (cep, injection) => {
  const { axios } = Object.assign({}, dependencies, injection);

  return dispatch => {
    dispatch(shippingAction());
    return axios.get('/shipping', { params: { cep } })
      .then(data => dispatch(shippingSuccessAction(data)))
      .catch(err => dispatch(shippingFailAction(err)));
  };
};
