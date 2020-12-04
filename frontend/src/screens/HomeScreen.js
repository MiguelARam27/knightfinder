import React from 'react';

import { motion } from 'framer-motion';
import { fade, pageAnimation } from '../components/animation/Animation';
const HomeScreen = () => {
  return (
    <>
      <motion.div initial='hidden' animate='show' exit='exit' className='home'>
        <div className='home__container'>
          <button className='home__container__button'>MY PROFILE</button>
          <div className='home__container__card contact-card'>
            <div className='contact-card__header-image'>
              <div className='contact-card__avatar'></div>
            </div>
            <h1 className='contact-card__name'>Callum Brown</h1>
            <ul>
              <li className='contact-card__class'>
                className of <b>2020</b>
              </li>
              <li className='contact-card__major'>Master's in Biology</li>
              <li className='contact-card__link contact-card__link'>
                <a title='Email Callum Brown' href='mailto:'>
                  <i className='fa fa-envelope'></i> cabrown96@live.com
                </a>
              </li>
              <li className='contact-card__link contact-card__link'>
                <a title='Call Callum Brown' href='tel:'>
                  <i className='fa fa-phone'></i> +1 123-456-7890
                </a>
              </li>
            </ul>
            <div className='contact-card__clubs'>
              <h1>Clubs</h1>
              <div className='contact-card__clubs__container'>
                <span className='contact-card__clubs__container__club-name'>
                  soccer
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  swe
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  cs club
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  soccer
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  swe
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  cs club
                </span>
              </div>
            </div>
            <div className='contact-card__clubs'>
              <h1>skills</h1>
              <div className='contact-card__clubs__container'>
                <span className='contact-card__clubs__container__club-name'>
                  soccer
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  swe
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  cs club
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  soccer
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  swe
                </span>
                <span className='contact-card__clubs__container__club-name'>
                  cs club
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeScreen;
