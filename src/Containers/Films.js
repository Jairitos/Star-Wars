import React from 'react';
import CardlistFilms from '../Components/Cardlist/CardlistFilms';


const Films = ({films}) => {
    return (
        <div>
            <h2 className="title_categor">Films</h2>
            <CardlistFilms films= {films} />
           
        </div>
    )
    
}

export default Films;