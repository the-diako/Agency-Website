import React from "react";
import { navLinks } from "../constants/index.jsx";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <ul>
        {navLinks.map((links) => {
          return <li key={links.id}>{links.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navbar;
