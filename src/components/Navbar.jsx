import React, { useState } from "react";
import { navLinks } from "../constants/index.jsx";
import { logo, menu, close, arrow } from "../assets";
import Button from "./Button.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className="
    w-full 
    fixed 
    left-0 
    top-0 
    px-24 
    py-3 
    flex 
    items-center 
    justify-between 
    bg-white 
    shadow-2xl"
    >
      <img src={logo} alt="Logo" className="w-[110px] cursor-pointer" />
      <img
        src={openMenu ? menu : close}
        alt="open icon"
        className={`w-[40px] z-10 py-0 cursor-pointer md:hidden `}
        onClick={() => setOpenMenu((prev) => !prev)}
      />

      <ul
        className={`flex flex-col absolute bg-gray-100 shadow-2xl w-full left-0 top-0 space-y-5 py-10 items-center ${
          openMenu ? "left-[100%]" : "left-0"
        } md:flex-row md:static md:shadow-none md:bg-transparent md:space-y-0 md:py-0 md:px-2 md:w-auto `}
      >
        {navLinks.map((link) => {
          return (
            <div key={link.id}>
              <li className="cursor-pointer px-10 md:px-5 font-Roboto font-noraml hover:text-gray-400 transition-all">
                {link.title}
              </li>
            </div>
          );
        })}
        <Button title="Register Now" style="sm:hidden md:flex" />
      </ul>
    </div>
  );
};

export default Navbar;
