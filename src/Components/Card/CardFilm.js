import React from 'react';
import {Link} from 'react-router-dom';
import {getPic} from '../../Utilities';




const CardFilm = ({title}) => {
    return (
        <Link to={`/Films/${title}`}>
            <button className="ma3 grow mw10 dib shadow-5 container btn_card">
                <img alt='film' src={getPic(title)}></img>
                <h2 className='card_title'>{title}</h2>
            </button>
        </Link>
      
    );
}

export default CardFilm;