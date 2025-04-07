import React from "react";
import HeroGradient from "./HeroGradient";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

const HeroMain = () => {
  return (
    <div className="pt-40 pb-16 mx-auto">
      <div className=" flex md:flex-row sm:flex-col max-w-[1200px] relative px-4 mx-auto justify-between items-center">
        <HeroText />
        <HeroImage />
      </div>

      <HeroGradient />
    </div>
  );
};

export default HeroMain;
