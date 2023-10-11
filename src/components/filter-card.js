import React from "react";
import Dropdown from "./dropdown";
import Card from "./card";

const FilterCard = () => {
  const services = [
    {
      title: "Service 01",
      image: "/assets/banner2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
    },
    {
      title: "Service 02",
      image: "/assets/banner2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
    },
    {
      title: "Service 03",
      image: "/assets/banner2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
    },
    {
      title: "Service 04",
      image: "/assets/banner2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
    },
    {
      title: "Service 05",
      image: "/assets/banner2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
    },
    {
      title: "Service 06",
      image: "/assets/banner2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
    },
  ];

  return (
    <div className="bg-[#fff] py-8">
      <div className="flex justify-end w-[71%] mx-auto max-w-screen-xl">
        <Dropdown />
      </div>
      <div className="w-3/4 max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 p-6 mx-auto">
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

export default FilterCard;
