import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import get from 'lodash.get';

import { cleanCart } from '../../../actions/cart';
import Thankyou from '../../templates/Thankyou';

class ThankyouContainer extends Component {
  componentDidMount () {
    this.props.cleanCart();
  }

  render () {
    return <Thankyou {...this.props} />;
  }
}

const mapStateToProps = state =>
  (Object.assign({
    checkout: get(state, 'checkout', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  cleanCart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThankyouContainer);
