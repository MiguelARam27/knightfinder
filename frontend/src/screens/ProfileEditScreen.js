import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUserProfile, getUserDetails } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Message from '../components/Message';
import Card from '../components/Card';
import Loading from '../components/Loading';

const ProfileEditScreen = ({ history }) => {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
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
  const { success, loading } = userUpdatedInfo;

  const dispatch = useDispatch();
  const delayFunc = () => {
    setTimeout(() => {
      setMessage('');
    }, 2000);
  };

  useEffect(() => {
    console.log(userInfo);
    if (!userInfo) {
      console.log(userInfo);
      history.push('/login');
    } else {
      if (!profileInfo || !profileInfo.name) {
        dispatch(getUserDetails());
      } else if (success) {
        dispatch(getUserDetails());
        dispatch({
          type: USER_UPDATE_PROFILE_RESET,
        });
        delayFunc();
      } else {
        setName(profileInfo.name);
        setEmail(profileInfo.email);
        setPhone(profileInfo.phone);
        setMajor(profileInfo.major);
        setGradYear(profileInfo.gradYear);
      }
    }
  }, [userInfo, profileInfo, history, dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(updateUserProfile({ name, email, phone, major, gradYear }));
    setMessage('success');
  };
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='profile'>
      <div className='profile__container'>
        <h1 className='heading-primary'>Edit Profile</h1>

        <div className='profile__container_grid'>
          <form className='profile__Form' onSubmit={submitHandler}>
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className='profile__Form__input-container'>
                  <label htmlFor='email'>email</label>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
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
                  <input type='submit' className='button' value={'submit'} />
                </div>
              </>
            )}
          </form>

          <div className='profile__card-display'>
            <h2 className='profile-header'>Preview</h2>

            {loading ? (
              <Loading></Loading>
            ) : profileInfo && profileInfo ? (
              <Card
                name={profileInfo.name}
                email={profileInfo.email}
                gradYear={profileInfo.gradYear}
                major={profileInfo.major}
                phone={profileInfo.phone}
                clubs={profileInfo.clubs}
                _id={profileInfo._id}
              />
            ) : (
              <Card />
            )}
          </div>
        </div>

        {message !== '' && <Message>{message}</Message>}
      </div>
    </motion.div>
  );
};

export default ProfileEditScreen;
