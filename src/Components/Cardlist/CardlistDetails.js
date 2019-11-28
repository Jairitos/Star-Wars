import React from 'react';
import CardDetails from '../Card/CardDetails';

const CardlistDetails = ({films, title}) => {
    return (
        <div>
            {
            films.map ((user, i) => {
                if(films[i].title === title) {
                    return(
                        <CardDetails 
                        key={i}
                        title = {films[i].title}
                        episode = {films[i].episode_id}
                        director = {films[i].director}
                        producer = {films[i].producer}
                        release = {films[i].release_date}
                        opening = {films[i].opening_crawl}
                        />
                    );
                }
               
             
        })
            }
        </div>
    );
}

export default CardlistDetails;