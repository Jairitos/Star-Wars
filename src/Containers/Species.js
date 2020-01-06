import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';
import Pagination from '../Components/Pagination/Pagination';

const Species = ({species, searchChange, itemsPerPage, totalItems, paginate}) => {
    return (
        <div> 
            <h2 className="title_categor">Species</h2>
            <SearchBox searchChange={searchChange} />
            <Pagination 
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            paginate={paginate}
            />
            <Cardlist category='Species' item = {species} />
        </div>
    )
    
}

export default Species;