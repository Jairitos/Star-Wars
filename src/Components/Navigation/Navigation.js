import React from 'react';

const Navigation = ({onRouteChange}) => {
    return (
        <nav className="main_nav">
                <li 
                onClick={() => onRouteChange('home')} 
                className='btn_back pa3 pointer'>Home</li>
                <li 
                onClick={() => onRouteChange('films')}
                className='btn_back pa3 pointer'>Films</li>
                <li
                onClick={() => onRouteChange('characters')}
                className='btn_back pa3 pointer'>Characters</li>
                <li 
                onClick={() => onRouteChange('species')}
                className='btn_back pa3 pointer'>Species</li>
                <li 
                onClick={() => onRouteChange('planets')}
                className='btn_back pa3 pointer'>Planets</li>
                <li 
                onClick={() => onRouteChange('starships')}
                className='btn_back pa3 pointer'>Starships</li>
                <li 
                onClick={() => onRouteChange('vehicles')}
                className='btn_back pa3 pointer'>Vehicles</li>
        </nav>
    )
}
 
export default Navigation;