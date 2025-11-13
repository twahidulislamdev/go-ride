import React from "react";
import Banner from "../layouts/Banner";
import Service from "../layouts/Service";
import LuxuryCar from "../layouts/LuxuryCar";
import Categories from "../layouts/Categories";
import PopularCar from "../layouts/PopularCar";
import Interested from "../layouts/Interested";
import Brand from "../layouts/Brand";
import Testimonials from "../layouts/Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <LuxuryCar />
      <Service />
      <PopularCar />
      <Interested />
      <Testimonials />
      <Brand />
    </>
  );
};

export default Home;
