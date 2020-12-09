import React from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userActions';
const HomeNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <Link
        to='/home'
        className={`nav__item-container__link u-margin-right-small ${
          pathname === '/home' && 'nav__item-container__link__active'
        }`}
      >
        Home
      </Link>
      <Link
        to='/profile'
        className={`nav__item-container__link u-margin-right-small ${
          pathname === '/profile' && 'nav__item-container__link__active'
        }`}
      >
        Profile
      </Link>
      <Link
        to='/find'
        className={`nav__item-container__link u-margin-right-small ${
          pathname === '/find' && 'nav__item-container__link__active'
        }`}
      >
        Find Friends
      </Link>
      <a
        href='/'
        className='nav__item-container__link u-margin-right-small '
        onClick={logoutHandler}
      >
        Logout
      </a>
    </>
  );
};

export default HomeNav;
