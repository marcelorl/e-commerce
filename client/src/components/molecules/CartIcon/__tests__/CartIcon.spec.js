import createTestContext from 'react-cosmos-test/enzyme';
import toJson from 'enzyme-to-json';

import fixture from '../CartIcon.fixture';

const { mount, getWrapper } = createTestContext({fixture});

beforeEach(mount);

describe('#CartIcon', () => {
  it('renders component', () =>
    expect(toJson(getWrapper())).toMatchSnapshot()
  );
});
