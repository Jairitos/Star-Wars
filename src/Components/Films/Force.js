import React from 'react';
import CardlistDetails from '../Cardlist/CardlistDetails';

const Force = ({films, onRouteChange}, title) => {
    title = 'The Force Awakens';
    return (
        <div>
            <p className="btn_back" onClick={() => onRouteChange('films')}>Back to Films</p>
            <h1 className="h_big">The Force Awakens</h1>
            <CardlistDetails title= {title} films={films}/>    
        </div>
    )
}

export default Force;