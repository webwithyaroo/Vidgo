import { useState, useRef, useEffect } from "react";
import { ArrowLeft, ArrowRight, Icon, card } from "../constants/constants";
import Indicators from "../Components/Indicators";
const FeaturesSection = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const carouselRef = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const items = carouselRef.current.children;
        const offset = carouselRef.current.scrollLeft;
        const index = Math.round(offset / items[0].clientWidth);
        setCurrIndex(index);
      }
    };
    const carousel = carouselRef.current;
    carousel.addEventListener("scroll", handleScroll);

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const items = carouselRef.current.children;
      const scrollOffset = index * items[0].clientWidth;
      carouselRef.current.scrollTo({
        left: scrollOffset,
        behavior: "smooth",
      });
      setCurrIndex(index);
    }
  };

  const handlePrev = () => {
    const newIndex = Math.max(currIndex - 1, 0);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(currIndex + 1, 2); // Adjust the second parameter to the number of slides minus one
    scrollToIndex(newIndex);
  };

  return (
    <section className="min-h-[100vh] lg:mt-[60vh] mt-[45vh] max-sm:mt-[30vh] max-wrapper">
      <div className="flex justify-between mb-9">
        <h1 className="font-fontSpace bolder lg:text-5xl text-4xl max-sm:w-[270px] text-bgAccent ">
          Highlights of the tool
        </h1>
        <div className=" gap-2 hidden sm:flex pr-2">
          <Icon
            IconUrl={ArrowLeft}
            className="w-[54px] h-[54px]   bg-bgAccent cursor-pointer"
            onClick={handlePrev}
          />
          <Icon
            IconUrl={ArrowRight}
            className=" w-[54px] h-[54px]  bg-bgAccent cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="relative">
        <div
          ref={carouselRef}
          className=" cardGrid gap-4 snap-x snap-mandatory scroll-smooth"
        >
          {card.map((card, index) => (
            <div
              key={index}
              className=" transition-transform ease-out min-w-[250px] duration-500 snap-start scroll-smooth pr-2  select-none "
            >
              <div className="bg-bgAccent pt-5 pr-5 pl-5 rounded-[10px] snap-start scroll-smooth">
                <img src={card.IconUrl} className="w-full" />
              </div>
              <div className="mt-9 select-none">
                <h1 className="text-lg bold mb-5">{card.largeText}</h1>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center space-x-2">
          <Indicators count={4} currIndex={currIndex} />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
