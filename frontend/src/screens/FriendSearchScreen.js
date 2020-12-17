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
  console.log(keyword);
  //profileList returned
  const profilesList = useSelector((state) => state.profilesList);
  const { profiles, loading } = profilesList;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfiles(keyword));
  }, [dispatch]);
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
                />
              );
            })
          )}
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
