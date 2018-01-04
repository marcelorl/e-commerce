import configureMockStore from '../../services/ConfigureMockStore/configureMockStore';
import { cardFaker, shippingFaker, userFaker, success, err, dataFaker } from '../../fakers';
import {
  checkoutListFailAction,
  checkoutListProductAction,
  checkoutListSuccessAction,
  paymentSuccessAction,
  fetchCheckout,
  onPayment,
  CHECKOUT_LIST_FAIL_FETCH,
  CHECKOUT_LIST_REQUEST_FETCH,
  CHECKOUT_LIST_SUCCESS_FETCH,
  PAYMENT_SUCCESS_FETCH
} from '../checkout';

describe('#checkout', () => {
  describe('#actions', () => {
    const data = dataFaker.build();

    it('should create an action checkout list fail', () => {
      const expectedAction = {
        type: CHECKOUT_LIST_FAIL_FETCH,
        err
      };

      expect(checkoutListFailAction(err)).toEqual(expectedAction);
    });

    it('should create an action request checkout list', () => {
      const expectedAction = {
        type: CHECKOUT_LIST_REQUEST_FETCH
      };

      expect(checkoutListProductAction()).toEqual(expectedAction);
    });

    it('should create an action success checkout list', () => {
      const expectedAction = {
        type: CHECKOUT_LIST_SUCCESS_FETCH,
        data
      };

      expect(checkoutListSuccessAction(data)).toEqual(expectedAction);
    });

    it('should create an action to payment success', () => {
      const expectedAction = {
        type: PAYMENT_SUCCESS_FETCH,
        data
      };

      expect(paymentSuccessAction(data)).toEqual(expectedAction);
    });
  });

  describe('#requests', () => {
    const card = cardFaker.build();
    const shipping = shippingFaker.build();
    const user = userFaker.build();

    const storeState = {
      cart: card,
      shipping,
      user
    };

    let store;

    beforeEach(() => {
      store = configureMockStore(storeState);
    });

    describe('#fetchCheckout', () => {
      const axios = {
        get: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve(success))
          .mockImplementationOnce(() => Promise.reject(err))
      };

      it('should fetchCheckout success', async () => {
        const expectedActions = [
          { type: CHECKOUT_LIST_REQUEST_FETCH },
          { type: CHECKOUT_LIST_SUCCESS_FETCH, data: success }
        ];

        await store.dispatch(fetchCheckout({ axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/checkout/preview', { params: { ids: card.products } });
      });

      it('should fetchCheckout error', async () => {
        const expectedActions = [
          { type: CHECKOUT_LIST_REQUEST_FETCH },
          { type: CHECKOUT_LIST_FAIL_FETCH, err }
        ];

        await store.dispatch(fetchCheckout({ axios }));

        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('#onPayment', () => {
      const axios = {
        post: jest.fn().mockImplementationOnce(() => Promise.resolve({ data: success }))
      };

      const expectedActions = [{ type: PAYMENT_SUCCESS_FETCH, data: success }];

      it('should onPayment success', async () => {
        await store.dispatch(
          onPayment(
            {
              addressNumber: shipping.address.number,
              paymentMethod: '',
              card: card
            },
            { axios }
          )
        );

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.post).toBeCalledWith('/checkout', {
          address: shipping.address,
          card: card,
          ids: card.products,
          paymentMethod: '',
          user: user.user
        });
      });
    });
  });
});
