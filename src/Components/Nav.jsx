import { navLinks } from "../constants/constants";
import { menuBar, logo } from "../constants/constants";
import Buttons from "./Buttons";
import { motion } from "framer-motion";

const Nav = () => {
  const navMotions = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
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
      <ul className="flex gap-3 text-sm max-md:hidden">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <Buttons className="bg-bgAccent px-5 py-4 text-white max-md:hidden">
        Create account
      </Buttons>
      <div className="bg-bgAccent p-4  rounded-md  md:hidden">
        <img src={menuBar} alt="menu" />
      </div>
    </motion.nav>
  );
};

export default Nav;
