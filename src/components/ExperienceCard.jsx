import React from 'react';

function ExperieneCard(props){
    return (
        <div className="exerience-card">
            <h2>{props.title}</h2>
            <h3>{props.job_title}</h3>
            <p>{props.description}</p>
        </div>
    )
}
export default ExperieneCard;