import React from "react";
import { arrow } from "../assets";

const Button = ({ title }) => {
  return (
    <button className="bg-green-500 text-white font-Roboto font-noraml flex items-center justify-between py-3 px-3 rounded-md">
      {title}
      <img src={arrow} alt="arrow" className="px-5 md:hidden lg:block" />
    </button>
  );
};

export default Button;
