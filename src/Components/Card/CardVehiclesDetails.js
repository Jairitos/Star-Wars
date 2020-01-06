import React from 'react';
import { getPic } from '../../Utilities/index';

const CardVehiclesDetails = ({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosfering_speed,
  crew,
  passengers,
  cargo_capacity,
  consumables,
  hyperdrive_rating,
  mglt,
  vehicle_class
}) => {
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
              <span className='property_title'>model</span>: {model}{' '}
            </p>
            <p>
              <span className='property_title'>manufacturer</span>:{' '}
              {manufacturer}{' '}
            </p>
            <p>
              <span className='property_title'>cost in credits</span>:{' '}
              {cost_in_credits}{' '}
            </p>
            <p>
              <span className='property_title'>length</span>: {length}{' '}
            </p>
            <p>
              <span className='property_title'>Max Atmosfering Speed</span>:{' '}
              {max_atmosfering_speed}{' '}
            </p>
            <p>
              <span className='property_title'>Crew</span>: {crew}{' '}
            </p>
            <p>
              <span className='property_title'>Passengers</span>: {passengers}{' '}
            </p>
            <p>
              <span className='property_title'>Cargo Capacity</span>:{' '}
              {cargo_capacity}{' '}
            </p>
            <p>
              <span className='property_title'>Consumables</span>: {consumables}{' '}
            </p>
            <p>
              <span className='property_title'>Hyperdrive Rating</span>:{' '}
              {hyperdrive_rating}{' '}
            </p>
            <p>
              <span className='property_title'>MGLT</span>: {mglt}{' '}
            </p>
            <p>
              <span className='property_title'>Class</span>: {vehicle_class}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVehiclesDetails;
