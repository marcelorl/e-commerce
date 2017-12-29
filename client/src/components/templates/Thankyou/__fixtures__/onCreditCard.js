import Thankyou from '../Thankyou';

export default {
  component: Thankyou,
  url: '/thankyou',
  props: {
    checkout: {
      status: {
        payment_method: 'credit_card'
      }
    }
  }
};
