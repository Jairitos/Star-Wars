import React from 'react';
import { imagesFilms } from './img';

const getPic = (name) => {
  for (let i = 0; i < imagesFilms.length; i++) {
    if (imagesFilms[i].name === name) {
      return imagesFilms[i].url;
    }
  }
};

const CardFilmDetails = ({
  title,
  episode,
  director,
  producer,
  release,
  opening
}) => {
  return (
    <div className='br3 ma3 dib container'>
      <div className='box_big'>
        <div className='box_big_img'>
          <img className='cardDetails_img' alt='film' src={getPic(title)}></img>
        </div>
        <div className='box_big_items pl5 pr5'>
          <div className='box_big_item'>
            <h2>{title}</h2>
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
