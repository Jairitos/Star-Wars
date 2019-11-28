import React from 'react';

const getCategory = (name) => {
   let catName = '';

    switch (name) {
        case 'characters':
            return catName = 'characters'
        case 'films':
            return catName = 'films'
        case 'species':
            return catName = 'species'
        case 'planets':
            return catName = 'planets'
        case 'starships':
            return catName ='starships'
        case 'vehicles':
            return catName = 'vehicles'
        default: return catName = ''
    }
    return catName
}

const getCategoryImg = (name) => {
    let imgName = '';
    switch (name) {
        case 'characters':
            return imgName = 'https://starwars-visualguide.com/assets/img/categories/character.jpg'
        case 'films':
            return imgName = 'https://starwars-visualguide.com/assets/img/categories/films.jpg'
        case 'species':
            return imgName = 'https://starwars-visualguide.com/assets/img/categories/species.jpg'
        case 'planets':
            return imgName = 'https://starwars-visualguide.com/assets/img/categories/planets.jpg'
        case 'starships':
            return imgName = 'https://starwars-visualguide.com/assets/img/categories/starships.jpg'
        case 'vehicles':
            return imgName = 'https://starwars-visualguide.com/assets/img/categories/vehicles.jpg'
        default: return imgName = ''
    }
    return imgName
}

const CardCategory = ({name, onRouteChange}) => {
    return (
        <button onClick={() => onRouteChange(getCategory(name)) } className= "ma3 dib grow btn_card_cat category_container">
            <div className="flexbox">
                <img className='dib bg_category' src={getCategoryImg(name)}></img>
                 <div className="hover">   
                    <h2 className="card_category_title">{name}</h2>
                </div>
            </div>
        </button>
    )
   
}

export default CardCategory;