import React from "react";
import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
const AboutMeMain = () => {
  return (
    <div className="flex md:flex-row sm:flex-col mx-w-[1200px] px-4 gap-12 mx-auto mt-[100px] justify-between items-center">
      <AboutMeText />
      <AboutMeImage />
    </div>
  );
};

export default AboutMeMain;
