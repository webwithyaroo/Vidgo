const Indicators = ({ count, currIndex }) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`w-[38px] h-1 max-sm:block hidden rounded-full px-2 ${
            index === currIndex ? "header-gradient" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};
export default Indicators;
