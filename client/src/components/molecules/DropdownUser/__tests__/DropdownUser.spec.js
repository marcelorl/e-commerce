import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../DropdownUser.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

describe('#DropdownUser', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  }));
