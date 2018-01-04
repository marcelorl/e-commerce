import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../ProductList.fixture';

const { mount, getWrapper, get } = createTestContext({ fixture });

beforeEach(mount);

describe('#ProductList template', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('redirects user to product creation page', () => {
    getWrapper('.btn-primary').simulate('click');

    expect(get('props').history.push).toBeCalledWith('/admin/product/save');
  });
});
