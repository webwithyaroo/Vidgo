import { useState } from "react";
import { navLinks } from "../constants/constants";
import { menuBar, logo, times } from "../constants/constants";
import Buttons from "./Buttons";
import { motion } from "framer-motion";

const Nav = () => {
  const navMotions = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const [isClicked, setIsClicked] = useState(0);
  const handleClick = (index) => {
    setIsClicked(index);
  };

  //Nav TOGGLE
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!opened);
    console.log(opened);
  };
  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.5,
        duration: 0.2,
        type: "spring",
        damping: 5,
        stiffness: 100,
      }}
      variants={navMotions}
      className="  max-container flex justify-between items-center h-[92px] px-9 "
    >
      <div>
        <img src={logo} width={124} alt="logo" />
      </div>
      <ul
        className={` max-[800px]:navigationLink transform 
          max-[800px]:translate-x-[100%]
       transition  duration-100 ease-in-out flex gap-3 text-sm ${
         opened && "max-[800px]:translate-x-[0%]"
       }`}
      >
        {/* :hidden */}
        {navLinks.map((link, index) => (
          <li
            className={`px-3 py-2 rounded-md hover:bg-gray-50
               cursor-pointer ${
                 isClicked === index
                   ? " bg-gray-200"
                   : "bg-transparent text-bgAccent"
               }`}
            key={index}
            onClick={() => handleClick(index)}
          >
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <Buttons className="bg-bgAccent px-5 py-4 text-white max-[800px]:hidden">
        Create account
      </Buttons>
      <div
        className="bg-bgAccent p-4  rounded-md  min-[800px]:hidden cursor-pointer"
        onClick={handleToggle}
      >
        <img
          src={!opened ? menuBar : times}
          alt="menu"
          width={24}
          height={24}
          className="text-blue-600"
        />
      </div>
    </motion.nav>
  );
};

export default Nav;
