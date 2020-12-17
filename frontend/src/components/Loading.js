import React from 'react';
import spinner from '../img/spinner.gif';
const loading = () => {
  return (
    <>
      <img className='loading' src={spinner} alt='Loading...' />
    </>
  );
};

export default loading;
