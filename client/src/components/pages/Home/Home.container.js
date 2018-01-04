import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import { fetchProducts } from '../../../actions/products';
import Home from '../../templates/Home';

class HomeContainer extends Component {
  async componentDidMount () {
    const { fetchProducts } = this.props;

    await fetchProducts();
  }

  render () {
    return <Home {...this.props} />;
  }
}

HomeContainer.propTypes = {
  fetchProducts: PropTypes.func,
  products: PropTypes.array
};

const mapStateToProps = state =>
  (Object.assign({
    product: get(state, 'products', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
