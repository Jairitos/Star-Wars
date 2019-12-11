import React from 'react';
import {images} from './img';

const getPic = (name) => {
    for (let i = 0; i < images.length; i++) {
      if (images[i].name === name) {
        return images[i].url;
      }
    }
  };

const CardPlanDetails = ({name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }) => {
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
              <span className='property_title'>rotation period</span>:{' '}
              {rotation_period}{' '}
            </p>
            <p>
              <span className='property_title'>orbital period</span>:{' '}
              {orbital_period}{' '}
            </p>
            <p>
              <span className='property_title'>Diameter</span>: {diameter}{' '}
            </p>
            <p>
              <span className='property_title'>Climate</span>: {climate}{' '}
            </p>
            <p>
              <span className='property_title'>Gravity</span>: {gravity}{' '}
            </p>
            <p>
              <span className='property_title'>Terrain</span>: {terrain}{' '}
            </p>
            <p>
              <span className='property_title'>Surface Water</span>:{' '}
              {surface_water}{' '}
            </p>
            <p>
              <span className='property_title'>Population</span>: {population}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
    )
}

export default CardPlanDetails;