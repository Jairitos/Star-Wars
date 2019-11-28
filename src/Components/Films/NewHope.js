import React from 'react';
import CardlistDetails from '../Cardlist/CardlistDetails';

const NewHope = ({films, onRouteChange}, title) => {
    title = 'A New Hope';
    return (
        <div>
            <p className="btn_back" onClick={() => onRouteChange('films')}>Back to Films</p>
            <h1 className="h_big">A New Hope</h1>
            <CardlistDetails title= {title} films={films}/>    
        </div>
    )
}

export default NewHope;