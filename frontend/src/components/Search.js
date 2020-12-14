import React, { useState } from 'react';

const Search = () => {
  const [input, setInput] = useState('Search for knights');

  return (
    <div className='searchBar-container'>
      <i className='fas fa-search'></i>
      <input
        type='text'
        className='searchInput'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
