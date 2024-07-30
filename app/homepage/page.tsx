import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";
import UseCase from "../components/UseCase";

const HomePage = () => {
  return (
    <div className="w-full">
      <Hero />
      <Products />
      <UseCase />
    </div>
  );
};

export default HomePage;
