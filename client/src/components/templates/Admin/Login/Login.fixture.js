import Login from './Login';

export default {
  component: Login,
  props: {
    history: {
      push: () => console.log('')
    }
  }
};
