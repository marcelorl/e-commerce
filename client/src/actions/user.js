export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const requestLogin = user =>
  ({
    type: USER_LOGIN,
    user
  });

export const requestLogout = () =>
  ({
    type: USER_LOGOUT
  });

export const login = user =>
  dispatch => {
    dispatch(requestLogin(user));
  };

export const logout = () =>
  dispatch => {
    dispatch(requestLogout());
  };
