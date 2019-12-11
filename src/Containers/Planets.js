import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';

const Planets = ({planets, searchChange}) => {
    return (
        <div> 
            <h2 className="title_categor">Planets</h2>
            <SearchBox searchChange={searchChange} />
            <Cardlist category='Planets' item = {planets} />
        </div>
    )
    
}

export default Planets;