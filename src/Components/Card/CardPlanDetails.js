import React from 'react';
import {getPic} from '../../Utilities';

const CardPlanDetails = ({name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population }) => {
    return (
        <div className='br5 ma3 dib container'>
      <div className='details_container'>
        <div className='details_container_img'>
          <img className='cardDetails_img' alt='film' src={getPic(name)}></img>
        </div>
        <div className='details_container_text pl5 pr5'>
          <div className='details_text'>
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