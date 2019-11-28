import React from 'react';
import { images } from './img';

const getPic = (name) => {
    for(let i = 0; i < images.length; i++) {
        if(images[i].name === name) {
            return images[i].url
        }
        
    }
}


const Card = ({name}) => {
    return (
        <div className="tc ma3 dib grow shadow-5 container btn_card">
            <img alt='character' src={getPic(name)}></img>
            <h2 className='card_title'>{name}</h2>
        </div>
      
    );
}


export default Card;


