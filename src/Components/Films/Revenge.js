import React from 'react';
import CardlistDetails from '../Cardlist/CardlistDetails';

const Revenge = ({films, onRouteChange}, title) => {
    title = 'Revenge of the Sith';
    return (
        <div>
            <p className="btn_back" onClick={() => onRouteChange('films')}>Back to Films</p>
            <h1 className="h_big">Revenge of the Sith</h1>
            <CardlistDetails title= {title} films={films}/>    
        </div>
    )
}

export default Revenge;