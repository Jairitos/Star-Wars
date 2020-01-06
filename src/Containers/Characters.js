import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';
import Pagination from '../Components/Pagination/Pagination';

const Characters = ({searchChange, characters, paginate, itemsPerPage, totalItems }) => {
    return (
        <div> 
        <h2 className="title_categor">Characters</h2>
        <SearchBox searchChange={searchChange} />
        <Pagination 
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
        paginate={paginate}
        />
        <Cardlist category='Characters' item = {characters} />           
    </div>
    );
   
}

       


export default Characters;