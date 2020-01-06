import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa1'>
      <input
        className='pa2 ba yellow b--yellow bg-black'
        type='search'
        placeholder='Search'
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default SearchBox;
