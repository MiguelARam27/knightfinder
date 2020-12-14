import React from 'react';
import Card from '../components/Card';
import { motion } from 'framer-motion';
import Search from '../components/Search';
const FriendSearchScreen = () => {
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='search'>
      <div className='search__container'>
        <Search />
        <Card
          name={'yo'}
          email={'garandster28@live.com'}
          gradYear={2012}
          major={'science'}
          phone={'407 - 288 - 6546'}
          clubs={['hello']}
        />
      </div>
    </motion.div>
  );
};

export default FriendSearchScreen;
