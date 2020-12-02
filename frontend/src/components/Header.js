import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <>
      <header className='nav'>
        <div className='nav__logo'>
          <img className='nav__logo__img' src='./img/try.png' alt='logo'></img>
          <span className='nav__logo__title'>Knightfinder</span>
        </div>
        <input type='checkbox' className='nav__link-toggle' id='nav-toggle' />
        <nav className='nav__item-container'>
          <Link
            to='/'
            className={`nav__item-container__link u-margin-right-small ${
              pathname === '/' && 'nav__item-container__link__active'
            }`}
          >
            About
          </Link>
          <Link
            to='/signup'
            className={`nav__item-container__link u-margin-right-small ${
              pathname === '/signup' && 'nav__item-container__link__active'
            }`}
          >
            Sign-up
          </Link>
          <Link
            to='/login'
            className={`nav__item-container__link u-margin-right-small ${
              pathname === '/login' && 'nav__item-container__link__active'
            }`}
          >
            Sign in
          </Link>
        </nav>
        <label htmlFor='nav-toggle' className='nav__toggle-label'>
          <span></span>
        </label>
      </header>
    </>
  );
};

export default Header;
