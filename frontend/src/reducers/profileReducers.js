import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_FAIL,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_RESET,
  PROFILE_ADD_FRIEND_REQUEST,
  PROFILE_ADD_FRIEND_FAIL,
  PROFILE_ADD_FRIEND_RESET,
  PROFILE_ADD_FRIEND_SUCCESS,
} from '../constants/profileConstants';

export const profilesListReducer = (state = { profiles: [] }, action) => {
  switch (action.type) {
    case PROFILE_LIST_REQUEST:
      return { loading: true };
    case PROFILE_LIST_SUCCESS:
      return { loading: false, profiles: action.payload };
    case PROFILE_LIST_FAIL:
      return { loading: false, error: action.payload };
    case PROFILE_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const profileAddFriendReducer = (state = {}, action) => {
  switch (action.type) {
    case PROFILE_ADD_FRIEND_REQUEST:
      return { loading: true };
    case PROFILE_ADD_FRIEND_SUCCESS:
      return { loading: false, success: true };
    case PROFILE_ADD_FRIEND_FAIL:
      return { loading: false, success: false, error: action.payload };
    case PROFILE_ADD_FRIEND_RESET:
      return {};
    default:
      return state;
  }
};
