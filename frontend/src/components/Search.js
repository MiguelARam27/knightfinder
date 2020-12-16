import React, { useState } from 'react';

const Search = ({ history }) => {
  const [input, setInput] = useState('');

  const submitHandler = (e) => {
    let code = e.keyCode || e.which;
    if (code === 13) {
      if (input.trim()) {
        history.push(`/search/${input}`);
      } else {
        history.push('/search');
      }
    }
  };

  return (
    <div className='searchBar-container'>
      <i className='fas fa-search'></i>
      <input
        type='text'
        className='searchInput'
        placeholder={'search by name'}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        onKeyPress={submitHandler}
      />
    </div>
  );
};

export default Search;
