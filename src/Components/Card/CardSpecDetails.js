import React from 'react';
import { getPic } from '../../Utilities';

const CardSpecDetails = ({
  name,
  classification,
  designation,
  average_height,
  hair_colors,
  skin_colors,
  eye_colors,
  average_lifespan,
  language
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
              <span className='property_title'>classification</span>:{' '}
              {classification}{' '}
            </p>
            <p>
              <span className='property_title'>Average Height</span>:{' '}
              {average_height}{' '}
            </p>
            <p>
              <span className='property_title'>designation</span>: {designation}{' '}
            </p>
            <p>
              <span className='property_title'>Hair colors</span>: {hair_colors}{' '}
            </p>
            <p>
              <span className='property_title'>Skin Colors</span>: {skin_colors}{' '}
            </p>
            <p>
              <span className='property_title'>Eye Colors</span>: {eye_colors}{' '}
            </p>
            <p>
              <span className='property_title'>Average Lifespan</span>:{' '}
              {average_lifespan}{' '}
            </p>
            <p>
              <span className='property_title'>Language</span>: {language}{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSpecDetails;
