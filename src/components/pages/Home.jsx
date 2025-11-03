import React from "react";
import Banner from "../layouts/Banner";
import Service from "../layouts/Service";
import LuxuryCar from "../layouts/LuxuryCar";
import Categories from "../layouts/Categories";

const Home = () => {
  return (
    <>
      <Banner />
      <Categories />
      <LuxuryCar />
      <Service />
    </>
  );
};

export default Home;
