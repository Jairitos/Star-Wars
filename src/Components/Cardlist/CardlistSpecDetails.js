import React from 'react';
import CardSpecDetails from '../Card/CardSpecDetails';
import { useParams } from 'react-router-dom';

const CardlistSpecDetails = ({ species }) => {
  let { name } = useParams();
  return (
    <div>
      {species.map((spec, i) => {
        let specie;
        if(species[i].name === name) {
          specie = 
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
          return specie
        }
        return specie
      })}
    </div>
  );
};

export default CardlistSpecDetails;
