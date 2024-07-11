import { navLinks } from "../constants/constants";
import { menuBar, logo } from "../constants/constants";
import Buttons from "./Buttons";
import { useState } from "react";

const Nav = () => {
  return (
    <nav className="  max-container flex justify-between items-center h-[92px] px-9 ">
      <div>
        <img src={logo} width={124} alt="logo" />
      </div>
      <ul className="flex gap-3 text-sm max-md:hidden">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <Buttons
        label="Create account"
        className="bg-bgAccent px-5 py-4 text-white max-md:hidden"
      />
      <div className="bg-bgAccent p-4  rounded-md  md:hidden">
        <img src={menuBar} alt="menu" />
      </div>
    </nav>
  );
};

export default Nav;
