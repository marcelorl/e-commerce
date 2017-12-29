import DropdownUser from './DropdownUser';

export default {
  component: DropdownUser,
  props: {
    name: 'Name',
    logout: () => console.log('Hello')
  }
};
