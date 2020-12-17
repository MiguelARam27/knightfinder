import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from './animation/Animation';
import Message from './Message';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { useEffect } from 'react';
import Loading from '../components/Loading';
import { USER_LOGIN_SUCCESS } from '../constants/userConstants';
const SignUp = ({ history }) => {
  const [email, setEmail] = useState('email');
  const [password, setPassword] = useState('password');
  const [confirmPassword, setConfirmPassword] = useState('confirmPassword');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, success, userInfo: profileRegister } = userRegister;

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match!');
      setTimeout(() => {
        setMessage(null);
      }, 1000);
    } else {
      setMessage('success');
      setTimeout(() => {
        setMessage(null);
      }, 1000);
      dispatch(register(email, password));
    }
  };

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        history.push('/profile');
      }, 1000);
    }
  }, [success, history]);
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div
        className='signup'
        style={{ backgroundImage: "url('./img/knight.jpg')" }}
      >
        <form className='form' onSubmit={submitHandler}>
          {loading ? (
            <Loading />
          ) : (
            <>
              <div className='heading'>
                <h1 className='heading-primary--main'>Register</h1>
              </div>

              <input
                type='email'
                className='form__input'
                placeholder='email'
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type='password'
                name='passowrd'
                className='form__input'
                placeholder='password'
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <input
                type='password'
                name='password2'
                className='form__input'
                placeholder='confirm password'
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              <input
                type='submit'
                className='form__submit'
                placeholder='confirm password'
              />
            </>
          )}
          {/* 
          {message && <Message>{message}</Message>}
          {error && <Message variant='danger'>{error}</Message>} */}
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
