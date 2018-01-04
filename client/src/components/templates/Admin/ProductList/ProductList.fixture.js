import ProductList from './ProductList';
import { product } from '../../../../fakers';

export default {
  component: ProductList,
  props: {
    history: {
      push: () => console.log('')
    },
    product: {
      list: [product, product, product, product]
    }
  }
};
