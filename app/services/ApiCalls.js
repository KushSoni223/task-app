import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../redux';
import * as actions from '../redux/Types';
import HttpCalls from './HttpCalls';
import {headersData} from './Services';
import {getCredentials} from '../utils/credentials';

// INFO: all APIs added here

// const getToken = () => {
//   return store.getState().authReducer.userLoginResponse.token;
// };

const getToken = async () => {
  try {
    let res = await getCredentials();
    if (res) {
      return res?.token;
    } else {
      await AsyncStorage.removeItem('isLoginIndex');
      await store.dispatch({
        type: actions.USER_LOGOUT,
      });
      await store.dispatch({
        type: actions.USER_LOGIN,
        payload: {
          userLoginResponse: null,
        },
      });
      return null;
    }
  } catch (e) {
    console.log('token error', e);
  }
};

// user login
export const _login = async body => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    type: 'multipart/form-data',
  });
  return _api_calls('POST', '/login', headers, body);
};
// Events List
export const _eventsList = async () => {
  let {_api_calls} = HttpCalls;

  let headers = await headersData({
    token: await getToken(),
  });
  return _api_calls('POST', '/events-listing', headers);
};
