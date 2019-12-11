import React from 'react';
import CardPlanDetails from '../Card/CardPlanDetails';
import {useParams} from 'react-router-dom';

const CardlistPlanDetails = ({planets}) => {
    let {name} = useParams();
    return (
        <div>
            {
                planets.map((plan, i)=> {
                    if(planets[i].name === name) {
                        return (
                            <CardPlanDetails 
                            key={i}
                            name={planets[i].name}
                            rotation_period={planets[i].rotation_period}
                            orbital_period={planets[i].orbital_period}
                            diameter={planets[i].diameter}
                            climate={planets[i].climate}
                            gravity={planets[i].gravity}
                            terrain={planets[i].terrain}
                            surface_water={planets[i].surface_water}
                            population={planets[i].population}
                            />
                            )
                    }
                })
            }
        </div>
    )
}

export default CardlistPlanDetails;