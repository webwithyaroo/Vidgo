import { motion, useScroll, useTransform } from "framer-motion";
import { banner } from "../constants/constants";
import { playBtn } from "../constants/constants";
import { useRef } from "react";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20, skewX: -10, skewY: 0 },
    visible: { opacity: 1, y: 0, skewX: 0, skewY: 0 },
  };

  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.2, 0]);

  const text = "Online video conferencing software from Vidgo";

  return (
    <header className=" max-sm:px-2 flex max-container  flex-col items-center  justify-center ">
      <motion.div
        ref={targetRef}
        style={{ opacity, scale }}
        className="w-[95%] max-container  text-white 
      h-[80vh]  fixed top-[75px] rounded-[24px] max-sm:rounded-lg -z-10 header-gradient "
      >
        <div className="flex flex-col items-center text-center ">
          <motion.h1 className="font-fontSpace px-3 lg:text-5xl font-bold  mt-14 text-4xl max-sm:3xl  leading-[36px] lg:leading-10  sm:max-w-[60vw]">
            {text.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    className=" font-fontSpace  "
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.2,
                      delay: wordIndex * 0.5 + letterIndex * 0.1,
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                &nbsp;
              </span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="max-w-[686px] text-sm mt-4 text-white"
          >
            Vidgo Meeting is an online collaboration platform that helps people
            connect with others and stay productive while working remotely.
          </motion.p>
        </div>
        <div className="flex gap-6 max-md:gap-3 max-sm:flex-col max-sm:w-full items-center justify-center mt-4 mb-7 max-sm:mb-6 ">
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
            <p className="pl-2 text-white">Watch the Video</p>
          </motion.button>
        </div>
      </motion.div>
      <div
        className=" mt-[55vh]  lg:mt-[55vh]  
        w-full relative mb-96 max-md:mb-[40vh] max-[500px]:mb-10"
      >
        <div
          className=" w-full h-[100vh] flexItem absolute 
         z-50     max-container p-6"
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
            className="bgTransparent p-5 rounded-xl  shadow-2xl bottom-96 max-[500px]:top-5 "
          >
            {
              <img
                src={banner}
                alt="image"
                className=" relative  z-50 shadow-2xl"
              />
            }
            <motion.h1 className="text-white lg:text-5xl bolder text-4xl max-sm:text-3xl">
              VIDGO
            </motion.h1>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Home;
