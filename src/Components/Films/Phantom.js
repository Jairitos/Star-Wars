import React from 'react';
import CardlistDetails from '../Cardlist/CardlistDetails';

const Phantom = ({films, onRouteChange}, title) => {
    title = 'The Phantom Menace';
    return (
        <div>
            <p className="btn_back" onClick={() => onRouteChange('films')}>Back to Films</p>
            <h1 className="h_big">Phantom Menace</h1>
            <CardlistDetails title= {title} films={films}/>    
        </div>
    )
}

export default Phantom;