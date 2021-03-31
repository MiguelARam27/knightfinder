import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { getFriends } from '../actions/profileActions';
import Card from '../components/Card';
import Loading from '../components/Loading';
const HomeScreen = ({ history }) => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userDetails = useSelector((state) => state.userDetails);
  const { profileInfo } = userDetails;

  const userFriends = useSelector((state) => state.userFriends);
  const { friends, loading } = userFriends;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else if (userDetails.error || profileInfo === null) {
      history.push('/profile');
    } else {
      dispatch(getFriends());
    }
  }, [userInfo, profileInfo, history, userDetails, dispatch]);

  return (
    <>
      <motion.div initial='hidden' animate='show' exit='exit' className='home'>
        <div className='home__container'>
          <h1 className='home__container__title'>My Friends</h1>
          <div className='home__container__card-container'>
            {loading ? (
              <Loading></Loading>
            ) : (
              friends &&
              friends.map((profile, index) => {
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
        </div>
      </motion.div>
    </>
  );
};

export default HomeScreen;
