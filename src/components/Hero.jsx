import React from "react";
import Button from "./Button";
import SimpleButton from "./SimpleButton";
import { hero } from "../assets";

const Hero = () => {
  return (
    <div className=" w-full flex flex-col items-center justify-between lg:flex-row py-10 relative">
      <div className="flex flex-col w-full items-start justify-between px-4 py-2 mb-5 lg:w-1/2">
        <h1 className="text-[#4D4D4D] font-semibold font-Roboto text-[25px] md:text-[35px] lg:text-[30px] xl:text-[50px] mb-2">
          Lessons and insights
          <br />
          <span className="text-primary">from 8 years</span>
        </h1>
        <p className="text-secondary font-Roboto font-normal text-sm max-w-[100%] leading-6 mb-4">
          Where to grow your business as a photographer site or social media?
        </p>

        <SimpleButton title="Register" />
      </div>

      <div className="w-full flex items-center lg:w-1/2">
        <img
          src={hero}
          alt="hero"
          className="w-[50%] mx-auto mb-5 lg:max-w-[100%]"
        />
      </div>
      <div className="flex absolute items-center space-x-1 bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="bg-primary cursor-pointer rounded-full p-1"></div>
        <div className="bg-green-200 cursor-pointer rounded-full p-1"></div>
        <div className="bg-green-200 cursor-pointer rounded-full p-1"></div>
      </div>
    </div>
  );
};

export default Hero;
