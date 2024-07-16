import { twMerge } from "tailwind-merge";
const Icon = ({ children, IconUrl, className }) => {
  return (
    <div
      className={twMerge(
        "rounded-full flex items-center justify-center ",
        className
      )}
    >
      {IconUrl && <img src={IconUrl} alt="arrowImg" />}
      {children}
    </div>
  );
};

export default Icon;
