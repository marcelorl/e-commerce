import axios from '../services/Request';

export const CHECKOUT_LIST_FAIL_FETCH = 'CHECKOUT_LIST_FAIL_FETCH';
export const CHECKOUT_LIST_REQUEST_FETCH = 'CHECKOUT_LIST_REQUEST_FETCH';
export const CHECKOUT_LIST_SUCCESS_FETCH = 'CHECKOUT_LIST_SUCCESS_FETCH';

export const PAYMENT_SUCCESS_FETCH = 'PAYMENT_SUCCESS_FETCH';

const dependencies = { axios };

export const checkoutListFailAction = err =>
  ({
    type: CHECKOUT_LIST_FAIL_FETCH,
    err
  });

export const checkoutListProductAction = () =>
  ({
    type: CHECKOUT_LIST_REQUEST_FETCH
  });

export const checkoutListSuccessAction = data =>
  ({
    type: CHECKOUT_LIST_SUCCESS_FETCH,
    data
  });

export const paymentSuccessAction = data =>
  ({
    type: PAYMENT_SUCCESS_FETCH,
    data
  });

export const fetchCheckout = injection => {
  const { axios } = Object.assign({}, dependencies, injection);

  return (dispatch, getState) => {
    dispatch(checkoutListProductAction());

    const ids = getState().cart.products;

    return axios.get('/checkout/preview', { params: { ids } })
      .then(products => dispatch(checkoutListSuccessAction(products)))
      .catch(err => dispatch(checkoutListFailAction(err)));
  };
};

export const onPayment = ({ addressNumber, paymentMethod, card }, injection) => {
  const { axios } = Object.assign({}, dependencies, injection);

  return (dispatch, getState) => {
    const ids = getState().cart.products;
    const shippingState = getState().shipping.address;
    const userState = getState().user.user;

    const address = {
      cep: shippingState.cep,
      number: addressNumber
    };

    const user = {
      name: userState.name,
      email: userState.email
    };

    return axios.post('/checkout', {
      ids,
      address,
      user,
      card,
      paymentMethod
    })
      .then(({ data }) => dispatch(paymentSuccessAction(data)));
  };
};
