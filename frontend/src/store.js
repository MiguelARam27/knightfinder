import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  userLoginReducer,
  userDetailsReducer,
  userUpdateReducer,
  userRegisterReducer,
} from './reducers/userReducers';
import {
  profilesListReducer,
  profileAddFriendReducer,
  profileGetFriendsReducer,
} from './reducers/profileReducers';

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userDetails: userDetailsReducer,
  updateUserProfile: userUpdateReducer,
  profilesList: profilesListReducer,
  addFriend: profileAddFriendReducer,
  userFriends: profileGetFriendsReducer,
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
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
