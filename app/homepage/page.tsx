import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import UseCase from "../components/UseCase";
import Testimonial from "../components/Testimonial";
import FrequentQuestions from "../components/FAQ";
import GetStarted from "../components/GetStarted";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Products />
      <UseCase />

      {/* User feedback */}
      <Testimonial />
      {/* FAQ */}
      <FrequentQuestions />
      {/* Unlock */}
      <GetStarted />
    </div>
  );
};

export default HomePage;
