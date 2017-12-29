import React, { Component } from 'react';
import glamorous from 'glamorous';
import { Navbar, NavbarBrand } from 'reactstrap';

import Cart from '../../molecules/CartIcon';
import DropdownUser from '../../molecules/DropdownUser';

const LoginButton = glamorous.div({
  cursor: 'pointer'
});

class Header extends Component {
  constructor (props) {
    super(props);

    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount () {
    if (!this.props.auth.isAuthenticated()) {
      this.onLogout();
    }
  }

  onLogout () {
    this.props.auth.logout();
    this.props.onLogout();
  }

  renderLoginButton () {
    const { auth } = this.props;

    if (!auth.isAuthenticated()) {
      return (
        <LoginButton onClick={auth.login}>
          Login
        </LoginButton>
      );
    }
  }

  renderUserDropDown () {
    if (this.props.auth.isAuthenticated()) {
      return (
        <DropdownUser logout={this.onLogout} name={this.props.user.given_name} />
      );
    }
  }

  render () {
    return (
      <Navbar>
        <NavbarBrand href='/'>
          Totvs E-commerce
        </NavbarBrand>
        <div className='d-inline-flex align-items-center'>
          <Cart className='mr-4' quantity={this.props.cartQuantity} />
          {this.renderLoginButton()}
          {this.renderUserDropDown()}
        </div>
      </Navbar>
    );
  }
}

export default Header;
