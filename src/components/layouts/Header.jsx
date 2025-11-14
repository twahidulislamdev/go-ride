import React, { useEffect, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import {
  FaRegUser,
  FaRegHeart,
  FaHome,
  FaCar,
  FaBars,
  FaCalendarCheck,
} from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "CARS", path: "/cars" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "PAGES", path: "/pages" },
  ];

  return (
    <>
      {/* Desktop Header part start  */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 py-5 w-full z-20 transition-all duration-300 ${
          isScrolled
            ? "bg-secondaryColor backdrop-blur-md shadow-md transition-ease-in-out transition-all duration-200"
            : "bg-transparent"
        }`}
      >
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="text-3xl font-bold text-white">
              <span className="text-mainColor tracking-[2px]">R</span>ENAX
            </div>

            {/* Menu */}
            <ul className="flex items-center gap-x-15 xl:gap-x-10">
              {menuItems.map((item, idx) => (
                <Link to={item.path} key={idx}>
                  <li className="relative list-none py-2 text-sm text-white group cursor-pointer transition-all ease-in-out">
                    {item.name}
                    <span className="absolute left-0 bottom-0 h-0.5 bg-mainColor w-0 group-hover:w-full transition-all duration-300"></span>
                  </li>
                </Link>
              ))}
            </ul>

            {/* Icons + Search */}
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <div className="flex-1 mx-3 lg:mx-5 flex justify-center items-center">
                <input
                  className="w-[200px] lg:w-[250px] py-2 px-3 
  rounded-md bg-white/5 backdrop-blur-md border border-white/20 
  text-white text-sm placeholder:text-white/70 
  outline-none focus:border-white/40 transition-all duration-300"
                  type="text"
                  placeholder="What are you looking?"
                />
              </div>
              <FaRegHeart className="text-white text-xl cursor-pointer" />
              <HiOutlineShoppingBag className="text-white text-2xl cursor-pointer" />
              <FaRegUser className="text-white text-xl cursor-pointer" />
            </div>
          </Flex>
        </Container>
      </div>
      {/* Desktop Header part End  */}

      {/* Mobile Header part start  */}
      <div
        className={`px-3 block lg:hidden  fixed top-0 left-0 right-0 py-5 w-full z-20 transition-all duration-300 ${
          isScrolled
            ? "bg-secondaryColor backdrop-blur-md shadow-md transition-ease-in-out transition-all duration-200"
            : "bg-transparent"
        }`}
      >
        <Flex className={"justify-between items-center"}>
          <div className="text-2xl font-bold text-white">
            <span className="text-mainColor tracking-[2px]">R</span>ENAX
          </div>
          {/* Icons + Search */}
          <div className="flex items-center gap-x-3 lg:gap-x-5">
            <div className="flex-1 mx-3 lg:mx-5 flex justify-center items-center">
              <input
                className="w-[165px] lg:w-[250px] py-2 px-3 rounded-md outline-1 outline-white text-white text-sm dark:placeholder:text-white"
                type="text"
                placeholder="What are you looking?"
              />
            </div>
            <FaRegHeart className="text-white text-xl cursor-pointer" />
            <HiOutlineShoppingBag className="text-white text-2xl cursor-pointer" />
            <FaRegUser className="text-white text-xl cursor-pointer" />
          </div>
        </Flex>
      </div>
      {/* Mobile Header part End  */}

      <div className="py-4 flex justify-between items-center lg:hidden w-full fixed bottom-0 left-0 z-99 bg-[#222222] ">
        <Link to="/" className="w-[23%]">
          <div className=" mx-auto flex flex-col justify-center items-center">
            <FaHome className="text-mainColor text-2xl  pb-1.5 cursor-pointer" />
            <p className="text-sm text-mainColor">HOME</p>
          </div>
        </Link>
        <Link to="/cars" className="w-[23%]">
          <div className=" mx-auto flex flex-col justify-center items-center">
            <FaCar className="text-mainColor text-2xl  pb-1.5 cursor-pointer" />
            <p className="text-sm text-mainColor">CARS</p>
          </div>
        </Link>
        <div className="w-[23%] mx-auto flex flex-col justify-center items-center">
          <FaCalendarCheck className="text-mainColor text-2xl  pb-1.5 cursor-pointer" />
          <p className="text-sm text-mainColor">BOOKING</p>
        </div>

        <div className="w-[23%] mx-auto flex flex-col justify-center items-center">
          <FaBars className="text-mainColor text-2xl  pb-1.5 cursor-pointer" />
          <p className="text-sm text-mainColor">PAGES</p>
        </div>
      </div>
    </>
  );
};

export default Header;
