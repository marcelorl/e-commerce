import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../Home.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

describe('#Home template', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  }));
