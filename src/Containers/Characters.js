import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';


const Characters = ({characters, searchChange}) => {
    return (
        <div> 
            <h2 className="title_categor">Characters</h2>
            <SearchBox searchChange={searchChange} />
            <Cardlist category='Characters' item = {characters} />           
        </div>
    )
    
}

export default Characters;