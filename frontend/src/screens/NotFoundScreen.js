import React from 'react';
import { Link } from 'react-router-dom';
import { pageAnimation, fade } from '../components/animation/Animation';
import { motion } from 'framer-motion';
const NotFoundScreen = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='fade'
      className='example'
      className='not-found'
    >
      <section>
        <h1 className='heading-primary'>Not found</h1>
        <Link to='/'> Back Home</Link>
      </section>
    </motion.div>
  );
};

export default NotFoundScreen;
