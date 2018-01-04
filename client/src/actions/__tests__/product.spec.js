import configureMockStore from '../../services/ConfigureMockStore/configureMockStore';
import {
  requestProductFail,
  requestProduct,
  requestProductSuccess,
  saveRequestProductFail,
  saveRequestProduct,
  saveRequestProductSuccess,
  fetchProduct,
  saveProduct,
  PRODUCT_FAIL_FETCH,
  PRODUCT_REQUEST_FETCH,
  PRODUCT_SUCCESS_FETCH,
  SAVE_FAIL_FETCH,
  SAVE_REQUEST_FETCH,
  SAVE_SUCCESS_FETCH
} from '../product';
import { err, success } from '../../fakers';

describe('#product', () => {
  describe('#actions', () => {
    const product = { name: 'product' };

    it('should create an action for product fetch failed', () => {
      const expectedAction = {
        type: PRODUCT_FAIL_FETCH,
        err
      };

      expect(requestProductFail(err)).toEqual(expectedAction);
    });

    it('should create an action to fetch product', () => {
      const expectedAction = {
        type: PRODUCT_REQUEST_FETCH
      };

      expect(requestProduct()).toEqual(expectedAction);
    });

    it('should create an action to success fetch product', () => {
      const expectedAction = {
        type: PRODUCT_SUCCESS_FETCH,
        product
      };

      expect(requestProductSuccess(product)).toEqual(expectedAction);
    });

    it('should create an action for save product failed', () => {
      const expectedAction = {
        type: SAVE_FAIL_FETCH,
        err
      };

      expect(saveRequestProductFail(err)).toEqual(expectedAction);
    });

    it('should create an action for save product', () => {
      const expectedAction = {
        type: SAVE_REQUEST_FETCH
      };

      expect(saveRequestProduct()).toEqual(expectedAction);
    });

    it('should create an action for save product success', () => {
      const expectedAction = {
        type: SAVE_SUCCESS_FETCH
      };

      expect(saveRequestProductSuccess()).toEqual(expectedAction);
    });
  });

  describe('#requests', () => {
    let store;

    beforeEach(() => {
      store = configureMockStore({});
    });

    describe('#fetchProduct', () => {
      const axios = {
        get: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve(success))
          .mockImplementationOnce(() => Promise.reject(err))
      };

      it('should fetchProduct success', async () => {
        const expectedActions = [
          { type: PRODUCT_REQUEST_FETCH },
          { type: PRODUCT_SUCCESS_FETCH, product: success }
        ];

        await store.dispatch(fetchProduct(success, { axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith(`/product/${success}`);
      });

      it('should fetchProduct error', async () => {
        const expectedActions = [
          { type: PRODUCT_REQUEST_FETCH },
          { type: PRODUCT_FAIL_FETCH, err }
        ];

        await store.dispatch(fetchProduct(success, { axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith(`/product/${success}`);
      });
    });

    describe('#saveProduct', () => {
      const axios = {
        post: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve(success))
          .mockImplementationOnce(() => Promise.reject(err))
      };

      it('should saveProduct success', async () => {
        const expectedActions = [{ type: SAVE_REQUEST_FETCH }, { type: SAVE_SUCCESS_FETCH }];

        await store.dispatch(saveProduct(success, { axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.post).toBeCalledWith('/product', success);
      });

      it('should saveProduct error', async () => {
        const expectedActions = [{ type: SAVE_REQUEST_FETCH }, { type: SAVE_FAIL_FETCH, err }];

        await store.dispatch(saveProduct(success, { axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.post).toBeCalledWith('/product', success);
      });
    });
  });
});
