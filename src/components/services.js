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
    <div className="text-center mx-auto py-8 px-5 md:px-36 bg-[#f0f0f0]" id="text">
      <h2 className="text-2xl">Check Out Our Services</h2>
      <div className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-6 mx-auto"> 
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
