import React from 'react'
import './Card.css'

const Card = ({ title,description,link}) => {
    const handleclick =() =>{
        window.location.href='https://www.w3schools.com/html/';
    };
  return (
    <div className='card' onClick={handleclick}>
        <h2>{Card.value}</h2>
        <p>{description}</p>
        <p>click to move another website</p>
        
    </div>
  );
};

export default Card