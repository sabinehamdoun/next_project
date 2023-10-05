import React from "react";
import Card from "./card";

const Services = () => {

  const services = [
    {
      title: 'Service 01',
      image: '/assets/banner2.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!"
    },
    {
      title: 'Service 02',
      image: '/assets/banner2.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!"
    },
    {
      title: 'Service 03',
      image: '/assets/banner2.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!"
    },
  ]
  
  return (
    <div className="text" id="text">
      <h2>Check Out Our Services</h2>
      <div className="card-grid"> 
        {services.map((service, index) => (
          <Card 
          key={index}
          title={service.title}
          image={service.image} 
          description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
