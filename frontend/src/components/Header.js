import React from 'react';

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
          <a href='#' class='nav__item-container__link u-margin-right-small'>
            About
          </a>
          <a href='#' class='nav__item-container__link u-margin-right-small'>
            Sign-up
          </a>
          <a href='#' class='nav__item-container__link u-margin-right-small'>
            Login
          </a>
        </nav>
        <label for='nav-toggle' className='nav__toggle-label'>
          <span></span>
        </label>
      </header>
    </>
  );
};

export default Header;
