import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import get from 'lodash.get';

import { login, logout } from '../../../actions/user';
import AppTemplate from '../../templates/App';

class App extends Component {
  componentDidMount () {
    const { login } = this.props;

    login(JSON.parse(localStorage.getItem('profile')));
  }

  render () {
    return <AppTemplate {...this.props} />;
  }
}

const mapStateToProps = state =>
  (Object.assign({
    cart: get(state, 'cart', {}),
    user: get(state, 'user.user', {})
  }));

const mapDispatchToProps = dispatch => bindActionCreators({
  login,
  logout
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
