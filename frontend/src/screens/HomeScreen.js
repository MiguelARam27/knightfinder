import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const HomeScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { profileInfo } = userDetails;

  useEffect(() => {
    if ((userInfo && profileInfo) === null || undefined) {
      history.push('/login');
    }
  }, [userInfo, profileInfo, history]);

  return (
    <>
      <motion.div initial='hidden' animate='show' exit='exit' className='home'>
        <div className='home__container'>
          <div className='home__container__card contact-card'>
            <div className='contact-card__header-image'>
              <div className='contact-card__avatar'></div>
            </div>
            <h1 className='contact-card__name'>{profileInfo.name}</h1>
            <ul>
              <li className='contact-card__class'>
                class of <b>{profileInfo.gradYear}</b>
              </li>
              <li className='contact-card__major'>
                Major : {profileInfo.major}
              </li>
              <li className='contact-card__link contact-card__link'>
                <a title='Email Callum Brown' href='mailto:'>
                  <i className='fa fa-envelope'></i> {profileInfo.email}
                </a>
              </li>
              <li className='contact-card__link contact-card__link'>
                <a title='Call Callum Brown' href='tel:'>
                  <i className='fa fa-phone'></i> +1 {profileInfo.phone}
                </a>
              </li>
            </ul>
            <div className='contact-card__clubs'>
              <h1>Clubs</h1>
              <div className='contact-card__clubs__container'>
                {profileInfo.clubs.map((club, index) => (
                  <span
                    className='contact-card__clubs__container__club-name'
                    key={index}
                  >
                    {club.clubName}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeScreen;
