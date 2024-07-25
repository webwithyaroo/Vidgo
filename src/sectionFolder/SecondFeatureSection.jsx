import Features from "../Components/Features";
import {
  imageOne,
  imageThree,
  imageTwo,
  listOne,
  listThree,
  listTwo,
} from "../constants/constants";
import LogoCollection from "./LogoCollection";
import { motion } from "framer-motion";
const SecondFeatureSection = () => {
  const fadeInAnimation = {
    initial: {
      opacity: 0,
      x: 200,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.05,
      },
    }),
  };
  const fadeInAnimation2 = {
    initial: {
      opacity: 0,
      x: -300,
    },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.2,
      },
    }),
  };

  return (
    <section className="wrapper">
      <div className="text-center  mx-auto leading-10 ">
        <h1 className="lg:text-5xl bolder font-fontSpace text-4xl max-sm:text-3xl text-bgAccent">
          Run the excellent video meeting
        </h1>
        <p className="max-w-[570px] mx-auto max-md:max-w-[470px] leading-normal mt-3 mb-16 max-md:mb-10">
          Vidgo Meeting’s powerful virtual meeting features make it easy to hold
          more productive meetings.
        </p>
      </div>
      <div>
        <Features
          heading={"After your meeting"}
          text={
            "Take stock of what you've accomplished at the end of your meeting and find action items to apply going forward."
          }
          imgUrl={imageOne}
          className="mb-20"
        >
          {listOne.map((item, index) => (
            <ul key={index} className="mt-9 flex gap-2 ">
              <motion.li
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                custom={index}
                className="rounded-full"
              >
                <img src={item.IconUrl} width={34} height={34} />
              </motion.li>
              <motion.li
                variants={fadeInAnimation2}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <h1 className="flex font-medium  text-bgAccent">
                  {item.bigText}
                </h1>
                <p>{item.smallText}</p>
              </motion.li>
            </ul>
          ))}
        </Features>

        <Features
          heading={"After your meeting"}
          text={
            "Take stock of what you've accomplished at the end of your meeting and find action items to apply going forward."
          }
          imgUrl={imageThree}
          className=" flex-row-reverse  mb-20"
        >
          {listTwo.map((item, index) => (
            <ul key={index} className="mt-9 flex gap-2">
              <motion.li
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                custom={index}
                className="rounded-full"
              >
                <img
                  src={item.IconUrl}
                  width={34}
                  height={34}
                  className="rounded-full"
                />
              </motion.li>
              <motion.li
                variants={fadeInAnimation2}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <h1 className="flex font-medium  text-bgAccent">
                  {item.bigText}
                </h1>
                <p>{item.smallText}</p>
              </motion.li>
            </ul>
          ))}
        </Features>

        <Features
          heading={"After your meeting"}
          text={
            "Take stock of what you've accomplished at the end of your meeting and find action items to apply going forward."
          }
          imgUrl={imageTwo}
          className="mb-10"
        >
          {listThree.map((item, index) => (
            <ul key={index} className="mt-9 flex gap-2">
              <motion.li
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <img src={item.IconUrl} width={34} height={34} />
              </motion.li>
              <motion.li
                variants={fadeInAnimation2}
                initial="initial"
                whileInView="animate"
                custom={index}
              >
                <h1 className="flex font-medium  text-bgAccent">
                  {item.bigText}
                </h1>
                <p>{item.smallText}</p>
              </motion.li>
            </ul>
          ))}
        </Features>
      </div>

      {/* Logo Section  */}
      <section className="flex items-center justify-between max-md:flex-col-reverse gap-10">
        <LogoCollection />
        <div className="max-w-[470px]">
          <motion.h3
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="text-bgAccent lg:text-5xl text-4xl max-sm:text-3xl leading-[58px] bolder"
          >
            You can integrate with your favorite tools
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.5,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="mb-8 mt-4"
          >
            Vidgo Meeting lets you start meetings directly from Outlook,
            Salesforce, Slack or any other app that supports webhooks.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 1 }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease: "linear",
            }}
            href=""
          >
            Explore More Integrations
          </motion.a>
        </div>
      </section>
    </section>
  );
};
export default SecondFeatureSection;
