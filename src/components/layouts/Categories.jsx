import React from "react";
import Container from "../Container";

//  Import images
import CategoryOne from "../../assets/categoryOne.png";
import CategoryTwo from "../../assets/categoryTwo.png";
import CategoryThree from "../../assets/categoryThree.png";
import serviceThree from "../../assets/serviceThree.jpg";
import serviceFour from "../../assets/serviceFour.jpg";
import serviceFive from "../../assets/serviceFive.jpg";
import CategoriesCard from "../CategoriesCard";

const Categories = () => {
  const category = [
    { id: "1", title: "Luxury Car", img: CategoryOne },
    { id: "2", title: "Sports Car", img: CategoryTwo },
    { id: "3", title: "Sedan", img: CategoryThree },
    { id: "4", title: "SUV", img: serviceThree },
    { id: "5", title: "MPV", img: serviceFour },
    { id: "6", title: "Small Car", img: serviceFive },
  ];
  return (
    <>
      <div className="pt-10 pb-10 relative flex flex-col items-center justify-center bg-secondaryColor">
        <h6 className="text-sm text-mainColor tracking-[8px] text-center">
          CATEGORIES
        </h6>
        <h3 className="text-4xl font-bold text-white pt-5 text-center">
          Explore Our <span className="text-mainColor">Categories</span>
        </h3>
        {/* Categories Grid */}
        <Container className={"mt-10 px-3"} >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {category.map((item) => (
              <CategoriesCard
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
              />
            ))}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Categories;
