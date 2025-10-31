import React from "react";
import Container from "../Container";
import AstonMartinDbx from "../../assets/astonMartinDbx.jpg";
import audiRs7 from "../../assets/audiRs7.jpg";
import audiQ8 from "../../assets/audiQ8.jpg";
import bmw3 from "../../assets/bmw3.png";
import audiA5 from "../../assets/audiA5.png"

import Car from "../Car";

const LuxuryCar = () => {
  const Cars = [
    {
      id: "01",
      CarTitle: "Aston Martin DBX",
      CarPrice: "120.00",
      CarImage: AstonMartinDbx,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Sedan",
    },
    {
      id: "02",
      CarTitle: "Audi RS7",
      CarPrice: "120.00",
      CarImage: audiRs7,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "SUV",
    },
    {
      id: "03",
      CarTitle: "Audi Q8",
      CarPrice: "100.00",
      CarImage: audiQ8,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Coupe",
    },
    {
      id: "04",
      CarTitle: "BMW 3 Series",
      CarPrice: "90.00",
      CarImage: bmw3,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Coupe",
    },
    {
      id: "05",
      CarTitle: "BMW 3 Series",
      CarPrice: "90.00",
      CarImage: audiA5,
      CarSeats: "4 Seats",
      GearboxType: "Auto",
      FuelType: "Petrol",
      CarType: "Coupe",
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
            {Cars.map((item) => (
              <Car
                key={item.id}
                CarTitle={item.CarTitle}
                CarPrice={item.CarPrice}
                CarImage={item.CarImage}
                CarType={item.CarType}
                CarSeats={item.CarSeats}
                GearboxType={item.GearboxType}
                FuelType={item.FuelType}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default LuxuryCar;
