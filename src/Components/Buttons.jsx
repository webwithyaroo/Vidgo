import { twMerge } from "tailwind-merge";
const Buttons = ({ children, className }) => {
  return (
    <button
      className={twMerge("rounded-[7px] flex items-center gap-2", className)}
    >
      {children}
    </button>
  );
};

export default Buttons;
