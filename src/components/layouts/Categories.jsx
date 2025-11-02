import React from "react";
import Container from "../Container";

//  Import images
import serviceOne from "../../assets/serviceOne.jpg";
import serviceTwo from "../../assets/serviceTwo.jpg";
import serviceThree from "../../assets/serviceThree.jpg";
import serviceFour from "../../assets/serviceFour.jpg";
import serviceFive from "../../assets/serviceFive.jpg";
import CategoriesCard from "../CategoriesCard";

const Categories = () => {
  const category = [
    { id: "1", title: "Sedan", img: serviceOne },
    { id: "2", title: "SUV", img: serviceTwo },
    { id: "3", title: "", img: serviceThree },
    { id: "4", title: "VIP Transfer", img: serviceFour },
    { id: "5", title: "Private Transfer", img: serviceFive },
    { id: "6", title: "Airport Transfer", img: serviceThree },
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
        <Container className={"mt-10"}>
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
