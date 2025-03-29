import {store} from '../../redux';

export const getCredentials = async () => {
  try {
    // console.log("🚀 ~ getCredentials ~ store.getState().authReducer.userLoginResponse:", store.getState().authReducer.userLoginResponse)
    const credentials =
      (await store.getState().authReducer.userLoginResponse) ?? null;

    // console.log("🚀 ~ getCredentials ~ store:", store)
    const checkTokenIsVerify = await credentials;

    if (credentials != null && checkTokenIsVerify != null) {
      const NewCredentials = await store.getState().authReducer
        .userLoginResponse;

      return NewCredentials;
    } else {
      return null;
    }
  } catch (e) {
    // ** error for getting credentials
    return null;
    // console.log('error', e);
  }
};
