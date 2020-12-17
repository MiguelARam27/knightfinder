import React from 'react';

const Message = ({ variant, children }) => {
  return (
    <>
      <div className={`message ${variant}`}>
        <h2>{children}</h2>
      </div>
    </>
  );
};

export default Message;
