import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import get from 'lodash.get';

class Thankyou extends PureComponent {
  renderLinkToBoleto () {
    const status = get(this, 'props.checkout.status', {});
    const { boleto_url: boletoUrl, payment_method: paymentMethod } = status;

    if (paymentMethod === 'boleto') {
      return (
        <div>
          <a className='mb-4' href={boletoUrl}>Clique aqui para pagar seu boleto</a>
        </div>
      );
    }
  }

  render () {
    return (
      <Container>
        <div className='mb-4'>Obrigado por comprar em nossa loja.</div>

        {this.renderLinkToBoleto()}

        <Link to='/'>Página Principal</Link>
      </Container>
    );
  }
}

export default Thankyou;
