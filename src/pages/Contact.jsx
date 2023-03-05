import React from "react";
import Button from "../components/Button";
import { contactFakeData, fakeData } from "../utlities/data";
import BgPatter1 from "../assets/bg-pattern-contact-2.svg";

const Contact = () => {
  const Input = ({ type, placeholder, name }) => {
    return (
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        aria-labelledby={name}
        className="w-full bg-transparent outline-none border-solid border-b-2 py-3 placeholder:opacity-[.6] placeholder:mix-blend-normal text-white font-semibold space-x-[-0.115385px]"
      />
    );
  };
  return (
    <main>
      <section className="flex flex-col pt-[80px] px-6 md:px-[113px] pb-[88px] md:py-[112px]  gap-y-[56px] lg:flex-row  relative lg:px-[165px] lg:py-[120px] lg:items-center lg:gap-x-[50px] overflow-hidden">
        {/* Hero Title */}
        <div className=" mb-[18px] lg:mb-8 text-center lg:max-w-[540px] ">
          <h1 className=" min-w-[350px]">Contact</h1>
          <p className="font-bold text-[32px] leading-[48px] text-center text-[var(--light-color)] lg:mt-4">
            Ask us about
          </p>

          <div className=" flex flex-col mt-10 md:mt-[64px] lg:mt-8 gap-y-12 md:gap-y-8 lg:gap-y-2">
            {contactFakeData.map((singleData, index) => {
              return (
                <article
                  className=" flex flex-1  items-center  justify-start gap-x-[23px] "
                  key={index}
                >
                  <img
                    src={singleData.icon}
                    alt={singleData.title}
                    
                  />
                  <div className="text-center md:text-left">
                    <p className=" body2 flex-1 ">{singleData.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        <form
          action=""
          className="flex flex-col gap-y-4  items-start justify-center lg:gap-y-6 lg:flex-1"
        >
          <Input type="text" placeholder="Name" name="name" />
          <Input type="email" placeholder="Email Address" name="email" />
          <Input type="text" placeholder="Company Name" name="company" />
          <Input type="text" placeholder="Title" name="title" />
          <textarea
            name="message"
            cols="30"
            rows="3"
            aria-labelledby="message"
            className="bg-transparent w-full outline-none resize-none  border-solid border-b-2 placeholder:opacity-[.6] placeholder:mix-blend-normal text-white font-semibold space-x-[-0.115385px]"
            placeholder="message..."
          />
          <Button
            secondary
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Submit
          </Button>
        </form>
        <img
          src={BgPatter1}
          alt="background pattern"
          className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] z-[-100] "
        />
      </section>
    </main>
  );
};

export default Contact;
