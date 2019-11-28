import React from 'react';
import CardlistDetails from '../Cardlist/CardlistDetails';

const Empire = ({films, onRouteChange}, title) => {
    title = 'The Empire Strikes Back';
    return (
        <div>
            <p className="btn_back" onClick={() => onRouteChange('films')}>Back to Films</p>
            <h1 className="h_big">The Empire Strikes Back</h1>
            <CardlistDetails title= {title} films={films}/>    
        </div>
    )
}

export default Empire;