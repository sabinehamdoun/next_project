import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="rounded-md p-6 text-center bg-white shadow-md w-80">
      {image && <img src={image} alt={title} className="w-full h-32 mb-3"/> }
      <h4 className="text-[#1c2123] text-xl my-2">{title}</h4>
      <p className="text-sm text-[#555]">
        {description}
      </p>
    </div>
  );
};

export default Card;
