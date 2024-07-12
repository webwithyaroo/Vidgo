import { twMerge } from "tailwind-merge";
const Buttons = ({ iconUrl, label, className, children }) => {
  return (
    <button
      className={twMerge("rounded-[7px] flex items-center gap-2", className)}
    >
      {children}
      {label}
      {iconUrl && <img src={iconUrl} />}
    </button>
  );
};

export default Buttons;
