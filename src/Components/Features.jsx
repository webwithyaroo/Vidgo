import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
const Features = ({ heading, text, imgUrl, className, children }) => {
  return (
    <div
      className={twMerge(
        "mt-5 flex items-center justify-between max-md:flex-wrap max-md:flex-col",
        className
      )}
    >
      <div className="max-w-[436px]">
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl max-sm:text-2xl bolder font-fontSpace text-bgAccent leading-10 mb-5"
        >
          {heading}
        </motion.h1>
        <p>{text}</p>
        <div>{children}</div>
      </div>
      <div className="max-md:mt-10">
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          src={imgUrl}
        />
      </div>
    </div>
  );
};

export default Features;
