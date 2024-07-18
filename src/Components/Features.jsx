import { twMerge } from "tailwind-merge";
const Features = ({ heading, text, imgUrl, className, children }) => {
  return (
    <div
      className={twMerge(
        "mt-5 flex items-center justify-between max-md:flex-wrap max-md:flex-col",
        className
      )}
    >
      <div className="max-w-[436px]">
        <h1 className="text-4xl max-sm:text-2xl bolder font-fontSpace text-bgAccent leading-10 mb-5">
          {heading}
        </h1>
        <p>{text}</p>
        <div>{children}</div>
      </div>
      <div className="max-md:mt-10">
        <img src={imgUrl} />
      </div>
    </div>
  );
};

export default Features;
