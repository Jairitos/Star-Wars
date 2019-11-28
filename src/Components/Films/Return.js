import React from 'react';
import CardlistDetails from '../Cardlist/CardlistDetails';

const Return = ({films, onRouteChange}, title) => {
    title = 'Return of the Jedi';
    return (
        <div>
            <p className="btn_back" onClick={() => onRouteChange('films')}>Back to Films</p>
            <h1 className="h_big">Return of the Jedi</h1>
            <CardlistDetails title= {title} films={films}/>    
        </div>
    )
}

export default Return;