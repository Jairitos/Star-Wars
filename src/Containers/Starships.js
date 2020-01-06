import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';
import Pagination from '../Components/Pagination/Pagination'

const Starships = ({starships, searchChange, itemsPerPage, totalItems, paginate}) => {
    return (
        <div> 
            <h2 className="title_categor">Starships</h2>
            <SearchBox searchChange={searchChange} />
            <Pagination 
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            paginate={paginate}
            />
            <Cardlist 
            category='Starships' 
            item = {starships} />
        </div>
    )
    
}

export default Starships;