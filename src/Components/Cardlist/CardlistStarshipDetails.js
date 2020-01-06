import React from 'react';
import CardStarshipDetails from '../Card/CardStarshipDetails';
import { useParams } from 'react-router-dom';

const CardlistStarshipsDetails = ({ starships }) => {
  let { name } = useParams();
  return (
    <div>
      {starships.map((star, i) => {
        let starship;
        if (star.name === name) {
          starship = (
            <CardStarshipDetails
              key={i}
              name={starships[i].name}
              model={starships[i].model}
              manufacturer={starships[i].manufacturer}
              cost_in_credits={starships[i].cost_in_credits}
              length={starships[i].length}
              max_atmosfering_speed={starships[i].max_atmosfering_speed}
              crew={starships[i].crew}
              passengers={starships[i].passengers}
              cargo_capacity={starships[i].cargo_capacity}
              consumables={starships[i].consumables}
              hyperdrive_rating={starships[i].hyperdrive_rating}
              mglt={starships[i].MGLT}
              starship_class={starships[i].starship_class}
            />
          );
          return starship;
        }
        return starship;
      })}
    </div>
  );
};

export default CardlistStarshipsDetails;
