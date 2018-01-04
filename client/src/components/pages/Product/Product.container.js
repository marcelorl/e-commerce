import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import { addToCart } from '../../../actions/cart';
import { fetchProduct } from '../../../actions/product';
import Product from '../../templates/Product';

class ProductContainer extends Component {
  async componentDidMount () {
    const { fetchProduct, match: { params: { id } } } = this.props;

    await fetchProduct(id);
  }

  render () {
    return <Product {...this.props} />;
  }
}

ProductContainer.propTypes = {
  addToCart: PropTypes.func,
  fetchProduct: PropTypes.func,
  product: PropTypes.object
};

const mapStateToProps = state =>
  (Object.assign({
    product: get(state, 'product', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  addToCart,
  fetchProduct
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
