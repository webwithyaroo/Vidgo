import { motion } from "framer-motion";
// import Buttons from "../Components/Buttons";
import { banner } from "../constants/constants";
import { playBtn } from "../constants/constants";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20, skewX: -10, skewY: 0 },
    visible: { opacity: 1, y: 0, skewX: 0, skewY: 0 },
  };
  return (
    <header className="max-container max-sm:px-2 flex flex-col items-center justify-center ">
      <div
        className=" w-full relative text-white  header-gradient 
      h-[90vh]   rounded-[24px] max-sm:rounded-lg px-6  "
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
            className="font-fontSpace px-3 text-6xl font-bold  mt-14 max-lg:text-5xl sm:max-w-[60vw]"
          >
            Online video conferencing <br />
            software from Vidgo
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="max-w-[686px] text-sm mt-4"
          >
            Vidgo Meeting is an online collaboration platform that helps people
            connect with others and stay productive while working remotely.
          </motion.p>
        </div>
        <div className="flex gap-6 max-md:gap-3 max-sm:flex-col max-sm:w-full items-center justify-center mt-9 mb-7 max-sm:mb-6 ">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            label=""
            className="text-bgAccent  bg-white
          min-w-[201px] px-7 py-5 max-sm:w-full flexItem rounded-lg"
          >
            <p className="max-sm:buttonText">Let’s get started</p>
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            className="text-white bg-bgContrast px-7 py-5
          min-w-[201px] max-sm:w-full flexItem rounded-lg "
          >
            <img src={playBtn} alt="Play Button Icon" />
            <p className="pl-2">Watch the Video</p>
          </motion.button>
        </div>
        <div
          className=" w-full flexItem absolute  left-[50%] 
         translate-x-[-50%]   mx-auto  max-container p-6"
        >
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
              // Tilt back from the top
              transition: { duration: 0.2 },
            }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring", // Use spring animation
              damping: 5, // Controls bounciness
              stiffness: 100, // Controls stiffness
            }}
            className="bgTransparent p-5 rounded-xl"
          >
            {<img src={banner} alt="image" className="" />}
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Home;
