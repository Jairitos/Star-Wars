import React from 'react';
import {getPic} from '../../Utilities';


const CardFilmDetails = ({
  title,
  episode,
  director,
  producer,
  release,
  opening
}) => {
  return (
    <div className='br5 dib container'>
      <div className='details_container'>
        <div className='details_container_img'>
          <img className='cardDetails_img' alt='film' src={getPic(title)}></img>
        </div>
        <div className='details_container_text'>
        <h2 className='details_title'>{title}</h2>
          <div className='details_text pl5 pr5'> 
            <p>
              <span className='property_title'>Episode</span>: {episode}{' '}
            </p>
            <p>
              <span className='property_title'>Directors</span>: {director}{' '}
            </p>
            <p>
              <span className='property_title'>Producers</span>: {producer}{' '}
            </p>
            <p>
              <span className='property_title'>Release Date</span>: {release}{' '}
            </p>
            <p>
              <span className='property_title'>Opening Crawl</span>: {opening}{' '}
            </p>
          </div>
        </div>
      </div>

      {/* <div className='box_film_characters'>
        <h2>Charaters</h2>
      </div> */}
    </div>
  );
}

export default CardFilmDetails;
