import React from 'react';
import CardSpecDetails from '../Card/CardSpecDetails';
import { useParams } from 'react-router-dom';

const CardlistSpecDetails = ({ species }) => {
  let { name } = useParams();
  return (
    <div>
      {species.map((specie, i) => {
        if(species[i].name === name) {
          return (
            <CardSpecDetails
              key={i}
              name={species[i].name}
              classification={species[i].classification}
              designation={species[i].designation}
              average_height={species[i].average_height}
              hair_colors={species[i].hair_colors}
              skin_colors={species[i].skin_colors}
              eye_colors={species[i].eye_colors}
              average_lifespan={species[i].average_lifespan}
              language={species[i].language}
            />
          );
        }
      })}
    </div>
  );
};

export default CardlistSpecDetails;
