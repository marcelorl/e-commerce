import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'format-currency';
import { CardImg } from 'reactstrap';

const PreviewItem = ({product}) =>
  <tr>
    <td width='20%'>
      <CardImg className='img-fluid' width='100%' src={`http://localhost:1337/images/${product.image}`} />
    </td>
    <td>{product.name}</td>
    <td>{product.quantity}</td>
    <td>R$ {formatCurrency(product.price)}</td>
  </tr>;

PreviewItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default PreviewItem;
