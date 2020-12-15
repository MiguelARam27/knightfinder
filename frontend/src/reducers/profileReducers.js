import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_FAIL,
  PROFILE_LIST_SUCCESS,
  PROFILE_LIST_RESET,
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
