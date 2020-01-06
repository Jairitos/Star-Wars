import React from 'react';
import {getPic} from '../../Utilities';

const CardDetails = ({name, height, mass, hair_color, skin_color,  eye_color, birth_year, gender}) => {
  return (
    <div className='br5 ma3 dib container'>
      <div className='details_container'>
        <div className='details_container_img'>
          <img className='cardDetails_img' alt='film' src={getPic(name)}></img>
        </div>
        <div className='details_container_text pl5 pr5'>
          <h2>{name}</h2>
          <div className='details_text'>
            <p>
              <span className='property_title'>Height</span>: {height}{' '}
            </p>
            <p>
              <span className='property_title'>Mass</span>: {mass}{' '}
            </p>
            <p>
              <span className='property_title'>Hair color</span>: {hair_color}{' '}
            </p>
            <p>
              <span className='property_title'>Skin Color</span>: {skin_color}{' '}
            </p>
            <p>
              <span className='property_title'>Eye Color</span>: {eye_color}{' '}
            </p>
            <p>
              <span className='property_title'>Birthyear</span>: {birth_year}{' '}
            </p>
            <p>
              <span className='property_title'>Gender</span>: {gender}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default CardDetails;