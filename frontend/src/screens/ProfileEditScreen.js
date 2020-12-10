import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUserProfile, getUserDetails } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Message from '../components/Message';

const ProfileEditScreen = ({ history }) => {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('phone number');
  const [major, setMajor] = useState('major');
  const [gradYear, setGradYear] = useState('Graduation Year');
  //user stuff

  //message for success or error
  const [message, setMessage] = useState('');

  //user state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //user profile info state
  const userDetails = useSelector((state) => state.userDetails);
  const { profileInfo } = userDetails;

  //user update state
  const userUpdatedInfo = useSelector((state) => state.updateUserProfile);
  const { success } = userUpdatedInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    if ((userInfo && profileInfo) === null || undefined) {
      history.push('/login');
    } else {
      if (!userInfo || !userInfo.name) {
        dispatch(getUserDetails());
      } else if (success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails());
        setMessage('');
      } else {
        setName(profileInfo.name);
        setEmail(profileInfo.email);
        setPhone(profileInfo.phone);
        setMajor(profileInfo.major);
        setGradYear(profileInfo.gradYear);
      }
    }
    // } else if {
  }, [userInfo, profileInfo, history, dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('passwords do not match');
    }
    dispatch(updateUserProfile({ name, email, phone, major, gradYear }));
    setMessage('success');
  };
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='profile'>
      <div className='profile__container'>
        <h1 className='heading-primary'>Edit Profile</h1>
        <form className='profile__Form' onSubmit={submitHandler}>
          <div className='profile__Form__input-container'>
            <label htmlFor='email'>email</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(e) => {
                submitHandler(e);
              }}
            />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='name'>name</label>
            <input
              type='text'
              name='name'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='phone'>phone</label>
            <input
              type='text'
              name='phone'
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='password'>password</label>
            <input
              type='password'
              name='password'
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='confirm password'>confirm password</label>
            <input
              type='password'
              name='confirm password'
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='major'>major</label>
            <input
              type='text'
              name='major'
              value={major}
              onChange={(e) => {
                setMajor(e.target.value);
              }}
            />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='gradYear'>gradYear</label>
            <input
              type='text'
              name='gradYear'
              value={gradYear}
              onChange={(e) => {
                setGradYear(e.target.value);
              }}
            />
          </div>

          <div className='profile__Form__submit'>
            <input type='submit' className='button' />
          </div>
          {success && <Message>{message}</Message>}
        </form>
      </div>
    </motion.div>
  );
};

export default ProfileEditScreen;
