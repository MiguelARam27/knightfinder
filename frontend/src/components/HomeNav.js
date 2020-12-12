import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../actions/userActions';
import { useSelector } from 'react-redux';
const HomeNav = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { profileInfo } = userDetails;

  const noUserInfo = (userDetails, profileInfo) => {
    if (userDetails.error || profileInfo === null) {
      return <>''</>;
    } else {
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
            to='/search'
            className={`nav__item-container__link u-margin-right-small ${
              pathname === '/search' && 'nav__item-container__link__active'
            }`}
          >
            Search knights
          </Link>
        </>
      );
    }
  };
  useEffect(() => {}, [profileInfo, userDetails]);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      {noUserInfo(userDetails, profileInfo)}
      <Link
        to='/profile'
        className={`nav__item-container__link u-margin-right-small ${
          pathname === '/profile' && 'nav__item-container__link__active'
        }`}
      >
        Profile
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
