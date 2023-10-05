import Banner from "@component/components/banner";
import Card from "@component/components/card";
import Footer from "@component/components/footer";
import Header from "@component/components/header";
import React from "react";

const About = () => {
  const services = [
    {
      title: 'Service 01',
      image: '/assets/banner.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore. Aspernatur nihil, tenetur tempora labore!!"
    },
    {
      title: 'Service 02',
      image: '/assets/banner2.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore. Aspernatur nihil, tenetur tempora labore!!"
    },
    {
      title: 'Service 03',
      image: '/assets/banner.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore. Aspernatur nihil, tenetur tempora labore!!"
    },
    {
      title: 'Service 04',
      image: '/assets/banner2.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore. Aspernatur nihil, tenetur tempora labore!!"
    },
    {
      title: 'Service 05',
      image: '/assets/banner.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore. Aspernatur nihil, tenetur tempora labore!!"
    },
    {
      title: 'Service 06',
      image: '/assets/banner2.jpg',
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corrupti aspernatur nihil, tenetur tempora labore. Aspernatur nihil, tenetur tempora labore!!"
    },
  ]

  return (
    <div>
      <Header />
      <Banner
        title={"About Us"}
        subtitle={"Get to Know Us More!"}
        backImage={"/assets/banner2.jpg"}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 p-10 mx-auto"> 
        {services.map((service, index) => (
          <Card 
          key={index}
          title={service.title}
          image={service.image} 
          description={service.description}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default About;
