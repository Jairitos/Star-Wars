import React from 'react';
import CardDetails from '../Card/CardDetails';
import { useParams } from 'react-router-dom';

const CardlistCharacDetails = ({ characters }) => {
  let { name } = useParams();
  return (
    <div>
      {characters.map((character, i) => {
        if (character.name === name) {
          return (
            <CardDetails
              key={i}
              name={characters[i].name}
              height={characters[i].height}
              mass={characters[i].mass}
              hair_color={characters[i].hair_color}
              skin_color={characters[i].skin_color}
              eye_color={characters[i].eye_color}
              birth_year={characters[i].birth_year}
              gender={characters[i].gender}
            />
          );
        }
      })}
    </div>
  );
};

export default CardlistCharacDetails;
