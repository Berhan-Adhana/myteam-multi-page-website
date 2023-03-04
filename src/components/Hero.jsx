import React from "react";
import BgPattern from "../assets/bg-pattern-home-2.svg";
const Hero = ({ children }) => {
  return (
    <section className="flex pt-[100px] px-6 pb-[197px] flex-col  lg:flex-row  relative lg:px-[165px] lg:py-[140px] items-center lg:gap-x-[30px] overflow-hidden">
      {/* Hero Title */}
      <div className=" mb-[18px] text-center lg:text-left flex-1">
        <h1 className="whitespace-nowrap w-full">
          Find the <br />
          best <span className="text-[var(--light-color)]">talent</span>
        </h1>
      </div>
      {/* Hero content */}
      <p className="body1 ">
        Finding the right people and building high performing teams can be hard.
        Most companies aren’t tapping into the abundance of global talent. We’re
        about to change that.
      </p>
      <img
        src={BgPattern}
        alt="mobile background pattern"
        className="absolute bottom-0 left-[50%] translate-x-[-50%]"
      />
      
    </section>
  );
};

export default Hero;
