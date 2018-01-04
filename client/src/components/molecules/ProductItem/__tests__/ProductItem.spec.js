import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../ProductItem.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

describe('#ProductItem', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  }));
