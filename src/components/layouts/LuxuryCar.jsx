import React from "react";
import Container from "../Container";
import AstonMartinDbx from "../../assets/astonMartinDbx.jpg";
import audiRs7 from "../../assets/audiRs7.jpg";
import audiQ8 from "../../assets/audiQ8.jpg";
import Car from "../Car";

const LuxuryCar = () => {
  const Cars = [
    {
      id: "01",
      CarTitle: "Aston Martin DBX",
      CarPrice: "$200,000",
      CarImage: AstonMartinDbx,
    },
    {
      id: "02",
      CarTitle: "Audi RS7",
      CarPrice: "$120,000",
      CarImage: audiRs7,
    },
    {
      id: "03",
      CarTitle: "Audi Q8",
      CarPrice: "$100,000",
      CarImage: audiQ8,
    },
  ];

  return (
    <div className="pt-10 pb-20 bg-secondaryColor text-center">
      <h6 className="text-sm text-mainColor tracking-[8px]">SELECT YOUR CAR</h6>
      <h3 className="text-4xl font-bold text-white pt-5">
        Our <span className="text-mainColor">Luxury Cars Fleets</span>
      </h3>

      <div className="p-10">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Cars.map((car) => (
              <Car
                key={car.id}
                CarTitle={car.CarTitle}
                CarPrice={car.CarPrice}
                CarImage={car.CarImage}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LuxuryCar;
