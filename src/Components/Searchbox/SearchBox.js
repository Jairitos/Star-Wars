import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
            <input
            className='pa3 ba yellow b--yellow bg-black'
            type='search'
            placeholder='Search... Padawan'
            onChange={searchChange}
            >
        
            </input>
        </div>
        
    )
}

export default SearchBox;