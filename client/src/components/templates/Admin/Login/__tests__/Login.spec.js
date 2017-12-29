import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../Login.fixture';

const {mount, getWrapper, get} = createTestContext({fixture});

beforeEach(mount);

describe('#Login template', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('logs the user in and send it to product listing page', () => {
    getWrapper('.btn-success').simulate('click');

    expect(get('props').history.push).toBeCalledWith('/admin/product');
  });
});
