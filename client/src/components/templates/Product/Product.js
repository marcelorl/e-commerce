import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import formatCurrency from 'format-currency';
import {
  Col,
  Container,
  Row,
  Media,
  Button,
  Form,
  FormGroup,
  Input
} from 'reactstrap';

class Product extends PureComponent {
  constructor () {
    super();

    this.state = {
      quantity: 1
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart () {
    this.props.addToCart(
      this.props.product.product,
      this.state.quantity
    );

    this.props.history.push('/checkout');
  }

  onChange (el) {
    this.setState({
      quantity: el.target.value
    });
  }

  render () {
    const { product: { loading, product } } = this.props;

    if (loading) {
      return null;
    }

    return (
      <Container>
        <Row>
          <Media>
            <Col lg='3'>
              {product.image &&
                <Media left>
                  <img alt={product.name} width='100%' src={`http://localhost:1337/images/${product.image}`} />
                </Media>
              }
            </Col>
            <Media body>
              <Media heading>
                {product.name} - <span className='text-danger'>R$ {formatCurrency(product.price)}</span>
              </Media>
              {product.description}
            </Media>
          </Media>

          <Col lg='12'>
            <Form className='mt-4 mb-4' inline>
              <FormGroup>
                <Input
                  className='mr-2'
                  type='number'
                  min={0}
                  name='quantity'
                  onChange={el => this.onChange(el)}
                  value={this.state.quantity} />
              </FormGroup>
              <Button onClick={this.addToCart}>Adicionar no carrinho</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.object
  })
};

export default Product;
