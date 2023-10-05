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
      <Form />
      <Footer />
    </>
  );
};

export default HomePage;
