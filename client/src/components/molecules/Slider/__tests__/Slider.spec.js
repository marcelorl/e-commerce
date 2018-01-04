import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../Slider.fixture';

const { mount, getWrapper } = createTestContext({ fixture });

beforeEach(mount);

describe('#Slider', () =>
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  }));
