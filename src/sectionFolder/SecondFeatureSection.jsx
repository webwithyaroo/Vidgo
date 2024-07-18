import { useLayoutEffect } from "react";
import Features from "../Components/Features";
import {
  imageOne,
  imageThree,
  imageTwo,
  listOne,
  listThree,
  listTwo,
} from "../constants/constants";
export const SecondFeatureSection = () => {
  return (
    <section className="wrapper">
      <div className="text-center ring-2  mx-auto leading-10 ">
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
              <li>
                <img src={item.IconUrl} width={34} height={34} />
              </li>
              <li>
                <h1 className="flex font-medium  text-bgAccent">
                  {item.bigText}
                </h1>
                <p>{item.smallText}</p>
              </li>
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
              <li>
                <img src={item.IconUrl} width={34} height={34} />
              </li>
              <li>
                <h1 className="flex font-medium  text-bgAccent">
                  {item.bigText}
                </h1>
                <p>{item.smallText}</p>
              </li>
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
              <li>
                <img src={item.IconUrl} width={34} height={34} />
              </li>
              <li>
                <h1 className="flex font-medium  text-bgAccent">
                  {item.bigText}
                </h1>
                <p>{item.smallText}</p>
              </li>
            </ul>
          ))}
        </Features>
      </div>
    </section>
  );
};
