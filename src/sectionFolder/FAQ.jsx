import Button from "../Components/Buttons";
import FaqComponent from "../Components/FaqComponent";
import { ArrowRight } from "../constants/constants";
import { motion } from "framer-motion";
const FAQ = () => {
  return (
    <section className="grid grid-cols-2 max-md:grid-cols-1 wrapper mt-10 items-center">
      <div>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="lg:text-5xl text-4xl max-sm:3xl text-bgAccent bolder"
        >
          Frequently Asked Questions
        </motion.h1>
        <p className="max-w-[290px] mt-5">
          Get fast answers to your most pressing questions about Vidgo
        </p>
        <Button
          label={"Let’s get started"}
          iconUrl={ArrowRight}
          className="mt-8 bg-bgAccent text-white py-5 px-7"
        />
      </div>
      <FaqComponent />
    </section>
  );
};

export default FAQ;
