import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
const SignUp = () => {
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
        <form className='form'>
          <div className='heading'>
            <h1 className='heading-primary--main'>Register</h1>
          </div>
          <div className='form__container'>
            <input type='email' className='form__input' placeholder='email' />
            <input
              type='password'
              name='passowrd'
              className='form__input'
              placeholder='password'
            />
            <input
              type='password'
              name='password2'
              className='form__input'
              placeholder='confirm password'
            />
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default SignUp;
