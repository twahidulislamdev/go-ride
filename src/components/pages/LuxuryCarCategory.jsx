import React from "react";
import BankgroundOne from "../../assets/backgroundOne.jpg";

const LuxuryCarCategory = () => {
  return (
    <>
      <div className="">
        <div
          className="relative py-[90px] lg:py-[230px] bg-cover bg-center"
          style={{ backgroundImage: `url(${BankgroundOne})` }}
        >
          <div className="absolute inset-0 bg-black/55"></div>
          <div className="relative z-10 text-center">
            <h6 className="text-sm text-mainColor tracking-[8px]">RENT NOW</h6>
            <h3 className="text-3xl lg:text-4xl text-white font-bold pt-3">
              Select <span className="text-mainColor">Luxury Car</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LuxuryCarCategory;
