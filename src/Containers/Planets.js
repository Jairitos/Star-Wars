import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';
import Pagination from '../Components/Pagination/Pagination';

const Planets = ({planets, searchChange, itemsPerPage, totalItems, paginate}) => {
    return (
        <div> 
            <h2 className="title_categor">Planets</h2>
            <SearchBox searchChange={searchChange} />
            <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={totalItems}
            paginate={paginate}
            />
            <Cardlist category='Planets' item={planets} />
        </div>
    )
    
}

export default Planets;