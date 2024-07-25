import { motion, useScroll, useTransform } from "framer-motion";
import { banner } from "../constants/constants";
import { playBtn } from "../constants/constants";
import { useRef } from "react";

const Home = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20, skewX: -10, skewY: 0 },
    visible: { opacity: 1, y: 0, skewX: 0, skewY: 0 },
  };

  const targetRef = useRef({});
  const { scrollYProgress } = useScroll({});
  const radius = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 1],
    [0, "24px", "24px", "24px", "50%", "120px", "200px", "20px"]
  );
  const scale = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.7, 1]);
  const scaleX = useTransform(
    scrollYProgress,
    [
      0, 0.2, 0.3, 0.35, 0.37, 0.39, 0.4, 0.46, 0.48, 0.5, 0.56, 0.58, 0.6,
      0.66, 0.68, 0.7, 0.74, 0.76, 0.78, 0.8, 0.9, 1,
    ],
    [
      "",
      "40%",
      "400px",
      "200px",
      "200px",
      "200px",
      "200px",
      "200px",

      "30px",
      "300px",
      "30px",
      "300px",
      "30px",
      "300px",
      "30px",
      "300px",
      "30px",
      "300px",
      "30px",
      "300px",
      "30px",
      "300px",
    ]
  );
  const height = useTransform(
    scrollYProgress,
    [
      0, 0.2, 0.3, 0.35, 0.37, 0.39, 0.4, 0.46, 0.48, 0.5, 0.56, 0.58, 0.6,
      0.66, 0.68, 0.7, 0.74, 0.76, 0.78, 0.8, 0.9, 1,
    ],
    [
      "100%",
      "40%",
      "400px",
      "200px",
      "200px",
      "200px",
      "200px",
      "200px",

      "70px",
      "170px",
      "70px",
      "170px",
      "70px",
      "170px",
      "70px",
      "170px",
      "70px",
      "170px",
      "70px",
      "170px",
      "70px",
      "170px",
    ]
  );
  const translateY = useTransform(scrollYProgress, [0.4, 1], ["0", "320%"]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0", "0"]);
  const rotate = useTransform(
    scrollYProgress,
    [0.4, 0.46, 0.48, 0.5, 0.56, 0.58, 0.6, 0.66, 0.68, 0.7, 0.8, 0.9, 1],
    [
      "0",
      "60deg",
      "-60deg",
      "60deg",
      "-60deg",
      "60deg",
      "-60deg",
      "60deg",
      "-60deg",
      "60deg",
      "-60deg",
      "60deg",
      "-60deg",
    ]
  );
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.3, 0.4, 0.6, 0.7, 1],
    [
      "linear-gradient(67deg, #fcb564 0.67%, rgba(251, 111, 255, 0) 30.1%), linear-gradient(245deg, #706ceb 0.07%, #ff65f2 82.88%)",
      "linear-gradient(67deg, #031639 0.67%, rgba(251, 111, 255, 0) 30.1%), linear-gradient(245deg, #031639 0.07%, #ff65f2 82.88%)",

      "#ff65f2",
      "linear-gradient(67deg, #fcb564 0.67%, rgba(251, 111, 255, 0) 30.1%), linear-gradient(245deg, #706ceb 0.07%, #ff65f2 82.88%)",
      "linear-gradient(67deg, #fcb564 0.67%, rgba(251, 111, 255, 0) 30.1%), linear-gradient(245deg, #706ceb 0.07%, #ff65f2 82.88%)",
      "linear-gradient(to right, #ff65f2, #9999ff)",
      "linear-gradient(67deg, #ff65f2 0.67%, rgba(251, 111, 255, 0) 30.1%), linear-gradient(245deg, #706ceb 0.07%, #ff65f2 82.88%)",
    ]
  );

  // const enlarge = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 2]);

  return (
    <header className=" max-sm:px-2 flex max-container  flex-col items-center  justify-center">
      <motion.div
        style={{
          width: scaleX,
          opacity: opacity2,
          rotate,
          background: bgColor,
          height: height,
          borderRadius: radius,
          translateX,
          translateY,
        }}
        className="w-[95%] max-container  text-white 
      h-[70vh]  fixed top-[75px] rounded-[24px] max-sm:rounded-lg -z-10  "
      >
        <div className="flex flex-col items-center text-center">
          <motion.h1
            style={{ scale, opacity }}
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
            style={{ scale, opacity }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1,
            }}
            className="max-w-[686px] text-sm mt-4 text-white"
          >
            Vidgo Meeting is an online collaboration platform that helps people
            connect with others and stay productive while working remotely.
          </motion.p>
        </div>
        <div className="flex gap-6 max-md:gap-3 max-sm:flex-col max-sm:w-full items-center justify-center mt-9 mb-7 max-sm:mb-6 ">
          <motion.button
            style={{ scale, opacity }}
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
            style={{ scale, opacity }}
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
      <div className="h-[200vh] mt-[65vh]  ">
        <div className=" w-full flexItem sticky top-[50px] z-50     max-container p-6">
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
            className="bgTransparent p-5 rounded-xl  shadow-2xl bottom-80"
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
