import DefaultAccordion from "@component/components/accordion";
import Banner from "@component/components/banner";
import Footer from "@component/components/footer";
import Form from "@component/components/form";
import Header from "@component/components/header";
import Services from "@component/components/services";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner
        title={"Welcome to Our Website"}
        subtitle={"Discover our amazing services and products."}
        backImage={"/assets/banner2.jpg"}
      />
      <Services />
      <div className="bg-[#f0f0f0] pt-4">
        <Form />
      </div>
      {/* <div className="p-14">
        <h2 className="text-2xl text-center mb-3">Frequently Asked Questions</h2>
        <DefaultAccordion />
      </div> */}
      <Footer />
    </>
  );
};

export default HomePage;
