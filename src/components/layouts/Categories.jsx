import React from "react";
import Container from "../Container";

//  Import images
import CategoryOne from "../../assets/categoryOne.png";
import CategoryTwo from "../../assets/categoryTwo.png";
import CategoryThree from "../../assets/categoryThree.png";
import CategoryFour from "../../assets/categoryFour.png";
import CategoryFive from "../../assets/categoryFive.png";
import CategorySix from "../../assets/categorySix.png";
import CategoriesCard from "../CategoriesCard";
import { Link } from "react-router-dom";

const Categories = () => {
  const category = [
    {
      id: "1",
      title: "Luxury Car",
      img: CategoryOne,
      path: "/luxuryCarCategory",
    },
    {
      id: "2",
      title: "Sports Car",
      img: CategoryTwo,
      path: "/sportsCarCategory",
    },
    { id: "3", title: "Sedan", img: CategoryThree },
    { id: "4", title: "SUV", img: CategoryFour },
    { id: "5", title: "Small Car", img: CategorySix },
    { id: "6", title: "MPV", img: CategoryFive },
  ];
  return (
    <>
      <div className="pt-10 pb-10 relative flex flex-col items-center justify-center bg-secondaryColor">
        <h6 className="text-sm text-mainColor tracking-[8px] text-center">
          CATEGORIES
        </h6>
        <h3 className="text-3xl lg:text-4xl font-bold text-white pt-5">
          Explore Our <span className="text-mainColor">Categories</span>
        </h3>
        {/* Categories Grid */}
        <Container className={"mt-10 px-3"}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {category.map((item) => (
              <Link key={item.id} to={item.path}>
                <CategoriesCard
                  id={item.id}
                  title={item.title}
                  img={item.img}
                />
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Categories;
