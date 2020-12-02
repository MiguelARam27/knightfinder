import React from 'react';
import { motion } from 'framer-motion';
import {
  pageAnimation,
  titleAnimation,
  fade,
  photoAnimation,
} from './animation/Animation';
import { useScroll } from './animation/useScroll';
import Wave from './Wave';

const About = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <div className='about-section'>
        <div className='about-section__description' style={{ zIndex: '2' }}>
          <div>
            <div className='hide' style={{ overflow: 'hidden' }}>
              <motion.h2 variants={titleAnimation}>We connect</motion.h2>
            </div>
            <div className='hide' style={{ overflow: 'hidden' }}>
              <motion.h2 variants={titleAnimation}>you to your</motion.h2>
            </div>
            <div className='hide' style={{ overflow: 'hidden' }}>
              <motion.h2 variants={titleAnimation}>
                Fellow <span>knights</span>.
              </motion.h2>
            </div>
          </div>
          <motion.p variants={fade}>
            A complementary service for all UCF students{' '}
          </motion.p>
          <motion.button variants={fade}>Sign up</motion.button>
        </div>
        <div className='image' style={{ zIndex: '2' }}>
          <motion.img
            variants={photoAnimation}
            src='../img/Major.jpg'
            alt='Students discussing info'
          />
        </div>
        <Wave />
      </div>

      <motion.div
        variants={fade}
        initial='hidden'
        className='services'
        ref={element}
        animate={controls}
      >
        <div className='description'>
          <h2>
            Be a <span>Knight</span> for life
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
      </motion.div>
    </motion.div>
  );
};

export default About;
