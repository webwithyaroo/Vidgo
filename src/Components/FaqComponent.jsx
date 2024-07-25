import { useState } from "react";
import { times, plus, questions } from "../constants/constants";
import { motion, AnimatePresence } from "framer-motion";
const FaqComponent = () => {
  const [opened, setOpened] = useState(null);
  const handleOpened = (index) => {
    setOpened(opened === index ? null : index);
  };

  // Animation
  const fadeInAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.05, duration: 0.3 },
    }),
  };

  return (
    <ul>
      {questions.map((item, index) => (
        <motion.li
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          custom={index}
          key={index}
          onClick={() => handleOpened(index)}
          className="cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <h1 className="font-fontSpace text-bgAccent text-base bolder mb-4 mt-6">
              {item.title}
            </h1>

            <img
              width={20}
              height={20}
              src={opened === index ? times : plus}
              alt="plus_icon"
              className="object-cover cursor-pointer"
              onClick={() => handleOpened(index)}
            />
          </div>
          <AnimatePresence>
            {opened === index && (
              <motion.p
                key={index}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {item.text}
              </motion.p>
            )}
          </AnimatePresence>
          <hr
            className={` mt-2 transition-colors duration-300 h-2 ${
              opened === index
                ? "bg-gradient-to-r from-fcb564 to-ff65f2 h-[2px] rounded-full border-none"
                : "border-gray-300"
            }`}
          />
        </motion.li>
      ))}
    </ul>
  );
};

export default FaqComponent;
