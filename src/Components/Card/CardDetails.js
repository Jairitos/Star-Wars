import React from 'react';
import { images } from './img';

const getPic = (name) => {
  for (let i = 0; i < images.length; i++) {
    if (images[i].name === name) {
      return images[i].url;
    }
  }
};

const CardDetails = ({name, height, mass, hair_color, skin_color,  eye_color, birth_year, gender}) => {
  return (
    <div className='br3 ma3 dib container'>
      <div className='box_big'>
        <div className='box_big_img'>
          <img className='cardDetails_img' alt='film' src={getPic(name)}></img>
        </div>
        <div className='box_big_items pl5 pr5'>
          <div className='box_big_item'>
            <h2>{name}</h2>
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