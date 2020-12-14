import React from 'react';

const Card = ({ name, gradYear, major, phone, clubs, email }) => {
  return (
    <div className='search__container__card contact-card'>
      <div className='contact-card__header-image'>
        <div className='contact-card__avatar'></div>
      </div>
      <h1 className='contact-card__name'>{name}</h1>
      <ul>
        <li className='contact-card__class'>
          class of <b>{gradYear}</b>
        </li>
        <li className='contact-card__major'>Major : {major}</li>
        <li className='contact-card__link contact-card__link'>
          <a title='Email Callum Brown' href='mailto:'>
            <i className='fa fa-envelope'></i> {email}
          </a>
        </li>
        <li className='contact-card__link contact-card__link'>
          <a title='Call Callum Brown' href='tel:'>
            <i className='fa fa-phone'></i> +1 {phone}
          </a>
        </li>
      </ul>
      <div className='contact-card__clubs'>
        <h1>Clubs</h1>
        <div className='contact-card__clubs__container'>
          {clubs.map((club, index) => {
            return (
              <span
                className='contact-card__clubs__container__club-name'
                key={index}
              >
                {club}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
