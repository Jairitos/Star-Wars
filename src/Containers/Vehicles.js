import React from 'react';
import Cardlist from '../Components/Cardlist/Cardlist';
import SearchBox from '../Components/Searchbox/SearchBox';
import Pagination from '../Components/Pagination/Pagination';

const Vehicles = ({
  vehicles,
  searchChange,
  itemsPerPage,
  totalItems,
  paginate
}) => {
  return (
    <div>
      <h2 className='title_categor'>Vehicles</h2>
      <SearchBox searchChange={searchChange} />
      <Pagination
        itemsPerPage={itemsPerPage}
        paginate={paginate}
        totalItems={totalItems}
      />
      <Cardlist category='Vehicles' item={vehicles} />
    </div>
  );
};

export default Vehicles;
