import { twMerge } from "tailwind-merge";

const Card = ({ text, IconUrl, largeText, className }) => {
  return (
    <div>
      <div
        className={twMerge(
          "bg-bgAccent pt-5 pr-5 pl-5 rounded-[10px]",
          className
        )}
      >
        <img src={IconUrl} className="w-full" />
      </div>
      <div className="mt-9">
        <h1 className="text-lg bold mb-5">{largeText}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
