import React from "react";
import { arrow } from "../assets";

const Button = ({ title, style }) => {
  return (
    <button
      className={`bg-green-500 text-white font-Roboto font-noraml flex items-center justify-between py-2 px-2 rounded-[4px]`}
    >
      {title}
      <img
        src={arrow}
        alt="arrow"
        className="px-1 lg:px-4 md:hidden lg:block"
      />
    </button>
  );
};

export default Button;
