import {
  footerLinks,
  Icon,
  twitter,
  facebook,
  linkedIn,
  appStore,
  playStore,
  logo2,
} from "../constants/constants";
import { motion } from "framer-motion";
const Footer = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, x: 100 },
    animate: (index) => ({
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.09, duration: 0.3 },
    }),
  };

  return (
    <section className=" mt-10  bg-bgAccent  pt-[80px] pb-[80px]">
      <div className="wrapper grid grid-cols-3 max-md:grid-cols-1">
        <div>
          <div>
            <img src={logo2} alt="logo" />
          </div>
          <p className="max-w-[195px] mt-5">
            400 West Cummings Park Suite 0000#000 Woburn, MA 0000 USA
          </p>
          <div>
            <p className="mt-12 mb-2 text-white">Join Our Newsletter</p>
            <form
              action="get"
              className="bg-white p-2 max-w-fit border-none outline-none rounded-md"
            >
              <input
                type="text"
                placeholder="enter your email..."
                className="border-none outline-none px-2"
              />
              <button
                type="submit"
                className="py-3 px-5 header-gradient rounded-md text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-between max-md:justify-start max-md:gap-6 max-md:my-5">
          <div>
            {footerLinks[0].map((link, index) => (
              <ul key={index}>
                <h1 className="text-white my-4">{link.title}</h1>
                {link.links.map((item) => (
                  <motion.li
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    className="mb-2  hover:text-pink-300 cursor-pointer"
                  >
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>
          <div>
            {footerLinks[1].map((link, index) => (
              <ul key={index}>
                <h1 className="text-white mb-4 ">{link.title}</h1>
                {link.links.map((item) => (
                  <motion.li
                    variants={fadeInAnimation}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    className="mb-2 hover:text-pink-300 cursor-pointer"
                  >
                    {item.name}
                  </motion.li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-end max-md:place-items-start">
          <div>
            <h1 className="text-white mb-4">FOLLOW & SHARE</h1>
            <div className="flex items-center gap-5 mb-8">
              <Icon
                IconUrl={twitter}
                className="ring-white ring-2 hover:header-gradient hover:ring-transparent transition-all p-5"
              />
              <Icon
                IconUrl={facebook}
                className="ring-white ring-2 hover:header-gradient hover:ring-transparent transition-all p-5"
              />
              <Icon
                IconUrl={linkedIn}
                className="ring-white ring-2 hover:header-gradient hover:ring-transparent transition-all p-5"
              />
            </div>
            <div>
              <h1 className="text-white mb-6">Download</h1>
              <div>
                <img src={appStore} alt="appstore" className="mb-4" />
                <img src={playStore} alt="playstore" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
