import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, fade } from './animation/Animation';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Loading from './Loading';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    dispatch(login(email, password));
  };
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
          <form className='form' onSubmit={submitHandler}>
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className='heading'>
                  <h1 className='heading-primary--main'>login</h1>
                </div>
                <div className='form__container'>
                  <input
                    type='email'
                    className='form__input'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type='password'
                    className='form__input'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button>Login</button>
                </div>
              </>
            )}
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
