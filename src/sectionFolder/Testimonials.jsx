import { testimonialLists } from "../constants/constants";
import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
const Testimonials = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });
  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["0%", "100%", "100%"]
  );

  //Carousel Animation

  const fadeInAnimation = {
    initial: { opacity: 0, y: 100 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.05 },
    }),
  };

  return (
    <motion.section ref={targetRef} className=" min-h-screen">
      <div className="text-center mt-24 ">
        <h1 className="text-bgAccent lg:text-5xl text-4xl max-sm:text-3xl bolder  ">
          Our clients have a ton to say!
        </h1>
        <p>See what it’s like to be a customer of Vidgo.</p>
      </div>
      <div className="relative mt-20 ">
        <div className=" wrapper grid lg:grid-cols-4 grid-cols-2  max-sm:cardGrid gap-5 ">
          {testimonialLists.map((item, index) => (
            <motion.div
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              custom={index}
              key={item.name}
              className="bg-white md:rounded-2xl  p-5 shadow-2xl cardBorder min-w-[270px] snap-start scroll-mx-7  "
            >
              <div className="flex gap-2 ">
                <motion.img
                  whileInView={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1,
                  }}
                  src={item.img}
                  alt="image"
                />
                <div>
                  <motion.h1
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 1 }}
                    transition={{
                      delay: 0.5,
                      duration: 0.3,
                      ease: "linear",
                    }}
                    className="text-xs bolder text-bgAccent"
                  >
                    {item.name}
                  </motion.h1>
                  <motion.p
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                    className="  bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient"
                  >
                    {item.handle}
                  </motion.p>
                </div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 1 }}
                transition={{
                  delay: 0.2,
                  duration: 0.3,
                  ease: "linear",
                }}
                viewport={{ once: true }}
                className="mt-5"
              >
                {item.text}
              </motion.p>
            </motion.div>
          ))}
        </div>
        <motion.div
          style={{ width: scaleX }}
          className="h-[343px] max-sm:h-[300px] header-gradient w-full absolute top-[50%] translate-y-[-50%] z-[-1] max-sm:top-[41%]"
        ></motion.div>
      </div>
    </motion.section>
  );
};

export default Testimonials;
