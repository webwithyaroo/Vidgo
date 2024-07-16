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
      className=" sticky top-0  z-10  max-container flex justify-between items-center h-[92px] max-sm:h-[60px] px-9 max-[600px]:px-2.5 bg-white"
    >
      <div>
        <img src={logo} width={124} alt="logo" />
      </div>
      <ul
        className={` max-[800px]:navigationLink transform 
       
       transition  duration-100 ease-in-out flex gap-3 text-sm 
       ${!opened && "max-[800px]:translate-x-[100%]"}`}
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
      <Buttons
        className="bg-bgAccent px-5 py-3
       text-white max-[800px]:hidden"
      >
        Create account
      </Buttons>
      <div
        className="bg-bgAccent p-3 relative z-50 rounded-md  min-[800px]:hidden cursor-pointer"
        onClick={handleToggle}
      >
        <img
          src={!opened ? menuBar : times}
          alt="menu"
          width={20}
          height={20}
          className=" relative z-50"
        />
      </div>
    </motion.nav>
  );
};

export default Nav;
