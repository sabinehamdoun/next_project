import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} height="100" /> }
      <h4>{title}</h4>
      <p>
        {description}
      </p>
    </div>
  );
};

export default Card;
