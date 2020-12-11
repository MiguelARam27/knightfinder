import React from 'react';
import { motion } from 'framer-motion';
const FriendSearchScreen = () => {
  return (
    <motion.div initial='hidden' animate='show' exit='exit' className='home'>
      <h2>hello</h2>
    </motion.div>
  );
};

export default FriendSearchScreen;
