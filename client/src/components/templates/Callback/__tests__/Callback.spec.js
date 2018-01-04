import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../Callback.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

describe('#Callback template', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  }));
