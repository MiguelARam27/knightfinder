import React from 'react';
import { Link } from 'react-router-dom';
const HomeNav = () => {
  return (
    <div className='link-wrapper'>
      <Link to='/profile'>
        {' '}
        <button className='link-wrapper__button'>MY PROFILE</button>
      </Link>

      <button className='link-wrapper__button'>MY PROFILE</button>
      <button className='link-wrapper__button'>MY PROFILE</button>
    </div>
  );
};

export default HomeNav;
