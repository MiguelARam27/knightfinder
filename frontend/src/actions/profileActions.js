import {
  PROFILE_LIST_REQUEST,
  PROFILE_LIST_FAIL,
  PROFILE_LIST_SUCCESS,
  PROFILE_ADD_FRIEND_REQUEST,
  PROFILE_ADD_FRIEND_SUCCESS,
  PROFILE_ADD_FRIEND_FAIL,
  PROFILE_GET_FRIENDS_SUCCESS,
  PROFILE_GET_FRIENDS_REQUEST,
  PROFILE_GET_FRIENDS_FAIL,
  PROFILE_REMOVE_FRIEND_REQUEST,
  PROFILE_REMOVE_FRIEND_SUCCESS,
  PROFILE_REMOVE_FRIEND_FAIL,
} from '../constants/profileConstants';
import axios from 'axios';

export const getProfiles = (keyword = '1') => async (dispatch, getState) => {
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

    const { data } = await axios.get(
      `/api/profile/profiles?keyword=${keyword}`,
      config
    );
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
export const removeFriend = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_REMOVE_FRIEND_REQUEST,
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

    const { data } = await axios.delete(`/api/profile/friends/${id}`, config);
    dispatch({
      type: PROFILE_REMOVE_FRIEND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_REMOVE_FRIEND_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFriends = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PROFILE_GET_FRIENDS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/profile/friends`, config);
    dispatch({
      type: PROFILE_GET_FRIENDS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_GET_FRIENDS_FAIL,
      payload: error.response && error.response.data.message,
    });
  }
};
