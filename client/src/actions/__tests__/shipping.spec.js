import configureMockStore from '../../services/ConfigureMockStore/configureMockStore';
import {
  shippingFailAction,
  shippingAction,
  shippingSuccessAction,
  calcShipping,
  SHIPPING_FAIL_FETCH,
  SHIPPING_REQUEST_FETCH,
  SHIPPING_SUCCESS_FETCH
} from '../shipping';
import { err, success } from '../../fakers';

const cep = '123';

describe('#shipping', () => {
  describe('#actions', () => {
    const err = 'error';
    const data = { cep: '12900-000' };

    it('should create an action to list products failed', () => {
      const expectedAction = {
        type: SHIPPING_FAIL_FETCH,
        err
      };

      expect(shippingFailAction(err)).toEqual(expectedAction);
    });

    it('should create an action to fetch list', () => {
      const expectedAction = {
        type: SHIPPING_REQUEST_FETCH
      };

      expect(shippingAction()).toEqual(expectedAction);
    });

    it('should create an action to fetch list success', () => {
      const expectedAction = {
        type: SHIPPING_SUCCESS_FETCH,
        data
      };

      expect(shippingSuccessAction(data)).toEqual(expectedAction);
    });
  });

  describe('#requests', () => {
    let store;

    beforeEach(() => {
      store = configureMockStore({});
    });

    describe('#calcShipping', () => {
      const axios = {
        get: jest
          .fn()
          .mockImplementationOnce(() => Promise.resolve(success))
          .mockImplementationOnce(() => Promise.reject(err))
      };

      it('should calcShipping success', async () => {
        const expectedActions = [
          { type: SHIPPING_REQUEST_FETCH },
          { type: SHIPPING_SUCCESS_FETCH, data: success }
        ];

        await store.dispatch(calcShipping(cep, { axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/shipping', { params: { cep } });
      });

      it('should calcShipping error', async () => {
        const expectedActions = [
          { type: SHIPPING_REQUEST_FETCH },
          { type: SHIPPING_FAIL_FETCH, err }
        ];

        await store.dispatch(calcShipping(cep, { axios }));

        expect(store.getActions()).toEqual(expectedActions);
        expect(axios.get).toBeCalledWith('/shipping', { params: { cep } });
      });
    });
  });
});
