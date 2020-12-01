import React from 'react';

const Login = () => {
  return (
    <div
      className='login'
      style={{ backgroundImage: "url('./img/student.jpg')" }}
    >
      <div className='login__container'>
        <form className='form'>
          <div className='heading'>
            <h1 className='heading-primary--main'>login</h1>
          </div>
          <div className='form__container'>
            <input type='email' className='form__input' placeholder='email' />
            <input
              type='password'
              className='form__input'
              placeholder='password'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
