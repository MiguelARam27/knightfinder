import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateReducer,
  userRegisterReducer,
  userForgotPasswordReducer,
} from './reducers/userReducers';
import {
  profilesListReducer,
  profileAddFriendReducer,
  profileGetFriendsReducer,
  profileRemoveFriendReducer,
} from './reducers/profileReducers';

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  updateUserProfile: userUpdateReducer,
  profilesList: profilesListReducer,
  addFriend: profileAddFriendReducer,
  removeFriend: profileRemoveFriendReducer,
  userFriends: profileGetFriendsReducer,
  forgotPassword: userForgotPasswordReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const userDetailsFromStorage = localStorage.getItem('userDetails')
  ? JSON.parse(localStorage.getItem('userDetails'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  userDetails: { profileInfo: userDetailsFromStorage },
};
// const middleware = [thunk];

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [require('redux-immutable-state-invariant').default(), thunk]
    : [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
