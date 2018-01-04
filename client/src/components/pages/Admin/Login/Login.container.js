import React from 'react';
import { withRouter } from 'react-router-dom';

import LoginTemplate from '../../../templates/Admin/Login';

const Login = props => <LoginTemplate {...props} />;

export default withRouter(Login);
