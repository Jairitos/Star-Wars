import React from 'react';
import { imagesFilms } from './img';
import {Link} from 'react-router-dom';


const getPicFilms = (name) => {
    for (let pic of imagesFilms) {
        if(pic.name === name) {
            return pic.url
        }
    }
}


const CardFilm = ({title}) => {
    return (
        <Link to={`/Films/${title}`}>
            <button className="ma3 grow mw10 dib shadow-5 container btn_card">
                <img alt='film' src={getPicFilms(title)}></img>
                <h2 className='card_title'>{title}</h2>
            </button>
        </Link>
      
    );
}

export default CardFilm;