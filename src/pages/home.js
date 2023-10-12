import AccordionItem from "@component/components/accordion";
import Banner from "@component/components/banner";
import FilterCard from "@component/components/filter-card";
import Footer from "@component/components/footer";
import Form from "@component/components/form";
import Header from "@component/components/header";
import Services from "@component/components/services";
import React from "react";

const HomePage = () => {
  const accordionItems = [
    {
      title: "How can I learn a new programming language?",
      content:
        "Learning a new programming language involves studying its syntax, practicing coding, and working on projects to apply your knowledge. Online resources and courses can be helpful.",
    },
    {
      title:
        "What is version control and why is it important for software development?",
      content:
        "Version control is a system that tracks changes to a codebase over time. It is important for software development because it allows multiple developers to collaborate, revert to previous versions, and maintain a history of code changes, ensuring code stability and accountability.",
    },
    {
      title: "What is object-oriented programming (OOP)?",
      content:
        "Object-oriented programming is a programming paradigm that uses objects, which are instances of classes, to represent and manipulate data. It focuses on concepts like encapsulation, inheritance, and polymorphism for building modular and maintainable code.",
    },
  ];

  return (
    <>
      <Header />
      <Banner
        title={"Welcome to Our Website"}
        subtitle={"Discover our amazing services and products."}
        backImage={"/assets/banner2.jpg"}
      />
      <Services />
      <div className="bg-[#fff] pt-4">
        <Form />
      </div>
      <div className="p-14 bg-[#f0f0f0]">
        <h2 className="text-2xl text-center mb-3">
          Frequently Asked Questions
        </h2>
        <div className="max-w-screen-md py-1 sm:p-4 mx-auto">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              index={index}
            />
          ))}
        </div>
      </div>
      <FilterCard />
      <Footer />
    </>
  );
};

export default HomePage;
