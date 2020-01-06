import React from 'react';
import CardVehiclesDetails from '../Card/CardVehiclesDetails';
import { useParams } from 'react-router-dom';

const CardlistVehiclesDetails = ({ vehicles }) => {
  let { name } = useParams();
  return (
    <div>
      {vehicles.map((star, i) => {
        let vehicle;
        if (star.name === name) {
          vehicle = (
            <CardVehiclesDetails
              key={i}
              name={vehicles[i].name}
              model={vehicles[i].model}
              manufacturer={vehicles[i].manufacturer}
              cost_in_credits={vehicles[i].cost_in_credits}
              length={vehicles[i].length}
              max_atmosfering_speed={vehicles[i].max_atmosfering_speed}
              crew={vehicles[i].crew}
              passengers={vehicles[i].passengers}
              cargo_capacity={vehicles[i].cargo_capacity}
              consumables={vehicles[i].consumables}
              hyperdrive_rating={vehicles[i].hyperdrive_rating}
              mglt={vehicles[i].MGLT}
              starship_class={vehicles[i].starship_class}
            />
          );
          return vehicle;
        }
        return vehicle;
      })}
    </div>
  );
};

export default CardlistVehiclesDetails;
