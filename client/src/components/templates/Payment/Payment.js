import React from 'react';
import formatCurrency from 'format-currency';
import MaskedInput from 'react-text-mask';
import get from 'lodash.get';
import {
  Button,
  Container,
  Card,
  CardBody,
  CardTitle,
  Form,
  Input
} from 'reactstrap';

import Shipping from '../../organisms/Shipping';

const sum = (num1, num2) =>
  parseFloat(num1) + parseFloat(num2);

const renderCreditCard = ({ onChange, paymentMethod, holderName, number, expirationDate, cvv }) => {
  if (paymentMethod === 'credit_card') {
    return (
      <Card className='w-50 mr-2'>
        <CardBody>
          <CardTitle>Dados do Cartão de Crédito</CardTitle>
          <Input className='mb-2' required placeholder='nome no cartão' onChange={onChange} type='text' name='holderName' value={holderName} />
          <Input className='mb-2' required placeholder='número' onChange={onChange} type='text' name='number' value={number} />
          <MaskedInput
            name='expirationDate'
            mask={[/[0-9]/, /[0-9]/, '/', /[0-9]/, /[0-9]/]}
            className='mb-2 form-control'
            placeholder='mm/yy'
            required
            onChange={onChange}
            value={expirationDate} />
          <Input className='mb-2' required placeholder='cvv' maxLength={3} onChange={onChange} type='text' name='cvv' value={cvv} />
        </CardBody>
      </Card>
    );
  }
};

const Payment = (props) => {
  const {
    cart,
    shipping,
    holderName,
    number,
    cvv,
    expirationDate,
    cep,
    addressNumber,
    paymentMethod,
    onChange,
    onCepSearch,
    onPayment
  } = props;

  const { address } = shipping;

  const shippingValue = parseFloat(get(shipping, 'price.Valor', 0));

  return (
    <Container>
      <Form onSubmit={onPayment}>
        <h1 className='display-4'>Pagamento</h1>
        <div className='d-flex mt-2 mb-2'>
          <Card className='w-50 mr-2'>
            <CardBody>
              <CardTitle>Dados de Entrega</CardTitle>

              <div className='mb-2'>
                <Shipping cep={cep} onChange={onChange} onSubmit={onCepSearch} />
              </div>

              <div className='d-flex'>
                <Input className='mb-2 mr-2' disabled value={address.localidade} />
                <Input className='mb-2 w-25' disabled value={address.uf} />
              </div>
              <div className='d-flex'>
                <Input className='mb-2 mr-2' disabled value={address.logradouro} />
                <Input
                  className='mb-2 w-25'
                  type='number'
                  name='addressNumber'
                  placeholder='número'
                  onChange={onChange}
                  required
                  value={addressNumber} />
              </div>
              <Input className='mb-2' disabled value={address.bairro} />
            </CardBody>
          </Card>

          <Card className='w-50'>
            <CardBody>
              <CardTitle>Método de pagamento</CardTitle>
              <Input type='select' name='paymentMethod' onChange={onChange} value={paymentMethod}>
                <option value='boleto'>Boleto</option>
                <option value='credit_card'>Cartão de Credito</option>
              </Input>
            </CardBody>
          </Card>
        </div>

        <div className='d-flex mt-2 mb-2'>
          {renderCreditCard({ onChange, paymentMethod, holderName, number, expirationDate, cvv })}

          <Card className='w-100'>
            <CardBody>
              <CardTitle>Resumo da Compra</CardTitle>
              <div>Total em compras: R$ {formatCurrency(cart.total)}</div>
              <div>Frete: R$ {formatCurrency(shippingValue)}</div>
              <div>Total: R$ {sum(cart.total, shippingValue)}</div>

              <Button className='mt-2' color='primary'>Pagar</Button>
            </CardBody>
          </Card>
        </div>
      </Form>
    </Container>
  );
};

export default Payment;
