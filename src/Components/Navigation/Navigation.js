import React from 'react';
import { Link } from 'react-router-dom';



const Navigation = ({ clearSearch}) => {
  
  return (
    <nav className='main_nav'>
      <ul className='main_nav_links'>
        <Link to='/'>
          <li className='btn_back pointer' 
          onClick={clearSearch}>
            Home
          </li>
        </Link>
        <Link to='/Films'>
          <li className='btn_back pointer' onClick={clearSearch}>
            Films
          </li>
        </Link>
        <Link to='/Characters'>
          <li className='btn_back pointer' onClick={clearSearch}>
            Characters
          </li>
        </Link>
        <Link to='/Species'>
          <li className='btn_back pointer' onClick={clearSearch}>
            Species
          </li>
        </Link>
        <Link to='/Planets'>
          <li className='btn_back pointer' onClick={clearSearch}>
            Planets
          </li>
        </Link>
        <Link to='/Starships'>
          <li className='btn_back pointer' onClick={clearSearch}>
            Starships
          </li>
        </Link>
        <Link to='/Vehicles'>
          <li className='btn_back pointer' onClick={clearSearch}>
            Vehicles
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
