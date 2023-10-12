import React, { useState } from "react";
import Dropdown from "./dropdown";
import Card from "./card";

const FilterCard = () => {
  const [selectedOption, setSelectedOption] = useState("All");

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
      title: "Service 05",
      image: "/assets/banner2.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore!",
    },
  ];

  const duplicateTitle = [];

  services.forEach((service) => {
    if (!duplicateTitle.includes(service.title)) {
      duplicateTitle.push(service.title);
    }
  });

  const filterCards = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
 
  const filteredCards = (selectedOption === "All")
  ? [...services]
  : services.filter((service) => service.title === selectedOption);


  const options = ["All", ...duplicateTitle];
  
  return (
    <div className="bg-[#fff] py-10 px-8 md:px-36">
      <div className="mx-auto max-w-screen-xl">
        <div className="flex justify-center md:justify-end mx-auto mb-5">
        <Dropdown options={options} selectedOption={selectedOption} onSelect={filterCards} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 mx-auto">
          {filteredCards.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterCard;
