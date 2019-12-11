import React from 'react';
import CardFilmDetails from '../Card/CardFilmDetails';
import { useParams } from 'react-router-dom';

const CardlistFilmDetails = ({ films }) => {
  let { title } = useParams();
  return (
    <div>
      {films.map((user, i) => {
        if (films[i].title === title) {
          return (
            <CardFilmDetails
              key={i}
              id={i}
              title={films[i].title}
              episode={films[i].episode_id}
              director={films[i].director}
              producer={films[i].producer}
              release={films[i].release_date}
              opening={films[i].opening_crawl}
            />
          );
        }
      })}
    </div>
  );
};

export default CardlistFilmDetails;
