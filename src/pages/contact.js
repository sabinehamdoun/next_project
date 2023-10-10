import Card from "@component/components/card";
import Contact from "@component/components/form";
import Footer from "@component/components/footer";
import Header from "@component/components/header";
import React, { useState } from "react";

const ContactPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChoose = (event) => {
    event.preventDefault();
    const selectedValue = event.target.querySelector(
      'input[name="default-radio"]:checked'
    ).value;
    setSelectedOption(selectedValue);
  };

  return (
    <div>
      <Header />
      <Contact />
      <Card title={"Contact Us"} description={"From 9:00am - 7:00pm"} />
      <div className="text-center py-8">
        <h1 className="mb-5 text-xl">Choose You're Interests</h1>
        <div className="flex justify-center ">
          <form onSubmit={handleChoose}>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                value="Outdoor Activities"
                name="default-radio"
                className="w-4 h-4 text-center"
              />
              <label
                htmlFor="default-radio-1"
                className="ml-2 text-sm font-normal text-[#1c2123] text-center"
              >
                Outdoor Activities
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-2"
                type="radio"
                value="Sports and Fitness"
                name="default-radio"
                className="w-4 h-4 text-gray-600"
              />
              <label
                htmlFor="default-radio-2"
                className="ml-2 text-sm font-medium text-[#1c2123]"
              >
                Sports and Fitness
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-3"
                type="radio"
                value="Creative Arts"
                name="default-radio"
                className="w-4 h-4"
              />
              <label
                htmlFor="default-radio-3"
                className="ml-2 text-sm font-normal text-[#1c2123]"
              >
                Creative Arts
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="default-radio-4"
                type="radio"
                value="Technology and Coding"
                name="default-radio"
                className="w-4 h-4"
              />
              <label
                htmlFor="default-radio-4"
                className="ml-2 text-sm font-normal text-[#1c2123]"
              >
                Technology and Coding
              </label>
            </div>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-700 hover:border-gray-700 border border-gray-900 text-white px-2 py-1 rounded-md mt-3 text-sm"
            >
              Choose
            </button>
          </form>
        </div>
        {selectedOption && (
          <p className="mt-4">You interest is in {selectedOption}</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
