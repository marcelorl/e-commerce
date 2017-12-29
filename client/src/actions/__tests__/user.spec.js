import configureMockStore from '../../services/ConfigureMockStore/configureMockStore';
import { userFaker } from '../../fakers';
import {
  requestLogin,
  requestLogout,
  login,
  logout,

  USER_LOGIN,
  USER_LOGOUT
} from '../user';

describe('#user', () => {
  describe('#actions', () => {
    const user = { name: 'user' };

    it('should create an action to login user', () => {
      const expectedAction = {
        type: USER_LOGIN,
        user
      };

      expect(requestLogin(user)).toEqual(expectedAction);
    });

    it('should create an action to logout user', () => {
      const expectedAction = {
        type: USER_LOGOUT
      };

      expect(requestLogout()).toEqual(expectedAction);
    });
  });

  describe('#requests', () => {
    let store;
    const user = userFaker.build();

    beforeEach(() => {
      store = configureMockStore({});
    });

    describe('#addToCart', () => {
      const expectedActions = [
        { type: USER_LOGIN, user }
      ];

      it('should user login success', async () => {
        await store.dispatch(login(user));

        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    describe('#cleanCart', () => {
      const expectedActions = [
        { type: USER_LOGOUT }
      ];

      it('should user logout success', async () => {
        await store.dispatch(logout());

        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
