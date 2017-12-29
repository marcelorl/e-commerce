import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'format-currency';
import get from 'lodash.get';
import { Link } from 'react-router-dom';
import {
  Container,
  Table
} from 'reactstrap';

import Shipping from '../../organisms/Shipping';
import PreviewItem from '../../molecules/PreviewItem';

const sum = (num1, num2) =>
  parseFloat(num1) + parseFloat(num2);

const renderPreviewList = ({ list, loading }) => {
  if (loading) return null;

  return (
    list.map((product, key) =>
      <PreviewItem key={key} product={product} />
    )
  );
};

const renderNewTotal = (total, shippingValue) => {
  const newTotal = sum(total, shippingValue);

  if (shippingValue) {
    return (
      <tr>
        <td colSpan='2' />
        <td className='text-success align-middle'>
          Frete: R$ {formatCurrency(parseFloat(shippingValue))}
        </td>
        <td className='text-danger align-middle'>R$ {formatCurrency(newTotal)}</td>
      </tr>
    );
  }
};

const Checkout = ({ onCepSearch, cart, cep, shipping, onChange }) =>
  <Container>
    <div className='d-flex justify-content-between align-items-center'>
      <h1 className='display-4'>Carrinho</h1>
      <Link to={'/payment'}>Ir para pagamento</Link>
    </div>
    <Table>
      <thead>
        <tr>
          <th />
          <th>Nome</th>
          <th>Quantidade</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {renderPreviewList(cart)}
      </tbody>
      <tfoot>
        <tr>
          <td className='align-middle' colSpan='2'>
            <Shipping cep={cep} onChange={onChange} onSubmit={onCepSearch} />
          </td>
          <td />
          <td className='text-danger align-middle'>R$ {formatCurrency(cart.total)}</td>
        </tr>
        {renderNewTotal(cart.total, get(shipping, 'price.Valor', 0))}
        <tr>
          <td colSpan='3' />
          <td className='text-right'>
            <Link to={'/payment'}>Ir para pagamento</Link>
          </td>
        </tr>
      </tfoot>
    </Table>
  </Container>;

Checkout.propTypes = {
  cart: PropTypes.shape({
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  cep: PropTypes.string.isRequired
};

export default Checkout;
