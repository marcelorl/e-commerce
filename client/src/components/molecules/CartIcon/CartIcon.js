import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

import cartSvg from './cart.svg';

const CartContainer = glamorous.div({
  color: 'black',
  fontSize: '0.5rem',
  height: '1.5rem',
  position: 'relative',
  width: '1.5rem'
});

const CartImage = glamorous.img({
  width: '100%',
  height: '100%'
});

const CartQuantity = glamorous.div({
  position: 'absolute',
  top: '0.6rem',
  background: 'red',
  height: '14px',
  width: '14px',
  lineHeight: '15px',
  textAlign: 'center',
  right: 0
});

const CartIcon = ({ className, quantity }) =>
  <Link to='/checkout'>
    <CartContainer className={className}>
      <CartImage src={cartSvg} />
      <CartQuantity className='rounded-circle'>{quantity}</CartQuantity>
    </CartContainer>
  </Link>;

CartIcon.propTypes = {
  className: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default CartIcon;
