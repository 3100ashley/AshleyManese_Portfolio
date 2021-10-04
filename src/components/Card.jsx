import React from 'react';
import "animate.css";

function Card(props){
    return(
        <div className="cardInfo-container">
            <a href={props.link}>
                <img className='card pulse'  src={props.source} alt={props.alt} />
            </a>
            <div className="cardInfo">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
            
        </div>
    )
}

export default Card;