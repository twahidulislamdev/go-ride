import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "PAGES", path: "/pages" },
  ];
  return (
    <>
      <div className="py-5 bg-neutral-200">
        <Container>
          <Flex className={"justify-between items-center"}>
            <div className="text-2xl font-semibold ">RENAX</div>
            <div className="">
              <ul className="flex items-center gap-x-15 xl:gap-x-10">
                {menuItems.map((item, idx) => (
                  <Link to={item.path} key={idx}>
                    <li className="relative list-none py-2 text-sm text-black font-medium group cursor-pointer transition-all ease-in-out">
                      {item.name}
                      <span className="absolute left-0 bottom-0 h-0.5 bg-black w-0 group-hover:w-full transition-all duration-300"></span>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-x-3 lg:gap-x-5">
              <div className="flex-1 mx-3 lg:mx-5  flex justify-center items-center">
                <input
                  className="w-[200px] lg:w-[250px] py-2 px-3 rounded-md border border-gray-300 outline-1 outline-gray-300 bg-[#F5F5F5] text-sm"
                  type="text"
                  placeholder="What are you looking?"
                />
              </div>
              <FaRegHeart className="text-xl cursor-pointer" />
              <HiOutlineShoppingBag className="text-2xl cursor-pointer" />
              <FaRegUser className="text-xl cursor-pointer" />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
