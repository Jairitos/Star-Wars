import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';

const Species = ({species, searchChange}) => {
    return (
        <div> 
            <h2 className="title_categor">Species</h2>
            <SearchBox searchChange={searchChange} />
            <Cardlist category='Species' item = {species} />
        </div>
    )
    
}

export default Species;