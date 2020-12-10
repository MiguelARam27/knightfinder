import React, { useState } from 'react';

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true);

  setTimeout(() => {
    setShow(false);
  }, 3000);
  return (
    <>
      {show && (
        <div className={`message ${variant}`}>
          <h2>{children}</h2>
        </div>
      )}
    </>
  );
};

export default Message;
