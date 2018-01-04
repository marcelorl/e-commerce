import { createProductIdsList } from '../cart.logic';

describe('#actions', () => {
  describe('#cart.logic', () => {
    const productIdToBeAdded = '123';

    const quantityToBeAdded = 3;

    it('should create an action to add to cart', () => {
      const expectedAction = [ '123', '123', '123' ];

      expect(createProductIdsList(productIdToBeAdded, quantityToBeAdded)).toEqual(expectedAction);
    });
  });
});
