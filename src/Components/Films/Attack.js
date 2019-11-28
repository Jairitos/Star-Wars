import React from 'react';
import CardlistDetails from '../Cardlist/CardlistDetails';

const Attack = ({films, onRouteChange}, title) => {
    title = 'Attack of the Clones';
    return (
        <div>
            <p className="btn_back" onClick={() => onRouteChange('films')}>Back to Films</p>
             <h1 className="h_big">Attack of the Clones</h1>
            <CardlistDetails title= {title} films={films}/>    
        </div>
    )
}

export default Attack;