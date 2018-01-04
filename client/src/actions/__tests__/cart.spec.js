import configureMockStore from '../../services/ConfigureMockStore/configureMockStore';
import {
  addToCartAction,
  cleanCartAction,
  addToCart,
  cleanCart,
  ADD_TO_CART,
  CLEAN_CART
} from '../cart';

describe('#cart', () => {
  describe('#actions', () => {
    const productIdsList = ['123', '321'];

    it('should create an action to add to cart', () => {
      const expectedAction = {
        type: ADD_TO_CART,
        productIdsList
      };

      expect(addToCartAction(productIdsList)).toEqual(expectedAction);
    });

    it('should create an action to clear cart', () => {
      const expectedAction = {
        type: CLEAN_CART
      };

      expect(cleanCartAction()).toEqual(expectedAction);
    });
  });

  describe('#requests', () => {
    let store;

    beforeEach(() => {
      store = configureMockStore({});
    });

    describe('#addToCart', () => {
      const expectedActions = [{ type: ADD_TO_CART, productIdsList: [] }];

      it('should addToCart success', async () => {
        await store.dispatch(
          addToCart({
            product: 1,
            quantity: 1
          })
        );

        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('#cleanCart', () => {
      const expectedActions = [{ type: CLEAN_CART }];

      it('should cleanCart success', async () => {
        await store.dispatch(cleanCart());

        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
