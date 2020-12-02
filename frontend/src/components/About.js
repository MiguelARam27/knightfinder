import React from 'react';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const About = () => {
  const titleAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.75,
        staggerChildren: 1,
      },
    },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 0.75,
        ease: 'easeOut',
        staggerChildren: 1,
      },
    },
  };

  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div className='about-section'>
        <div className='about-section__description'>
          <motion.div
            variants={container}
            initial='hidden'
            animate='show'
            className='title'
          >
            <div className='hide'>
              <motion.h2 variants={titleAnimation}>We connect</motion.h2>
            </div>
            <div className='hide'>
              <motion.h2 variants={titleAnimation}>you to your</motion.h2>
            </div>
            <div className='hide'>
              <motion.h2 variants={titleAnimation}>
                Fellow <span>knights</span>.
              </motion.h2>
            </div>
          </motion.div>
          <p>A complementary service for all UCF students </p>
          <button>Sign up</button>
        </div>
        <div className='image'>
          <img src='../img/Major.jpg' alt='Students discussing info' />
        </div>
      </div>

      <div className='services'>
        <div className='description'>
          <h2>
            Be a <span>Knight</span> forever
          </h2>
          <div className='cards'>
            <div className='card'>
              <div className='icon'>
                <i className='fas fa-clock'></i>

                <h3>lifelong account</h3>
              </div>
              <p>Keep your account even after graduation</p>
            </div>
            <div className='card'>
              <div className='icon'>
                <i className='fas fa-user-friends'></i>

                <h3>social circle</h3>
              </div>
              <p>Keep in contact with friends</p>
            </div>
            <div className='card'>
              <div className='icon'>
                <h3>new connections</h3>
              </div>
              <p>Make new connections </p>
            </div>
            <div className='card'>
              <div className='icon'>
                <i className='fas fa-id-card'></i>

                <h3>profile</h3>
              </div>
              <p>Build a profile around you</p>
            </div>
          </div>
        </div>
        <div className='image'>
          <img src='../img/grad.jpg' alt='graduating student' />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
