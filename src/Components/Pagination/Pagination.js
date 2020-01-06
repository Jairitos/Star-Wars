import React from 'react';
import './Pagination.css';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="tc">
      <ul className='pagination'>
        {pageNumbers.map((number) => {
          return (
            <li onClick={() => paginate(number)} key={number} className='page-item'>
              <a href='#!'
                className='page-link'
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
