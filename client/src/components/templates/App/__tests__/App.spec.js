import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../App.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

describe('#App template', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  }));
