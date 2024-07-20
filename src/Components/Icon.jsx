import { twMerge } from "tailwind-merge";
const Icon = ({ children, IconUrl, className, onClick }) => {
  return (
    <div
      className={twMerge(
        "rounded-full flex items-center justify-center ",
        className
      )}
      onClick={onClick}
    >
      {IconUrl && <img src={IconUrl} alt="arrowImg" />}
      {children}
    </div>
  );
};

export default Icon;
