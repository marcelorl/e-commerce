import Thankyou from '../Thankyou';

export default {
  component: Thankyou,
  url: '/thankyou',
  props: {
    checkout: {
      status: {
        boleto_url: 'http://test.com',
        payment_method: 'boleto'
      }
    }
  }
};
