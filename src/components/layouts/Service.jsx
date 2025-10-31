import React from "react";
import ServiceCard from "../ServiceCard";
import Container from "../Container";

// ✅ Import images properly so Vercel can bundle them
import serviceOne from "../../assets/serviceOne.jpg";
import serviceTwo from "../../assets/serviceTwo.jpg";
import serviceThree from "../../assets/serviceThree.jpg";

const Service = () => {
  const services = [
    {
      id: "01",
      title: "Corporate Car Rental",
      img: serviceOne,
    },
    {
      id: "02",
      title: "Car Rental with Driver",
      img: serviceTwo,
    },
    {
      id: "03",
      title: "Airport Transfer",
      img: serviceThree,
    },
  ];

  return (
    <>
      <div className="pt-20 pb-10 relative flex flex-col items-center justify-center bg-secondaryColor text-center">
        <h6 className="text-sm text-mainColor tracking-[8px]">WHAT WE DO</h6>
        <h3 className="text-4xl font-bold text-white pt-5">
          Our <span className="text-mainColor">Services</span>
        </h3>
        <div className="w-full flex items-center justify-center p-10">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  img={service.img}
                />
              ))}
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Service;
