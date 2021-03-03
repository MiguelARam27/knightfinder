import React, { useEffect } from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getProfiles } from '../actions/profileActions';
import { Route } from 'react-router-dom';
import Loading from '../components/Loading';

const FriendSearchScreen = ({ match }) => {
  const keyword = match.params.keyword;

  //profileList returned
  const profilesList = useSelector((state) => state.profilesList);
  const { profiles, loading } = profilesList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles(keyword));
  }, [dispatch, keyword]);
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='search'>
      <div className='search__container'>
        <Route render={({ history }) => <Search history={history} />} />
        <div className='home__container__card-container'>
          {loading === true ? (
            <Loading></Loading>
          ) : (
            profiles &&
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
                  avatar={profile.avatar}
                />
              );
            })
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FriendSearchScreen;
