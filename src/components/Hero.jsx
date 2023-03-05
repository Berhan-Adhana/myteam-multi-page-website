import React from "react";
import BgPattern from "../assets/bg-pattern-home-2.svg";
const Hero = ({ children }) => {
  return (
    <section className="flex pt-[100px] px-6 pb-[197px] flex-col  xl:flex-row  relative xl:px-[165px] xl:py-[140px] items-center xl:gap-x-[30px] overflow-hidden">
      {/* Hero Title */}
      <div className=" mb-[18px] text-center xl:text-left flex-1">
        <h1 className="whitespace-nowrap ">
          Find the <br />
          best <span className="text-[var(--light-color)]">talent</span>
        </h1>
      </div>
      {/* Hero content */}
      <p className="body1 relative  before:hidden xl:before:block before:content-[''] before:absolute before:top-[-70px] before:w-[56px] before:h-1 before:bg-[var(--rapture-blue)]">
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
