import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';

const Vehicles = ({vehicles, searchChange}) => {
    return (
        <div> 
            <h2 className="title_categor">Vehicles</h2>
            <SearchBox searchChange={searchChange} />
            <Cardlist item = {vehicles} />
        </div>
    )
    
}

export default Vehicles;