import createTestContext from 'react-cosmos-test/enzyme';

import fixture from '../ProductSave.fixture';

const { mount, getWrapper, get } = createTestContext({ fixture });

beforeEach(mount);

describe('#ProductSave template', () => {
  it('renders component', () => {
    expect(getWrapper()).toMatchSnapshot();
  });

  it('cancels the product creation and gets the user back to product listing page', () => {
    getWrapper('.btn-secondary').simulate('click');

    expect(get('props').history.push).toBeCalledWith('/admin/product');
  });

  it('saves the product creation and gets the user back to product listing page', async () => {
    const inputName = getWrapper('input#name').first();
    const inputImage = getWrapper('input#image').first();

    inputName.simulate('change', { target: { value: 'product 1' } });
    inputImage.simulate('change', { target: { files: [] } });
    inputImage.simulate('change', { target: { files: ['dummyValue.something'] } });

    await getWrapper('.btn-success').simulate('click');

    expect(get('props').saveProduct).toBeCalled();
    expect(get('props').history.push).toBeCalledWith('/admin/product');
  });
});
