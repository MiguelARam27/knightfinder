import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_FAIL,
  PROFILE_LIST_SUCCESS,
  PROFILE_ADD_FRIEND_REQUEST,
  PROFILE_ADD_FRIEND_SUCCESS,
  PROFILE_ADD_FRIEND_FAIL,
} from '../constants/profileConstants';
import axios from 'axios';

export const getProfiles = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_LIST_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get('/api/profile/profiles', config);
    dispatch({
      type: PROFILE_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addFriend = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_ADD_FRIEND_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/profile/friends/${id}`, {}, config);
    dispatch({
      type: PROFILE_ADD_FRIEND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ADD_FRIEND_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
