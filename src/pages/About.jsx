import React, { useState } from "react";

import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import CTA from "../components/CTA";
import BgPattern1 from "../assets/bg-pattern-about-1-mobile-nav-1.svg";
import BgPattern2 from "../assets/bg-pattern-about-2-contact-1.svg";
import BgPattern3 from "../assets/bg-pattern-home-4-about-3.svg";

import { aboutData, clientCompanies } from "../utlities/data";
const About = () => {
  const [open, setOpen] = useState(-1);

  const handleClick = (index) => {
    setOpen(open === index ? -1 : index);
  };
  return (
    <main>
      <section className="flex pt-[80px] px-6 pb-[108px] flex-col  xl:flex-row  relative xl:px-[165px] xl:py-[140px]  xl:gap-x-[30px] overflow-hidden">
        {/* Hero Title */}
        <div className=" mb-[18px]  xl:text-left min-w-[350px]">
          <h1 className="w-full text-center">About</h1>
        </div>
        {/* Hero content */}
        <p className="body1 flex-1 relative  before:hidden xl:before:block before:content-[''] before:absolute before:top-[-70px] before:w-[56px] before:h-1 before:bg-[var(--rapture-blue)]">
          We help companies build dynamic teams made up of top global talent.
          Using our network of passionate professionals we drive innovation and
          deliver incredible outcomes. Talented, diverse teams shape the best
          products and experiences. We’ll bring those teams to you.
        </p>
        <img
          src={BgPattern1}
          alt="background pattern"
          className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] md:translate-y-0 z-[-100] "
        />
      </section>

      <section className="bg-[var(--deep-jungle-green)] px-6 pt-[88px] pb-[116px] md:pb-[128px] md:pt-[100px] xl:py-[140px] xl:px-[165px] relative overflow-hidden">
        <h2 className="text-center">Meet the directors</h2>
        <div className="grid grid-cols-1 gap-y-6 md:gap-y-12 md:grid-cols-2 xl:grid-cols-3 md:gap-x-[11px]  pt-12 md:pt-[64px]">
          {aboutData.map((about, index) => {
            return (
              <article
                className="relative flex flex-col items-center py-4 w-full gap-y-4 max-w-sm bg-[var(--sacramento-state-green)] px-6 pt-8 pb-[56px] mx-auto rounded-md"
                key={index}
              >
                <img
                  src={about.profile}
                  alt={about.name}
                  width="96px"
                  height="96px"
                  className=" rounded-full border- border-solid border-[#C4FFFE]"
                />
                <div>
                  <h3 className="text-[var(--rapture-blue)] ">{about.name}</h3>
                  <p className="italic font-[500] text-[15px] leading-[25px] text-white">
                    {about.profession}
                  </p>
                </div>
                {/* Show Quotes and social icons */}
                {open === index && (
                  <div className="w-full h-full absolute top-0 left-0 text-center z-[999] bg-[var(--sacramento-state-green)] px-6 pt-[35px] pb-[63px]">
                    <p className="text-[var(--rapture-blue)] font-bold text-[18px] leading-7 mt-4">
                      {about.name}
                    </p>
                    <p className="italic font-[500] text-[15px] leading-[25px] text-white pb-4 ">
                      {about.quote}
                    </p>
                    {
                      <div className="flex items-center justify-center gap-x-4 text-white">
                        <FaFacebookSquare
                          size={24}
                          className="hover:text-[var(--light-color)] cursor-pointer transition-colors duration-150"
                        />
                        <FaTwitter
                          size={24}
                          className="hover:text-[var(--light-color)] cursor-pointer transition-colors duration-150"
                        />
                      </div>
                    }
                    <button
                      className="flex z-[100]  rounded-full bg-[var(--rapture-blue)] hover:bg-[var(--light-color)] transition-colors duration-150 cursor-pointer p-4 absolute bottom-[-23px] left-[50%] translate-x-[-50%]"
                      onClick={() => handleClick(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        className="text-center z-[999] "
                      >
                        <path
                          fill="#FFF"
                          fillRule="evenodd"
                          d="M15.01.368l2.122 2.122-6.01 6.01 6.01 6.01-2.122 2.122L9 10.622l-6.01 6.01L.868 14.51 6.88 8.5.87 2.49 2.988.368 9 6.38 15.01.37z"
                        />
                      </svg>
                    </button>
                  </div>
                )}
                {/* <button className="w-[56px] h-[56px] block rounded-full"> */}
                {open !== index && (
                  <button
                    className="flex z-[100]  rounded-full bg-[var(--light-color)] hover:bg-[var(--rapture-blue)] transition-all duration-300 p-4 absolute bottom-[-21px] left-[50%] translate-x-[-50%]"
                    onClick={() => handleClick(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      className="text-center"
                    >
                      <path
                        fill="#012F34"
                        fillRule="evenodd"
                        d="M10 0v5.999L16 6v4h-6v6H6v-6H0V6h6V0h4z"
                      />
                    </svg>
                  </button>
                )}
                {/* </button> */}
              </article>
            );
          })}
        </div>

        {/* Top left */}
        <img
          src={BgPattern2}
          alt="background pattern"
          className="absolute left-0 top-0 translate-x-[-50%] translate-y-[-50%] md:translate-y-0  :md:translate-y-0 "
        />
        {/* bottom right */}
        <img
          src={BgPattern3}
          alt="background pattern"
          className="absolute right-0 bottom-0 md:translate-y-0 "
        />
      </section>

      {/* Clients section */}
      <section className="bg-[var(--sacramento-state-green)] px-6  py-[88px] md:px-10 md:py-[100px] xl:px-[165px] xl:py-[140px]">
        <h2 className="text-white text-center whitespace-nowrap mb-4">
          Some of our clients
        </h2>
        <div className="flex  flex-col md:flex-row justify-center md:justify-between items-center gap-y-10  pt-[64px]">
          {clientCompanies.map((clientCompanie) => (
            <img
              src={clientCompanie.imageSrc}
              alt={clientCompanie.altText}
              key={clientCompanie.id}
              className="md:w-[100px]"
            />
          ))}
        </div>
      </section>

      {/* Contact section  */}
      <CTA />
    </main>
  );
};

export default About;
