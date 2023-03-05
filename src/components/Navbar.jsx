import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import BgPattern from "../assets/bg-pattern-about-1-mobile-nav-1.svg";
import Logo from "./Logo";
import { menus } from "../utlities/data";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  // To handle the click outside the sidebar
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        isSidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isSidebarOpen]);
  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex justify-between px-10 pt-12 lg:px-[165px] lg:pt-12 items-center ">
        <ul className="flex justify-between items-center text-[18px] leading-7 font-semibold">
          <Logo />
          {menus.map((menu, index) => (
            <li
              className="text-white  mx-4 hover:text-[var(--light-color)] transition-colors duration-150"
              key={index}
            >
              <Link to={menu.value}>{menu.name}</Link>
            </li>
          ))}
        </ul>
        <Button primaryLight>
          <Link to="/contact" className="w-full h-full">
            Contact
          </Link>
        </Button>
      </nav>

      {/* Mobile */}
      <nav
        ref={sidebarRef}
        className=" flex md:hidden  mx-6 md:mx-10 pt-12 justify-between items-center    "
      >
        <Logo />

        <FaBars
          id="menubars"
          onClick={() => {
            setIsSidebarOpen(!isSidebarOpen);
          }}
          color="white"
          size={24}
          className="cursor-pointer"
        />

        <div
          className={`absolute w-[75%] bg-[var(--police-blue)] h-screen transition-[right] duration-500 overflow-x-hidden z-[1000] ${
            isSidebarOpen ? "top-0 right-0" : " top-0 right-[-100%]"
          } `}
        >
          <ul className="flex flex-col justify-center items-center text-[18px] leading-7 font-semibold mt-[60px] ">
            {menus.map((menu, index) => (
              <li className="text-white cursor-pointer my-8 hover:text-[var(--light-color)] transition-colors duration-150">
                <Link to={menu.value}>{menu.name}</Link>
              </li>
            ))}

            <Button primaryLight>
              <Link to="/contact" className="w-full h-full">
                Contact
              </Link>
            </Button>
          </ul>
          <AiOutlineClose
            className="absolute top-12 right-[25px] cursor-pointer"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
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
      </nav>
    </>
  );
};

export default Navbar;
