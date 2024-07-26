import { useState, useEffect } from "react";
import { navLinks } from "../constants/constants";
import { menuBar, logo, times } from "../constants/constants";
import Buttons from "./Buttons";
import { motion, useAnimation } from "framer-motion";

const Nav = () => {
  const controls = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > prevScrollY) {
      controls.start({ y: "-200%" }); // Hide navbar
    } else {
      controls.start({ y: "0%" }); // Show navbar
    }
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  const [isClicked, setIsClicked] = useState(0);
  const handleClick = (index) => {
    setIsClicked(index);
  };

  //Nav TOGGLE
  const [opened, setOpened] = useState(false);
  const handleToggle = () => {
    setOpened(!opened);
  };
  return (
    <motion.nav
      initial={{ y: "0%" }}
      animate={controls}
      transition={{ type: "linear", duration: 0.1 }}
      className=" fixed top-0 py-3 left-0 right-0 z-10  max-container flex justify-between items-center  px-9 max-[600px]:px-2.5 bg-white"
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
