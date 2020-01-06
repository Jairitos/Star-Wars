import React from 'react';
import { Link } from 'react-router-dom';


const getCategoryImg = (name, imgName='') => {
  switch (name) {
    case 'Characters':
      return (imgName =
        'https://starwars-visualguide.com/assets/img/categories/character.jpg');
    case 'Films':
      return (imgName =
        'https://starwars-visualguide.com/assets/img/categories/films.jpg');
    case 'Species':
      return (imgName =
        'https://starwars-visualguide.com/assets/img/categories/species.jpg');
    case 'Planets':
      return (imgName =
        'https://starwars-visualguide.com/assets/img/categories/planets.jpg');
    case 'Starships':
      return (imgName =
        'https://starwars-visualguide.com/assets/img/categories/starships.jpg');
    case 'Vehicles':
      return (imgName =
        'https://starwars-visualguide.com/assets/img/categories/vehicles.jpg');
    default:
      return (imgName = '');
  }
};

const CardCategory = ({ name }) => {
  const linkName = `/${name}`;
 
  return (
    <Link to={linkName}>
      <div className='ma3 dib btn_card_cat category_container'>
        <div className='flexbox'>
          <img
            className='dib bg_category'
            src={getCategoryImg(name)}
            alt='category'
          ></img>
          <div className='hover'>
            <h2 className='card_category_title'>{name}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardCategory;
