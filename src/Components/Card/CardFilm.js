import React from 'react';
import { imagesFilms } from './img';


const getPicFilms = (name) => {
    for(let i = 0; i < imagesFilms.length; i++) {
        if(imagesFilms[i].name === name) {
            return imagesFilms[i].url
        }
        
    }
}


const CardFilm = ({title, onRouteChange}) => {
    return (
        <button onClick={() => onRouteChange(title)} className="ma3 mw10 dib shadow-5 container btn_card">
            <img alt='film' src={getPicFilms(title)}></img>
            <h2 className='card_title'>{title}</h2>
        </button>
      
    );
}

export default CardFilm;