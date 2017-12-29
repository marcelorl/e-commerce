import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveProduct } from '../../../../actions/product';
import ProductSaveTemplate from '../../../templates/Admin/ProductSave';

class ProductSave extends Component {
  render () {
    return <ProductSaveTemplate {...this.props} />;
  }
}

ProductSave.propTypes = {
  saveProduct: PropTypes.func
};

const mapDispatchToProps = dispatch => bindActionCreators({
  saveProduct
}, dispatch);

export default connect(() => ({}), mapDispatchToProps)(ProductSave);
