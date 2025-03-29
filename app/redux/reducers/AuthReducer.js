import * as actions from '../Types';

const initialState = {
  userLoginResponse: null,
  isUserLogin: false,
  storeEventId: [],
  favoriteEventIds: [],
};

export const AuthReducer = (state = initialState, action) => {
  const {type, payload} = action;

  console.log('dsbbadsgsd', payload);

  switch (type) {
    case actions.USER_LOGIN:
      return {
        ...state,
        userLoginResponse: payload.userLoginResponse,
        isUserLogin: payload.isUserLogin,
        ...payload,
      };
    case actions.SET_USER_LOGGED_IN:
      return {
        ...state,
        ...payload,
      };
    case actions.STORED_LIST_IDS:
      return {
        ...state,
        ...payload,
      };
    case actions.SET_USER_LOGGED_OUT:
      return {
        ...state,
        ...payload,
      };
    case actions.FAVORITE_EVENT:
      return {
        ...state,
        favoriteEventIds: [...(state.favoriteEventIds || []), payload.eventId],
      };
    case actions.REMOVE_FAVORITE_EVENT:
      return {
        ...state,
        favoriteEventIds: state.favoriteEventIds.filter(
          id => id !== payload.eventId,
        ),
      };
    default:
      return state;
  }
};
