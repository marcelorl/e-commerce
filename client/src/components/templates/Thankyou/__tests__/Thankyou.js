import createTestContext from 'react-cosmos-test/enzyme';

import fixtureOnBoleto from '../__fixtures__/onBoleto';
import fixtureOnCreditCard from '../__fixtures__/onCreditCard';

describe('#Thankyou template', () => {
  describe('#onBoleto', () => {
    const { mount, getWrapper } = createTestContext({ fixture: fixtureOnBoleto });

    beforeEach(mount);

    it('renders onBoleto template', () => {
      expect(getWrapper()).toMatchSnapshot();
    });
  });

  describe('#onCreditCard', () => {
    const { mount, getWrapper } = createTestContext({ fixture: fixtureOnCreditCard });

    beforeEach(mount);

    it('renders onCreditCard template', () => {
      expect(getWrapper()).toMatchSnapshot();
    });
  });
});
