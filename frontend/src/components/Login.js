import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, fade } from './animation/Animation';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';
import Loading from './Loading';
import Message from './Message';

const Login = ({ history, location }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [show, setShow] = useState(false);

  const clearMessage = () => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  };

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (userInfo) {
      history.push('/home');
    }
    if (error) {
      setShow(true);
      clearMessage();
    }
  }, [userInfo, history, error]);
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
      className='example'
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
                <form className='form__container'>
                  <input
                    type='email'
                    className='form__input'
                    placeholder='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'
                  />
                  <input
                    type='password'
                    className='form__input'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'
                  />
                  <button type='button' onClick={submitHandler}>
                    Login
                  </button>
                  {show && error && <Message variant='danger'>{error}</Message>}
                </form>
              </>
            )}
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;
