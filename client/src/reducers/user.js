import { USER_LOGIN, USER_LOGOUT } from '../actions/user';

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return Object.assign({}, state, action);
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export default userReducer;
