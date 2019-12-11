import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';

const Starships = ({starships, searchChange}) => {
    return (
        <div> 
            <h2 className="title_categor">Starships</h2>
            <SearchBox searchChange={searchChange} />
            <Cardlist item = {starships} />
        </div>
    )
    
}

export default Starships;