import React, { useState } from "react";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import BgPattern from "../assets/bg-pattern-about-1-mobile-nav-1.svg";
import Logo from "./Logo";

const Navbar = () => {
  const [openMenu, setOpenmenu] = useState(false);
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex justify-between px-10 pt-12 lg:px-[165px] lg:pt-12 items-center ">
        <ul className="flex justify-between items-center text-[18px] leading-7 font-semibold">
          <Logo />
          <li className="text-white  mx-4">
            <Link to="/">Home</Link>
          </li>
          <li className="text-white mx-4">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Button>
          <Link to="/contact">Contact</Link>
        </Button>
      </div>

      {/* Mobile */}
      <div className=" flex md:hidden  mx-6 md:mx-10 pt-12 justify-between items-center   ">
        <Logo />

        <FaBars
          onClick={() => {
            setOpenmenu(!openMenu);
          }}
          color="white"
          size={24}
          className="cursor-pointer"
        />

        <div
          className={`absolute w-[75%] bg-[var(--police-blue)] h-screen transition-[right] duration-1000 overflow-x-hidden z-10 ${
            openMenu ? "top-0 right-0" : " top-0 right-[-100%]"
          } `}
        >
          <ul className="flex flex-col justify-center items-center text-[18px] leading-7 font-semibold pt-[60px] ">
            <li className="text-white cursor-pointer mb-8">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white cursor-pointer mb-8">
              <Link to={"/about"}>About</Link>
            </li>
            <Button primaryLight>
              <Link to="/contact">Contact</Link>
            </Button>
            {/* <li className="text-white cursor-pointer">Contact</li> */}
          </ul>
          <AiOutlineClose
            className="absolute top-12 right-[25px] cursor-pointer"
            onClick={() => {
              setOpenmenu(!openMenu);
            }}
            color="white"
            size={24}
          />
          <img
            src={BgPattern}
            alt="background pattern"
            className="absolute right-0 bottom-0 translate-x-[50%]  "
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
