import ProductSave from './ProductSave';

export default {
  component: ProductSave,
  url: '/admin/product/save',
  props: {
    history: {
      push: () => console.log('')
    },
    saveProduct: () => Promise.resolve({})
  }
};
