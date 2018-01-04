import Home from './Home';
import { product } from '../../../fakers';

export default {
  component: Home,
  url: '/',
  props: {
    product: {
      list: [
        product,
        product,
        product,
        product,
        product
      ]
    }
  }
};
