import React from 'react';
import PropTypes from 'prop-types';
import excerpt from 'excerpt-html';
import { Link } from 'react-router-dom';
import formatCurrency from 'format-currency';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const excerptText = text =>
  excerpt(text, { pruneLength: 30 });

const ProductItem = ({product}) =>
  <div className='mt-3'>
    <Link to={`/product/${product.id}`}>
      <Card>
        <CardImg width='100%' src={`http://localhost:1337/images/${product.image}`} />
        <CardBody>
          <CardTitle>{product.name}</CardTitle>
          <CardText>{excerptText(product.description)}</CardText>
          <CardSubtitle>R$ {formatCurrency(product.price)}</CardSubtitle>
        </CardBody>
      </Card>
    </Link>
  </div>;

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default ProductItem;
