import React from 'react';
import { motion } from 'framer-motion';

const ProfileEditScreen = () => {
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='profile'>
      <div className='profile__container'>
        <h1 className='heading-primary'>Edit Profile</h1>
        <form className='profile__Form'>
          <div className='profile__Form__input-container'>
            <label htmlFor='email'>email</label>
            <input type='email' name='email' placeholder='email' />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='name'>name</label>
            <input type='text' name='name' placeholder='name' />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='password'>password</label>
            <input type='password' name='password' placeholder='password' />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='confirm password'>confirm password</label>
            <input
              type='password'
              name='confirm password'
              placeholder='confirm password'
            />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='major'>major</label>
            <input type='text' name='major' placeholder='major' />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='gradYear'>gradYear</label>
            <input type='text' name='gradYear' placeholder='gradYear' />
          </div>
          <div className='profile__Form__input-container'>
            <label htmlFor='major'>major</label>
            <input type='text' name='major' placeholder='major' />
          </div>
          <div className='profile__Form__input-container'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ProfileEditScreen;
