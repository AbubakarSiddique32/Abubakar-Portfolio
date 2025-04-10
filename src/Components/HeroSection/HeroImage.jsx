import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import Image from "../../Images/email-image.png";
const HeroImage = () => {
  return (
    <div className=" h-full w-1/2 flex items-center justify-center relative">
      <img
        src={Image}
        alt="Abubakar Siddique"
        className=" max-h-[450px] h-auto w-auto"
      />
      <div className=" w-full absolute -z-10 items-center justify-center flex animate-pulse">
        <PiHexagonThin className=" md:h-[90%] sm:h-[100%] min-h-[500px] w-auto blur-md text-cyan animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};

export default HeroImage;
