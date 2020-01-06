import React from 'react';
import { Link } from 'react-router-dom';
import {getPic} from '../../Utilities';



const Card = ({ category, name }) => {
  return (
    <Link to={`/${category}/${name}`}>
      <div className='tc ma4 dib grow container btn_card'>
        <img className='card_img' alt='character' src={getPic(name)}></img>
        <h2 className='card_title'>{name}</h2>
      </div>
    </Link>
  );
};

export default Card;
