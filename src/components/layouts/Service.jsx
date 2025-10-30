import React from "react";
import ServiceCard from "../ServiceCard";
import Container from "../Container";

const Service = () => {
  const services = [
    {
      id: "01",
      title: "Corporate Car Rental",
      img: "/src/assets/serviceOne.jpg",
    },
    {
      id: "02",
      title: "Car Rental with Driver",
      img: "/src/assets/serviceTwo.jpg",
    },
    {
      id: "03",
      title: "Airport Transfer",
      img: "/src/assets/serviceThree.jpg",
    },
  ];

  return (
    <>
      <div className="py-20 relative flex flex-col items-center justify-center  bg-secondaryColor text-center">
        <h6 className="text-sm text-mainColor tracking-[8px]">WHAT WE DO</h6>
        <h3 className="text-4xl font-bold text-white pt-5">
          Our <span className="text-mainColor">Services</span>
        </h3>
        <div className="w-full flex items-center justify-center p-10">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6  w-full">
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
