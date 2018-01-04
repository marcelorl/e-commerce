import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import App from './components/pages/App';
import Home from './components/pages/Home';
import Callback from './components/pages/Callback';
import Product from './components/pages/Product';
import Checkout from './components/pages/Checkout';
import Payment from './components/pages/Payment';
import Thankyou from './components/pages/Thankyou';
import AdminLogin from './components/pages/Admin/Login/Login.container';
import AdminProductList from './components/pages/Admin/ProductList';
import AdminProductSave from './components/pages/Admin/ProductSave';

import Auth from './services/Auth';

const history = createHistory();
const auth = new Auth();

const handleAuthentication = nextState => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
};

const AppRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <App auth={auth}>
        <Component {...props} />
      </App>
    )}
  />
);

export const makeMainRoutes = () => (
  <ConnectedRouter history={history}>
    <div>
      <AppRoute exact path="/" component={Home} />
      <Route
        path="/callback"
        render={props => {
          handleAuthentication(props);

          return (
            <App auth={auth}>
              <Callback {...props} />
            </App>
          );
        }}
      />
      <AppRoute path="/product/:id" component={Product} />
      <AppRoute path="/checkout" component={Checkout} />
      <AppRoute path="/payment" component={Payment} />
      <AppRoute path="/thankyou" component={Thankyou} />
      <Route exact path="/admin" component={AdminLogin} />
      <Route exact path="/admin/product" component={AdminProductList} />
      <Route path="/admin/product/save" component={AdminProductSave} />
    </div>
  </ConnectedRouter>
);
