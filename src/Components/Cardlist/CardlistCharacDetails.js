import React from 'react';
import CardDetails from '../Card/CardDetails';
import { useParams } from 'react-router-dom';

const CardlistCharacDetails = ({ characters }) => {
  let { name } = useParams();
  return (
    <div>
      {characters.map((charac, i) => {
        let character;
        if (charac.name === name) {
          character =
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
          return character
        }
        return character
      })}
    </div>
  );
};

export default CardlistCharacDetails;
