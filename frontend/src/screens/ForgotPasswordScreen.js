import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../components/animation/Animation';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from '../actions/userActions';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const submithandler = (e) => {
    e.preventDefault();
    dispatch(forgotPassword(email));
  };
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      className='forgot'
      style={{ backgroundImage: "url('./img/Forgot.jpg')" }}
    >
      <form className='forgot__form' onSubmit={submithandler}>
        <h2 className='forgot__title'>Reset your password</h2>
        <div className='forgot__input-container'>
          <input
            type='email'
            className='forgot__input'
            placeholder=' Enter the Email associated with your account '
            onChange={(e) => setEmail(e.target.value)}
            name='email'
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </motion.div>
  );
};

export default ForgotPasswordScreen;
