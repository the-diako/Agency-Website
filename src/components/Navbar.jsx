import React, { useState } from "react";
import { navLinks } from "../constants/index.jsx";
import { logo, menu, close, whiteArrow } from "../assets";
import Button from "./Button.jsx";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(true);

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
    shadow-2xl
    z-10
    "
    >
      <img src={logo} alt="Logo" className="w-[110px] cursor-pointer" />
      <img
        src={openMenu ? menu : close}
        alt="open icon"
        className={`w-[40px] z-10 py-0 cursor-pointer min-[815px]:hidden `}
        onClick={() => setOpenMenu((prev) => !prev)}
      />

      <ul
        className={`flex flex-col absolute bg-gray-100 shadow-2xl w-full left-0 top-0 space-y-5 py-10 items-center ${
          openMenu ? "left-[100%]" : "left-0"
        } min-[815px]:flex-row  min-[815px]:static min-[815px]:shadow-none min-[815px]:bg-transparent min-[815px]:space-y-0 min-[815px]:py-0 min-[815px]:px-2 min-[815px]:w-auto `}
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
