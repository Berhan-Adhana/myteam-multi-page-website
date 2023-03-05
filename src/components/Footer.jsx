import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaPinterestSquare, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";
import { menus } from "../utlities/data";

const Footer = () => {
  return (
    <footer className="bg-[var(--dark-green)] text-white">
      {/* Mobile footer */}

      <div className=" px-6 py-[66px] block md:hidden ">
        <div className="flex items-center justify-center flex-col gap-y-4 w-full">
          <Logo />
          <ul className="flex gap-x-4 ">
            {menus.map((menu, index) => (
              <li
                className="hover:text-[var(--light-color)] transition-colors duration-150"
                key={index}
              >
                <Link to={menu.value}>{menu.name}</Link>
              </li>
            ))}
          </ul>
          <div className=" opacity-[.6] mix-blend-normal body2 text-center">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
          <div className="flex items-center justify-center mt-8 gap-x-4">
            <FaFacebookSquare
              size={24}
              className="hover:text-[var(--light-color)] cursor-pointer transition-colors duration-150"
            />
            <FaPinterestSquare
              size={24}
              className="hover:text-[var(--light-color)] cursor-pointer transition-colors duration-150"
            />
            <FaTwitter
              size={24}
              className="hover:text-[var(--light-color)] cursor-pointer transition-colors duration-150"
            />
          </div>
          <p className="my-4 opacity-[.6] mix-blend-normal">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>

      {/* Desktop footer */}
      <div className="hidden md:flex flex-col gap-y-8  px-10 py-[56px] lg:py-12 lg:px-[165px] lg:flex-row lg:justify-between lg:gap-x-[125px]">
        <div className="flex justify-between items-center lg:gap-x-[125px] ">
          <div className="flex flex-col gap-y-[53px] lg:gap-y-[25px]">
            <Logo />
            <ul className="flex gap-x-4  ">
              {menus.map((menu, index) => (
                <li
                  className="hover:text-[var(--light-color)] transition-colors duration-150"
                  key={index}
                >
                  <Link to={menu.value}>{menu.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className=" opacity-[.6] mix-blend-normal font-semibold text-[15px] leading-[25px] text-right">
            <p>987 Hillcrest Lane</p>
            <p>Irvine, CA</p>
            <p>California 92714</p>
            <p>Call Us : 949-833-7432</p>
          </div>
        </div>

        <div className="flex justify-between items-center lg:flex-col lg:gap-y-[51px]">
          <div className="flex items-center justify-center gap-x-4">
            <FaFacebookSquare
              size={24}
              className="hover:text-[var(--light-color)] cursor-pointer"
            />
            <FaPinterestSquare
              size={24}
              className="hover:text-[var(--light-color)] cursor-pointer"
            />
            <FaTwitter
              size={24}
              className="hover:text-[var(--light-color)] cursor-pointer"
            />
          </div>
          <p className=" opacity-[.6] mix-blend-normal">
            Copyright 2020. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
