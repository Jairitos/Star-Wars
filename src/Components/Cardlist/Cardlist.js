import React from 'react';
import Card from '../Card/Card';


const Cardlist = ({item}) => {
    return (
        <div>
            {
            item.map ((user, i) => {
                return(
                    <Card
                    key={i}
                    name = {item[i].name}
                    />
                );
             
        })
            }
        </div>
    );
}

export default Cardlist;

