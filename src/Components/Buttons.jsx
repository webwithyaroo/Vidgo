import { twMerge } from "tailwind-merge";
<<<<<<< HEAD
const Buttons = ({ children, className }) => {
=======
const Buttons = ({ iconUrl, label, className, children }) => {
>>>>>>> d329c24c2a40a12aad7f06d783adc176397dc3f9
  return (
    <button
      className={twMerge("rounded-[7px] flex items-center gap-2", className)}
    >
      {children}
<<<<<<< HEAD
=======
      {label}
      {iconUrl && <img src={iconUrl} />}
>>>>>>> d329c24c2a40a12aad7f06d783adc176397dc3f9
    </button>
  );
};

export default Buttons;
