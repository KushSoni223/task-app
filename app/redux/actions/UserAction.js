// // import {
// //     _generateOtp,
// //     _verifyOtp,
// //   } from '../../services';
import * as actions from '../Types';
// //   import Toast from 'react-native-toast-message';

import {_eventsList, _login} from '../../services';

// // user login
export const login = (body, isUserLogin) => {
  return dispatch => {
    return _login(body)
      .then(response => {
        //   body.isRegistered != false &&
        // Toast.show({
        //   type: 'success',
        //   text1: response.data.otp,
        // });
        console.log('skknafanf', response);
        dispatch({
          type: actions.USER_LOGIN,
          payload: {
            userLoginResponse: response.data,
            isUserLogin: isUserLogin?.isUserLogin,
          },
        });
        return response;
      })
      .catch(error => {
        // Toast.show({
        //   type: 'error',
        //   text1: error.message,
        // });
        throw error;
      });
  };
};
// // Event Listing
export const eventList = () => {
  return () => {
    return _eventsList()
      .then(response => {
        //   body.isRegistered != false &&
        // Toast.show({
        //   type: 'success',
        //   text1: response.data.otp,
        // });

        return response;
      })
      .catch(error => {
        // Toast.show({
        //   type: 'error',
        //   text1: error.message,
        // });
        throw error;
      });
  };
};

export const favoriteEvent = eventId => {
  return dispatch => {
    dispatch({
      type: actions.FAVORITE_EVENT,
      payload: {
        eventId: eventId,
      },
    });
  };
};
export const removeFavoriteEvent = eventId => {
  return dispatch => {
    dispatch({
      type: actions.REMOVE_FAVORITE_EVENT,
      payload: {
        eventId: eventId,
      },
    });
  };
};
export const logout = () => {
  return dispatch => {
    dispatch({
      type: actions.USER_LOGOUT,
    });
  };
};
