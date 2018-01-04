import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import get from 'lodash.get';

import { fetchCheckout } from '../../../actions/checkout';
import { calcShipping } from '../../../actions/shipping';
import CheckoutTemplate from '../../templates/Checkout';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.checkout,
      shipping: this.props.shipping,
      cep: ''
    };

    this.onCepSearch = this.onCepSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      cart: nextProps.checkout,
      shipping: nextProps.shipping
    });
  }

  async componentDidMount() {
    const { fetchCheckout } = this.props;

    await fetchCheckout();
  }

  onCepSearch() {
    this.props.calcShipping(this.state.cep);
  }

  onChange(el) {
    const { name, value } = el.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <CheckoutTemplate onChange={this.onChange} onCepSearch={this.onCepSearch} {...this.state} />
    );
  }
}

Checkout.propTypes = {
  calcShipping: PropTypes.func.isRequired,
  checkout: PropTypes.shape({
    list: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  fetchCheckout: PropTypes.func.isRequired,
  shipping: PropTypes.object.isRequired
};

const mapStateToProps = state =>
  Object.assign({
    checkout: get(state, 'checkout', {}),
    shipping: get(state, 'shipping', {})
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      calcShipping,
      fetchCheckout
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Checkout));
