import React from 'react';
import {imagesFilms} from './img';

const getPic = (name) => {
    for(let i = 0; i < imagesFilms.length; i++) {
        if(imagesFilms[i].name === name) {
            return imagesFilms[i].url
        }
        
    }
}


const CardDetails = ({title, episode, director, producer, release, opening}) => {
    return (
              <div className="bg-yellow br3 ma3 dib container" >
                <div className ="box_big">
                    <div className="box_big_img">
                        <img className="cardDetails_img"alt='film' src={getPic(title)}></img>
                    </div>
                    <div className="box_big_item pl5 pr5">
                        <div>
                            <h2>{title}</h2>
                            <p>Episode: {episode} </p>
                            <p>Director: {director} </p>
                            <p>Producer: {producer} </p>
                            <p>Release Date: {release} </p>
                            <p>Opening Crawl: {opening} </p>
                        </div>
                       
                    </div>
                
                    
                </div>
                {/* <div>
                    <p>{title}</p>
                    <p>{episode_id}</p>
                    <p>{director}</p>
                    <p>{skin_color}</p>
                    <p>{eye_color}</p>
                    <p>{birth_year}</p>
                    <p>{gender}</p>
                </div> */}
           
           
            
        </div>
      
    );
}



export default CardDetails;