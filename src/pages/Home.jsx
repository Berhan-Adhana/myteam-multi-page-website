import React from "react";
import Hero from "../components/Hero";
import IconQuote from "../assets/icon-quotes.svg";


import CTA from "../components/CTA";
import { fakeData, storiesData } from "../utlities/data";

const Home = () => {
 

 

  return (
    <main>
      <Hero />
      <section className="relative bg-[var(--sacramento-state-green)] px-6 md:px-[98px] py-[64px] md:py-[100px] lg:px-[165px] lg:py-[140px] flex flex-col lg:flex-row lg:gap-x-[125px] ">
        <div className="flex flex-1">
          <h2 className="  md:text-left   before:content-[''] before:absolute before:top-[32px] before:w-[56px] before:h-1 before:bg-[var(--light-color)] ">
            Build & <br className="sm:block md:hidden lg:hidden " />
            manage <br className="block md:hidden lg:block" />
            distributed <br className="block lg:hidden" />
            teams
            <br className="hidden lg:block" /> like no{" "}
            <br className="block md:hidden " />
            one else.
          </h2>
        </div>
       
        <div className=" flex flex-col mt-[56px] md:mt-[64px] lg:mt-0 gap-y-12 md:gap-y-8 ">
          {fakeData.map((singleData, index) => {
            return (
              <article className=" flex flex-col md:flex-row items-center md:items-start  justify-center ">
                <img
                  src={singleData.icon}
                  alt="person avator"
                  className="mb-4 md:mr-[23px] "
                />
                <div className="text-center md:text-left">
                  <h3 className="text-[var(--light-color)] mb-2 md:mb-4 ">
                    {singleData.title}
                  </h3>
                  <p className=" body2 ">{singleData.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      
      {/* Stories section */}
      <section className="px-6 pt-[140px] pb-[164px] md:px-[98px] md:py-[100px] lg:px-[165px] lg:py-[140px]">
        <h2 className="text-center   whitespace-nowrap">
          Delivering real <br className="block md:hidden" />
          results for top
          <br className="block  " />
          companies. Some of
          <br className="block md:hidden" /> our{" "}
          <br className="hidden md:block lg:hidden" />
          <span className="text-[var(--rapture-blue)]">success stories.</span>
        </h2>
        <div className="mt-[84px] flex flex-col lg:flex-row lg:gap-x-[31px] gap-y-12 ">
          {storiesData.map((story, index) => (
            <article className="flex flex-col text-white justify-center items-center relative gap-y-4 lg:gap-y-6">
              <p className="body2 text-center">{story.quote}</p>
              <div className="my-4">
                <p className=" body1 text-center text-[var(--rapture-blue)] mb-[2px]">
                  {story.author}
                </p>
                <p className="text-[13px] italic font-[500] leading-[18px] text-center">
                  {story.role}
                </p>
              </div>
              <img
                src={story.image}
                alt={story.author}
                width="62px"
                height="62px"
                className="rounded-full "
              />
              <img
                src={IconQuote}
                alt="quote"
                width="67px"
                height="56px"
                className="absolute top-[-20px] left-[50%] translate-x-[-50%] z-[-100] "
              />
            </article>
          ))}
        </div>
      </section>
      {/* call to action  */}
      <CTA />
    </main>
  );
};

export default Home;
