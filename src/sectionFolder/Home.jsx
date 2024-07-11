import Buttons from "../Components/Buttons";
import { banner } from "../constants/constants";
import { playBtn } from "../constants/constants";
const Home = () => {
  return (
    <header className="max-container flex flex-col items-center justify-center ">
      <div
        className=" w-full relative text-white  header-gradient 
      h-[90vh]   rounded-[24px] px-6  "
      >
        <div className="flex flex-col items-center text-center">
          <h1 className="font-fontSpace text-6xl font-bold max-w-[986px] mt-14 max-lg:text-5xl max-sm:max-w-[339px]">
            Online video conferencing software from Vidgo
          </h1>
          <p className="max-w-[686px] text-sm mt-4">
            Vidgo Meeting is an online collaboration platform that helps people
            connect with others and stay productive while working remotely.
          </p>
        </div>
        <div className="flex gap-6 max-sm:flex-col max-sm:w-full items-center justify-center mt-9 mb-14 max-sm:mb-6 ">
          <Buttons
            label="Let’s get started"
            className="text-bgAccent bg-white
          min-w-[201px] px-7 py-5 max-sm:w-full flexItem"
          />

          <Buttons
            label="Watch the Video"
            className="text-white bg-bgContrast px-7 py-5
          min-w-[201px] max-sm:w-full flexItem "
          >
            <img src={playBtn} alt="Play Button Icon" />
          </Buttons>
        </div>
        <div
          className=" w-full flexItem absolute  left-[50%] 
         translate-x-[-50%]   mx-auto  max-container p-6"
        >
          <div className="bgTransparent p-5 rounded-xl">
            {<img src={banner} alt="image" className="" />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
