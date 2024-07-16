import { ArrowLeft, ArrowRight } from "../constants/constants";
import Icon from "../Components/Icon";
import Card from "./Card";
import { cardOne, cardTwo, cardFour, cardThree } from "../constants/constants";
const FeaturesSection = () => {
  return (
    <section className="min-h-[100vh] lg:mt-[60vh] mt-[45vh] max-sm:mt-[30vh] max-wrapper">
      <div className="flex justify-between">
        <h1 className="font-fontSpace lg:text-5xl text-4xl max-sm:text-3xl ">
          Highlights of the tool
        </h1>
        <div className="flex gap-2">
          <Icon
            IconUrl={ArrowLeft}
            width={24}
            heigth={24}
            className="w-[54px] h-[54px]   bg-bgAccent"
          />
          <Icon
            IconUrl={ArrowRight}
            className=" w-[54px] h-[54px]  bg-bgAccent"
          />
        </div>
      </div>
      <div className=" cardGrid  ">
        <Card
          text={
            "Join or launch meetings and webinars right from your browser, on any device."
          }
          largeText={"No downloads"}
          IconUrl={cardOne}
          className="gridCard  "
        />
        <Card
          text={
            "Review the meetings or webinars you attend through the recordings..."
          }
          largeText={"Recording"}
          IconUrl={cardTwo}
          className="gridCard "
        />
        <Card
          text={
            "You can start meetings from anywhere you are, and you can join meetings..."
          }
          largeText={"Mobile apps"}
          IconUrl={cardThree}
          className="gridCard "
        />
        <Card
          text={
            "To ensure that your meetings are secure, we've integrated security features..."
          }
          largeText={"Secure sessions"}
          IconUrl={cardFour}
          className="gridCard  "
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
