import React from "react";
import Banner from "../layouts/Banner";
import Service from "../layouts/Service";
import LuxuryCar from "../layouts/LuxuryCar";
import Categories from "../layouts/Categories";
import PopularCar from "../layouts/PopularCar";
import Brand from "../layouts/Brand";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <LuxuryCar />
      <Service />
      <PopularCar />
      <Brand />
    </>
  );
};

export default Home;
