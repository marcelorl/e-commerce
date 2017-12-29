import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import { makeMainRoutes } from './routes';
import store from './reducers';

const routes = makeMainRoutes();

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
