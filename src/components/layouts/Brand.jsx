import React from "react";
import Container from "../Container";
import RollsRoyec from "../../assets/rollsRoyce.png";
import Ferrari from "../../assets/ferrari.png";
import LandRover from "../../assets/landRover.png";
import Lamborghini from "../../assets/lamborghini.png";
import Cadillac from "../../assets/cadillac.png";
import Porsche from "../../assets/porsche.png";
import Flex from "../Flex";

const Brand = () => {
  return (
    <>
      <div className="py-5 bg-[#222222]">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="w-[15%]">
              <img className="w-full" src={RollsRoyec} alt="" />
            </div>
            <div className="w-[15%]">
              <img className="w-full" src={Ferrari} alt="" />
            </div>
            <div className="w-[15%]">
              <img className="w-full" src={LandRover} alt="" />
            </div>
            <div className="w-[15%]">
              <img className="w-full" src={Lamborghini} alt="" />
            </div>
            <div className="w-[15%]">
              <img className="w-full" src={Cadillac} alt="" />
            </div>
            <div className="w-[15%]">
              <img className="w-full" src={Porsche} alt="" />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Brand;
