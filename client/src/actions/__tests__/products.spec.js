import configureMockStore from '../../services/ConfigureMockStore/configureMockStore';
import {
  requestProductsFail,
  requestProducts,
  requestProductsSuccess,
  fetchProducts,

  PRODUCTS_FAIL_FETCH,
  PRODUCTS_REQUEST_FETCH,
  PRODUCTS_SUCCESS_FETCH
} from '../products';
import {
  cardFaker,
  err,
  success
} from '../../fakers';

describe('#products', () => {
  describe('#actions', () => {
    const products = cardFaker.build().products;

    it('should create an action to list products failed', () => {
      const expectedAction = {
        type: PRODUCTS_FAIL_FETCH,
        err
      };

      expect(requestProductsFail(err)).toEqual(expectedAction);
    });

    it('should create an action to fetch list', () => {
      const expectedAction = {
        type: PRODUCTS_REQUEST_FETCH
      };

      expect(requestProducts()).toEqual(expectedAction);
    });

    it('should create an action to fetch list success', () => {
      const expectedAction = {
        type: PRODUCTS_SUCCESS_FETCH,
        products
      };

      expect(requestProductsSuccess(products)).toEqual(expectedAction);
    });
  });

  describe('#requests', () => {
    let store;

    beforeEach(() => {
      store = configureMockStore({});
    });

    describe('#fetchProducts', () => {
      const axios = {
        get: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve(success))
          .mockImplementationOnce(() => Promise.reject(err))
      };

      it('should fetchProducts success', async () => {
        const expectedActions = [
          { type: PRODUCTS_REQUEST_FETCH },
          { type: PRODUCTS_SUCCESS_FETCH, products: success }
        ];

        await store.dispatch(fetchProducts({ axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/product');
      });

      it('should fetchCheckout error', async () => {
        const expectedActions = [
          { type: PRODUCTS_REQUEST_FETCH },
          { type: PRODUCTS_FAIL_FETCH, err }
        ];

        await store.dispatch(fetchProducts({ axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/product');
      });
    });
  });
});
