import React from "react";
import Button from "./Button";
import BgPattern1 from "../assets/bg-pattern-home-6-about-5.svg";
import { Link } from "react-router-dom";

const CTA = () => (
  <section className="bg-[var(--light-color)] w-[100vw] overflow-hidden relative">
    <div className="flex flex-col md:flex-row  justify-center items-center gap-y-6 md:gap-x-[84px] lg:gap-x-[260px]  px-6 md:px-[98px] lg:px-[263px] py-[83px] md:py-[84px] lg:py-[76px] ">
      <h2 className="text-center font-bold  text-[var(--sacramento-state-green)] whitespace-nowrap">
        Ready to get
        <br className="block md:hidden" /> started?
      </h2>
      <Button primaryDark={true}>
        <Link to="/contact">Contact us</Link>
      </Button>
    </div>
    <img
      src={BgPattern1}
      alt="background pattern"
      className="absolute left-0 bottom-0 translate-y-6  "
    />
  </section>
);

export default CTA;
