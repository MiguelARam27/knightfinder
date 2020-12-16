import React, { useEffect } from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles } from '../actions/profileActions';

const FriendSearchScreen = () => {
  const profilesList = useSelector((state) => state.profilesList);
  const { profiles } = profilesList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles());
  }, [dispatch]);
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='search'>
      <div className='search__container'>
        <Search />
        <div className='home__container__card-container'>
          {profiles &&
            profiles.map((profile, index) => {
              return (
                <Card
                  key={index}
                  name={profile.name}
                  email={profile.email}
                  gradYear={profile.gradYear}
                  major={profile.major}
                  phone={profile.phone}
                  clubs={profile.clubs}
                  _id={profile._id}
                />
              );
            })}
        </div>
        {/* <Card
          name={'yo'}
          email={'garandster28@live.com'}
          gradYear={2012}
          major={'science'}
          phone={'407 - 288 - 6546'}
          clubs={['hello']}
        /> */}
      </div>
    </motion.div>
  );
};

export default FriendSearchScreen;
