import React from 'react';
import './../styles/GuideCard.css';

const GuideCard = ({ title, description, imageUrl }) => {
  return (
        <div>
            <div className="card" >
            <img src={imageUrl} alt="Guía" className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <a href="#" className="card-button">Ver Guía</a>
            </div>
        </div>
        </div>
  );
};

export default GuideCard;