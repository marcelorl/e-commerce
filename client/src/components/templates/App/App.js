import React from 'react';
import { Container } from 'reactstrap';

import Header from '../../organisms/Header';

import './App.css';

const App = props =>
  <Container>
    <Header
      auth={props.auth}
      onLogout={props.logout}
      user={props.user}
      cartQuantity={props.cart.products.length} />
    {props.children}
  </Container>;

export default App;
