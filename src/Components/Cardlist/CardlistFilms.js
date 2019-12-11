import React from 'react';
import CardFilm from '../Card/CardFilm';

const CardlistFilms = ({films}) => {
    return (
        <div>
            {
            films.map ((user, i) => {
                return(
                    <CardFilm
                    key={i}
                    id={i}
                    title = {films[i].title}
                    episode = {films[i].episode_id}
                    director = {films[i].director}
                    producer = {films[i].producer}
                    release = {films[i].release_date}
                    />
                );
             
        })
            }
        </div>
    );
}

export default CardlistFilms;