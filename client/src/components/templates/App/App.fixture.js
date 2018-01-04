import React from 'react';
import App from './App';

export default {
  component: App,
  url: '/',
  children: (
    <div>Fixture ain't afraid of JSX</div>
  ),
  props: {
    auth: {
      isAuthenticated: () => true
    },
    logout: () => console.log('logout'),
    user: {
      given_name: 'test'
    },
    cart: {
      products: [{}, {}, {}]
    }
  }
};
