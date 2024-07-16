import { twMerge } from "tailwind-merge";

const Card = ({ text, IconUrl, largeText, className }) => {
  return (
    <div className="w-[267px]">
      <div className={twMerge("bg-bgAccent pt-5 pr-5 pl-5 ", className)}>
        <img src={IconUrl} />
      </div>
      <div>
        <h1>{largeText}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
