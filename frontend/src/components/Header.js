import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header className='nav'>
        <div className='nav__logo'>
          <img className='nav__logo__img' src='./img/try.png' alt='logo'></img>
          <span className='nav__logo__title'>Knightfinder</span>
        </div>
        <input type='checkbox' className='nav__link-toggle' id='nav-toggle' />
        <nav class='nav__item-container'>
          <Link
            to='/about'
            class='nav__item-container__link u-margin-right-small'
          >
            About
          </Link>
          <Link
            to='/signup'
            class='nav__item-container__link u-margin-right-small'
          >
            Sign-up
          </Link>
          <Link to='/' class='nav__item-container__link u-margin-right-small'>
            Sign in
          </Link>
        </nav>
        <label for='nav-toggle' className='nav__toggle-label'>
          <span></span>
        </label>
      </header>
    </>
  );
};

export default Header;
