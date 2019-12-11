import React from 'react';
import Card from '../Card/Card';


const Cardlist = ({category, item}) => {
    return (
        <div>
            {
            item.map ((user, i) => {
                return(
                    <Card
                    key={i}
                    name = {item[i].name}
                    category = {category}
                    />
                );
             
        })
            }
        </div>
    );
}

export default Cardlist;

