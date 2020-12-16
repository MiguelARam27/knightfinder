import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFriend } from '../actions/profileActions';
import { useLocation } from 'react-router-dom';
const Card = ({ name, gradYear, major, phone, clubs, email, _id }) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  console.log(pathname);
  const addFriendHandler = (e) => {
    dispatch(addFriend(e.target.getAttribute('_id')));
  };

  // useEffect(() => {

  // }, [dispatch])
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
          {clubs &&
            clubs.map((club, index) => {
              return (
                <span
                  className='contact-card__clubs__container__club-name'
                  key={index}
                >
                  {club.clubName}
                </span>
              );
            })}
        </div>
      </div>
      {pathname && pathname === '/home' ? (
        <button className='add_friend' _id={_id} onClick={addFriendHandler}>
          Remove
        </button>
      ) : (
        <button className='add_friend' _id={_id} onClick={addFriendHandler}>
          Add
        </button>
      )}
    </div>
  );
};

export default Card;
