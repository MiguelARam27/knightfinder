import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, fade } from './animation/Animation';
const Login = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <motion.div
        variants={fade}
        className='login'
        style={{ backgroundImage: "url('./img/student.jpg')" }}
      >
        <div className='login__container'>
          <form className='form'>
            <div className='heading'>
              <h1 className='heading-primary--main'>login</h1>
            </div>
            <div className='form__container'>
              <input type='email' className='form__input' placeholder='email' />
              <input
                type='password'
                className='form__input'
                placeholder='password'
              />
              <button>Login</button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
