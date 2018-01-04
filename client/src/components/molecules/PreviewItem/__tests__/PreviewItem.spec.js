import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../PreviewItem.fixture';

const {mount, getWrapper} = createTestContext({fixture});

beforeEach(mount);

describe('#PreviewItem', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  })
);
