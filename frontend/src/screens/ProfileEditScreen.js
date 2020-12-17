import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { updateUserProfile, getUserDetails } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';
import Message from '../components/Message';
import Card from '../components/Card';
import Loading from '../components/Loading';

const ProfileEditScreen = ({ history }) => {
  //profile states
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [phone, setPhone] = useState('phone number');
  const [major, setMajor] = useState('major');
  const [gradYear, setGradYear] = useState('Graduation Year');
  const [groups, setClubs] = useState([
    {
      clubName: 'Enter club',
    },
  ]);

  //function to make new clubs
  const addClub = (e) => {
    e.preventDefault();

    const value = {
      clubName: 'Enter club',
    };
    setClubs([...groups, value]);
  };

  //function to take off last club on list
  const removeClub = (e) => {
    e.preventDefault();
    const values = [...groups];
    values.pop();
    setClubs(values);
  };

  //handle change of club values
  const handleClubChange = (e, index) => {
    e.preventDefault();
    const values = [...groups];
    values[index].clubName = e.target.value;
    setClubs([...values]);
  };

  //message for success or error
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  const clearMessage = () => {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };
  //user state
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //user profile info state
  const userDetails = useSelector((state) => state.userDetails);
  const { profileInfo } = userDetails;

  //user update state
  const userUpdatedInfo = useSelector((state) => state.updateUserProfile);
  const { success, loading } = userUpdatedInfo;

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!profileInfo || !profileInfo.name) {
        dispatch(getUserDetails());
      } else if (success) {
        dispatch(getUserDetails());
        dispatch({
          type: USER_UPDATE_PROFILE_RESET,
        });
        setShow(true);
        clearMessage();
      } else {
        setName(profileInfo.name);
        setEmail(profileInfo.email);
        setPhone(profileInfo.phone);
        setMajor(profileInfo.major);
        setGradYear(profileInfo.gradYear);
        const copy = JSON.parse(JSON.stringify(profileInfo.clubs));
        setClubs(copy);
      }
    }
  }, [userInfo, profileInfo, history, dispatch, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({ name, email, phone, major, gradYear }, groups)
    );
    setMessage('success');
  };
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='profile'>
      <div className='profile__container'>
        <h1 className='heading-primary'>Edit Profile</h1>

        <div className='profile__container_grid'>
          <form className='profile__Form' onSubmit={submitHandler}>
            {loading ? (
              <Loading />
            ) : (
              <>
                <div className='profile__Form__input-container'>
                  <label htmlFor='email'>email</label>
                  <input
                    type='email'
                    name='email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className='profile__Form__input-container'>
                  <label htmlFor='name'>name</label>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className='profile__Form__input-container'>
                  <label htmlFor='phone'>phone</label>
                  <input
                    type='text'
                    name='phone'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>

                <div className='profile__Form__input-container'>
                  <label htmlFor='major'>major</label>
                  <input
                    type='text'
                    name='major'
                    value={major}
                    onChange={(e) => {
                      setMajor(e.target.value);
                    }}
                  />
                </div>
                <div className='profile__Form__input-container'>
                  <label htmlFor='gradYear'>gradYear</label>
                  <input
                    type='text'
                    name='gradYear'
                    value={gradYear}
                    onChange={(e) => {
                      setGradYear(e.target.value);
                    }}
                  />
                </div>
                <button onClick={addClub} className='addButton'>
                  Add Club
                </button>
                {groups &&
                  groups.map((club, index) => {
                    return (
                      <div
                        className='profile__Form__input-container'
                        key={index}
                      >
                        <label htmlFor='gradYear'>Club</label>
                        <input
                          type='text'
                          name='club'
                          value={club.clubName}
                          onChange={(event) => handleClubChange(event, index)}
                        />
                      </div>
                    );
                  })}
                {groups.length === 0 ? (
                  <></>
                ) : (
                  <button onClick={removeClub} className='removeButton'>
                    Remove Last Club
                  </button>
                )}
                <div className='profile__Form__submit'>
                  <input type='submit' className='button' value={'submit'} />
                </div>
              </>
            )}
          </form>

          <div className='profile__card-display'>
            <h2 className='profile-header'>Preview</h2>

            {loading ? (
              <Loading></Loading>
            ) : profileInfo && profileInfo ? (
              <Card
                name={profileInfo.name}
                email={profileInfo.email}
                gradYear={profileInfo.gradYear}
                major={profileInfo.major}
                phone={profileInfo.phone}
                clubs={profileInfo.clubs}
                _id={profileInfo._id}
              />
            ) : (
              <Card />
            )}
          </div>
        </div>

        {message !== '' && show && (
          <Message variant={'success'}>{message}</Message>
        )}
      </div>
    </motion.div>
  );
};

export default ProfileEditScreen;
